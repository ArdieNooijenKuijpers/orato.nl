import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Display } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";
import Reveal from "../../components/motion/Reveal";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orato - Presenteren",
  description:
    "Jezelf of een onderwerp presenteren is niet altijd makkelijk. Presenteren kun je leren.",
};

const oneOnOneTopics = [
  "Presentatietechnieken (Do's en dont's)",
  "Omgaan met zenuwen",
  "Persoonlijke uitstraling",
  "Contact maken en houden",
  "Overtuigend overkomen",
  "Mensen meenemen in je verhaal",
  "Serieus genomen worden, jouw invloed vergroten",
  "Een idee concreet voor het voetlicht brengen",
  "Beter verstaanbaar en minder monotoon spreken",
  "Gesprekstechnieken toepassen",
  "Communicatiestijlen",
];

const speakingCircleSections = [
  {
    title: "Herken je dit?",
    body: [
      "Goed voorbereid zijn en toch te veel last van zenuwen, allerlei gedachten in je hoofd, ervaren zijn maar niet authentiek sprekend, op afstand en niet echt kijkend. Niet echt kunnen luisteren of met je volle aandacht in gesprek zijn.",
      "Je denkt: Kon ik maar gewoon mezelf zijn voor die groep, overtuigend overkomen en in een gesprek aansluiting vinden! Dan is Speaking Circle iets voor jou! of gewoon om jezelf te laten zien en horen zoals dat voor jou past en werkt!",
    ],
  },
  {
    title: "Wat is een Speaking Circle?",
    body: [
      "Een Speaking Circle is een groep mensen aan wie een specifieke manier van spreken voor een groep wordt aangeboden: authentiek en zonder angst, vrijuit sprekend.",
      "Uitgangspunt is het maken van (oog)contact met respect voor jezelf en die ander. Relational Presence is de essentie. Jezelf laten zien en horen, de ander(en) zien en horen en je comfortabel voelen met alles wat je denkt, voelt, fysiek ervaart en doet.",
    ],
  },
  {
    title: "Waar komt 't vandaan?",
    body: [
      "De Amerikaan Lee Glickstein ontwikkelde een manier waarop hij vol zelfvertrouwen, zichzelf zijnde, met plezier en overtuigingskracht kon presenteren: Speaking Circle. Inmiddels hebben duizenden mensen in circles gestaan, over de hele wereld.",
      "In Europa zijn ca. 30, gecertificeerde facilitators lid van het Relational Presence Network, onderdeel van Speaking Circle Global. Je kunt deelnemen via open-inschrijving (zogenaamde open-circles) of on-the-job in tal van organisaties en bedrijven.",
    ],
  },
  {
    title: "Voor wie?",
    body: [
      "Voor iedereen die zich op zijn/haar gemak wil voelen in contact met een ander. Als je in gesprek bent met wie dan ook maar juist ook als je je wilt presenteren voor een groep, of in een groep.",
      "In het kader van effectieve meetings en high performing teams is wetenschappelijk bewezen dat psychologische veiligheid het allerbelangrijkst is. Relational Presence is voorwaardelijk om goed contact te maken, in welke rol dan ook.",
      "De Speaking Circle methode is geschikt voor beginnende en ervaren sprekers, voor jong en oud, voor toepassing op je werk of prive.",
    ],
  },
  {
    title: "Wat maakt Speaking Circle uniek?",
    body: [
      "Het is geen vaardigheidstraining waar je allerlei tips en technieken leert. Het nut hiervan heeft zich al bewezen in allerlei andere presentatietrainingen. De basis van impactvol spreken is en blijft authenticiteit.",
      "Speaking Circle is met name geschikt als je je zelfvertrouwen voor een groep wilt vergroten en je eigen stijl tot zijn recht wilt laten komen. Er wordt uitgegaan van het unieke van ieder mens.",
      "Je krijgt de gelegenheid om alleen maar te zijn op het moment zelf, in een positieve omgeving. Dit betekent dat je zegt wat gezegd moet worden, doet wat gedaan moet worden en stil bent waar je aanwezigheid voldoende is. Echtheid boeit en dat is wat je boodschap doet overkomen.",
      "Je leert dus echt te zijn. Wanneer je helemaal jezelf bent, maak je indruk op anderen, motiveer en inspireer je zelfs.",
      "Ook uniek is de sfeer waarin je leert. Er wordt op een specifieke wijze, positieve feedback gegeven op jouw manier van zijn. Applaus ontvangen krijgt een andere dimensie.",
      "Het effect is groot. Omdat je ervaart hoe 't is jezelf volledig te kunnen laten zien en horen zul je deze rijkdom merken in alle mogelijke en onmogelijke situaties waarin je jezelf wilt presenteren c.q. profileren. Natuurlijk geldt ook hier oefening baart kunst oftewel herhaling doet wonderen.",
    ],
  },
  {
    title: "Wat gebeurt er tijdens een Speaking Circle?",
    body: [
      "De facilitator opent om de toon te zetten. Er wordt uitleg gegeven over de manier van werken, de richtlijnen voor absolute veiligheid worden gegeven en vragen worden beantwoord.",
      "Wanneer je voor de groep staat begin je vanuit stilte. Zo kun je de aanwezigheid van de groep en jouw gevoelens en gedachten ervaren. Hierna heb je een bepaalde tijd de kans om elk gewenst thema te bespreken.",
      "Je hoeft niet te spreken, je mag! Stil zijn en kijken, bewegen, emoties tonen of zelfs zingen, alles kan zolang je anderen en jezelf niet schaadt. Altijd met aandacht om het luisteren te kunnen ontvangen, in contact met je luisteraars.",
      "Jouw spreekbeurten krijg je eventueel op video. Tijdens een volgende Speaking Circle kun je je vaardigheden aanvullen met nieuwe ervaringen.",
    ],
  },
];

