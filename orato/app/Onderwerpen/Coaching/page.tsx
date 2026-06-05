import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Display, Tangerine } from "next/font/google";
import QuoteBadge from "../../components/ardie/QuoteBadge";
import FooterComp from "../../components/Navigation/Footer";
import CoachingConversationIllustration from "../../components/motion/CoachingConversationIllustration";
import InteractiveGlowPanel from "../../components/motion/InteractiveGlowPanel";
import Reveal from "../../components/motion/Reveal";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Orato - Coaching",
  description:
    "Betekenisvolle gesprekken met impact. Coaching met ziel en zakelijkheid, van mens tot mens.",
};

const topicCards = [
  {
    title: "Bewustwording vergroten",
    text: "Jouw blinde vlekken in beeld krijgen met mijn analytisch vermogen als spiegel van de realiteit. En soms is dat alleen al genoeg om anders te kunnen handelen.",
    quote: "Mensen staan op voor zover ze zichzelf kennen.",
  },
  {
    title: "Keuzes maken",
    text: "Leven door te handelen vanuit een innerlijk kompas in plaats van te veel afgestemd zijn op de ander en de buitenwereld. Niet langer uitstellen, of het nu gaat over je werk of privé.",
  },
  {
    title: "Overtuigend(er) overkomen",
    text: "Of Juist de congruentie tussen ‘binnen- en buitenkant’ oftewel ‘performance ‘ersus ‘voelen en denken’ is vaak onderwerp van een coachtraject. ",
  },
  {
    title: "Zelfvertrouwen voelen",
    text: "Iets goed willen doen, in de ogen van anderen en ook volgens je eigen maatstaven, kan motiverend maar ook tegen je werken. Senang zijn met wie je bent en hoe je doet, werkt altijd. Men noemt mij een makelaar in zelfvertrouwen.",
    quote: "Druk maken is voor compressors. Koen Huiskes",
  },
  {
    title: "Gezonder en lichter leven",
    text: "Als dit jou betreft weet je wat daarmee wordt bedoeld. Je bent succesvol, hebt je leven prima op orde en toch houdt iets je tegen. Het kan letterlijk over je lijf gaan of figuurlijk aan de orde zijn. De tijd is rijp voor verandering.",
    quote: "Je houden aan de afspraken met jezelf, dat is vaak het allermoeilijkst.",
  },
  {
    title: "Echt doen",
    text: "Verantwoordelijkheid nemen en ernaar handelen. Doen wat ertoe doet. Ik help je van oude patronen naar nieuwe patronen doen. Ik word ervaren als een resultaatgerichte en pragmatische coach die 'de zaag scherp houdt'.",
    quote: "Het is zoals het is, realisme werkt.",
  },
];

