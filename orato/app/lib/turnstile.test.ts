import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { verifyTurnstileToken } from "./turnstile";

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const DEVELOPMENT_SECRET_KEY = "1x0000000000000000000000000000000AA";

describe("verifyTurnstileToken", () => {
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("rejects a missing token without contacting Cloudflare", async () => {
    const request = new Request("https://orato.nl/contact");

    await expect(verifyTurnstileToken("", request)).resolves.toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects production verification when the secret is missing", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");

    await expect(
      verifyTurnstileToken(
        "submitted-token",
        new Request("https://orato.nl/contact"),
      ),
    ).resolves.toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses the Cloudflare test secret outside production", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "ignored-production-secret");
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );

    await verifyTurnstileToken(
      "submitted-token",
      new Request("https://orato.nl/contact"),
    );

    expect(fetchMock).toHaveBeenCalledWith(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: DEVELOPMENT_SECRET_KEY,
        response: "submitted-token",
      }),
      cache: "no-store",
    });
  });

  it("prioritizes cf-connecting-ip over x-forwarded-for", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "production-secret");
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );
    const request = new Request("https://orato.nl/contact", {
      headers: {
        "cf-connecting-ip": "203.0.113.10",
        "x-forwarded-for": "198.51.100.20, 198.51.100.21",
      },
    });

    await verifyTurnstileToken("submitted-token", request);

    const options = fetchMock.mock.calls[0][1] as RequestInit;
    expect(JSON.parse(options.body as string)).toEqual({
      secret: "production-secret",
      response: "submitted-token",
      remoteip: "203.0.113.10",
    });
  });

  it("falls back to the first trimmed x-forwarded-for address", async () => {
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );
    const request = new Request("https://orato.nl/contact", {
      headers: {
        "x-forwarded-for": " 198.51.100.20 , 198.51.100.21",
      },
    });

    await verifyTurnstileToken("submitted-token", request);

    const options = fetchMock.mock.calls[0][1] as RequestInit;
    expect(JSON.parse(options.body as string).remoteip).toBe("198.51.100.20");
  });

  it("returns false for a non-ok Cloudflare response", async () => {
    fetchMock.mockResolvedValue(new Response("Unavailable", { status: 503 }));

    await expect(
      verifyTurnstileToken(
        "submitted-token",
        new Request("https://orato.nl/contact"),
      ),
    ).resolves.toBe(false);
  });

  it("warns and returns false when Cloudflare rejects verification", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    fetchMock.mockResolvedValue(
      new Response(
        JSON.stringify({
          success: false,
          "error-codes": ["invalid-input-response", "timeout-or-duplicate"],
        }),
        { status: 200 },
      ),
    );

    await expect(
      verifyTurnstileToken(
        "submitted-token",
        new Request("https://orato.nl/contact"),
      ),
    ).resolves.toBe(false);
    expect(warnSpy).toHaveBeenCalledWith("Turnstile-controle mislukt:", [
      "invalid-input-response",
      "timeout-or-duplicate",
    ]);
  });

  it("returns true without warning for successful verification", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );

    await expect(
      verifyTurnstileToken(
        "submitted-token",
        new Request("https://orato.nl/contact"),
      ),
    ).resolves.toBe(true);
    expect(warnSpy).not.toHaveBeenCalled();
  });
});
