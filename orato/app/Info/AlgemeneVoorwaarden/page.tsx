import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Serif_Display } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orato - Algemene Voorwaarden",
  description:
    "Algemene voorwaarden van ORATO voor coaching, supervisie, cursussen, workshops en trainingen.",
};

const sections = [
  {
    number: "1",
    title: "Op wie en wat slaan deze voorwaarden?",
    articles: [
      {
        number: "1.1",
        content: (
          <>
            <p>
              Deze voorwaarden zijn van toepassing op alle overeenkomsten
              tussen ORATO en opdrachtgevers voor deelname aan coaching,
              supervisie en/of aan een cursus, workshop of training, al dan
              niet met open-inschrijving. Hierna te noemen
              {" "}
              <span className="font-medium">‘Coaching/Supervisie’</span>
              {" "}
              en
              {" "}
              <span className="font-medium">‘Training’</span>.
            </p>
            <p>
              <span className="font-semibold">Opdrachtnemer:</span>
              {" "}
              ORATO, gevestigd te Nuenen, Rutger van den Broeckelaan 3, staat
              ingeschreven in de Kamer van koophandel Eindhoven onder nummer
              160 65 919 en is rechtsgeldig vertegenwoordigd door Drs.
              A.J.W.G. (Ardie) Nooijen-Kuijpers, geboren 27 april 1967.
            </p>
            <p>
              <span className="font-semibold">Opdrachtgever:</span>
              {" "}
              diegene die, al dan niet namens een organisatie, opdracht geeft
              tot deelname van een of meerdere personen of degene die zelf
              deelneemt aan Coaching/Supervisie en/of Training.
            </p>
            <p>
              <span className="font-semibold">Werkovereenkomst:</span>
              {" "}
              een document waarin werkafspraken beschreven en geaccordeerd zijn
              in verband met de uitvoering en waardering van Coaching/
              Supervisie en Training. Een werkovereenkomst is geldig als de
              opdrachtgever een coach-/supervisieplan van ORATO ondertekent,
              als de opdrachtbevestiging voor Training in het bezit is van
              ORATO, als ORATO een bevestiging van ontvangst heeft verstuurd als
              reactie op een inschrijving volgens open inschrijving voor een
              Training. Alle inschrijvingen voor Training met open inschrijving
              worden behandeld op volgorde van binnenkomst qua datum.
            </p>
          </>
        ),
      },
      {
        number: "1.2",
        content: (
          <p>
            Afwijkingen van deze voorwaarden zijn alleen bindend als ze
            schriftelijk bevestigd zijn door ORATO.
          </p>
        ),
      },
    ],
  },
  {
    number: "2",
    title: "Auteursrecht/privacy",
    articles: [
      {
        number: "2.1",
        content: (
          <p>
            Het auteursrecht op de door ORATO uitgegeven productinformatie en
            materialen, en welke andere in de Coaching/Supervisie en Training
            gebruikte materialen en inhoud (schriftelijk en digitaal) dan ook,
            berust bij ORATO, tenzij een andere auteursrechthebbende op het
            werk zelf is aangegeven of als bron geldt. De opdrachtgever heeft
            uiteraard het recht schriftelijk en digitaal aangeboden materiaal te
            vermenigvuldigen voor eigen gebruik in zijn of haar eigen
            organisatie, mits voorzien van bronvermelding en verwijzing naar de
            website van ORATO.
          </p>
        ),
      },
      {
        number: "2.2",
        content: (
          <p>
            Ook het auteursrecht op offertes, voorstellen, evaluaties, e.d. die
            voortkomen uit de werkzaamheden van ORATO berust uitsluitend bij
            ORATO.
          </p>
        ),
      },
      {
        number: "2.3",
        content: (
          <p>
            Coachuren worden gebruikt voor onderhoud van professionalisering van
            Ardie in het kader van permanente educatie c.q. accreditatie.
          </p>
        ),
      },
      {
        number: "2.4",
        content: (
          <>
            <p>
              ORATO gaat graag vertrouwelijk om met persoonsgegevens. Ardie
              werkt volgens de eisen van de Algemene Verordening
              Gegevensbescherming (AVG) en informeert hierover via haar
              {" "}
              <Link
                href="/Info/PrivacyVerklaring"
                className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
              >
                Privacyverklaring
              </Link>
              , te vinden op de website van ORATO.
            </p>
            <p>
              Foto&apos;s, tekeningen, aantekeningen, video-opnames, ingevulde
              vragenlijsten en ook contactgegevens en quotes van deelnemers
              worden gebruikt in functie van een leerproces en uitvoering van
              een werkovereenkomst/programma.
            </p>
            <p>
              Zowel schriftelijke als mondelinge informatie met betrekking tot
              een deelnemer aan Coaching/Supervisie en/of Training wordt alleen
              met toestemming van hem of haar aan derden verstrekt ter
              uitvoering van een werkovereenkomst. Ardie neemt haar
              beroepsgeheim in acht m.b.t. eventueel verkregen informatie over
              de opdracht gevende organisatie en haar relaties, tijdens de
              coaching-, supervisiebijeenkomsten, Training en eventueel bezoek
              in-company.
            </p>
            <p>
              Het staat de coachee/supervisant vrij in hoeverre hij of zij
              derden inhoudelijk op de hoogte brengt van het verloop van een
              coach-, supervisietraject. Het staat een deelnemer aan een
              Training vrij derden inhoudelijk op de hoogte te brengen van het
              verloop van een Training, de privacy-afspraken in en met de groep
              respecterend.
            </p>
          </>
        ),
      },
    ],
  },
  {
    number: "3",
    title: "Annulering door opdrachtgever",
    articles: [
      {
        number: "3.1",
        content: (
          <p>
            De opdrachtgever heeft het recht deelname aan of de opdracht voor
            Coaching/Supervisie en Training te annuleren per verzonden brief of
            per door ORATO bevestigde e-mail. Als annuleringsdatum geldt de
            datum van het poststempel van een door ORATO ontvangen brief of de
            ontvangstdatum van de e-mail van de opdrachtgever.
          </p>
        ),
      },
      {
        number: "3.2",
        content: (
          <p>
            Bij annulering door de opdrachtgever voor Training tot 1 maand voor
            aanvang ben je ORATO 10% kosten, excl. 21% Btw. verschuldigd; tot 2
            weken voor aanvang is dat 50% van het totaalbedrag van een Training
            en binnen 2 dagen voor aanvang is de opdrachtgever het gehele
            bedrag, ook de eventueel nog openstaande termijnbetalingen,
            verschuldigd.
          </p>
        ),
      },
      {
        number: "3.3",
        content: (
          <p>
            Een Training is een geheel traject; het is niet mogelijk delen
            ervan te volgen. ORATO gaat ervanuit dat een deelnemer alle dagen
            aanwezig is. Mocht door onvoorziene omstandigheden een deelnemer af
            moeten melden dan zullen we samen een andere invulling zoeken voor
            het betreffende programmaonderdeel.
          </p>
        ),
      },
      {
        number: "3.4",
        content: (
          <p>
            Een deelnemer aan een Training kan zich met schriftelijke of
            digitale berichtgeving tot uiterlijk 2 weken van tevoren laten
            vervangen door een ander, bijvoorbeeld collega, mits deze aan een
            gehele Training, inclusief noodzakelijke voorbereiding, kan
            deelnemen en het groepsproces niet verstoord wordt. Hier zijn geen
            kosten aan verbonden. Dit alles gebeurt in overleg tussen ORATO en
            betreffende opdrachtgever.
          </p>
        ),
      },
      {
        number: "3.5",
        content: (
          <p>
            Bij verhindering van een coachee of supervisant binnen 2 werkdagen
            voorafgaand aan de tijd waarop een sessie ingepland staat, is het
            uurtarief van 1 uur, exclusief 21% Btw. verschuldigd. Deze regel
            geldt ongeacht de reden voor de annulering.
          </p>
        ),
      },
      {
        number: "3.6",
        content: (
          <p>
            Bij een onderbreking van een coachtraject door de coachee, langer
            dan afgesproken, wordt de opdrachtgever, anders dan de coachee
            zelf, hiervan op de hoogte gesteld.
          </p>
        ),
      },
    ],
  },
  {
    number: "4",
    title: "Annulering door ORATO",
    articles: [
      {
        number: "4.1",
        content: (
          <p>
            ORATO heeft het recht om, met duidelijke opgave van reden, een
            Training te annuleren of deelname van een deelnemer te weigeren. De
            opdrachtgever van de betreffende Training ontvangt dan het
            eventueel betaalde bedrag retour.
          </p>
        ),
      },
      {
        number: "4.2",
        content: (
          <p>
            Wanneer door onvoorziene omstandigheden voor ORATO een dag(deel)
            van een Training geen doorgang kan vinden, dan zal in overleg met
            de deelnemer(s) gekeken worden naar een nieuwe datum.
          </p>
        ),
      },
      {
        number: "4.3",
        content: (
          <p>
            Bij verhindering van ORATO voor Coaching/Supervisie worden door
            beide partijen geen kosten in rekening gebracht voor de vervallen
            afspraak.
          </p>
        ),
      },
    ],
  },
  {
    number: "5",
    title: "Betaling",
    articles: [
      {
        number: "5.1",
        content: (
          <p>
            ORATO brengt de kosten conform een werkovereenkomst,
            opdrachtbevestiging, open inschrijving in rekening middels een
            factuur.
          </p>
        ),
      },
      {
        number: "5.2",
        content: (
          <>
            <p>
              Na acceptatie van de werkovereenkomst zal het volledige bedrag of
              in het geval van Coaching/Supervisie het afgesproken minimaal
              aantal uren, worden gefactureerd, mits anders vermeld staat in de
              werkovereenkomst.
            </p>
            <p>
              Als het aantal gesprekken dat in de werkovereenkomst staat niet
              wordt gehaald, zal door ORATO een creditfactuur worden gestuurd
              als de factuur verstuurd is voor beëindiging van het afgesproken
              werk. Indien aanvullende sessies of activiteiten, anders dan
              vermeld in de werkovereenkomst, worden verricht zal een
              aanvullende factuur worden gestuurd.
            </p>
          </>
        ),
      },
      {
        number: "5.3",
        content: (
          <>
            <p>
              De reis-, overnachtings- en verblijfskosten, anders dan behorend
              bij en vermeld in de werkovereenkomst voor Coaching/Supervisie en
              Training, zijn niet inbegrepen.
            </p>
            <p>
              Wanneer Coaching/Supervisie vereist dat Ardie naar de
              coachee/supervisant of naar een andere locatie komt (bijvoorbeeld
              bij driegesprekken), worden reiskosten in rekening gebracht van
              € 0,50 per gereisde kilometer, gerekend vanaf locatie van ORATO.
            </p>
            <p>
              In bijzondere gevallen en uitsluitend na toestemming vooraf,
              wordt aanvullend ook de reistijd in rekening gebracht, gerekend
              vanaf locatie ORATO. Dit betreft 50% van het uurtarief voor
              Coaching/Supervisie.
            </p>
          </>
        ),
      },
      {
        number: "5.4",
        content: (
          <p>De opdrachtgever betaalt de factuur binnen 30 dagen na factuurdatum.</p>
        ),
      },
      {
        number: "5.5",
        content: (
          <p>
            De opdrachtgever is bij niet tijdige betaling, verplicht aan ORATO,
            in redelijkheid gemaakte gerechtelijke en buitengerechtelijke
            incassokosten te vergoeden.
          </p>
        ),
      },
    ],
  },
  {
    number: "6",
    title: "Aansprakelijkheid",
    articles: [
      {
        number: "6",
        content: (
          <p>
            ORATO noch Ardie is aansprakelijk voor de manier waarop een
            opdrachtgever omgaat met de uitkomsten van Coaching/Supervisie en
            Training en met eventuele adviezen, en is ook niet aansprakelijk
            voor de eventuele gevolgen daarvan.
          </p>
        ),
      },
    ],
  },
  {
    number: "7",
    title: "Kwaliteit",
    articles: [
      {
        number: "7.1",
        content: (
          <p>
            Deelname aan of opdracht geven tot Coaching/Supervisie en Training
            is alleen verstandig als er voldoende vertrouwen is in ORATO als
            organisatie en in Ardie Nooijen-Kuijpers als professional. Vanuit
            dat vertrouwen kan Ardie functioneren en haar best doen eventueel
            ontstane problemen samen op te lossen.
          </p>
        ),
      },
      {
        number: "7.2",
        content: (
          <p>
            Ardie is o.a. gecertificeerd Master Certified Coach (ICF
            International Coaching Federation), Senior Practitioner (NOBCO
            Nederlandse Orde van Beroepscoaches, onderdeel van EMCC European
            Mentoring and Coaching Council), ESIA Supervisor en Speaking
            CircleFacilitator.
            {" "}
            <Link
              href="/Info/Ardie"
              className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
            >
              Ardie
            </Link>
            {" "}
            en
            {" "}
            <Link
              href="https://www.linkedin.com/in/ardienooijenkuijpers/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orato-blue underline decoration-orato-blue/35 underline-offset-4 transition hover:text-orato-orange hover:decoration-orato-orange"
            >
              LinkedIn
            </Link>
            .
          </p>
        ),
      },
      {
        number: "7.3",
        content: (
          <p>
            ORATO hecht aan tevreden relaties. Als een opdrachtgever ontevreden
            is over het geleverde werk, neemt deze bij voorkeur, in eerste
            instantie contact op met Ardie Nooijen-Kuijpers. Een formele klacht
            kan ingediend worden bij ORATO. Op alle met ORATO gesloten
            overeenkomsten is het Nederlands Recht van toepassing. Ardie coacht
            volgens de ICF Code and Pledge of Ethics en werkt volgens de
            Internationale Ethische Code (IEC) van EMCC met bijbehorende
            klachtenprocedures zoals het klachtenreglement 2025 van de NOBCO.
          </p>
        ),
      },
    ],
  },
];