const specialties = [
  {
    title: "Therapeutische Coaching",
    text: [
      "Ik coach therapeutisch waar nodig en gewenst, dat wil zeggen met emotionele diepgang. Iemands verleden maakt namelijk deel uit van de oplossing in de toekomst.",
      "Met name met mijn jarenlange ervaring als paramedisch therapeut met kennis van psychopathologie, als NLP-Master, Relational Presence facilitator en met mijn TA-deskundigheid gespecialiseerd in herbeslissingswerk kan ik je dan helpen.",
      "Bijvoorbeeld als er op het werk ook een persoonlijk, of meer privé, issue meespeelt waar aandacht voor nodig is. Externe objectiviteit en een emotioneel veilige omgeving is dan zeker gewenst. Een psycholoog is niet aan de orde maar toch...",
    ],
    quote: "Je hoeft je niet goed te voelen, je moet goed voelen. Léon Vasterink",
  },
  {
    title: "Expressie Coaching",
    text: [
      "Voor als jij je wilt uiten (verbaal en non-verbaal) zoals dat past bij jou als persoon en past bij jouw verantwoordelijkheden (professioneel en privé).",
      "Aan de slag dus met de zogenaamde buitenkant, jouw persoonlijke uitstraling en manier van communiceren en met de binnenkant oftewel jouw overtuigingen en gevoelens.",
      "Dit vraagt enerzijds om innerlijk veranderwerk (transformationele coaching), door vragen te beantwoorden zoals Wie ben ik? en Hoe wil ik gekend worden? en anderzijds om moed zodat jij jezelf daadwerkelijk laat zien en horen op basis van alle do's en don'ts op het gebied van communiceren en presenteren.",
    ],
  },
  {
    title: "Bijzondere aandacht voor spreektechniek",
    text: [
      "Authentieke expressie gaat ook over de manier waarop je spreekt. Als je daar iets in wilt veranderen is coaching met speciale aandacht voor de manier waarop je spreekt en wilt spreken van toegevoegde waarde.",
      "Of het nu gaat om stotteren, onduidelijk praten, adem te kort komen of over je stem, daar kunnen we aan werken zodat je daar minder last van hebt en juist wel spreekt zoals dat bij jou en je verantwoordelijkheden past.",
      "Mijn specifieke ervaring als logopedist en spraak- en taalpatholoog zet ik dan graag voor jou in.",
    ],
  },
  {
    title: "Executive Coaching",
    text: [
      "Meer specifiek: nadrukkelijk geen businesscoaching. Wel meesterlijke hulp bij het verder ontwikkelen van de menselijke kant van leidinggeven en nemen.",
      "Diepgaande introspectie op identiteitsniveau om in combinatie met je zakelijke kennis en kunde te excelleren. Transformatief. Werken aan de zaak, niet in de zaak, door jezelf onder de loep te nemen, gespiegeld door mij(n kennis en kunde) als Master People Coach. Leiderschap vraagt bezieling van binnenuit.",
    ],
  },
  {
    title: "Communicatie Coaching",
    text: [
      "Vaak, eigenlijk altijd, is anders communiceren met anderen (en jezelf) belangrijk om iets te laten lukken. Dat geldt voor collega's onderling, in gesprek met externe contacten, tijdens een overleg, advies- of verkoopgesprek, praten met naasten etc.",
      "In het bijzonder coach ik ook kinderen vanaf 15 jaar met of zonder hun ouders en help ik liefdespartners met hun manier van communiceren.",
      "Aan het werk dus, om praktisch en respectvol in gesprek te gaan op basis van diverse communicatietechnieken, communicatiestijlen en liefdestalen, met oprechte waardering, voorbij het oordeel. Impactvolle gespreksvaardigheden kun je leren.",
    ],
    quote: "Alles is een 'Act of love' of een 'Cry for love'.",
  },
];

const principles = [
  "Er is geen goed, geen fout, wel informatie.",
  "100% vertrouwen.",
  "Ieder mens wil tot zijn/haar/hun recht komen.",
  "Ik ben wie ik ben en dat is oke! Jij bent wie je bent en dat is oke!",
  "Optimale groei door waardering.",
  "Mensen leren door zichzelf te uiten, in relatie tot anderen.",
];

