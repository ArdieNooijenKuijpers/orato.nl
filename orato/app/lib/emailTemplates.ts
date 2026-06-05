// The invoice reminder button in registration notification emails links to the
// /agenda/factuur-reminder .ics endpoint. Once the website is live, clicking
// that link should prompt/import the reminder in the user's calendar app
// (Outlook, Apple Calendar, Google Calendar, etc.). No email server is needed
// for that link itself. Test with:
// npm test -- emailTemplates agenda/factuur-reminder/route.test.ts

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

type FormatFieldsOptions = {
  compact?: boolean;
  getValueExtra?: (field: MailField) => string;
};

const formatFields = (fields: MailField[], options: FormatFieldsOptions = {}) =>
  fields
    .filter((field) => field.value && field.value.trim())
    .map(
      (field) => {
        const value = field.value!.trim();
        const labelPadding = options.compact ? "0 0 4px" : "0 0 10px";
        const labelFont = options.compact ? "700 10px/1.25 Arial, sans-serif" : "700 12px/1.4 Arial, sans-serif";
        const valuePadding = options.compact ? "0 0 9px" : "0 0 18px";
        const valueFont = options.compact ? "400 13px/1.45 Arial, sans-serif" : "400 16px/1.7 Arial, sans-serif";

        return `
        <tr>
          <td style="padding: ${labelPadding}; font: ${labelFont}; letter-spacing: 0.08em; text-transform: uppercase; color: #666056;">
            ${escapeHtml(field.label)}
          </td>
        </tr>
        <tr>
          <td style="padding: ${valuePadding}; font: ${valueFont}; color: ${brand.dark}; border-bottom: 1px solid ${brand.border};">
            ${nl2br(value)}
            ${options.getValueExtra?.(field) ?? ""}
          </td>
        </tr>
      `;
      },
    )
    .join("");

const dutchMonths: Record<string, number> = {
  januari: 0,
  februari: 1,
  maart: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  augustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  december: 11,
};

const formatDutchDate = (date: Date) => {
  const monthName = Object.entries(dutchMonths).find(([, month]) => month === date.getUTCMonth())?.[0];

  return `${date.getUTCDate()} ${monthName} ${date.getUTCFullYear()}`;
};

const parseTrainingDate = (value: string) => {
  const match = value.match(/\b(\d{1,2})\s+([a-z]+)\s+(\d{4})\b/i);

  if (!match) {
    return null;
  }

  const [, day, monthName, year] = match;
  const month = dutchMonths[monthName.toLowerCase()];

  if (month === undefined) {
    return null;
  }

  return new Date(Date.UTC(Number(year), month, Number(day)));
};

const addUtcDays = (date: Date, days: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));

const createInvoiceReminderUrl = (trainingDateValue: string) =>
  `https://orato.nl/agenda/factuur-reminder?datum=${encodeURIComponent(trainingDateValue)}`;

const createInvoiceReminder = (trainingDateValue: string) => {
  const trainingDate = parseTrainingDate(trainingDateValue);

  if (!trainingDate) {
    return null;
  }

  const reminderDate = addUtcDays(trainingDate, -7);
  const title = "Factuur sturen voor Orato inschrijving";

  return {
    dateLabel: formatDutchDate(reminderDate),
    title,
    url: createInvoiceReminderUrl(trainingDateValue),
  };
};

const renderInvoiceReminderButton = (field: MailField) => {
  if (!field.value || field.label.toLowerCase() !== "gekozen datum") {
    return "";
  }

  const reminder = createInvoiceReminder(field.value.trim());

  if (!reminder) {
    return "";
  }

  return `
            <div style="padding-top: 12px;">
              <div style="padding-bottom: 8px; font: 700 13px/1.5 Arial, sans-serif; color: ${brand.dark};">
                Factuur versturen op ${escapeHtml(reminder.dateLabel)}
              </div>
              <a href="${reminder.url}" style="display: inline-block; border-radius: 999px; background-color: ${brand.orange}; padding: 10px 14px; font: 700 12px/1 Arial, sans-serif; color: #ffffff; text-decoration: none;">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; margin-right: 6px; vertical-align: -2px;">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M3 10h18" />
                  <path d="M5 4h14a2 2 0 0 1 2 2v15H3V6a2 2 0 0 1 2-2Z" />
                </svg>
                Zet factuurdatum in agenda
              </a>
            </div>
          `;
};