const workshopExamples = [
  "Effectief Presenteren (MEE Nederland)",
  "Aansprekend (s)preken (Kerkelijke voorgangers)",
  "Verbindend presenteren (Gemeentes)",
  "Sterk overkomen (Bestuursacademie)",
  "Express for Success (inclusief catwalktraining)",
  "Collegiaal communiceren",
  "Authenticiteit in Interactie (Regina Coeli)",
  "Mentale coaching (Revolution PT)",
  "De eerste indruk (Rabobank)",
  "Contact (Zorgprofesssionals)",
  "Pitchen met Impact (Ondernemers)",
];

const questionExamples = [
  "Hoe kan ik met meer overtuiging overkomen?",
  "Ik wil een winnende pitch geven!",
  "Ik wil een andere eerste indruk maken, bijv. als ik solliciteer?",
  "In deze functie wil ik een andere, passende persoonlijke uitstraling.",
  "Ik wil minder (fysieke) last hebben als ik een presentatie ga/moet doen.",
  "Hoe kan ik mezelf en mijn verhaal, product of dienst beter verkopen?",
  "Binnenkort geef ik een presentatie...kun je me helpen met tips en tools?",
  "Ik wil praten en er uit zien als een professionele...",
  "Ook achter in de zaal wil ik verstaanbaar zijn.",
  "Hoe ga ik om met weerstand van het publiek?",
  "Praten lukt me wel, maar echt luisteren...",
  "Boeiend presenteren, hoe doe je dat?",
  "Waar laat ik mijn handen?",
  "Oogcontact is ongemakkelijk...",
  "Ik wil mezelf kunnen zijn als ik mijn verhaal presenteer.",
  "Wat kan ik doen om mezelf onderscheidend van anderen te presenteren?",
  "Ik vermijd het geven van presentaties voor groepen, dat wil ik niet langer.",
  "Ik heb te veel last van zenuwen.",
  "Ze zeggen dat ik onzeker overkom...",
  "Hoe presenteer ik cijfers en saaie stof aantrekkelijk?",
  "Microfoongebruik.",
  "Wat is een goede opbouw van mijn presentatie?",
  "Hoe kan ik aanspreken als ik voorlees?",
  "Als ik moet improviseren gaat het fout.",
  "Ik voel me zo naakt voor een groep.",
  "Hoe zorg ik ervoor dat men mijn verhaal onthoudt?",
];

