import { Resend } from "resend";
import {
  MailField,
  renderConfirmationEmail,
  renderNotificationEmail,
} from "./emailTemplates";

type FormEmailOptions = {
  formType: "contact" | "inschrijving";
  recipientName: string;
  recipientEmail: string;
  notificationSubject: string;
  confirmationSubject: string;
  highlights: MailField[];
  message?: string;
  senderPhone?: string;
};

const getEmailConfiguration = () => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const notificationEmail =
    process.env.RESEND_NOTIFICATION_EMAIL ?? "ardie@orato.info";

  if (!apiKey || !from) {
    throw new Error(
      "E-mail is niet geconfigureerd. Controleer RESEND_API_KEY en RESEND_FROM_EMAIL.",
    );
  }

  return { apiKey, from, notificationEmail };
};

export const formatSubmittedAt = (date = new Date()) =>
  new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Amsterdam",
  }).format(date);

export const sendFormEmails = async ({
  formType,
  recipientName,
  recipientEmail,
  notificationSubject,
  confirmationSubject,
  highlights,
  message,
  senderPhone,
}: FormEmailOptions) => {
  const { apiKey, from, notificationEmail } = getEmailConfiguration();
  const resend = new Resend(apiKey);
  const submittedAt = formatSubmittedAt();

  const { data, error } = await resend.batch.send(
    [
      {
        from,
        to: notificationEmail,
        replyTo: recipientEmail,
        subject: notificationSubject,
        html: renderNotificationEmail({
          formType,
          submittedAt,
          senderName: recipientName,
          senderEmail: recipientEmail,
          senderPhone,
          highlights,
          message,
        }),
        tags: [
          { name: "form_type", value: formType },
          { name: "email_type", value: "notification" },
        ],
      },
      {
        from,
        to: recipientEmail,
        replyTo: notificationEmail,
        subject: confirmationSubject,
        html: renderConfirmationEmail({
          recipientName: recipientName.trim().split(/\s+/)[0] || recipientName,
          formType,
          submittedAt,
          highlights,
        }),
        tags: [
          { name: "form_type", value: formType },
          { name: "email_type", value: "confirmation" },
        ],
      },
    ],
    {
      batchValidation: "strict",
      idempotencyKey: crypto.randomUUID(),
    },
  );

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