const examples = [
  "Ik wil duidelijkheid over...",
  "Ik wil niet langer uitstellen.",
  "Hoe kan ik een volgende burn-out voorkomen?",
  "Ik moet anders overkomen.",
  "Hoe kan ik zonder te veel stress alle ballen in de lucht houden?",
  "Wat gaat er communicatief fout in de samenwerking?",
  "Zal ik dit werk blijven doen of toch een andere functie?",
  "Hoe ga ik om met outplacement, een exit traject?",
  "Ik wil een normaal gesprek kunnen voeren met mijn ouders.",
  "Het wordt tijd dat ik anders ga denken over mezelf en anderen!",
  "Hoe houd ik mezelf staande in deze onzekere tijden vanwege een steeds veranderende organisatie?",
  "Ik heb last van alles goed willen doen.",
  "Ik wil weten wat ik wil.",
  "Ik wil weerstand kunnen bieden aan verleidingen.",
  "Ik wil mijn collega's kunnen motiveren.",
  "Blijf ik hier werken of ga ik op zoek naar een andere baan?",
  "Ik wil mensen gepast kunnen aanspreken op hun gedrag.",
  "Ik blijf maar twijfelen.",
  "Ik wil meer impact hebben.",
  "Ik praat onduidelijker dan ik zou willen.",
  "Ik wil weten wat me tegenhoudt.",
  "Ik wil laten zien wat ik kan.",
  "Hoe ga ik om met die collega die mij irriteert?",
  "Hoe voorkom ik een volgende burn-out?",
  "Ik wil beter prioriteiten kunnen stellen.",
  "Ik moet mijn grenzen (eerder) aan gaan geven.",
  "Ik wil positiever in het leven staan.",
  "Hoe kom ik minder dominant over?",
  "Ik wil dat mijn inbreng tijdens een overleg effect heeft.",
  "Hoe praat ik met mijn partner?",
  "Hoe kan ik hulp aanvaarden?",
  "Ik wil kunnen kiezen voor mezelf.",
  "Ik wil me minder aantrekken van de mening van anderen.",
  "Ik wil mensen aan kunnen kijken, met zelfvertrouwen.",
  "Ik durf geen risico's te lopen terwijl ik dat nodig heb om verder te komen.",
  "Wat zijn mijn drijfveren en wat wil IK nou?",
  "Ik wil eindelijk doen wat ik altijd al wil, namelijk...",
  "Ik wil meer invloed en het verschil kunnen maken!",
  "Hoe krijg ik overzicht?",
  "Ik wil een liefdespartner.",
  "Ik wil niet langer opzien tegen mensen.",
  "Welke manier van communiceren past bij mijn (gewenste) stijl van leiding geven?",
  "Ik wil meer de touwtjes in eigen handen hebben.",
  "Hoe haal ik de druk van de ketel?",
  "Hoe doe ik dat, gastvrij zijn?",
];

const references = [
  {
    quote:
      "Ik heb jou ervaren als een fijn, oprecht mens, bij wie ik me volkomen op mijn gemak en veilig voelde. En ook als ik dacht, wat moeten we nu, wist je dat aan te raken wat me verder hielp en ik nodig had. Met een zachte, maar vaste hand. Dank voor je wijsheid, inlevingsvermogen en inzicht. Jij hebt me laten ervaren dat ook als het niet duidelijk is wat er speelt of hoe het moet, ik al doende op weg kom. Veel dank!",
    name: "Henriëtte den Hartog",
    role: "Advocaat Generaal Openbaar Ministerie",
  },
  {
    quote:
      "Coaching door Ardie is absoluut zinvol. Alles wat ik heb geleerd kan ik zowel op het werk als privé toepassen. Het zorgt ervoor dat ik me professioneler kan opstellen, maar toch dicht bij mezelf kan blijven.",
    name: "Meggie Spierings",
    role: "Projectleider gemeente",
  },
  {
    quote:
      "Ik zit beter in mijn vel waardoor het ook prettiger is voor mijn collega's om me heen. Ook krijg ik meer gedaan. Dit is dus niet alleen voor de algehele sfeer bevorderlijk maar ook te merken aan het werk, omzet, projecten. Door verschillende vragen, gesprekken en oefeningen ben ik me meer bewust geworden van de mogelijkheden en keuzes die in mijn eigen hand liggen en wat ik daarmee kan doen. Dus als iemand in twijfel is over zijn of haar situatie of niet zeker weet wat hij of zij wil (werk/thuis). Of als iemand in de knoop zit met zichzelf of ergens tegenaan blijft lopen, gun ik je Ardie als coach.",
    name: "Koen Huiskes",
    role: "Coachee",
  },
  {
    quote:
      "Ardie, je hebt me niet alleen geholpen mijn uitdagingen rondom stotteren aan te pakken, maar ook om meer zelfvertrouwen te ontwikkelen en te ontdekken waar mijn kracht en passie liggen. Dankjewel voor je inzichten en de veilige ruimte die je hebt gecreëerd om aan mezelf te werken. Je hebt echt het verschil gemaakt en dat waardeer ik enorm.",
    name: "Joost Rijksen",
    role: "Beleidsmedewerker Gemeente Geldrop-Mierlo",
  },
  {
    quote:
      "Ardie heeft voor diverse medewerkers het verschil gemaakt in hun persoonlijke ontwikkeling. Zowel op teamniveau als in individuele coaching is Ardie aan te bevelen.",
    name: "Anouschka van Laarhoven",
    role: "Manager team Ruimtelijk Economische Ontwikkeling",
  },
];

