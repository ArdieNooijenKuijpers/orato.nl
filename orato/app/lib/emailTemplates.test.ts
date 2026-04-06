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
    expect(html).not.toContain("<script>alert('xss')</script>");
    expect(html).toContain("&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;<br />Tweede regel");
    expect(html).not.toContain("Leeg veld");
  });
});
