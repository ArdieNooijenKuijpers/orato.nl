export type MailField = {
  label: string;
  value?: string | null;
};

export type FormType = "contact" | "inschrijving";

type ConfirmationEmailData = {
  recipientName: string;
  formType: FormType;
  submittedAt?: string;
  highlights: MailField[];
};

type NotificationEmailData = {
  formType: FormType;
  submittedAt?: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  highlights: MailField[];
  message?: string;
};

const brand = {
  orange: "#ee7901",
  green: "#77b829",
  blue: "#1d99d6",
  dark: "#141414",
  light: "#f0f0f0",
  red: "#da391f",
  sand: "#faf8f3",
  border: "#e4ddd3",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const nl2br = (value: string) => escapeHtml(value).replace(/\n/g, "<br />");

const formatFields = (fields: MailField[]) =>
  fields
    .filter((field) => field.value && field.value.trim())
    .map(
      (field) => `
        <tr>
          <td style="padding: 0 0 10px; font: 700 12px/1.4 Arial, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; color: #666056;">
            ${escapeHtml(field.label)}
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 18px; font: 400 16px/1.7 Arial, sans-serif; color: ${brand.dark}; border-bottom: 1px solid ${brand.border};">
            ${nl2br(field.value!.trim())}
          </td>
        </tr>
      `,
    )
    .join("");

const renderBaseEmail = ({
  previewText,
  eyebrow,
  title,
  intro,
  accentColor,
  badge,
  innerHtml,
  footerNote,
}: {
  previewText: string;
  eyebrow: string;
  title: string;
  intro: string;
  accentColor: string;
  badge: string;
  innerHtml: string;
  footerNote: string;
}) => `<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${escapeHtml(title)}</title>
    <style>
      @media only screen and (max-width: 640px) {
        .shell {
          width: 100% !important;
        }
        .card {
          border-radius: 0 !important;
        }
        .stack {
          display: block !important;
          width: 100% !important;
        }
        .pad {
          padding: 28px 20px !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: ${brand.light};">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
      ${escapeHtml(previewText)}
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${brand.light};">
      <tr>
        <td align="center" style="padding: 32px 16px;">
          <table role="presentation" width="680" cellspacing="0" cellpadding="0" border="0" class="shell" style="width: 100%; max-width: 680px;">
            <tr>
              <td class="card" style="border-radius: 28px; overflow: hidden; box-shadow: 0 18px 60px rgba(20, 20, 20, 0.14);">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 10px 0; background: linear-gradient(90deg, ${brand.orange} 0%, ${brand.green} 52%, ${brand.blue} 100%); font-size: 0; line-height: 0;">
                      &nbsp;
                    </td>
                  </tr>
                  <tr>
                    <td class="pad" style="padding: 40px 44px 24px; background-color: ${brand.dark};">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td class="stack" style="vertical-align: top;">
                            <div style="font: 700 12px/1.3 Arial, sans-serif; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.66);">
                              ${escapeHtml(eyebrow)}
                            </div>
                            <div style="padding-top: 14px; font: 400 38px/1.04 Georgia, 'Times New Roman', serif; color: #ffffff;">
                              ${escapeHtml(title)}
                            </div>
                            <div style="padding-top: 18px; max-width: 520px; font: 400 16px/1.75 Arial, sans-serif; color: rgba(255,255,255,0.84);">
                              ${escapeHtml(intro)}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 24px;">
                            <span style="display: inline-block; border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; padding: 10px 16px; background-color: rgba(255,255,255,0.08); font: 700 12px/1 Arial, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; color: #ffffff;">
                              ${escapeHtml(badge)}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="pad" style="padding: 34px 44px 40px; background-color: #ffffff;">
                      ${innerHtml}
                    </td>
                  </tr>
                  <tr>
                    <td class="pad" style="padding: 0 44px 38px; background-color: #ffffff;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid ${brand.border};">
                        <tr>
                          <td style="padding-top: 20px; font: 400 13px/1.8 Arial, sans-serif; color: #6c675f;">
                            ${escapeHtml(footerNote)}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const renderConfirmationEmail = ({
  recipientName,
  formType,
  submittedAt,
  highlights,
}: ConfirmationEmailData) => {
  const isRegistration = formType === "inschrijving";
  const title = isRegistration ? "Je inschrijving is ontvangen" : "Je bericht is goed aangekomen";
  const intro = isRegistration
    ? `Beste ${recipientName}, bedankt voor je inschrijving bij Orato. Hieronder vind je een korte samenvatting van wat er is ontvangen.`
    : `Beste ${recipientName}, bedankt voor je bericht aan Orato. Hieronder vind je een korte samenvatting van wat er is ontvangen.`;
  const nextStep = isRegistration
    ? "Ardie neemt contact op als er nog iets afgestemd moet worden over planning, lunch of facturatie."
    : "Ardie komt zo snel mogelijk bij je terug om mee te denken in mogelijkheden.";
  const submittedLabel = submittedAt ? `<p style="margin: 0 0 20px; font: 400 14px/1.7 Arial, sans-serif; color: #6c675f;">Ontvangen op <strong style="color: ${brand.dark};">${escapeHtml(submittedAt)}</strong></p>` : "";

  return renderBaseEmail({
    previewText: title,
    eyebrow: isRegistration ? "Orato Inschrijving" : "Orato Contact",
    title,
    intro,
    accentColor: isRegistration ? brand.blue : brand.green,
    badge: isRegistration ? "Authentiek presenteren" : "Vrijblijvend contact",
    footerNote:
      "Orato Communicatie Coaching, Rutger van den Broeckelaan 3, 5671 EB Nuenen.",
    innerHtml: `
      ${submittedLabel}
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px; border-radius: 24px; background-color: ${brand.sand};">
        <tr>
          <td style="padding: 24px 24px 8px;">
            <div style="font: 400 28px/1.15 Georgia, 'Times New Roman', serif; color: ${brand.dark};">
              Even stil staan . . . om verder te komen!
            </div>
            <div style="padding-top: 14px; font: 400 15px/1.75 Arial, sans-serif; color: #565148;">
              ${escapeHtml(nextStep)}
            </div>
          </td>
        </tr>
      </table>
      <div style="padding-bottom: 14px; font: 700 12px/1.3 Arial, sans-serif; letter-spacing: 0.16em; text-transform: uppercase; color: ${isRegistration ? brand.blue : brand.green};">
        Samenvatting
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        ${formatFields(highlights)}
      </table>
    `,
  });
};

export const renderNotificationEmail = ({
  formType,
  submittedAt,
  senderName,
  senderEmail,
  senderPhone,
  highlights,
  message,
}: NotificationEmailData) => {
  const isRegistration = formType === "inschrijving";
  const title = isRegistration ? "Nieuwe inschrijving via orato.nl" : "Nieuw contactbericht via orato.nl";
  const badge = isRegistration ? "Direct opvolgen" : "Nieuwe aanvraag";
  const submittedLabel = submittedAt ? `<p style="margin: 0 0 22px; font: 400 14px/1.7 Arial, sans-serif; color: #6c675f;">Binnengekomen op <strong style="color: ${brand.dark};">${escapeHtml(submittedAt)}</strong></p>` : "";
  const quickInfo = [
    { label: "Naam", value: senderName },
    { label: "E-mail", value: senderEmail },
    { label: "Telefoon", value: senderPhone },
  ];

  return renderBaseEmail({
    previewText: title,
    eyebrow: isRegistration ? "Inschrijving ontvangen" : "Contact ontvangen",
    title,
    intro: "Er is een nieuw formulier ingestuurd via de website van Orato. Hieronder staat de informatie overzichtelijk bij elkaar.",
    accentColor: brand.orange,
    badge,
    footerNote: "Deze e-mail is bedoeld als interne melding voor Orato.",
    innerHtml: `
      ${submittedLabel}
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px; border: 1px solid ${brand.border}; border-radius: 24px; background-color: ${brand.sand};">
        <tr>
          <td style="padding: 24px;">
            <div style="font: 700 12px/1.3 Arial, sans-serif; letter-spacing: 0.16em; text-transform: uppercase; color: ${brand.orange};">
              Eerste indruk
            </div>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding-top: 14px;">
              ${formatFields(quickInfo)}
            </table>
          </td>
        </tr>
      </table>
      ${
        message?.trim()
          ? `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px; border-left: 4px solid ${brand.orange}; background-color: #fffaf4;">
        <tr>
          <td style="padding: 20px 22px;">
            <div style="font: 700 12px/1.3 Arial, sans-serif; letter-spacing: 0.16em; text-transform: uppercase; color: ${brand.orange};">
              Bericht
            </div>
            <div style="padding-top: 10px; font: 400 16px/1.8 Arial, sans-serif; color: ${brand.dark};">
              ${nl2br(message.trim())}
            </div>
          </td>
        </tr>
      </table>`
          : ""
      }
      <div style="padding-bottom: 14px; font: 700 12px/1.3 Arial, sans-serif; letter-spacing: 0.16em; text-transform: uppercase; color: ${isRegistration ? brand.blue : brand.green};">
        Volledige gegevens
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        ${formatFields(highlights)}
      </table>
    `,
  });
};

export const sampleContactConfirmation = renderConfirmationEmail({
  recipientName: "Sanne",
  formType: "contact",
  submittedAt: "2 april 2026 om 10:14",
  highlights: [
    { label: "Naam", value: "Sanne van Loon" },
    { label: "E-mail", value: "sanne@example.com" },
    { label: "Telefoon", value: "+31 6 1234 5678" },
    { label: "Organisatie", value: "Studio Zuid" },
    {
      label: "Bericht",
      value:
        "Ik wil graag overleggen over individuele presentatiecoaching voor een keynote in juni.",
    },
  ],
});

export const sampleRegistrationConfirmation = renderConfirmationEmail({
  recipientName: "Mark",
  formType: "inschrijving",
  submittedAt: "2 april 2026 om 10:18",
  highlights: [
    { label: "Naam", value: "Mark Peters" },
    { label: "E-mail", value: "mark@example.com" },
    { label: "Telefoon", value: "+31 6 9876 5432" },
    {
      label: "Datum",
      value: "Woensdag 26 november 2025 | 9.30 - 17.30 u",
    },
    { label: "Facturatie", value: "Zakelijk, per e-mail" },
    { label: "Dieetwensen", value: "Vegetarisch" },
  ],
});

export const sampleContactNotification = renderNotificationEmail({
  formType: "contact",
  submittedAt: "2 april 2026 om 10:14",
  senderName: "Sanne van Loon",
  senderEmail: "sanne@example.com",
  senderPhone: "+31 6 1234 5678",
  message:
    "Ik wil graag overleggen over individuele presentatiecoaching voor een keynote in juni.",
  highlights: [
    { label: "Naam", value: "Sanne van Loon" },
    { label: "E-mail", value: "sanne@example.com" },
    { label: "Telefoon", value: "+31 6 1234 5678" },
    { label: "Organisatie", value: "Studio Zuid" },
    { label: "Onderwerp", value: "Presentatiecoaching" },
  ],
});

export const sampleRegistrationNotification = renderNotificationEmail({
  formType: "inschrijving",
  submittedAt: "2 april 2026 om 10:18",
  senderName: "Mark Peters",
  senderEmail: "mark@example.com",
  senderPhone: "+31 6 9876 5432",
  highlights: [
    {
      label: "Gekozen datum",
      value: "Woensdag 26 november 2025 | 9.30 - 17.30 u",
    },
    { label: "Naam", value: "Mark Peters" },
    { label: "E-mail", value: "mark@example.com" },
    { label: "Telefoon", value: "+31 6 9876 5432" },
    { label: "Woonadres", value: "Parklaan 12, 5611 AB Eindhoven" },
    { label: "Geboortedatum", value: "12-08-1987" },
    { label: "Facturatie", value: "Zakelijk" },
    { label: "Factuur naar", value: "Per e-mail naar finance@bedrijf.nl" },
    { label: "Organisatie", value: "Peters & Coaching" },
    { label: "Dieetwensen", value: "Vegetarisch" },
    { label: "Opmerkingen", value: "Ik kom met de trein en ben op tijd aanwezig." },
  ],
});
