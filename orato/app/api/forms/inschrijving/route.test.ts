import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendFormEmails, verifyTurnstileToken } = vi.hoisted(() => ({
  sendFormEmails: vi.fn(),
  verifyTurnstileToken: vi.fn(),
}));

vi.mock("../../../lib/formEmailService", () => ({ sendFormEmails }));
vi.mock("../../../lib/turnstile", () => ({ verifyTurnstileToken }));

import { POST } from "./route";

const validPayload = {
  gekozenDatum: "Vrijdag 26 juni 2026 | 9.30 - 17.30 u",
  naam: "Ada Lovelace",
  email: "ada@example.nl",
  telefoon: "0612345678",
  facturatie: "privé",
  factuurNaar: "email",
  factuurEmail: "ada.factuur@example.nl",
  akkoord: true,
  turnstileToken: "valid-token",
};

const requestWithJson = (body: unknown) =>
  new Request("https://orato.nl/api/forms/inschrijving", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

describe("POST /api/forms/inschrijving", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    verifyTurnstileToken.mockResolvedValue(true);
    sendFormEmails.mockResolvedValue(undefined);
  });

  it.each([
    ["missing fields", {}],
    ["an unknown date", { ...validPayload, gekozenDatum: "Morgen" }],
    ["a non-string name", { ...validPayload, naam: 42 }],
    ["a too-short name", { ...validPayload, naam: " A " }],
    ["an invalid email", { ...validPayload, email: "geen-email" }],
    ["a short phone number", { ...validPayload, telefoon: "06123" }],
    ["an invalid billing type", { ...validPayload, facturatie: "anders" }],
    ["an invalid invoice destination", { ...validPayload, factuurNaar: "anders" }],
    [
      "a missing business name",
      { ...validPayload, facturatie: "zakelijk", organisatieNaam: " " },
    ],
    [
      "an invalid invoice email",
      { ...validPayload, factuurNaar: "email", factuurEmail: "ongeldig" },
    ],
    [
      "a short invoice postal address",
      { ...validPayload, factuurNaar: "post", factuurPostadres: " kort " },
    ],
    ["agreement other than true", { ...validPayload, akkoord: "true" }],
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
      ...validPayload,
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
      gekozenDatum: " Vrijdag 26 juni 2026 | 9.30 - 17.30 u ",
      naam: " Ada Lovelace ",
      email: " ada@example.nl ",
      telefoon: " 06 12345678 ",
      geboortedatum: " 10-12-1815 ",
      woonadres: " St. James's Square 1 ",
      woonplaats: " SW1 Londen ",
      organisatieNaam: " Analytical Engines ",
      organisatieAdres: " Engine Road 2 ",
      organisatiePlaats: " 1234 AB Londen ",
      facturatie: " zakelijk ",
      factuurNaar: " post ",
      factuurEmail: " administratie@example.nl ",
      factuurPostadres: " Finance Street 3, Londen ",
      dieetwensen: " Vegetarisch ",
      opmerkingen: " Graag bij het raam. ",
      akkoord: true,
      turnstileToken: " valid-token ",
    });

    const response = await POST(request);

    expect(verifyTurnstileToken).toHaveBeenCalledWith("valid-token", request);
    expect(sendFormEmails).toHaveBeenCalledOnce();
    expect(sendFormEmails).toHaveBeenCalledWith({
      formType: "inschrijving",
      recipientName: "Ada Lovelace",
      recipientEmail: "ada@example.nl",
      senderPhone: "06 12345678",
      highlights: [
        {
          label: "Gekozen datum",
          value: "Vrijdag 26 juni 2026 | 9.30 - 17.30 u",
        },
        { label: "Naam", value: "Ada Lovelace" },
        { label: "E-mail", value: "ada@example.nl" },
        { label: "Telefoon", value: "06 12345678" },
        { label: "Geboortedatum", value: "10-12-1815" },
        { label: "Woonadres", value: "St. James's Square 1" },
        { label: "Postcode + plaats", value: "SW1 Londen" },
        { label: "Organisatie", value: "Analytical Engines" },
        { label: "Organisatieadres", value: "Engine Road 2" },
        {
          label: "Organisatie postcode + plaats",
          value: "1234 AB Londen",
        },
        { label: "Facturatie", value: "zakelijk" },
        { label: "Factuur sturen naar", value: "post" },
        {
          label: "Factuur e-mailadres",
          value: "administratie@example.nl",
        },
        {
          label: "Factuur postadres",
          value: "Finance Street 3, Londen",
        },
        { label: "Dieetwensen", value: "Vegetarisch" },
        { label: "Opmerkingen", value: "Graag bij het raam." },
        { label: "Akkoord voorwaarden", value: "Ja" },
      ],
      notificationSubject: "Nieuwe inschrijving van Ada Lovelace",
      confirmationSubject: "Je inschrijving bij Orato is ontvangen",
    });
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ success: true });
  });

  it("returns 500 when sending the emails fails", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    sendFormEmails.mockRejectedValue(new Error("mail service unavailable"));

    const response = await POST(requestWithJson(validPayload));

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      error: "Verzenden is niet gelukt. Probeer het later opnieuw.",
    });
  });

  it("returns 500 when parsing JSON fails without running security or email", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const request = new Request("https://orato.nl/api/forms/inschrijving", {
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
