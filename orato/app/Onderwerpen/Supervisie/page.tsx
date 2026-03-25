import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Display, Tangerine } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Orato - Supervisie",
  description:
    "Supervisie, vaak ook mentoring genoemd, is een ontmoeting tussen twee professionals met hetzelfde beroep.",
};

const expertiseBlocks = [
  "Voor de Associatie voor Coaching (AvC) superviseer ik coaches sinds 2018. Er zijn verschillende pakketten beschikbaar om te blijven groeien in je vak, zichtbaarder te worden en je senioriteit te verdiepen. In 2024 rondde ik de 2-jarige ESIA Certified Supervisor opleiding af, gegeven door Tom Battye in samenwerking met EMCC.",
  "Ik geef bij voorkeur individuele supervisie. In een groep mijn expert-rol inzetten doe ik het liefst als ik professionele coaches opleid, of in de vorm van begeleide intervisie.",
  "Ik ben een expert in coachen door mijn 35+ jaar werkervaring en betrokkenheid bij ons prachtige vak. Onderscheidend van andere supervisoren is mijn therapeutische ervaring als paramedicus, gesterkt door 10 jaar ervaring met het werken aan emoties, gedachtes en fysieke ervaringen, oftewel door een grondige introspectie, middels een Freudiaanse psycho-analyse en de nodige levenservaring.",
  "Verder kan ik je helpen bij een (herhaalde) aanvraag van registratie als gecertificeerde coach bij ICF (International Coaching Federation) en NOBCO/EMCC etc.",
];

const trainingBlocks = [
  "Als opleider van professionele coaches en coachende leidinggevenden namens de AvC, ben ik vertrouwd met de coachcompetenties van zowel de ICF als de NOBCO/EMCC.",
  "Waar ik trots op ben is dat de AvC de enige plek in Nederland is waar je sinds 1992 coachopleidingen kunt doen die zowel door de ICF als NOBCO/EMCC geaccrediteerd zijn.",
  "Ik vind het belangrijk het ambacht dat coachen is, te doceren met als basis contact maken, contracteren en de kunst van het vragen stellen. Een kapstok dus, waar een professionele coach alle methodes, werkvormen en theorieen aan op kan hangen.",
  "Het is een voorrecht om te werken in een team van vakmensen, waarbij ieder een bijdrage levert aan professionalisering. Namens de AvC leid ik ook ESIA gecertificeerde supervisoren op en geef ik de meerdaagse Transactionele Analyse toegepast in professionele coaching.",
  "Verder neem ik, zoals jij, natuurlijk ook mijn levenservaring mee in iedere werkrelatie.",
];

const methods = [
  "Pragmatisch en met emotionele diepgang aan de hand van voorbeelden uit jouw beroepspraktijk.",
  "Verdieping en/of verbreding van kennis en kunde.",
  "Middels alle ervaring en coach- en communicatiemethodes/theorieen die ik in huis heb. Een kijkje in de keuken van een ander is altijd leuk.",
  "Met de voordelen van de kruisbestuiving tussen mijn werk als MasterCoach, Coachopleider, trainer, communicatie expert, therapeut en supervisor.",
  "Leren aan de hand van specifieke en diverse reflectiemodellen.",
  "Met de mogelijkheid jezelf te oefenen in Relational Presence ter verdieping van cont(r)act maken. Bijvoorbeeld in een groep.",
  "Eventueel gebruikmakend van video- of audiofeedback of ter plekke coachen.",
];