const references = [
  {
    quote:
      "De presentatiedag bij ZIN was echt een eye opener. Ik voel me een stuk comfortabeler bij het presenteren van onze financiele cijfers en voel me vrijer tijdens meetings. Aanbevolen bij collega's. Gecombineerd met coaching. Ardie is hartelijk, beschikt over een brok ervaring, geeft zelf het goede voorbeeld, Growth mindset, praktijkgericht, flexibiliteit t.a.v. de onderwerpen die aandacht nodig hebben.",
    name: "Folkert Botma",
    role: "Controller",
  },
  {
    quote: "Dit gun ik elke collega!",
    name: "Sander Hoen",
    role: "Technisch projectleider",
  },
  {
    quote:
      "Dank voor de leerzame workshop. Wat doe je het goed met je mentale fysio. Ik liet me verrassen en ik ben ook verrast over hoe jij mij in een uur coaching, verder hebt geholpen. Van heel treuzelend in mijn woordkeus en een beetje in elkaar gedoken naar een zelfverzekerde dit ben ik. Dit smaakt naar meer!",
    name: "Touria Agrandi",
    role: "Intercultureel coach - taaltrainer Arabisch en Spaans - Beedigd tolk en vertaler",
  },
  {
    quote:
      "Ik heb gemerkt dat Y vaker presentaties geeft (en dit ook goed doet). En dat ze minder maskeert met humor maar gewoon aangeeft wat er speelt. Ook het impulsief reageren is sterk veranderd, ze kan nu beter laten bezinken en reactie uitstellen. En ze pakt meer haar verantwoordelijkheid terwijl ze het eerder comfortabeler vond om anderen zich namens haar uit te laten spreken.",
    name: "Tamar Euser",
    role: "Manager Content & Operations bij ACSI Publishing BV",
  },
];

