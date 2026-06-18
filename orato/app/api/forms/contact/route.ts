import { NextResponse } from "next/server";
import { sendFormEmails } from "../../../lib/formEmailService";

type ContactPayload = {
  naam?: unknown;
  email?: unknown;
  telefoon?: unknown;
  organisatie?: unknown;
  bericht?: unknown;
  captcha?: unknown;
};

const stringValue = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export const POST = async (request: Request) => {
  try {
    const body = (await request.json()) as ContactPayload;
    const naam = stringValue(body.naam);
    const email = stringValue(body.email);
    const telefoon = stringValue(body.telefoon);
    const organisatie = stringValue(body.organisatie);
    const bericht = stringValue(body.bericht);
    const captcha = stringValue(body.captcha);

    if (
      naam.length < 2 ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      Number(captcha) !== 7
    ) {
      return NextResponse.json(
        { error: "Controleer de verplichte velden en probeer opnieuw." },
        { status: 400 },
      );
    }

    const highlights = [
      { label: "Naam", value: naam },
      { label: "E-mail", value: email },
      { label: "Telefoon", value: telefoon },
      { label: "Organisatie", value: organisatie },
      { label: "Bericht", value: bericht },
    ];

    await sendFormEmails({
      formType: "contact",
      recipientName: naam,
      recipientEmail: email,
      senderPhone: telefoon,
      message: bericht,
      highlights,
      notificationSubject: `Nieuw contactbericht van ${naam}`,
      confirmationSubject: "Je bericht aan Orato is ontvangen",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contactformulier verzenden mislukt:", error);

    return NextResponse.json(
      { error: "Verzenden is niet gelukt. Probeer het later opnieuw." },
      { status: 500 },
    );
  }
};
