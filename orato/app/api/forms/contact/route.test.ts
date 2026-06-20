import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendFormEmails, verifyTurnstileToken } = vi.hoisted(() => ({
  sendFormEmails: vi.fn(),
  verifyTurnstileToken: vi.fn(),
}));

vi.mock("../../../lib/formEmailService", () => ({ sendFormEmails }));
vi.mock("../../../lib/turnstile", () => ({ verifyTurnstileToken }));

import { POST } from "./route";

const requestWithJson = (body: unknown) =>
  new Request("https://orato.nl/api/forms/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

describe("POST /api/forms/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    verifyTurnstileToken.mockResolvedValue(true);
    sendFormEmails.mockResolvedValue(undefined);
  });

  it.each([
    ["missing fields", {}],
    ["a non-string name", { naam: 42, email: "klant@example.nl" }],
    ["a too-short name", { naam: " A ", email: "klant@example.nl" }],
    ["a non-string email", { naam: "Ada", email: false }],
    ["an invalid email", { naam: "Ada", email: "geen-email" }],
  ])("returns 400 for %s without running security or email", async (_, body) => {
    const response = await POST(requestWithJson(body));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "Controleer de verplichte velden en probeer opnieuw.",
    });
    expect(verifyTurnstileToken).not.toHaveBeenCalled();
    expect(sendFormEmails).not.toHaveBeenCalled();
  });

  it("returns a security 400 when Turnstile rejects the token", async () => {
    verifyTurnstileToken.mockResolvedValue(false);
    const request = requestWithJson({
      naam: " Ada Lovelace ",
      email: " ada@example.nl ",
      turnstileToken: " rejected-token ",
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: "De beveiligingscontrole is mislukt. Probeer het opnieuw.",
    });
    expect(verifyTurnstileToken).toHaveBeenCalledOnce();
    expect(verifyTurnstileToken).toHaveBeenCalledWith("rejected-token", request);
    expect(sendFormEmails).not.toHaveBeenCalled();
  });

  it("trims and maps valid input, sends the emails, and returns success", async () => {
    const request = requestWithJson({
      naam: " Ada Lovelace ",
      email: " ada@example.nl ",
      telefoon: " 06 12345678 ",
      organisatie: " Analytical Engines ",
      bericht: " Ik wil graag meer informatie. ",
      turnstileToken: " valid-token ",
    });

    const response = await POST(request);

    expect(verifyTurnstileToken).toHaveBeenCalledWith("valid-token", request);
    expect(sendFormEmails).toHaveBeenCalledOnce();
    expect(sendFormEmails).toHaveBeenCalledWith({
      formType: "contact",
      recipientName: "Ada Lovelace",
      recipientEmail: "ada@example.nl",
      senderPhone: "06 12345678",
      message: "Ik wil graag meer informatie.",
      highlights: [
        { label: "Naam", value: "Ada Lovelace" },
        { label: "E-mail", value: "ada@example.nl" },
        { label: "Telefoon", value: "06 12345678" },
        { label: "Organisatie", value: "Analytical Engines" },
        { label: "Bericht", value: "Ik wil graag meer informatie." },
      ],
      notificationSubject: "Nieuw contactbericht van Ada Lovelace",
      confirmationSubject: "Je bericht aan Orato is ontvangen",
    });
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });
  });

  it("returns 500 when sending the emails fails", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    sendFormEmails.mockRejectedValue(new Error("mail service unavailable"));

    const response = await POST(
      requestWithJson({
        naam: "Ada Lovelace",
        email: "ada@example.nl",
        turnstileToken: "valid-token",
      }),
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      error: "Verzenden is niet gelukt. Probeer het later opnieuw.",
    });
  });

  it("returns 500 when parsing JSON fails without running security or email", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const request = new Request("https://orato.nl/api/forms/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{ongeldige json",
    });

    const response = await POST(request);

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      error: "Verzenden is niet gelukt. Probeer het later opnieuw.",
    });
    expect(verifyTurnstileToken).not.toHaveBeenCalled();
    expect(sendFormEmails).not.toHaveBeenCalled();
  });
});
