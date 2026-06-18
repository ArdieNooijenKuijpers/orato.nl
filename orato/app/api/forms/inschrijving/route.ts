import { NextResponse } from "next/server";
import { inschrijfDataOptions } from "../../../inschrijfformulier/inschrijfData";
import { sendFormEmails } from "../../../lib/formEmailService";

type RegistrationPayload = Record<string, unknown>;

const stringValue = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const booleanValue = (value: unknown) => value === true;

export const POST = async (request: Request) => {
  try {
    const body = (await request.json()) as RegistrationPayload;
    const gekozenDatum = stringValue(body.gekozenDatum);
    const naam = stringValue(body.naam);
    const email = stringValue(body.email);
    const telefoon = stringValue(body.telefoon);
    const facturatie = stringValue(body.facturatie);
    const factuurNaar = stringValue(body.factuurNaar);
    const factuurEmail = stringValue(body.factuurEmail);
    const factuurPostadres = stringValue(body.factuurPostadres);
    const organisatieNaam = stringValue(body.organisatieNaam);
    const akkoord = booleanValue(body.akkoord);

    const isValid =
      (inschrijfDataOptions as readonly string[]).includes(gekozenDatum) &&
      naam.length >= 2 &&
      /^\S+@\S+\.\S+$/.test(email) &&
      telefoon.length >= 10 &&
      ["zakelijk", "privé"].includes(facturatie) &&
      ["email", "post"].includes(factuurNaar) &&
      (facturatie !== "zakelijk" || organisatieNaam.length >= 2) &&
      (factuurNaar !== "email" || /^\S+@\S+\.\S+$/.test(factuurEmail)) &&
      (factuurNaar !== "post" || factuurPostadres.length > 5) &&
      akkoord &&
      Number(stringValue(body.captcha)) === 13;

    if (!isValid) {
      return NextResponse.json(
        { error: "Controleer de verplichte velden en probeer opnieuw." },
        { status: 400 },
      );
    }

    const highlights = [
      { label: "Gekozen datum", value: gekozenDatum },
      { label: "Naam", value: naam },
      { label: "E-mail", value: email },
      { label: "Telefoon", value: telefoon },
      { label: "Geboortedatum", value: stringValue(body.geboortedatum) },
      { label: "Woonadres", value: stringValue(body.woonadres) },
      { label: "Postcode + plaats", value: stringValue(body.woonplaats) },
      { label: "Organisatie", value: organisatieNaam },
      {
        label: "Organisatieadres",
        value: stringValue(body.organisatieAdres),
      },
      {
        label: "Organisatie postcode + plaats",
        value: stringValue(body.organisatiePlaats),
      },
      { label: "Facturatie", value: facturatie },
      { label: "Factuur sturen naar", value: factuurNaar },
      { label: "Factuur e-mailadres", value: factuurEmail },
      { label: "Factuur postadres", value: factuurPostadres },
      { label: "Dieetwensen", value: stringValue(body.dieetwensen) },
      { label: "Opmerkingen", value: stringValue(body.opmerkingen) },
      { label: "Akkoord voorwaarden", value: akkoord ? "Ja" : "Nee" },
    ];

    await sendFormEmails({
      formType: "inschrijving",
      recipientName: naam,
      recipientEmail: email,
      senderPhone: telefoon,
      highlights,
      notificationSubject: `Nieuwe inschrijving van ${naam}`,
      confirmationSubject: "Je inschrijving bij Orato is ontvangen",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inschrijfformulier verzenden mislukt:", error);

    return NextResponse.json(
      { error: "Verzenden is niet gelukt. Probeer het later opnieuw." },
      { status: 500 },
    );
  }
};