const contactDetails = [
  "Drs. Ardie Nooijen-Kuijpers",
  "Rutger van den Broeckelaan 3",
  "5671 EB Nuenen",
  "+31 40 284 29 01 of +31 6 5108 8688",
  "ardie@orato.info",
  "www.orato.nl",
  "KvK 160 65 919",
  "Btw. Nummer NL001890491B36",
  "IBAN NL40 RABO 01774.110.74",
];

export default function AlgemeneVoorwaardenPage() {
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
                    Algemene voorwaarden
                  </h1>

                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="/downloads/Orato%20-%20Algemene%20Voorwaarden.pdf"
                    download
                    className="inline-flex min-h-14 items-center justify-center rounded-full bg-orato-dark px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-orange"
                  >
                    Download PDF
                  </a>
                  <Link
                    href="/Contact"
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-orato-dark/15 bg-white px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-blue hover:text-orato-blue"
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
                Geldigheid
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                Van toepassing op coaching, supervisie, cursussen, workshops en
                trainingen van ORATO.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Vastgelegd
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                Deze pagina volgt de inhoud van het aangeleverde Word-document
                en biedt daarnaast een PDF-versie om te bewaren of te delen.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Handig
              </p>
              <p className="mt-4 text-base leading-7 text-white/85">
                De verwijzingen naar de privacyverklaring en de pagina over
                Ardie zijn direct klikbaar gemaakt op deze pagina.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl space-y-6">
            {sections.map((section) => (
              <article
                key={section.number}
                className="rounded-[2rem] border border-orato-dark/10 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
                  <div className="inline-flex w-fit rounded-full bg-orato-green/12 px-4 py-1 text-sm font-semibold text-orato-green">
                    {section.number}
                  </div>
                  <div className="flex-1">
                    <h2
                      className={`${notoSerifDisplay.className} text-3xl leading-tight md:text-4xl`}
                    >
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-6">
                      {section.articles.map((article) => (
                        <div
                          key={article.number}
                          className="rounded-[1.6rem] bg-orato-light/70 px-5 py-5"
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark/60">
                            {article.number}
                          </p>
                          <div className="mt-3 space-y-4 text-base leading-7 text-orato-dark/80">
                            {article.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-orato-light px-4 pb-16 md:px-8 md:pb-24 lg:px-10">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-orato-dark/10 bg-white px-6 py-8 shadow-[0_28px_90px_-44px_rgba(20,20,20,0.28)] md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                  Contactgegevens
                </p>
                <h2
                  className={`${notoSerifDisplay.className} mt-3 text-3xl leading-tight md:text-4xl`}
                >
                  ORATO
                </h2>

              </div>

              <div className="rounded-[2rem] bg-orato-light/75 p-6">
                <div className="space-y-2 text-base leading-7 text-orato-dark/80">
                  {contactDetails.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComp />
    </>
  );
}