const planning = [
  "Met oog voor de 8 coachcompetenties (met bijbehorende markers) van de ICF en de 8 coachcompetenties (met de bijbehorende vaardigheidsindicatoren) van NOBCO/EMCC.",
  "ZIJN-modus ipv Doe-modus.",
  "Indien gewenst gericht op een aanvraag voor registratie als een Professional Certified Coach (PCC) of Master Certified Coach (MCC) bij ICF. Of als Senior Practitioner of Master Practitioner bij NOBCO/EMCC.",
  "De sessies plannen we in zoals dat bij de ontwikkelvraag en agenda's past. Bijvoorbeeld om de 6 weken of 1 keer per kwartaal.",
  "Handig is een traject van 10 uren zoals vereist door ICF. NOBCO/EMCC vereist 1 uur per kwartaal bij maximaal 140 coachpraktijkuren of bij meer coachpraktijkuren: 1 uur per 35 coachuren.",
  "Online sessies zijn zeker mogelijk na een persoonlijke ontmoeting.",
  "Uiteraard AVG-proof volgens Privacyverklaring en Algemene voorwaarden.",
  "Met aandacht voor ethische aspecten van ons mooie coachvak.",
  "Gebaseerd op de 8 ESIA supervisiecompetenties.",
  "Je krijgt een bewijs van supervisie/mentoring. Handig voor als je CCEU en/of PE-uren nodig hebt.",
];

const subjects = [
  "Ik wil mijn manier van reflecteren verbeteren en heb behoefte aan verdieping van mijn zelfreflectie.",
  "Hoe voer ik een 3-gesprek met een coachee en zijn of haar leidinggevende?",
  "Wat voor soort coaching past bij mij?",
  "Ik merk dat ik veel adviezen geef en wil graag begeleiding om hiermee te stoppen of een goede balans te vinden tussen coachen en adviseren.",
  "Hoe kan ik mijn werkrelatie met mijn coachees efficient inzetten?",
  "Ben ik geschikt om een coachsupervisor te worden of zijn?",
  "Hoe kan ik optimaal mijn en dijn ontvlechten?",
  "Ik wil de manier waarop ik me presenteer als coach eens onder de loep nemen.",
  "Hoe kan ik mijn coachee helpen nog meer inzichten te krijgen en/of verantwoordelijkheid te nemen?",
  "Tot hoever ga ik in het begeleiden van een coachee, hoeveel ben ik bereikbaar en waar liggen andere grenzen?",
  "Heeft het zin om me te specialiseren?",
  "Ik wil levelen en onderzoeken.",
  "Ik wil voorbeelden van werkvormen, oefeningen, theorieen die ik kan inzetten.",
  "Hoe kan ik mijn oplossingsenthousiasme nog meer temperen?",
  "Ik wil sparren over de kwaliteit van ons vak.",
  "Etc.",
];