export default function PresenterenPage() {
  return (
    <>
      <main className="bg-orato-light text-orato-dark">
        <section className="overflow-hidden bg-orato-light px-4 py-12 md:px-8 md:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal className="text-center md:text-left" direction="left">
              <div className="inline-flex rounded-full border border-orato-dark/15 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orato-dark/70">
                Presenteren
              </div>
              <h1
                className={`${notoSerifDisplay.className} mt-6 max-w-4xl text-5xl leading-none md:text-7xl lg:text-[6.1rem]`}
              >
                Presenteren
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-orato-dark/80 md:text-xl">
                Jezelf of een onderwerp presenteren is niet altijd makkelijk.
                Niet voor niets is spreken in het openbaar de grootste sociale
                angst.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-orato-dark/72 md:text-lg">
                Wil je werken aan jouw manier van contact maken en presenteren,
                of dat nu gaat over een gesprek van mens tot mens of over in of
                voor een groep? Dat kan. Ga voor 1-op-1 presentatiecoaching
                en/of doe mee aan een Speaking Circle waar oefening in
                Relational Presence samen met anderen centraal staat en het
                verschil kan maken.
              </p>
              <div className="mt-8 rounded-[2rem] border border-orato-dark/10 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                  Uit welk vaatje tab ik?
                </p>
                <p className="mt-3 text-base leading-7 text-orato-dark/78">
                  Sinds 1989 geef ik presentatietrainingen namens ORATO
                  (voorheen TSP Training in Spreken en Presenteren) en werk ik
                  als communicatie-expert (Logopedist, Spraak-en
                  taalpatholoog). Als ImageMaster kan ik je ook helpen met jouw
                  uiterlijke persoonlijke uitstraling oftewel de eerste en
                  latere indruk die je maakt.
                </p>
                <p className="mt-4 text-base leading-7 text-orato-dark/78">
                  Sinds 2003 ben ik Speaking Circle-facilitator met aandacht
                  voor Relational Presence. Natuurlijk zet ik ook mijn
                  meesterlijke coachdeskundigheid in als het gaat om
                  veranderwerk in zijn algemeenheid.
                </p>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-orato-green via-orato-green/60 to-transparent" />
                <Link
                  href="/Info/Ardie"
                  className="mt-5 inline-flex cursor-small text-sm font-semibold uppercase tracking-[0.16em] text-orato-green underline decoration-orato-dark/15 underline-offset-4 transition hover:decoration-orato-green"
                >
                  Meer over Ardie
                </Link>
              </div>
              <p className="mt-8 text-lg font-semibold text-orato-green md:text-xl">
                Presenteren kun je leren!
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <Link
                  href="#coaching"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-dark px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-green"
                >
                  1-op-1 presentatiecoaching
                </Link>
                <Link
                  href="#speaking-circle"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-white/70 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-green hover:text-orato-green"
                >
                  Authentiek presenteren
                </Link>
                <Link
                  href="#workshops"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-white/70 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-green hover:text-orato-green"
                >
                  Workshops
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative" direction="right" delay={0.08}>
              <div className="absolute -left-4 top-12 hidden h-28 w-28 rounded-full bg-orato-green/20 blur-3xl lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-36 w-36 rounded-full bg-orato-green/20 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-orato-dark/10 bg-white shadow-[0_40px_120px_-45px_rgba(20,20,20,0.45)]">
                <Image
                  src="/presenteren/orato_03889_21 originele kader.jpg"
                  alt="Ardie tijdens presentatiecoaching met deelnemer."
                  width={1800}
                  height={1400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-5 space-y-4">
                <div className="overflow-hidden rounded-[2rem] border border-orato-dark/10 bg-white shadow-sm">
                  <Image
                    src="/presenteren/ERF03719_WEB.jpg"
                    alt="Trainingsmoment tijdens presenteren."
                    width={1800}
                    height={1100}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="coaching"
          className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              1-op-1 presentatiecoaching
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="space-y-5">
                <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-7 shadow-sm">
                  <p className="text-base leading-7 text-orato-dark/78">
                    Op maat aan de slag met jouw verbale en non-verbale
                    vaardigheden in relatie tot anderen. Wat werkt wel en (nog)
                    niet van wat jij laat zien en horen? Wat zijn de do&apos;s
                    en dont&apos;s?
                  </p>
                  <p className="mt-4 text-base leading-7 text-orato-dark/78">
                    Ik houd daarbij rekening met wie je bent, hoe je gekend
                    wilt worden, wat past bij jouw functie, rol en
                    verantwoordelijkheden.
                  </p>
                </article>

                <article className="rounded-[2rem] border border-orato-green/15 bg-orato-green/10 p-7 shadow-sm">
                  <h3 className="text-2xl font-semibold text-orato-dark">
                    Werkwijze
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-7 text-orato-dark/78">
                    <p>
                      We plannen sessies in van minstens 1 uur om praktisch aan
                      de slag te gaan met behulp van presentatietechnieken,
                      video-feedback, vragenlijsten over persoonlijke
                      uitstraling, communicatiekunde, gesprekstechnieken,
                      spreektechnieken, afstemmogelijkheden etc. etc. en niet
                      te vergeten, mijn stokpaardje: de 4 universele sociale
                      geschenken.
                    </p>
                    <p>
                      Dat doen we met het resultaat voor ogen, eventuele pijn op
                      tafel, met aandacht voor wat ertoe doet, waarderend in een
                      veilige leeromgeving, met enthousiasme en warmte,
                      stapsgewijs oefenend met opbouwende feedback. Laat je
                      verrassen, ook door de impact die jij kunt hebben.
                    </p>
                    <p>
                      Volgens de Ethische gedragscodes van ICF en NOBCO/EMCC.
                      Uiteraard AVG-proof volgens{" "}
                      <Link
                        href="/Info/PrivacyVerklaring"
                        className="cursor-small font-semibold underline decoration-orato-dark/20 underline-offset-4 transition hover:decoration-orato-green"
                      >
                        Privacyverklaring
                      </Link>{" "}
                      en{" "}
                      <Link
                        href="/Info/AlgemeneVoorwaarden"
                        className="cursor-small font-semibold underline decoration-orato-dark/20 underline-offset-4 transition hover:decoration-orato-green"
                      >
                        Algemene voorwaarden
                      </Link>
                      . Je ontvangt een bewijs van deelname.
                    </p>
                  </div>
                </article>

                <article className="rounded-[2rem] border border-orato-dark/10 bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-semibold text-orato-dark">
                    Onderwerpen
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {oneOnOneTopics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-orato-dark/10 bg-orato-light px-4 py-2 text-sm font-medium text-orato-dark"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-[2.35rem] border border-orato-dark/10 bg-white shadow-[0_30px_90px_-44px_rgba(20,20,20,0.28)]">
                  <Image
                    src="/presenteren/orato_03889_21 Gillian Ardie voor spiegel staand  ONDERKANT gekort.jpg"
                    alt="Presentatiecoaching voor de spiegel."
                    width={1800}
                    height={1500}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-orato-dark/10 bg-white shadow-sm">
                  <Image
                    src="/presenteren/•Gillian handen Ardie cortenstaalERF04006_WEB.jpg"
                    alt="Detailbeeld van expressie en presenteren."
                    width={1600}
                    height={1100}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 pb-16 md:px-8 md:pb-24 lg:px-10">
          <Reveal className="mx-auto max-w-3xl">
            <Link
              href="/Contact"
              className="group cursor-small relative block overflow-hidden rounded-[2rem] border border-orato-green/15 bg-gradient-to-br from-white via-white to-orato-green/10 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-orato-green/30 hover:shadow-[0_30px_70px_-36px_rgba(20,20,20,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orato-green/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(84,166,94,0.16),transparent_38%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Investering
              </p>
              <h3
                className={`${notoSerifDisplay.className} relative mt-3 text-4xl text-orato-dark`}
              >
                Tijd en aandacht
              </h3>
              <div className="relative mt-5 rounded-[1.5rem] border border-orato-green/15 bg-white/80 px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.01]">
                <p className="text-xs uppercase tracking-[0.2em] text-orato-dark/60">
                  Uurtarief vanaf
                </p>
                <p className="mt-2 text-2xl font-semibold text-orato-dark">
                  €185
                </p>
              </div>
              <p className="relative mt-5 text-base leading-7 text-orato-dark/75">
                Vaak wordt individueel op-maat-leren gecombineerd met leren in
                een groep, juist omdat het over contact en communiceren gaat in
                relatie tot anderen. De sandwich-methode werkt dan goed.
              </p>
              <p className="relative mt-5 text-base font-semibold text-orato-green md:text-lg">
                Jij in de volle aandacht en dat voelt nog goed ook.
              </p>
            </Link>
          </Reveal>
        </section>

        <section
          id="speaking-circle"
          className="overflow-hidden bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Authentiek Presenteren met Speaking Circle
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/Contact"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-green px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-orato-dark"
              >
                Download hier de informatieflyer
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[2.35rem] border border-white/12 bg-white/6 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/presenteren/Ardie legt uit aan groep zittend RPN.jpg"
                    alt="Ardie begeleidt een Speaking Circle groep."
                    width={1800}
                    height={1300}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2.35rem] border border-white/12 bg-white/6 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/presenteren/sander zittend RP Antwerpen.jpg"
                    alt="Deelnemer in Speaking Circle setting."
                    width={1400}
                    height={2100}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2.35rem] border border-white/12 bg-white/6 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/presenteren/Lee-Glickstein_transparent-1. leeftijd 2025.png.webp"
                    alt="Lee Glickstein, founder van Speaking Circle."
                    width={1200}
                    height={1800}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[2.35rem] border border-white/12 bg-white/6 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/presenteren/Ardie met Stef originele foto.jpeg"
                    alt="Ardie in gesprek tijdens coaching of training."
                    width={1024}
                    height={1024}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-5">
                {speakingCircleSections.map((section, index) => (
                  <Reveal key={section.title} delay={index * 0.05}>
                    <article
                      className={`rounded-[2rem] border p-7 shadow-sm ${
                        index === 0
                          ? "border-orato-green/20 bg-orato-green/10"
                          : "border-white/12 bg-white/6"
                      }`}
                    >
                      <h3 className="text-2xl font-semibold text-white">
                        {section.title}
                      </h3>
                      <div className="mt-4 space-y-4 text-base leading-7 text-white/80">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <article className="rounded-[2rem] border border-white/12 bg-white/6 p-7">
                  <h3 className="text-2xl font-semibold text-white">
                    Hoe bereid ik me voor?
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/80">
                    <p>
                      Niet door een presentatie of onderwerp voor te bereiden.
                      Kom zoals je bent. Kenmerkend is juist dat je vertrouwt op
                      het moment zelf en op je eigen capaciteiten.
                    </p>
                    <p>
                      Wel door de richtlijnen te lezen die je vooraf krijgt en
                      eventueel door het boek Be seen now van Lee Glickstein of
                      Present! van Burghard en Wolcken te lezen.
                    </p>
                    <p>
                      Geen voorbereiding dus maar wel een portie moed en
                      eerlijkheid. Het belangrijkst is misschien nog wel dat je
                      nieuwsgierig bent naar deze mogelijkheid om jouw manier van
                      presenteren te verbeteren.
                    </p>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="rounded-[2rem] border border-orato-green bg-orato-green p-7 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.55)]">
                  <h3 className="text-2xl font-semibold text-white">
                    Locatie ZIN
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-7 text-white/80">
                    <p>
                      Omdat mijn Speaking Circle werk wordt georganiseerd in een
                      zeer inspirerende omgeving, volgt hieronder extra informatie
                      over deze bijzondere locatie te Vught waar jij als
                      deelnemer kunt overnachten.
                    </p>
                    <p>
                      ZIN is een adviserende gesprekspartner voor organisaties die
                      met ziel en zakelijkheid willen werken. Het klooster waarin
                      ZIN is gehuisvest, is stijlvol verbouwd en biedt ruimte aan
                      2 tot 150 gasten.
                    </p>
                    <p>
                      Deze dag wordt in 2026 georganiseerd bij ZIN op dinsdag 24
                      maart, vrijdag 26 juni en maandag 9 november.
                    </p>
                    <p className="font-semibold text-white">
                      Kosten: € 250,- excl. btw./ incl. lunch en video-opnames.
                    </p>
                    <p className="pt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                      Klik op deze links voor meer informatie
                    </p>
                    <div className="grid gap-3 pt-1 sm:grid-cols-3">
                      <Link
                        href="https://kloosterhotelzin.nl/agenda/"
                        className="inline-flex min-h-14 cursor-small items-center justify-center rounded-[1.25rem] border border-white/40 bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-orato-dark shadow-sm transition hover:-translate-y-0.5 hover:bg-orato-dark hover:text-white"
                      >
                        ZIN agenda
                      </Link>
                      <Link
                        href="https://relationalpresence.eu/"
                        className="inline-flex min-h-14 cursor-small items-center justify-center rounded-[1.25rem] border border-white/40 bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-orato-dark shadow-sm transition hover:-translate-y-0.5 hover:bg-orato-dark hover:text-white"
                      >
                        Relational Presence
                      </Link>
                      <Link
                        href="https://www.speakingcircles.com"
                        className="inline-flex min-h-14 cursor-small items-center justify-center rounded-[1.25rem] border border-white/40 bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-orato-dark shadow-sm transition hover:-translate-y-0.5 hover:bg-orato-dark hover:text-white"
                      >
                        Speaking Circle
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>

            <div className="mt-8 grid gap-5">
              <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 shadow-sm">
                <Image
                  src="/presenteren/Zin naturel.jpg"
                  alt="Locatie ZIN in natuurlijke setting."
                  width={1800}
                  height={1300}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 shadow-sm">
                <Image
                  src="/presenteren/kring stoelen ZIN.jpeg"
                  alt="Kringopstelling bij ZIN."
                  width={1800}
                  height={1300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-white/12 bg-white/6 p-7">
              <p className="mt-3 text-2xl font-semibold text-orato-green">
                Stop performing. Start connecting.
              </p>
              <p className="mt-3 text-base leading-7 text-white/80">
                Liever aanspreken dan toespreken? Leer dan de
                Speaking Circlemethode met aandacht voor eigenheid.
              </p>
            </div>

            <Reveal className="mt-8" delay={0.12}>
              <article className="rounded-[2rem] border border-white/12 bg-white/6 p-7">
                <h3 className="text-2xl font-semibold text-white">
                  Speaking from Inner Space
                </h3>
                <p className="mt-2 text-sm text-white/58">
                  Lee Glickstein, Founder, SCI
                </p>
                <div className="mt-4 space-y-4 text-base leading-7 text-white/80">
                  <p>
                    In facilitating 6,000+ Speaking Circles over the past 35
                    years I&apos;ve successfully treated all varieties of
                    performance anxiety from abject stage fright to mild unease.
                  </p>
                  <p>
                    The commonality of all is that standing in front of a group
                    triggers inner contraction. Those with the most severe
                    constriction have no resources at all to cope with attention,
                    even benign attention.
                  </p>
                  <p>
                    Practicing Relational Presence at a Speaking Circle
                    (gazing/being with one person at a time without even having
                    to speak) begins to open up the inner space required to move
                    toward ease.
                  </p>
                  <p>
                    Those who come to this work having had positive public
                    speaking experience quickly expand their capacity for
                    spacious attunement and magnetism from the inside out.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section
          id="workshops"
          className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Workshops
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-[0.98fr_1.02fr]">
              <div className="overflow-hidden rounded-[2.35rem] border border-orato-dark/10 bg-white shadow-[0_30px_90px_-44px_rgba(20,20,20,0.28)]">
                <Image
                  src="/presenteren/Trainer actief.PNG"
                  alt="Ardie actief als trainer tijdens een workshop."
                  width={1600}
                  height={1100}
                  className="block h-[22rem] w-full object-cover md:h-[28rem]"
                />
              </div>
              <article className="rounded-[2rem] border border-orato-green/15 bg-orato-green/10 p-7 shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {workshopExamples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-orato-dark/10 bg-white px-4 py-2 text-sm font-medium text-orato-dark"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Voorbeelden van vragen
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {questionExamples.map((example, index) => (
                <Reveal key={example} delay={index * 0.025}>
                  <article
                    className="group rounded-[1.4rem] border border-orato-dark/10 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orato-green/25 hover:shadow-[0_20px_45px_-28px_rgba(20,20,20,0.28)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-orato-green/10 text-xs font-semibold text-orato-green transition-colors duration-300 group-hover:bg-orato-green group-hover:text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-orato-dark/82">
                        {example}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Referenties
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {references.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.06}>
                  <article
                    className="rounded-[2rem] border border-white/12 bg-white/6 p-7"
                  >
                    <p className="text-base leading-8 text-white/84">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="mt-6 text-base font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-white/58">{item.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <Reveal className="mx-auto max-w-5xl rounded-[2.5rem] border border-orato-dark/10 bg-white px-6 py-10 text-center shadow-[0_40px_120px_-48px_rgba(20,20,20,0.35)] md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Contact
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-orato-dark/75">
              Ik ben benieuwd wat ik voor je mag betekenen? Klik hier om naar
              het contactformulier te gaan of bel me.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-orato-dark/75">
              Voor 1-op-1 presentatiecoaching, Speaking Circle en workshops.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/Contact"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-dark px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-green"
              >
                Naar contact
              </Link>
              <Link
                href="tel:+31651088688"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-orato-light px-6 text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-green hover:text-orato-green"
              >
                Bel +31 6 51088688
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <FooterComp />
    </>
  );
}
