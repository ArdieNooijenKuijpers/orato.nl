import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  batchSend: vi.fn(),
  resendConstructor: vi.fn(),
  renderConfirmationEmail: vi.fn(),
  renderNotificationEmail: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class {
    batch = { send: mocks.batchSend };

    constructor(apiKey: string) {
      mocks.resendConstructor(apiKey);
    }
  },
}));

vi.mock("./emailTemplates", () => ({
  renderConfirmationEmail: mocks.renderConfirmationEmail,
  renderNotificationEmail: mocks.renderNotificationEmail,
}));

import { formatSubmittedAt, sendFormEmails } from "./formEmailService";

const highlights = [
  { label: "Naam", value: "Sanne van Loon" },
  { label: "Onderwerp", value: "Coaching" },
];

const formOptions = {
  formType: "contact" as const,
  recipientName: "  Sanne   van Loon ",
  recipientEmail: "sanne@example.com",
  notificationSubject: "Nieuw contactformulier",
  confirmationSubject: "We hebben je bericht ontvangen",
  highlights,
  message: "Ik hoor graag van je.",
  senderPhone: "06 12345678",
};

describe("formEmailService", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T12:34:00.000Z"));
    vi.stubEnv("RESEND_API_KEY", "resend-api-key");
    vi.stubEnv("RESEND_FROM_EMAIL", "Orato <noreply@orato.nl>");
    vi.stubEnv("RESEND_NOTIFICATION_EMAIL", "");
    vi.stubGlobal("crypto", {
      randomUUID: vi.fn(() => "00000000-0000-4000-8000-000000000001"),
    });

    mocks.batchSend.mockResolvedValue({
      data: { data: [{ id: "notification-id" }, { id: "confirmation-id" }] },
      error: null,
    });
    mocks.renderNotificationEmail.mockReturnValue("<notification-html />");
    mocks.renderConfirmationEmail.mockReturnValue("<confirmation-html />");
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it.each([
    ["RESEND_API_KEY", "RESEND_FROM_EMAIL"],
    ["RESEND_FROM_EMAIL", "RESEND_API_KEY"],
  ] as const)(
    "throws before creating Resend when %s is missing",
    async (missingVariable, configuredVariable) => {
      vi.stubEnv(missingVariable, "");
      vi.stubEnv(
        configuredVariable,
        configuredVariable === "RESEND_API_KEY"
          ? "resend-api-key"
          : "Orato <noreply@orato.nl>",
      );

      await expect(sendFormEmails(formOptions)).rejects.toThrow(
        "E-mail is niet geconfigureerd. Controleer RESEND_API_KEY en RESEND_FROM_EMAIL.",
      );
      expect(mocks.resendConstructor).not.toHaveBeenCalled();
      expect(mocks.batchSend).not.toHaveBeenCalled();
    },
  );

  it("sends notification and confirmation emails using the default notification address", async () => {
    vi.stubEnv("RESEND_NOTIFICATION_EMAIL", undefined);

    await expect(sendFormEmails(formOptions)).resolves.toEqual({
      data: [{ id: "notification-id" }, { id: "confirmation-id" }],
    });

    expect(mocks.resendConstructor).toHaveBeenCalledWith("resend-api-key");
    expect(mocks.renderNotificationEmail).toHaveBeenCalledWith({
      formType: "contact",
      submittedAt: "20 juni 2026 om 14:34",
      senderName: "  Sanne   van Loon ",
      senderEmail: "sanne@example.com",
      senderPhone: "06 12345678",
      highlights,
      message: "Ik hoor graag van je.",
    });
    expect(mocks.renderConfirmationEmail).toHaveBeenCalledWith({
      recipientName: "Sanne",
      formType: "contact",
      submittedAt: "20 juni 2026 om 14:34",
      highlights,
    });
    expect(mocks.batchSend).toHaveBeenCalledWith(
      [
        {
          from: "Orato <noreply@orato.nl>",
          to: "ardie@orato.info",
          replyTo: "sanne@example.com",
          subject: "Nieuw contactformulier",
          html: "<notification-html />",
          tags: [
            { name: "form_type", value: "contact" },
            { name: "email_type", value: "notification" },
          ],
        },
        {
          from: "Orato <noreply@orato.nl>",
          to: "sanne@example.com",
          replyTo: "ardie@orato.info",
          subject: "We hebben je bericht ontvangen",
          html: "<confirmation-html />",
          tags: [
            { name: "form_type", value: "contact" },
            { name: "email_type", value: "confirmation" },
          ],
        },
      ],
      {
        batchValidation: "strict",
        idempotencyKey: "00000000-0000-4000-8000-000000000001",
      },
    );
  });

  it("uses a custom notification email in both batch messages", async () => {
    vi.stubEnv("RESEND_NOTIFICATION_EMAIL", "forms@orato.nl");

    await sendFormEmails({
      ...formOptions,
      formType: "inschrijving",
    });

    const [messages] = mocks.batchSend.mock.calls[0];
    expect(messages[0]).toMatchObject({
      to: "forms@orato.nl",
      replyTo: "sanne@example.com",
      tags: [
        { name: "form_type", value: "inschrijving" },
        { name: "email_type", value: "notification" },
      ],
    });
    expect(messages[1]).toMatchObject({
      to: "sanne@example.com",
      replyTo: "forms@orato.nl",
      tags: [
        { name: "form_type", value: "inschrijving" },
        { name: "email_type", value: "confirmation" },
      ],
    });
  });

  it("propagates the Resend error message", async () => {
    mocks.batchSend.mockResolvedValue({
      data: null,
      error: { message: "Resend rejected the batch" },
    });

    await expect(sendFormEmails(formOptions)).rejects.toThrow(
      "Resend rejected the batch",
    );
  });

  it("formats submitted dates deterministically in Europe/Amsterdam", () => {
    expect(
      formatSubmittedAt(new Date("2026-06-20T12:34:00.000Z")),
    ).toBe("20 juni 2026 om 14:34");
    expect(
      formatSubmittedAt(new Date("2026-01-20T12:34:00.000Z")),
    ).toBe("20 januari 2026 om 13:34");
  });
});