export default function SupervisiePage() {
  return (
    <>
      <main className="bg-orato-light text-orato-dark">
        <section className="overflow-hidden bg-orato-light px-4 py-12 md:px-8 md:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="text-center md:text-left">
              <div className="inline-flex rounded-full border border-orato-dark/15 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orato-dark/70">
                Supervisie bij Orato
              </div>
              <h1
                className={`${notoSerifDisplay.className} mt-6 max-w-4xl text-5xl leading-none md:text-7xl lg:text-[6.1rem]`}
              >
                Een ontmoeting tussen twee professionals.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-orato-dark/80 md:text-xl">
                Supervisie, vaak ook mentoring genoemd, is in mijn ogen een
                ontmoeting tussen twee professionals met hetzelfde beroep. Ik
                superviseer coaches, supervisoren en paramedici zoals
                logopedisten.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-orato-dark/72 md:text-lg">
                Evenwaardig, dat wil zeggen als mens niet meer of minder dan de
                ander. Niet gelijkwaardig, omdat we dat per definitie niet zijn
                met een ander lijf, verleden en andere (levens)ervaringen,
                kennis en kunde en verantwoordelijkheden.
              </p>
              <p className="mt-6 text-lg font-semibold text-orato-purple md:text-xl">
                Supervisie gebeurt met de grootste psychologische veiligheid.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <Link
                  href="/Contact"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-dark px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-purple"
                >
                  Kennismakingsgesprek
                </Link>
                <Link
                  href="/Info/Ardie"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-white/70 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-purple hover:text-orato-purple"
                >
                  Meer over Ardie
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-12 hidden h-28 w-28 rounded-full bg-orato-purple/20 blur-3xl lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-36 w-36 rounded-full bg-orato-purple/20 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-orato-dark/10 bg-white shadow-[0_40px_120px_-45px_rgba(20,20,20,0.45)]">
                <Image
                  src="/supervisie/ardie voor smartboard kracht van supervisie.PNG"
                  alt="Ardie tijdens supervisie bij een smartboard."
                  width={1800}
                  height={1300}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-5 rounded-[2rem] border border-orato-dark/10 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                  Focus
                </p>
                <p className="mt-3 text-base leading-7 text-orato-dark/78">
                  Je mag van mij verwachten dat ik jouw professionalisering en
                  daarmee de kwaliteit van coachen, centraal zet. Vanuit mijn
                  expertise als Master Coach voorzie ik jou van feedback.
                </p>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-orato-purple via-orato-purple/60 to-transparent" />
                <p className="mt-5 text-sm leading-6 text-orato-dark/70">
                  Ook jouw welzijn, het restoratieve aspect, valt onder
                  supervisie, naast het normatieve en formatieve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Supervisie
              </p>
              <h2
                className={`${notoSerifDisplay.className} mt-3 max-w-2xl text-4xl text-center md:text-left md:text-6xl`}
              >
                Reflecteren met scherpte en nieuwe perspectieven.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
                Doel is jouw coachkwaliteiten maximaal in te zetten en blinde
                vlekken bewust te krijgen. Reflecteren, op allerlei manieren,
                gaat je nieuwe perspectieven bieden om een nog efficientere en
                tevreden coach, supervisor of therapeut te zijn.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
                Of misschien wil je vooral op de millimeter werken aan de hand
                van een casus of ontwikkelvraag, of wil je geinspireerd worden?
                Supervisie verschilt van coaching door focus op sparren middels
                een professionele dialoog, nog fijngevoeliger duiden, het
                proces van jouw ontwikkeling, talrijke perspectieven, verbreden
                en/of verdiepen van kennis en kunde.
              </p>
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/12">
                <Image
                  src="/supervisie/Supervision is facilitating perspectives.jpeg"
                  alt="Supervisie betekent perspectieven faciliteren."
                  width={1800}
                  height={1300}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-5">
              <article className="rounded-[2rem] border border-orato-purple/20 bg-orato-purple/10 p-7 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-semibold text-white">
                  Professionalisering
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Je mag van mij verwachten dat ik jouw professionalisering en
                  daarmee de kwaliteit van coachen, centraal zet.
                </p>
              </article>
              <article className="rounded-[2rem] border border-orato-purple/20 bg-orato-purple/10 p-7 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-semibold text-white">
                  Secure base
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Supervisie gebeurt met de grootste psychologische veiligheid.
                  Als een katalysator gericht op secure base.
                </p>
              </article>
              <article className="rounded-[2rem] border border-orato-purple/20 bg-orato-purple/10 p-7 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-semibold text-white">
                  Professionele dialoog
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Supervisie is meer dan een professionele dialoog. Het is ook
                  nog fijngevoeliger duiden, sparren en een kijkje in de
                  keuken van Ardie.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Expertise
            </p>
            <h2
              className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
            >
              Ervaring, senioriteit en vakliefde.
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5">
                {expertiseBlocks.map((paragraph, index) => (
                  <article
                    key={paragraph}
                    className={`rounded-[2rem] border border-orato-dark/10 bg-white p-7 shadow-sm ${
                      index === 0 ? "shadow-[0_24px_70px_-38px_rgba(20,20,20,0.22)]" : ""
                    }`}
                  >
                    <p className="text-base leading-7 text-orato-dark/78">
                      {paragraph}
                    </p>
                  </article>
                ))}
              </div>
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[2.35rem] border border-orato-dark/10 bg-white shadow-[0_30px_90px_-44px_rgba(20,20,20,0.28)]">
                  <Image
                    src="/supervisie/•vloerkleedERF03115_WEB.jpg"
                    alt="Supervisie bij Orato in gesprek op locatie."
                    width={1800}
                    height={1200}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <article className="rounded-[2rem] border border-orato-purple/15 bg-orato-purple/10 p-7 shadow-sm">
                  <h3 className="text-2xl font-semibold text-orato-dark">
                    AvC
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-7 text-orato-dark/78">
                    {trainingBlocks.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="https://associatievoorcoaching.com/"
                      className="inline-flex cursor-small items-center rounded-full border border-orato-dark/10 bg-white px-4 py-2 text-sm font-semibold text-orato-dark transition hover:border-orato-purple hover:text-orato-purple"
                    >
                      AvC
                    </Link>
                    <Link
                      href="https://associatievoorcoaching.com/transactionele-analyse/"
                      className="inline-flex cursor-small items-center rounded-full border border-orato-dark/10 bg-white px-4 py-2 text-sm font-semibold text-orato-dark transition hover:border-orato-purple hover:text-orato-purple"
                    >
                      Transactionele Analyse
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Werkwijze
              </p>
              <h2
                className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
              >
                Pragmatisch, verdiepend en zorgvuldig.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Na een orientatiegesprek waarin we kennismaken en ter tafel
                brengen wat-ertoe-doet, stellen we een werkovereenkomst op. Na
                akkoord gaan we aan de slag.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-white/12 bg-white/6 p-6">
                  <h3 className="text-lg font-semibold">Aanpak</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                    {methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.8rem] border border-white/12 bg-white/6 p-6">
                  <h3 className="text-lg font-semibold">Planning & kaders</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                    {planning.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/12 bg-white/6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)]">
                <Image
                  src="/supervisie/sleutelbos met bloemen.jpg"
                  alt="Beeld passend bij verdieping en ontwikkeling in supervisie."
                  width={1600}
                  height={1100}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/6 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/supervisie/Blog-2-Slak-300x234.jpg"
                    alt="Beeld van een slak als metafoor voor vertraging, aandacht en reflectie."
                    width={600}
                    height={468}
                    className="h-auto w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                      Reflectie
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/78">
                      Soms vraagt supervisie om vertragen, waarnemen en op de
                      millimeter werken.
                    </p>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/6 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/supervisie/kip met gouden ei.jpg"
                    alt="Beeld van een kip met een gouden ei als metafoor voor potentieel en ontwikkeling."
                    width={414}
                    height={426}
                    className="h-auto w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                      Ontwikkeling
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/78">
                      Supervisie helpt kwaliteiten zichtbaar maken en verder
                      ontwikkelen.
                    </p>
                  </div>
                </article>
              </div>

              <article className="rounded-[2rem] border border-white/12 bg-orato-light p-7 text-orato-dark shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                  Verder lezen
                </p>
                <p className="mt-4 text-base leading-7 text-orato-dark/78">
                  Wil je meer weten over de professionele en persoonlijke
                  ontwikkeling van Ardie klik dan hier.
                </p>
                <Link
                  href="/Info/Ardie"
                  className="mt-6 inline-flex cursor-small items-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-purple underline decoration-orato-dark/15 underline-offset-4 transition hover:decoration-orato-purple"
                >
                  Naar Ardie
                </Link>
              </article>

              <article className="rounded-[2rem] border border-orato-purple/20 bg-orato-purple/10 p-7">
                <h3 className="text-2xl font-semibold">Kaders & vertrouwen</h3>
                <p className="mt-4 text-sm leading-7 text-white/82">
                  Uiteraard AVG-proof volgens{" "}
                  <Link
                    href="/Info/PrivacyVerklaring"
                    className="cursor-small font-semibold underline decoration-white/25 underline-offset-4 transition hover:decoration-orato-purple"
                  >
                    Privacyverklaring
                  </Link>{" "}
                  en{" "}
                  <Link
                    href="/Info/AlgemeneVoorwaarden"
                    className="cursor-small font-semibold underline decoration-white/25 underline-offset-4 transition hover:decoration-orato-purple"
                  >
                    Algemene voorwaarden
                  </Link>
                  . Met aandacht voor ethische aspecten van ons mooie coachvak.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Supervisie/mentoring onderwerpen
            </p>
            <h2
              className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
            >
              Vragen uit de praktijk.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject, index) => (
                <article
                  key={subject}
                  className="group rounded-[1.4rem] border border-orato-dark/10 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orato-purple/25 hover:shadow-[0_20px_45px_-28px_rgba(20,20,20,0.28)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-orato-purple/10 text-xs font-semibold text-orato-purple transition-colors duration-300 group-hover:bg-orato-purple group-hover:text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-orato-dark/82">
                      {subject}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 pb-16 md:px-8 md:pb-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/Contact"
              className="group cursor-small relative block overflow-hidden rounded-[2rem] border border-orato-purple/15 bg-gradient-to-br from-white via-white to-orato-purple/10 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-orato-purple/30 hover:shadow-[0_30px_70px_-36px_rgba(20,20,20,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orato-purple/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,95,245,0.16),transparent_38%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Investering
              </p>
              <h3
                className={`${notoSerifDisplay.className} relative mt-3 text-4xl text-orato-dark`}
              >
                Tijd en aandacht
              </h3>
              <div className="relative mt-5 rounded-[1.5rem] border border-orato-purple/15 bg-white/80 px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.01]">
                <p className="text-xs uppercase tracking-[0.2em] text-orato-dark/60">
                  Uurtarief vanaf
                </p>
                <p className="mt-2 text-5xl font-semibold text-orato-dark">
                  €185
                </p>
              </div>
              <p className="relative mt-5 text-base leading-7 text-orato-dark/75">
                Referenties opvraagbaar. Met plezier ben ik een bruggenbouwer
                tussen jou en coaches die al supervisie genoten hebben.
              </p>
            </Link>
          </div>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Referentie
            </p>
            <h2
              className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
            >
              Een voorbeeld van blended supervisie.
            </h2>
            <div className="mt-10 grid gap-5">
              <div className="overflow-hidden rounded-[2.6rem] bg-orato-light p-3 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.45)] md:p-5">
                <Image
                  src="/supervisie/Ruimte circles +logo.png"
                  alt="Visual van de supervisieruimte."
                  width={1600}
                  height={1200}
                  className="h-auto w-full rounded-[2rem] object-cover"
                />
              </div>
              <article className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8">
                <p className="text-lg leading-8 text-white/84">
                  &ldquo;Ardie is een supervisor die je raakt, uitdaagt en in
                  beweging zet. Ze ziet wat ik zelf nog niet doorheb,
                  confronteert me zonder aarzeling, maar altijd met humor en
                  een vleugje lerares-strengheid. Elke sessie verrast me met
                  nieuwe inzichten en een flinke dosis energie.&rdquo;
                </p>
                <p className="mt-6 text-base font-semibold text-white">
                  Jasper Nooij
                </p>
                <p className="mt-1 text-sm text-white/58">
                  Zelfstandig tenderspecialist en (team)coach, Estland
                </p>
                <p className="mt-8 text-sm leading-7 text-white/74">
                  Laat het me weten als ik een bruggenbouwer mag zijn tussen jou
                  en een van de collega&apos;s die ik al gesuperviseerd heb.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-orato-dark/10 bg-white px-6 py-10 text-center shadow-[0_40px_120px_-48px_rgba(20,20,20,0.35)] md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Welkom
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-orato-dark/75">
              Ben jij een coachsupervisor, paramedische therapeut of
              professionele coach, met een eigen bedrijf/praktijk of heb je een
              beroep waar coaching een wezenlijk deel van uitmaakt, heb je een
              erkende (coach)opleiding en (veel) ervaring, en wil jij je verder
              ontwikkelen, dan ontmoet ik je graag persoonlijk in het kader van
              supervisie/mentoring.
            </p>
            <p
              className={`${tangerine.className} mt-6 text-5xl leading-none text-orato-purple md:text-7xl`}
            >
              Ik ga ervoor! Waarvoor? Voor jou en je ont-wikkeling.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-orato-dark/75">
              Wat mag ik voor jou betekenen? Klik hier om naar het
              contactformulier te gaan of bel me.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/Contact"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-dark px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-purple"
              >
                Naar contact
              </Link>
              <Link
                href="tel:+31651088688"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-orato-light px-6 text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-purple hover:text-orato-purple"
              >
                Bel +31 6 51088688
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterComp />
    </>
  );
}