const renderBaseEmail = ({
  previewText,
  eyebrow,
  title,
  intro,
  accentColor,
  badge,
  innerHtml,
  footerNote,
  showHeader = true,
  showFooter = true,
}: {
  previewText: string;
  eyebrow: string;
  title: string;
  intro: string;
  accentColor: string;
  badge: string;
  innerHtml: string;
  footerNote: string;
  showHeader?: boolean;
  showFooter?: boolean;
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
                    <td style="padding: 10px 0; background-color: ${accentColor}; font-size: 0; line-height: 0;">
                      &nbsp;
                    </td>
                  </tr>
                  ${
                    showHeader
                      ? `
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
                  `
                      : ""
                  }
                  <tr>
                    <td class="pad" style="padding: 34px 44px 40px; background-color: #ffffff;">
                      ${innerHtml}
                    </td>
                  </tr>
                  ${
                    showFooter
                      ? `
                  <tr>
                    <td class="pad" style="padding: 0 44px 38px; background-color: #ffffff;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid ${brand.border};">
                        <tr>
                          <td style="padding-top: 20px; font: 400 13px/1.8 Arial, sans-serif; color: #6c675f;">
                            <div style="margin: 0 0 14px;">
                              ${escapeHtml(footerNote)}
                            </div>
                            <div style="font-weight: 700; color: ${brand.dark};">
                              Orato Coaching Supervisie Opleiding en Training
                            </div>
                            <div>Rutger van den Broeckelaan 2</div>
                            <div>5671 EB Nuenen</div>
                            <div style="margin-top: 8px;">
                              <a href="mailto:ardie@orato.info" style="color: ${accentColor}; text-decoration: underline;">ardie@orato.info</a>
                              <span style="color: #b0aaa2;"> &middot; </span>
                              <a href="tel:+31651088688" style="color: ${accentColor}; text-decoration: underline;">+31 6 5108 8688</a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  `
                      : ""
                  }
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
  const accentColor = isRegistration ? brand.green : brand.blue;
  const title = isRegistration ? "Je inschrijving is ontvangen." : "Je bericht is goed aangekomen.";
  const intro = isRegistration
    ? `Beste ${recipientName}, bedankt voor je inschrijving bij Orato. Hieronder vind je de informatie die Ardie ontvangt.`
    : `Beste ${recipientName}, bedankt voor je bericht aan Orato. Hieronder vind je de informatie die Ardie ontvangt.`;
  const nextStep = isRegistration
    ? "Ardie neemt contact op als er nog iets afgestemd moet worden over planning, lunch of facturatie."
    : "Ardie komt zo snel mogelijk bij je terug om mee te denken in mogelijkheden.";
  const registrationInfo = isRegistration
    ? "Je ontvangt uiterlijk 1 week voor aanvang van de dag aanvullende informatie over de dag en de factuur."
    : "";
  const submittedLabel = submittedAt ? `<p style="margin: 0 0 20px; font: 400 14px/1.7 Arial, sans-serif; color: #6c675f;">Ontvangen op <strong style="color: ${brand.dark};">${escapeHtml(submittedAt)}</strong></p>` : "";
  const confirmationClosing = isRegistration
    ? "Ik zie uit naar een persoonlijke ontmoeting!"
    : "Graag tot later contact!";

  return renderBaseEmail({
    previewText: title,
    eyebrow: isRegistration ? "Orato Inschrijving" : "Orato Contact",
    title,
    intro,
    accentColor,
    badge: isRegistration ? "Authentiek presenteren" : "Vrijblijvend contact",
    footerNote:
      "Je ontvangt deze e-mail naar aanleiding van je formulier op orato.nl.",
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
            ${
              registrationInfo
                ? `<div style="padding-top: 10px; font: 700 15px/1.75 Arial, sans-serif; color: ${brand.dark};">${escapeHtml(registrationInfo)}</div>`
                : ""
            }
          </td>
        </tr>
      </table>
      <div style="padding-bottom: 14px; font: 700 12px/1.3 Arial, sans-serif; letter-spacing: 0.16em; text-transform: uppercase; color: ${accentColor};">
        Samenvatting
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        ${formatFields(highlights)}
      </table>
      <p style="margin: 24px 0 0; font: 800 18px/1.5 Arial, sans-serif; color: ${brand.dark};">${escapeHtml(confirmationClosing)}</p>
    `,
  });
};

export const renderNotificationEmail = ({
  formType,
  submittedAt,
  highlights,
  message,
}: NotificationEmailData) => {
  const isRegistration = formType === "inschrijving";
  const accentColor = isRegistration ? brand.green : brand.blue;
  const title = isRegistration ? "Nieuwe inschrijving via orato.nl" : "Nieuw contactbericht via orato.nl";
  const badge = isRegistration ? "Direct opvolgen" : "Nieuwe aanvraag";
  const notificationIntro = isRegistration ? "Er is een nieuw inschrijfformulier." : "Er is een nieuw contactformulier.";
  const submittedLabel = submittedAt ? `<p style="margin: 0 0 12px; font: 400 12px/1.45 Arial, sans-serif; color: #6c675f;">Binnengekomen op <strong style="color: ${brand.dark};">${escapeHtml(submittedAt)}</strong></p>` : "";

  return renderBaseEmail({
    previewText: title,
    eyebrow: isRegistration ? "Inschrijving ontvangen" : "Contact ontvangen",
    title,
    intro: notificationIntro,
    accentColor,
    badge,
    footerNote: "Deze e-mail is bedoeld als interne melding voor Orato.",
    showHeader: false,
    showFooter: false,
    innerHtml: `
      <p style="margin: 0 0 10px; font: 700 15px/1.35 Arial, sans-serif; color: ${brand.dark};">
        ${escapeHtml(notificationIntro)}
      </p>
      ${submittedLabel}
      ${
        message?.trim()
          ? `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 14px; border-left: 3px solid ${accentColor}; background-color: #fffaf4;">
        <tr>
          <td style="padding: 12px 14px;">
            <div style="font: 700 10px/1.25 Arial, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; color: ${accentColor};">
              Bericht
            </div>
            <div style="padding-top: 6px; font: 400 13px/1.45 Arial, sans-serif; color: ${brand.dark};">
              ${nl2br(message.trim())}
            </div>
          </td>
        </tr>
      </table>`
          : ""
      }
      <div style="padding-bottom: 8px; font: 700 10px/1.25 Arial, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; color: ${accentColor};">
        Volledige gegevens
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        ${formatFields(highlights, {
          compact: true,
          getValueExtra: isRegistration ? renderInvoiceReminderButton : undefined,
        })}
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
      value: "Maandag 9 november 2026 | 9.30 - 17.30 u",
    },
    { label: "Facturatie", value: "Zakelijk, per e-mail" },
    { label: "Dieetwensen", value: "Vegetarisch" },
    { label: "Akkoord voorwaarden", value: "Ja" },
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
      value: "Maandag 9 november 2026 | 9.30 - 17.30 u",
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
    { label: "Akkoord voorwaarden", value: "Ja" },
    { label: "Opmerkingen", value: "Ik kom met de trein en ben op tijd aanwezig." },
  ],
});
