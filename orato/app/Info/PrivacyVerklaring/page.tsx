import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Serif_Display } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orato - Privacyverklaring",
  description:
    "Privacyverklaring van ORATO over de verwerking van persoonsgegevens bij coaching, supervisie, training en websitebezoek.",
};

const personalData = [
  "voor- en achternaam",
  "geslacht",
  "titulatuur",
  "geboortedatum en -plaats",
  "zorgverzekering",
  "prive-adres",
  "telefoonnummer (prive en/of zakelijk)",
  "e-mailadres (prive en/of zakelijk)",
  "dieetgegevens",
  "bedrijfsgegevens (naam, adres, naam en contactgegevens opdrachtgever, URL)",
  "LinkedIn-contact",
  "video- en audio-opnames",
  "foto's",
  "coach-, supervisie- of trainingsplan",
  "reflectieverslagen",
  "prestatie- en evaluatiegegevens",
  "relationele informatie",
  "gegevens m.b.t. gezondheid of welzijn",
  "factuurgegevens (bankrekeningnummer)",
];

const processingGoals = [
  "om een coach-, supervisie- of trainingsplan te kunnen uitvoeren",
  "om je te bellen, appen of e-mailen als dit nodig is om de dienstverlening uit te voeren",
  "om een bewijs van deelname te kunnen verstrekken",
  "om de betaling te kunnen afhandelen",
  "om je te informeren over wijzigingen van de dienstverlening",
  "om een eventuele nieuwsbrief te verzenden",
  "om een referentie op te nemen op de website van ORATO",
  "om de dienstverlening te kunnen verbeteren",
  "omdat ORATO hier wettelijk toe verplicht is, o.a. voor belastingaangifte",
];

const retentionPeriods = [
  { label: "Dossier coachee/supervisant", value: "max. 7 jaar" },
  { label: "Patientdossier", value: "15 jaar" },
  { label: "Factuur", value: "7 jaar" },
  { label: "Inschrijfgegevens", value: "max. 7 jaar" },
  { label: "Trainingsgegevens", value: "max. 7 jaar" },
  { label: "Procesverslag", value: "max. 7 jaar" },
  { label: "Rapportage verwijzer", value: "15 jaar" },
];

const securityMeasures = [
  "Beveiligde website (SSL) en inloggen met unieke wachtwoorden",
  "Verwerkersovereenkomsten",
  "Verwerkingsregister VGA ter inzage Autoriteit Persoonsregistratie (AP)",
  "Opslag extern geheugen in brandkluis",
  "Beveiliging van laptop en mobiele telefoon met wachtwoorden",
  "Cloudbeheerder voldoet aan AVG-eisen",
  "Vernietiging van papieren dossiers en verwijderen van digitale bestanden",
  "Digitaal werken in beveiligde internetomgeving / geen USB-stickgebruik",
  "Melden van eventueel datalek bij AP",
];

const contactDetails = [
  "ORATO",
  "Drs. Ardie Nooijen-Kuijpers",
  "Rutger van den Broeckelaan 3",
  "5671 EB Nuenen",
  "040-2842901 of 06-51088688",
  "ardie@orato.info",
  "www.orato.nl",
];

