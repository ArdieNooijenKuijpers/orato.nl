import { renderConfirmationEmail, renderNotificationEmail } from "./emailTemplates";

describe("emailTemplates", () => {
  it("renders a confirmation summary for registrations", () => {
    const html = renderConfirmationEmail({
      recipientName: "Sanne",
      formType: "inschrijving",
      submittedAt: "6 april 2026 om 10:14",
      highlights: [
        { label: "Naam", value: "Sanne van Loon" },
        { label: "Datum", value: "Vrijdag 26 juni 2026 | 9.30 - 17.30 u" },
      ],
    });

    expect(html).toContain("Je inschrijving is ontvangen");
    expect(html).toContain("Beste Sanne");
    expect(html).toContain("Orato Inschrijving");
    expect(html).toContain("Vrijdag 26 juni 2026 | 9.30 - 17.30 u");
    expect(html).toContain("Ontvangen op");
    expect(html).toContain(
      "Je ontvangt uiterlijk 1 week voor aanvang van de dag aanvullende informatie over de dag en de factuur.",
    );
    expect(html).toContain("Orato Coaching Supervisie Opleiding en Training");
    expect(html).toContain("Rutger van den Broeckelaan 2");
    expect(html).toContain('href="mailto:ardie@orato.info"');
    expect(html).toContain('href="tel:+31651088688"');
    expect(html).not.toContain("Rutger van den Broeckelaan 3");
    expect(html).toContain("Ik zie uit naar een persoonlijke ontmoeting!");
    expect(html).not.toContain("Graag tot later contact!");
  });

  it("adds a bold closing after the contact confirmation form info", () => {
    const html = renderConfirmationEmail({
      recipientName: "Sanne",
      formType: "contact",
      highlights: [{ label: "Bericht", value: "Ik wil graag contact." }],
    });

    expect(html).toContain("Ik wil graag contact.");
    expect(html).toContain('font: 800 18px/1.5 Arial, sans-serif; color: #141414;">Graag tot later contact!</p>');
    expect(html).not.toContain("Ik zie uit naar een persoonlijke ontmoeting!");
    expect(html).not.toContain("aanvullende informatie over de dag en de factuur");
  });

  it("escapes untrusted values and omits blank fields from notifications", () => {
    const html = renderNotificationEmail({
      formType: "contact",
      submittedAt: "6 april 2026 om 10:20",
      senderName: "<b>Mal</b>",
      senderEmail: "mal@example.com",
      senderPhone: "   ",
      message: "<script>alert('xss')</script>\nTweede regel",
      highlights: [
        { label: "Naam", value: "<b>Mal</b>" },
        { label: "Leeg veld", value: "   " },
      ],
    });

    expect(html).toContain("&lt;b&gt;Mal&lt;/b&gt;");
    expect(html).toContain("Er is een nieuw contactformulier.");
    expect(html).not.toContain('padding: 40px 44px 24px; background-color: #141414;');
    expect(html).not.toContain("Orato Coaching Supervisie Opleiding en Training");
    expect(html).not.toContain("Eerste indruk");
    expect(html).not.toContain("Er is een nieuw formulier ingestuurd via de website van Orato.");
    expect(html).not.toContain("<script>alert('xss')</script>");
    expect(html).toContain("&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;<br />Tweede regel");
    expect(html).not.toContain("Leeg veld");
  });

  it("uses a short notification intro for registrations", () => {
    const html = renderNotificationEmail({
      formType: "inschrijving",
      senderName: "Sanne",
      senderEmail: "sanne@example.com",
      highlights: [
        { label: "Gekozen datum", value: "Vrijdag 26 juni 2026 | 9.30 - 17.30 u" },
        { label: "Naam", value: "Sanne" },
      ],
    });

    expect(html).toContain("Er is een nieuw inschrijfformulier.");
    expect(html).not.toContain('padding: 40px 44px 24px; background-color: #141414;');
    expect(html).not.toContain("Orato Coaching Supervisie Opleiding en Training");
    expect(html).toContain("font: 400 13px/1.45 Arial, sans-serif");
    expect(html).not.toContain("Eerste indruk");
    expect(html).toContain("Factuur versturen op 19 juni 2026");
    expect(html).toContain('aria-hidden="true" width="14" height="14" viewBox="0 0 24 24"');
    expect(html).toContain("Zet factuurdatum in agenda");
    expect(html).toContain(
      "https://orato.nl/agenda/factuur-reminder?datum=Vrijdag%2026%20juni%202026%20%7C%209.30%20-%2017.30%20u",
    );
  });
});