export default function CoachingPage() {
  return (
    <>
      <main className="bg-orato-light text-orato-dark">
        <section className="overflow-hidden bg-orato-light px-4 py-12 md:px-8 md:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="text-center md:text-left" direction="left">
              <div className="inline-flex rounded-full border border-orato-dark/15 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orato-dark/70">
                Coaching bij Orato
              </div>
              <h1
                className={`${notoSerifDisplay.className} mt-6 max-w-4xl text-5xl leading-none md:text-7xl lg:text-[6.2rem]`}
              >
                Betekenisvolle gesprekken met impact.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-orato-dark/80 md:text-xl">
                Wat is dat? Betekenisvolle gesprekken met impact. Coaching is
                meer dan een goed gesprek. Voor mij is coaching een effectieve
                manier om mensen te helpen antwoorden te vinden op hun vragen.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-orato-dark/72 md:text-lg">
                Die vragen kunnen gaan over een wens, probleem, ambitie,
                verandering, keuze etc. Mensen verander je niet, wel de manier
                waarop je je in een situatie gedraagt, voelt en denkt. Coaching
                door mij, gaat altijd over jou als persoon in de context van je
                werk (of studie). Een persoonlijke aangelegenheid dus, met
                concrete doelen en effecten.
              </p>
              <p className="mt-6 text-lg font-semibold text-orato-blue md:text-xl">
                Coaching met ziel en zakelijkheid, van mens tot mens.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <Link
                  href="/Contact"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-dark px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-blue"
                >
                  Vrijblijvend kennismaken 
                </Link>
                <Link
                  href="/Info/Ardie"
                  className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-white/70 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-blue hover:text-orato-blue"
                >
                  Meer over Ardie
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative" direction="right" delay={0.08}>
              <div className="absolute -left-4 top-12 hidden h-28 w-28 rounded-full bg-orato-blue/20 blur-3xl lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-36 w-36 rounded-full bg-orato-blue/20 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-orato-dark/10 bg-white shadow-[0_40px_120px_-45px_rgba(20,20,20,0.45)]">
                <Image
                  src="/coaching/drieen ardie  glimlach orato_2024_21 september 2024-52_WEB.jpg"
                  alt="Ardie in gesprek tijdens een coachmoment."
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-5">
                <div className="rounded-[2rem] border border-orato-dark/10 bg-white/85 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                    Welkom
                  </p>
                  <p className="mt-3 text-base leading-7 text-orato-dark/78">
                    Coachen is iemand tevoorschijn luisteren.
                  </p>
                  <div className="mt-5 h-px w-24 bg-gradient-to-r from-orato-blue via-orato-blue/60 to-transparent" />
                  <p className="mt-5 text-sm leading-6 text-orato-dark/70">
                    Je bent welkom!
                  </p>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-[2rem] border border-orato-dark/10 bg-white shadow-[0_28px_80px_-45px_rgba(20,20,20,0.45)]">
                <div className="relative">
                  <Image
                    src="/coaching/schilderij wolken.jpeg"
                    alt="Wolkenlucht als beeld voor denken in mogelijkheden."
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex min-h-[32%] items-end bg-gradient-to-t from-white/72 via-white/30 to-transparent px-6 pb-5 pt-16 backdrop-blur-[1px] md:px-7 md:pb-6">
                    <p
                      className={`${notoSerifDisplay.className} text-lg leading-tight text-orato-dark/88 drop-shadow-[0_1px_10px_rgba(255,255,255,0.55)] sm:text-xl md:text-2xl`}
                    >
                      The sky is the limit. Denken in mogelijkheden is een sociaal geschenk.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* <CoachingConversationIllustration /> */}

        <section className="bg-orato-light px-4 py-7 text-center md:px-8 md:py-9 lg:px-10">
          <p
            className={`${tangerine.className} text-4xl font-bold leading-none text-orato-blue md:text-5xl`}
          >
            Even stil staan . . . om verder te komen!
          </p>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal direction="left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Coachonderwerpen
              </p>
              <h2
                className={`${notoSerifDisplay.className} mt-3 max-w-2xl text-4xl text-center md:text-left md:text-6xl`}
              >
                Ontwikkelvragen die ertoe doen.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
                De ontwikkelvragen van de mensen die ik coach hebben in zijn
                algemeenheid te maken met:
              </p>
              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/12">
                <Image
                  src="/coaching/orato_03856_21 september 2024.JPG"
                  alt="Ardie tijdens een sessie aan tafel."
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-orato-blue/25 bg-orato-blue/10 p-5">
                <p className="text-sm leading-7 text-white/82">
                  Heb je specifieke wensen m.b.t. de manier waarop jij jezelf
                  en een onderwerp wilt kunnen presenteren? Klik dan{" "}
                  <Link
                    href="/Onderwerpen/Presenteren"
                    className="cursor-small font-bold uppercase text-white underline decoration-white/40 decoration-2 underline-offset-4 transition hover:decoration-orato-blue"
                  >
                    HIER
                  </Link>
                  {" "}voor meer informatie.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {topicCards.map((card, index) => (
                <InteractiveGlowPanel
                  key={card.title}
                  className="h-full rounded-[1.8rem]"
                  glowClassName="bg-[radial-gradient(28rem_circle_at_var(--glow-x)_var(--glow-y),rgba(255,255,255,0.12),transparent_64%)]"
                >
                  <article className="relative flex h-full flex-col overflow-visible rounded-[1.8rem] border border-orato-blue/20 bg-orato-blue/10 p-6 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.45)] transition-colors duration-500 group-hover:bg-orato-blue/14">
                    <Reveal delay={index * 0.06}>
                      <div className="flex items-start gap-5">
                        <h3 className="min-w-0 flex-1 text-2xl font-semibold text-white">
                        {card.title}
                      </h3>
                        {card.quote ? (
                          <div className="relative z-30 flex h-20 w-20 shrink-0 items-start justify-end overflow-visible">
                            <QuoteBadge
                              id={`coaching-topic-${index}-quote`}
                              quote={card.quote}
                              className="origin-top-right scale-[0.82]"
                              tooltipAlign="right"
                            />
                          </div>
                        ) : null}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/78">
                        {card.text}
                      </p>
                    </Reveal>
                  </article>
                </InteractiveGlowPanel>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Specialiteiten
            </p>
            <h2
              className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
            >
              Diepgang waar nodig, praktisch waar het helpt.
            </h2>
            <div className="mt-8 overflow-hidden rounded-[2.4rem] border border-orato-dark/10 bg-white shadow-[0_30px_90px_-44px_rgba(20,20,20,0.28)]">
              <Image
                src="/coaching/•koen buiten cirkel 2 ERF03538_WEB.jpg"
                alt="Ardie en Koen buiten in de tuin in een cirkel."
                width={1800}
                height={1013}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {specialties.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className={index === 0 ? "lg:col-span-2" : undefined}
                >
                  <article className="relative overflow-visible rounded-[2rem] border border-orato-dark/10 bg-white p-7 shadow-sm">
                    <div className="flex items-start gap-5">
                      <h3 className="min-w-0 flex-1 text-2xl font-semibold text-orato-dark">
                        {item.title}
                      </h3>
                      {item.quote ? (
                        <div className="relative z-30 flex h-20 w-20 shrink-0 items-start justify-end overflow-visible">
                          <QuoteBadge
                            id={`coaching-specialty-${index}-quote`}
                            quote={item.quote}
                            className="origin-top-right scale-[0.82]"
                            badgeClassName="text-orato-dark"
                            tooltipAlign="right"
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-4 space-y-4 text-base leading-7 text-orato-dark/78">
                      {item.text.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p
              className={`${tangerine.className} mt-10 text-center text-4xl font-bold leading-none text-orato-blue md:text-5xl`}
            >
              Even stil staan . . . om verder te komen!
            </p>
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
                Pragmatisch, zorgvuldig en met emotionele diepgang.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Na een oriëntatiegesprek waarin we kennismaken en ter tafel
                brengen wat-ertoe-doet, stellen we een werkovereenkomst op.
                Eventueel wordt ook afgestemd met een leidinggevende en wordt
                gevraagd naar zijn of haar succescriteria, bij voorkeur in een
                3-gesprek. Na akkoord gaan we aan de slag.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-white/12 bg-white/6 p-6">
                  <h3 className="text-lg font-semibold">Aanpak</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                    <li>Pragmatisch en met emotionele diepgang.</li>
                    <li>
                      Middels de kunst van het vragen stellen en een grote
                      diversiteit aan (ervarings)oefeningen, modellen en
                      theorieën kom je tot inzichten en verandering.
                    </li>
                    <li>
                      Coaching gebeurt op basis van de 8 coachcompetenties van
                      de ICF en de 8 coachcompetenties van NOBCO/EMCC.
                    </li>
                    <li>
                      Persoonlijk ontdekwerk middels reflectie,
                      video-feedback, coaching -on-the-job etc.
                    </li>
                  </ul>
                </div>
                <div className="rounded-[1.8rem] border border-white/12 bg-white/6 p-6">
                  <h3 className="text-lg font-semibold">Praktisch</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                    <li>
                      Sessies plannen we in zoals dat bij de ontwikkelvraag en
                      agenda&apos;s past.
                    </li>
                    <li>
                      Bijvoorbeeld aanvankelijk eens per twee weken, 1 tot anderhalf
                      uur.
                    </li>
                    <li>
                      Online sessies zijn mogelijk na een persoonlijke
                      ontmoeting.
                    </li>
                    <li>
                      Er wordt expliciet geevalueerd, tussentijd, en bij
                      afronding bij voorkeur met een gesprek met relevante
                      betrokkenen om te oogsten en te borgen.
                    </li>
                    <li>Je ontvangt een bewijs van deelname.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <Reveal>
                <div className="overflow-hidden rounded-[2.4rem] border border-white/12 bg-white/6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/coaching/ERF03819_WEB.jpg"
                    alt="Coachsessie bij Orato."
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <article className="rounded-[2rem] border border-white/12 bg-orato-light p-7 text-orato-dark shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                    7V-methode en A-methode gebaseerd op uitgangspunten zoals: 
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {principles.map((principle) => (
                      <span
                        key={principle}
                        className="rounded-full border border-orato-dark/10 bg-white px-4 py-2 text-sm font-medium text-orato-dark"
                      >
                        {principle}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.1}>
                <article className="rounded-[2rem] border border-orato-blue/20 bg-orato-blue/10 p-7">
                  <h3 className="text-2xl font-semibold">Kaders en vertrouwen</h3>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    Uiteraard AVG-proof volgens{" "}
                    <Link
                      href="/Info/PrivacyVerklaring"
                      className="cursor-small font-semibold underline decoration-white/25 underline-offset-4 transition hover:decoration-orato-blue"
                    >
                      Privacyverklaring
                    </Link>{" "}
                    en{" "}
                    <Link
                      href="/Info/AlgemeneVoorwaarden"
                      className="cursor-small font-semibold underline decoration-white/25 underline-offset-4 transition hover:decoration-orato-blue"
                    >
                      Algemene voorwaarden
                    </Link>
                    . Volgens de Ethische gedragscodes van de ICF en
                    NOBCO/EMCC, met aandacht voor zorgvuldigheid en vertrouwen.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    APK. Ardie&apos;s Periodieke Koaching. Ooit zo genoemd door
                    een coachee. Regelmatig onderhoud, een soort strippenkaart
                    bijv. 1x per kwartaal, voor (door)ontwikkeling van oude en
                    nieuwe thema&apos;s m.b.t. je professionele en persoonlijke
                    ontwikkeling.
                  </p>
                  <Link
                    href="/Info/Ardie"
                    className="mt-6 inline-flex min-h-12 cursor-small items-center justify-center rounded-full bg-white px-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:bg-orato-blue hover:text-white"
                  >
                    Meer over Orato
                  </Link>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              Voorbeelden
            </p>
            <h2
              className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
            >
              Misschien herken je jezelf hierin.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((example, index) => (
                <Reveal key={example} delay={index * 0.02}>
                  <article
                    className="group rounded-[1.4rem] border border-orato-dark/10 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orato-blue/25 hover:shadow-[0_20px_45px_-28px_rgba(20,20,20,0.28)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-orato-blue/10 text-xs font-semibold text-orato-blue transition-colors duration-300 group-hover:bg-orato-blue group-hover:text-white">
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

        <section className="bg-orato-light px-4 pb-16 md:px-8 md:pb-24 lg:px-10">
          <Reveal className="mx-auto max-w-3xl">
            <Link
              href="/Contact"
              className="group cursor-small relative block overflow-hidden rounded-[2rem] border border-orato-blue/15 bg-gradient-to-br from-white via-white to-orato-blue/10 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-orato-blue/30 hover:shadow-[0_30px_70px_-36px_rgba(20,20,20,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orato-blue/40"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,133,245,0.16),transparent_38%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Investering
              </p>
              <h3
                className={`${notoSerifDisplay.className} relative mt-3 text-4xl text-orato-dark`}
              >
                Tijd en aandacht
              </h3>
              <p className="relative mt-3 text-base leading-7 text-orato-dark/75">
                Om het maximale uit een coachtraject te halen heb je ruimte
                nodig (letterlijk en figuurlijk) in je agenda en hoofd.
              </p>
              <div className="relative mt-5 rounded-[1.5rem] border border-orato-blue/15 bg-white/80 px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.01]">
                <p className="text-xs uppercase tracking-[0.2em] text-orato-dark/60">
                  Uurtarief vanaf
                </p>
                <p className="mt-2 text-2xl font-semibold text-orato-dark">
                  €185
                </p>
                <p className="mt-3 text-sm leading-6 text-orato-dark/70">
                  Uiteraard afgestemd op het beschikbare budget.
                </p>
              </div>
              <p className="relative mt-5 text-base font-semibold text-orato-blue md:text-lg">
                Ik ga ervoor! Waarvoor? Voor jou en je ontwikkeling.
              </p>
            </Link>
          </Reveal>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
              Referenties
            </p>
            <h2
              className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center md:text-left md:text-6xl`}
            >
              Ervaringen van coachees en opdrachtgevers.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {references.map((item, index) => (
                <article
                  key={item.name}
                  className="rounded-[2rem] border border-white/12 bg-white/6 p-7"
                >
                  <Reveal delay={index * 0.06}>
                    <p className="text-base leading-8 text-white/84">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="mt-6 text-base font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-white/58">{item.role}</p>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <Reveal className="mx-auto max-w-5xl rounded-[2.5rem] border border-orato-dark/10 bg-white px-6 py-10 text-center shadow-[0_40px_120px_-48px_rgba(20,20,20,0.35)] md:px-12">

            <p
              className={`${tangerine.className} mt-4 text-5xl leading-none text-orato-blue md:text-7xl`}
            >
              Even stil staan . . . om verder te komen!
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-orato-dark/75">
              Ik ben benieuwd wat ik voor je mag betekenen. Klik door naar het
              contactformulier of bel me gerust.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/Contact"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full bg-orato-dark px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-blue"
              >
                Naar contact
              </Link>
              <Link
                href="tel:+31651088688"
                className="inline-flex min-h-14 cursor-small items-center justify-center rounded-full border border-orato-dark/15 bg-orato-light px-6 text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-blue hover:text-orato-blue"
              >
                Bel +31 6 510 88 6 88
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <FooterComp />
    </>
  );
}