export default function PrivacyVerklaringPage() {
  return (
    <>
      <main className="bg-orato-light text-orato-dark">
        <section className="overflow-hidden bg-orato-light px-4 py-12 md:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2.5rem] border border-orato-dark/10 bg-white px-6 py-8 shadow-[0_38px_110px_-52px_rgba(20,20,20,0.45)] md:px-10 md:py-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex rounded-full border border-orato-dark/15 bg-orato-light/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orato-dark/70">
                    Info
                  </div>
                  <h1
                    className={`${notoSerifDisplay.className} mt-6 text-4xl leading-none md:text-6xl lg:text-[5rem]`}
                  >
                    Privacyverklaring
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-orato-dark/75 md:text-lg">
                    Ardie Nooijen-Kuijpers, eigenaar van ORATO, werkt graag
                    zorgvuldig volgens deze privacyverklaring. Je vindt hier
                    informatie over de manier waarop en waarvoor ORATO
                    verantwoordelijkheid neemt m.b.t. de verwerking van
                    persoonsgegevens in het kader van coaching, supervisie,
                    training en websitebezoek.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="/downloads/Orato%20-%20Privacyverklaring.pdf"
                    download
                    className="inline-flex min-h-14 items-center justify-center rounded-full bg-orato-dark px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-blue"
                  >
                    Download PDF
                  </a>
                  <Link
                    href="/Contact"
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-orato-dark/15 bg-white px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-green hover:text-orato-green"
                  >
                    Contact opnemen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-20 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Persoonsgegevens
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                Deze pagina beschrijft welke gegevens ORATO kan verwerken en
                met welk doel dat gebeurt.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Zorgvuldig
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                De verwerking van persoonsgegevens wordt gekoppeld aan coaching,
                supervisie, training, administratie en websitegebruik.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Rechten
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                Je leest hier ook hoe je gegevens kunt inzien, aanpassen,
                verwijderen of een klacht kunt indienen.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl space-y-6">
            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                Persoonsgegevens
              </h2>
              <p className="mt-5 text-base leading-7 text-orato-dark/78">
                Het kan gaan over de volgende persoonsgegevens:
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {personalData.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-orato-dark/10 bg-orato-light/70 px-4 py-4 text-sm leading-6 text-orato-dark/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                Doel en grondslag van de verwerking
              </h2>
              <p className="mt-5 text-base leading-7 text-orato-dark/78">
                ORATO verwerkt je persoonsgegevens voor de volgende doelen:
              </p>
              <div className="mt-6 grid gap-3">
                {processingGoals.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-orato-dark/10 bg-orato-light/70 px-4 py-4 text-sm leading-6 text-orato-dark/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                    Bewaartermijnen
                  </h2>
                  <p className="mt-5 text-base leading-7 text-orato-dark/78">
                    ORATO bewaart je persoonsgegevens niet langer dan wettelijk,
                    fiscaal of praktisch nodig is om de huidige of toekomstige
                    doelen te realiseren waarvoor de gegevens zijn verzameld.
                  </p>
                </div>
                <div className="rounded-[1.8rem] bg-orato-light/75 p-4">
                  <div className="space-y-3">
                    {retentionPeriods.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 rounded-[1.15rem] bg-white px-4 py-3 text-sm text-orato-dark/82"
                      >
                        <span>{item.label}</span>
                        <span className="font-semibold text-orato-blue">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                Delen van persoonsgegevens met derden
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-orato-dark/78">
                <p>
                  ORATO verkoopt je gegevens niet aan derden en zal deze
                  uitsluitend verstrekken als dit nodig is voor de uitvoering
                  van de overeenkomst met jou of om te voldoen aan een
                  wettelijke verplichting.
                </p>
                <p>
                  Met (werk)relaties die al dan niet in opdracht inzage kunnen
                  hebben in je gegevens sluit ORATO een
                  verwerkersovereenkomst om te zorgen voor eenzelfde niveau van
                  beveiliging en vertrouwelijkheid van je gegevens. Het betreft
                  o.a. de accountant, ICT-bedrijf, websitebeheerder en
                  accreditatieorganisaties. ORATO blijft verantwoordelijk voor
                  deze verwerkingen.
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                    Geheimhouding
                  </h2>
                  <p className="mt-5 text-base leading-7 text-orato-dark/78">
                    ORATO deelt geen informatie over je zonder toestemming of
                    medeweten van jou, bij voorkeur verwijzend naar jou als
                    eventuele informatieverstrekker. Als logopedist in functie
                    geldt bovendien geheimhoudingsplicht.
                  </p>
                </div>
                <div>
                  <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                    Ethische code en klachtenprocedure
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-7 text-orato-dark/78">
                    <p>
                      ICF Code and Pledge of Ethics:
                      {" "}
                      <Link
                        href="https://coachingfederation.org/ethics/code-of-ethics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
                      >
                        bekijken
                      </Link>
                    </p>
                    <p>
                      Internationale Ethische Code (NOBCO / EMCC):
                      {" "}
                      <Link
                        href="https://www.nobco.nl/over-nobco/kwaliteit/internationale-ethische-code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
                      >
                        bekijken
                      </Link>
                    </p>
                    <p>
                      Bij beide beroepsverenigingen kun je terecht voor een
                      klachtenprocedure.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                    Cookies, of vergelijkbare technieken
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-7 text-orato-dark/78">
                    <p>
                      ORATO gebruikt alleen technische en functionele cookies,
                      en analytische cookies die geen inbreuk maken op je
                      privacy.
                    </p>
                    <p>
                      Een cookie is een klein tekstbestand dat bij het eerste
                      bezoek aan de website van ORATO wordt opgeslagen op je
                      computer, tablet of smartphone. De cookies die gebruikt
                      worden zijn noodzakelijk voor de technische werking van de
                      website en jouw gebruiksgemak.
                    </p>
                    <p>
                      Je kunt je afmelden voor cookies door je internetbrowser
                      zo in te stellen dat deze geen cookies meer opslaat. Ook
                      kun je alle informatie die eerder is opgeslagen via de
                      instellingen van je browser verwijderen.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                    Geautomatiseerde besluitvorming
                  </h2>
                  <p className="mt-5 text-base leading-7 text-orato-dark/78">
                    ORATO neemt geen besluiten over zaken die aanzienlijke
                    gevolgen kunnen hebben voor personen, op basis van
                    geautomatiseerde verwerkingen door computerprogramma&apos;s
                    of -systemen, zonder dat daar een mens tussen zit.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                Gegevens inzien, aanpassen of verwijderen
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-orato-dark/78">
                <p>
                  Je hebt het recht om je persoonsgegevens in te zien, te
                  corrigeren of te verwijderen. Daarnaast heb je het recht om
                  jouw eventuele toestemming voor de gegevensverwerking in te
                  trekken of bezwaar te maken tegen de verwerking van je
                  persoonsgegevens door ORATO en heb je het recht op
                  gegevensoverdraagbaarheid.
                </p>
                <p>
                  Dat betekent dat je bij ORATO een verzoek kunt indienen om de
                  persoonsgegevens waarover beschikt wordt, in een
                  computerbestand te sturen naar jou of een andere, door jou
                  genoemde organisatie.
                </p>
                <p>
                  Je kunt een verzoek tot inzage, correctie, verwijdering,
                  gegevensoverdraging van je persoonsgegevens of verzoek tot
                  intrekking van je toestemming of bezwaar op de verwerking van
                  je persoonsgegevens sturen naar
                  {" "}
                  <Link
                    href="mailto:ardie@orato.info"
                    className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
                  >
                    ardie@orato.info
                  </Link>
                  .
                </p>
                <p>
                  Om er zeker van te zijn dat het verzoek tot inzage door jou
                  is gedaan, vraagt ORATO je een kopie van je identiteitsbewijs
                  mee te sturen. Maak in deze kopie je pasfoto, MRZ, 
                  paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter
                  bescherming van je privacy.
                </p>
                <p>
                  ORATO reageert zo snel mogelijk, uiterlijk binnen vier weken,
                  op je verzoek. Je hebt daarnaast de mogelijkheid om een klacht
                  in te dienen bij de Autoriteit Persoonsgegevens via
                  {" "}
                  <Link
                    href="https://www.autoriteitpersoonsgegevens.nl/een-tip-of-klacht-indienen-bij-de-ap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
                  >
                    deze pagina
                  </Link>
                  .
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                Beveiligingsmaatregelen
              </h2>
              <p className="mt-5 text-base leading-7 text-orato-dark/78">
                ORATO neemt de bescherming van je gegevens serieus en treft
                passende technische en organisatorische maatregelen om misbruik,
                verlies, onbevoegde toegang, ongewenste openbaarmaking en
                ongeoorloofde wijziging tegen te gaan.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {securityMeasures.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-orato-dark/10 bg-orato-light/70 px-4 py-4 text-sm leading-6 text-orato-dark/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-orato-dark/78">
                Als je het idee hebt dat jouw gegevens toch niet goed beveiligd
                zijn of er aanwijzingen zijn van misbruik, neem dan contact op
                via
                {" "}
                <Link
                  href="mailto:ardie@orato.info"
                  className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
                >
                  ardie@orato.info
                </Link>
                .
              </p>
            </article>

            <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <h2 className={`${notoSerifDisplay.className} text-3xl md:text-4xl`}>
                    Wijzigingen privacybeleid
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-7 text-orato-dark/78">
                    <p>ORATO behoudt zich het recht voor dit privacybeleid aan te passen.</p>
                    <p>Heb je nog vragen? Neem ook dan gerust contact op.</p>
                  </div>
                </div>
                <div className="rounded-[1.8rem] bg-orato-light/75 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                    Contactgegevens
                  </p>
                  <div className="mt-4 space-y-2 text-base leading-7 text-orato-dark/80">
                    {contactDetails.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <FooterComp />
    </>
  );
}
