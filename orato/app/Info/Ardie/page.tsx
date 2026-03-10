import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Display } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";
import QuoteBadge from "../../components/ardie/QuoteBadge";
import RedThreadTimeline, {
  type ArdieTimelineEntry,
} from "../../components/ardie/RedThreadTimeline";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

const heroContent = {
  eyebrow: "Kennismaken met Ardie",
  title: "Ardie",
  intro:
    "Hallo, welkom op mijn website, bedoeld als kennismaking met mij en mijn werk als MasterCoach, coachsupervisor, coachopleider en presentatietrainer-en coach. Ja, ik heb iets met communicatie en vooral met coaching.",
  body: "Ik help jou graag met wat jij wilt onderzoeken en bereiken. Je bent van harte welkom.",
  roles: [
    "MasterCoach",
    "coachsupervisor",
    "coachopleider",
    "presentatietrainer-en coach",
  ],
  image: {
    src: "/Ardie/orato_2024_21 september 2024-41_WEB 03634 schommel hand links.jpg",
    alt: "Ardie met haar gezin op een schommel in het groen.",
  },
};

const profileSections = [
  {
    title: "Typisch Ardie",
    text: [
      "Men kent mij als een betrokken en warm mens, denkend in mogelijkheden en genietend van het leven. Als oudste dochter geboren in het Noord-Brabantse Deurne, nu wonend in Nuenen, gelukkig met Peet Nooijen als levenspartner sinds ons 15e levensjaar en onze kinderen Eva en Art.",
      "Van jongs af aan ben ik degene voor het goede gesprek. Ik vind aansluiting met mensen van jong tot oud, met uiteenlopende opvattingen, functies en levenservaringen. Ik houd van afspraken nakomen en mijn perfectionisme maakt dat ik zeker ben van mijn onzekerheden en zorgvuldig te werk ga.",
      "Ik sport veel, houd van lekker eten, inspiratie opdoen, kunst, bloemen en de rust van de natuur. Ook ik heb veerkracht moeten tonen in het leven met impactvolle levenslessen zoals: gooi niet weg wat goed is en blijf trouw aan je eigen waarheid.",
      "Mijn boek Voorbij de buitenkant beschrijft een grondige introspectie, een ervaringsverhaal over 50 jaar Ardie in 10 jaar psychoanalyse. Ik ben trots op meer dan 35 jaar werk als eigenaar van Orato, afgeleid van Oratio: Latijn voor welsprekendheid en redevoering.",
    ],
    image: {
      src: "/Ardie/Iris 001.jpg",
      alt: "Portret van Ardie in zacht licht.",
    },
  },
  {
    title: "Mijn persoonlijke motivatie",
    text: [
      "Mensen helpen zichzelf te uiten zodat ze gezien en gehoord worden, letterlijk en figuurlijk, als persoon en professional.",
      "Ik ga voor betekenisvolle gesprekken met impact. Voor contact dat niet blijft hangen in theorie, maar voelbaar verschil maakt in hoe jij werkt, kiest en jezelf laat zien.",
    ],
    highlight: "Ik werk met ziel en zakelijkheid, pragmatisch en met emotionele diepgang.",
  },
];

const methodCards = [
  {
    title: "Werkwijze",
    text: [
      "Ik sta bekend om mijn professionele aanpak in de omgang met cliënten en opdrachtgevers en word ervaren als een veelzijdig gesprekspartner. Men voelt zich snel vertrouwd bij mij. De essentie van een vraagstuk ligt snel op tafel, resultaatgericht en zonder gezweef.",
      "Confronterend waar nodig, uitgesproken en liefdevol sturend met tact. Pragmatisch ook, met emotionele diepgang, therapeutisch indien gewenst. Doelen stellen is niet genoeg: we gaan voor wenselijke effecten, zo concreet mogelijk geformuleerd als succescriteria.",
      "Je mag verwachten dat ik gebruik wat zich aandient in onze werkrelatie aan gedrag, gedachtes en gevoelens, in dienst van jouw ontwikkelvraag.",
    ],
    image: {
      src: "/Ardie/werk in uitvoering bij Orato.jpeg",
      alt: "Ardie aan het werk tijdens een sessie bij Orato.",
    },
    tone: "orange",
  },
  {
    title: "Deskundigheid",
    text: [
      "Hoewel ik arts wilde worden en getrouwd ben met een specialist, ben ik van huis uit praktijkhoudend logopedist en Spraak- en Taalpatholoog. Ik heb me gespecialiseerd in talloze aspecten van effectieve communicatie, oftewel in gesprek met jezelf en anderen.",
      "Momenteel kent mijn werk vier pijlers: (executive)coaching, coachsupervisie, coachopleiding en presentatietraining-coaching, met alle voordelen van de kruisbestuiving daartussen.",
      "Ik heb sinds 1989 honderden mensen behandeld, minstens 300 mensen individueel gecoacht en gesuperviseerd en meer dan honderd groepstrainingen en workshops gegeven. Men noemt mij een makelaar in zelfvertrouwen en nieuw perspectief.",
    ],
    tone: "blue",
  },
  {
    title: "Kaders & vertrouwen",
    text: [
      "Ik werk volgens mijn privacyverklaring en algemene voorwaarden, met aandacht voor ethiek, zorgvuldigheid en psychologische veiligheid. Eigenlijk is geen vraag te gek zolang het past bij mijn morele kompas.",
      "Ik sta geregistreerd als Master Certified Coach bij de ICF, als Senior Practitioner bij NOBCO/EMCC, als ESIA gecertificeerde Supervisor, als docent bij het CRKBO en als Speaking Circle Facilitator bij het Relational Presence Network.",
    ],
    tone: "green",
  },
];

const credentialChips = [
  "ICF MCC",
  "NOBCO/EMCC Senior Practitioner",
  "ESIA Supervisor",
  "CRKBO docent",
  "Speaking Circle Facilitator",
  "OCN-Dames inspirator",
];

const quoteItems = [
  "Van zwart-wit naar de juiste grijstint, dat geeft kleur aan het leven.",
  "Er is geen goed, geen fout, wel informatie.",
  "Je houden aan de afspraken met jezelf, dat is vaak het allermoeilijkst.",
  "Voor alles is een goed moment.",
  "Het is zoals het is, realisme werkt.",
];

const assignRandomQuote = (seed: string, offset = 0) => {
  const hash = Array.from(seed).reduce(
    (total, char, index) => total + char.charCodeAt(0) * (index + 17),
    0
  );

  return quoteItems[(hash + offset * 13) % quoteItems.length];
};

const timelineEntries: ArdieTimelineEntry[] = [
  {
    year: "1985",
    title: "De eerste bewuste afslag",
    summary: "Na het Atheneum loopt de route anders dan gedacht, maar wel precies richting mijn vak.",
    details: [
      "Na het Atheneum word ik uitgeloot voor de studie geneeskunde.",
      "Ik start de opleiding Logopedie en Foniatrie en leg daar de basis voor mijn latere werk in stem, taal, presentatie en coaching.",
    ],
    accentColor: "orange",
  },
  {
    year: "1989",
    title: "Taal, onderzoek en ondernemerschap",
    summary: "Ik combineer wetenschappelijke verdieping met mijn eerste eigen bedrijf.",
    details: [
      "Ik volg de universitaire bovenbouwstudie Spraak- en Taalpathologie, gericht op wetenschappelijk onderzoek naar spraak, taal, gehoor en stem.",
      "Ik neem zitting in de Thinktank van de Universiteit Nijmegen.",
      "Samen met Marion Weijts start ik TSP, een bedrijf voor trainingen in spreken en presenteren.",
    ],
    accentColor: "blue",
  },
  {
    year: "1992",
    title: "Praktijk, gezin en een steeds bredere horizon",
    summary: "Mijn werk verdiept zich inhoudelijk en verbreedt tegelijk in ondernemerschap en levenservaring.",
    details: [
      "Ik koop Logopediepraktijk Tiel over in een multidisciplinaire setting en specialiseer me in stemstoornissen, hyperventilatie, stotteren en complexe communicatieproblemen bij kinderen en hun ouders.",
      "Ik neem logopedisten in dienst, werk intensief samen met andere paramedici, huisartsen en specialisten en ben actief in allerlei commissies van de Nederlandse Vereniging voor Logopedie & Foniatrie.",
      "Een verblijf in Ghana vanwege een coschap van mijn levenspartner Peet maakt diepe indruk. Ik trouw in 1995, Eva en Art worden geboren en TSP groeit door naar ORATO spreken en presenteren.",
      "Ik train ambtenaren en wethouders voor Bestuursacademie Nederland, krijg een aanbod van Schouten & Nelissen en beleef een intensieve periode waarin praktijkwerk, trainen, jong gezin, sociaal leven en verdere scholing samenkomen.",
    ],
    image: {
      src: "/Ardie/Ardie legt uit aan groep zittend RPN.jpg",
      alt: "Ardie in gesprek met een groep tijdens een sessie.",
      placement: "edge",
    },
    accentColor: "red",
  },
  {
    year: "2001",
    title: "Verhuizen en opnieuw wortelen",
    summary: "Een nieuwe woonplaats vraagt om een nieuw netwerk en nieuwe professionele rollen.",
    details: [
      "Ik verkoop mijn logopediepraktijk als we verhuizen van Wijchen naar Nuenen nadat mijn echtgenoot zijn promotieonderzoek en specialisatie tot patholoog afrondt.",
      "Ik bouw een nieuw leven op, onder meer met acht jaar voorzitterschap van de medezeggenschapsraad van de basisschool van onze kinderen en door me aan te sluiten bij OCN Ondernemers Contact Nuenen.",
      "Ik word externe deskundige bij examinering van studenten, geef gastcolleges over ondernemerschap, neem deel aan een klankbordgroep van Fontys Paramedisch Hogeschool en sluit me aan bij Logopediekring Nuenen.",
      "Daarnaast volg ik twee jaar opleidingen tot NLP Master bij het IEP in Nijmegen en daarna de opleiding tot Speaking Circle Facilitator in Amsterdam.",
    ],
    accentColor: "green",
  },
  {
    year: "2004",
    title: "ORATO krijgt een duidelijker eigen vorm",
    summary: "Mijn bedrijf en aanbod worden scherper, zelfstandiger en creatiever.",
    details: [
      "ORATO verandert van een V.O.F. naar mijn eenmansbedrijf. De training Effectief Presenteren blijf ik samen met Drs. Marion Weijts geven.",
      "De combinatie van logopedisch onderzoek en behandeling met trainingen, workshops en interactieve lezingen blijft bestaan en wordt aangevuld met commerciële presentatiecoaching voor diverse non-profit en profitorganisaties.",
      "Samen met Maja Visser ontwikkel ik nieuwe trainingen voor onder meer MEE Nederland, gemeenten en provincies, zoals Sterk overkomen, Leren acquireren, Netwerk MEE, Persoonlijke uitstraling en Jij en je werk in de schijnwerpers.",
    ],
    image: {
      src: "/Ardie/werk in uitvoering bij Orato.jpeg",
      alt: "Ardie in haar werkomgeving bij Orato.",
    },
    accentColor: "orange",
  },
  {
    year: "2005",
    title: "Binnenkant en buitenkant verbinden",
    summary: "Ik investeer bewust in uitstraling én denkkracht.",
    details: [
      "Ik volg de opleiding tot ImageMaster bij Beauty Jeunique om naast aandacht voor de binnenkant ook deskundig advies te kunnen geven over de buitenkant.",
      "Bij Schouten & Nelissen vergroot ik mijn deskundigheid in cognitief herstructureren via RET, afhankelijk van de toepassing als Rationele Effectiviteitstraining of Rationele Emotieve Therapie.",
    ],
    accentColor: "blue",
  },
  {
    year: "2007",
    title: "Een diepgaand persoonlijk avontuur",
    summary: "Psychoanalyse wordt een belangrijke bron voor wie ik ben en hoe ik werk.",
    details: [
      "Ik ga een intensief en diepgaand avontuur aan via een klassieke Freudiaanse psychoanalyse.",
      "Die periode blijkt van grote betekenis voor mij persoonlijk en voor mijn werk als coach, trainer en therapeut.",
    ],
    accentColor: "red",
  },
  {
    year: "2009",
    title: "Relaties, sales en vrouwelijk ondernemerschap",
    summary: "Mijn coaching verschuift steeds vaker naar relationele en commerciële vraagstukken.",
    details: [
      "Naast werkgerelateerde coachvragen word ik steeds vaker gevraagd te helpen bij problematische liefdesrelaties. Ik verdiep me in Emotionally Focused Therapy via de Houd me vast-methode.",
      "Ik krijg verdere training in het trainen van Karin de Galan.",
      "In 2011 neem ik mijn eigen salesvaardigheden onder de loep met salescoach Michel van Vuuren van de Nederlandse Sales Academie.",
      "Ik initieer de OCN-Dames, een netwerkgroep van vrouwelijke ondernemers.",
    ],
    accentColor: "green",
  },
  {
    year: "2012",
    title: "Kiezen voor wat al goed is",
    summary: "Ik blijf zoeken naar de beste vorm voor mijn werk en kies opnieuw bewust voor ORATO.",
    details: [
      "Op mijn initiatief ontstaat XPRSS Express for Success, een samenwerking met specialisten in uitstraling, styling en fotografie om mannen en vrouwen een sterke eerste indruk te geven.",
      "Een baan als praktijkondersteuner GGZ in een huisartsenpraktijk ligt binnen handbereik, maar ik kies met volle overtuiging voor wat al goed is: ORATO Communicatie Coaching.",
      "In deze periode verdiep ik me bovendien in psychopathologie bij volwassenen via een cursus bij het RINO.",
    ],
    accentColor: "orange",
  },
  {
    year: "2013-2015",
    title: "Internationale erkenning en een eigentijdse Orato-identiteit",
    summary: "Ik professionaliseer verder als coach en geef ORATO een nieuwe visuele jas.",
    details: [
      "Vanuit de behoefte aan officiële internationale erkenning start ik opleidingen tot ACC en PCC bij de Associatie voor Coaching volgens kwalificatie van de ICF.",
      "Ik word lid van ICF Global en Nederland en sluit me in 2014 aan bij een intervisiegroep voor professionele coaches: de Binnencirkel van de AvC.",
      "Dankzij het werk van Els Ruiters van Grafidi krijgt ORATO in 2015 een eigentijds logo, een nieuwe interactieve website en nieuw drukwerk.",
      "In diezelfde periode ontwikkel en geef ik samen met Anne Vinke-van Ingen de cursus Aansprekend (s)Preken voor mensen die het woord nemen in een kerk.",
    ],
    accentColor: "blue",
  },
  {
    year: "2017",
    title: "Schrijven, spreken en Relational Presence",
    summary: "Een jaar van afronding, expressie en internationale verbinding.",
    details: [
      "Vanuit de vraag uit het bedrijfsleven en mijn eigen behoefte om ook in het Engels te coachen volg ik een taaltraining op maat bij Regina Coeli in Vught.",
      "In de lente van 2017 word ik 50 jaar en beëindig ik de psychoanalyse. In de zomer schrijf ik in The Little House in Cotswold het ervaringsverhaal Op de bank.",
      "Tijdens de European Speaking Circle Facilitator Days geef ik in Londen een TEDTalk over psychoanalyse en mijn vak als coach en facilitator.",
      "Samen met gepassioneerde collega’s in Europa stichten we het Relational Presence Network en word ik bestuurslid.",
    ],
    image: {
      src: "/Ardie/KAI DSC_1643 gekropt.jpg",
      alt: "Ardie in een open portret in de natuur.",
      tall: true,
    },
    accentColor: "red",
  },
  {
    year: "2018",
    title: "Opleiden, superviseren en teams begeleiden",
    summary: "Mijn rol als opleider en supervisor krijgt stevig vorm.",
    details: [
      "De eerste editie van de 4-daagse training Kerntraject !K-2.0 wordt gegeven als resultaat van een niet nader te noemen samenwerking.",
      "Ik ga samenwerken met de Associatie voor Coaching en leid coaches op, geef in-company trainingen in coachen, coachend leidinggeven en acquireren en start met groepssupervisie.",
      "Ik train Technasiumdocenten in coachend begeleiden en help onder de vlag van ORATO steeds vaker teams beter met elkaar te communiceren.",
      "Ik word lid van de NOBCO. Mijn algemene voorwaarden en privacyverklaring worden geactualiseerd in het kader van de AVG en ik zet de stap naar registratie als MCC Master Certified Coach bij de ICF.",
    ],
    image: {
      src: "/Ardie/•koen buiten cirkelERF03522_WEB.jpg",
      alt: "Ardie buiten in een coachingsetting met een deelnemer.",
      placement: "edge",
      wide: true,
    },
    accentColor: "orange",
  },
  {
    year: "2019",
    title: "Boek, pitchbegeleiding en nieuwe vormen van expressie",
    summary: "Mijn verhaal krijgt tastbare vorm en ik begeleid anderen nadrukkelijker in zichtbaarheid.",
    details: [
      "Het verhaal Op de bank wordt vormgegeven door Bas Linssen.",
      "Mijn boek Voorbij de buitenkant verschijnt in kleine oplage in eigen beheer.",
      "Ik start met pitchbegeleiding in het kader van de Young Talent Award van het OCN en geef de workshop Een groot ei leggen om belangrijke veranderingen en keuzes te faciliteren.",
    ],
    accentColor: "blue",
  },
  {
    year: "2020",
    title: "Volhouden in een lastige periode",
    summary: "Ook onder druk blijf ik werken, hosten en betekenisvolle ontmoetingen organiseren.",
    details: [
      "Een ongewenste rechtszaak begint en wordt na twee jaar afgesloten met 100% gelijk voor mij en finale kwijting rond de beëindiging van een niet nader te noemen samenwerking.",
      "Ik organiseer en host online Practice Circles namens RPN en geef intervisiebegeleiding voor gemeentes.",
      "Samen met theologen, een psychiater en anderen ben ik gastvrouw en programmaleider tijdens inspiratiebijeenkomsten op basis van bijbelschrift en zelftheologie.",
      "Mijn carrière als behandelend logopedist wordt afgesloten met een laatste factuur voor logopedie aan een zorgverzekeraar.",
    ],
    accentColor: "red",
  },
  {
    year: "2021-2023",
    title: "Verdieping, herbeslissen en Europese erkenning",
    summary: "Ik blijf mijn vak aanscherpen en verbreed mijn professionele registraties.",
    details: [
      "Mijn MCC-registratie wordt verlengd met drie jaren. Ik leer over Transactionele Analyse via TA-101 en doe een herbeslissingsmarathon bij de TA-Academie.",
      "In 2022 bekwaam ik me verder in Redecision Therapy onder begeleiding van Mil en Sonja Rosseau.",
      "In 2023 volg ik een PCC assessor training bij ICF Global rond de acht nieuwe coachcompetenties.",
      "Ik word lid van de EMCC en sta sinds 6 september 2023 ook bij de European Mentoring and Coaching Council, met NOBCO als Nederlandse divisie, geregistreerd als Senior Practitioner coach.",
      "Met de aanschaf van krielkippen die cliënten nieuwsgierig tegemoet kunnen komen, geniet ik volop van mijn afkomst uit boerenfamilies.",
    ],
    image: {
      src: "/Ardie/kippen koppel.jpeg",
      alt: "Een koppel krielkippen in de tuin.",
    },
    accentColor: "green",
  },
  {
    year: "2024",
    title: "Supervisor worden op Europees niveau",
    summary: "Mijn netwerk en mijn rol als opleider en supervisor groeien opnieuw.",
    details: [
      "Ik rond de tweejarige opleiding tot ESIA gecertificeerd Supervisor van zorgprofessionals af onder begeleiding van Tom Battye en zijn team in samenwerking met NOBCO/EMCC.",
      "Mijn netwerk met Nederlandse en Europese collega’s wordt flink uitgebreid en ik verzorg workshops over supervisie en Relational Presence, bijvoorbeeld in het kader van intervisie.",
      "Ik neem deel aan een intervisiegroep voor supervisie en executive coaching en ontwikkel samen met Dirk Verhoeven de meerdaagse Transactionele Analyse toegepast in professionele coaching.",
      "Inmiddels lever ik ook mijn bijdrage aan de opleiding tot ESIA gecertificeerde Supervisor.",
    ],
    accentColor: "orange",
  },
  {
    year: "2025",
    title: "Doorgaan met wat ertoe doet",
    summary: "Mijn werk is stevig geworteld en tegelijk in beweging.",
    details: [
      "Samen met collega’s organiseer ik de European Relational Presence Facilitator Days, dit keer in Eindhoven.",
      "Ik neem nog altijd deel aan inhoudelijke cursussen, professionaliseringsdagen, intervisie en spar regelmatig met een supervisor om mijn zaag scherp te houden.",
      "Momenteel bestaat mijn werk uit executive coachtrajecten vanuit Orato, het opleiden van professionele coaches namens de Associatie voor Coaching en supervisie van coaches.",
      "De dagen Authentiek Presenteren in Relational Presence die ik sinds 2003 geef bij ZIN in Vught blijven een kers op de taart.",
      "Mijn wens is om samen met andere specialisten mijn werk voor persoonlijke en professionele ontwikkeling voort te zetten.",
    ],
    image: {
      src: "/Ardie/•voor boekenkast mooi ERF03356_WEB.jpg",
      alt: "Portret van Ardie voor een boekenkast.",
      placement: "edge",
      wide: true,
    },
    accentColor: "blue",
  },
];

const toneStyles: Record<string, string> = {
  orange: "border-orato-orange/25 bg-orato-orange/10",
  blue: "border-orato-blue/25 bg-orato-blue/10",
  green: "border-orato-green/25 bg-orato-green/10",
};

const ArdiePage = () => {
  return (
    <div className="overflow-x-clip">
      <main className="bg-orato-light text-orato-dark">
        <section className="overflow-hidden bg-orato-light px-4 py-12 md:px-8 md:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-orato-dark/15 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orato-dark/70">
                {heroContent.eyebrow}
              </div>
              <h1 className={`${notoSerifDisplay.className} mt-6 max-w-3xl text-5xl leading-none text-center text-orato-dark md:text-left md:text-7xl lg:text-[6.25rem]`}>
                {heroContent.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-orato-dark/80 md:text-xl">
                {heroContent.intro}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-orato-dark/70 md:text-lg">
                {heroContent.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroContent.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-orato-dark/10 bg-white/70 px-4 py-2 text-sm font-medium text-orato-dark shadow-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/Contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-orato-dark px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orato-orange"
                >
                  Plan een kennismaking
                </Link>
                <a
                  href="tel:+31651088688"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-orato-dark/20 bg-white/60 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-orange hover:text-orato-orange"
                >
                  Bel +31 6 5108 8688
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-orato-orange/20 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-12 hidden h-36 w-36 rounded-full bg-orato-blue/20 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-orato-dark/10 bg-white shadow-[0_40px_120px_-45px_rgba(20,20,20,0.45)]">
                <Image
                  src={heroContent.image.src}
                  alt={heroContent.image.alt}
                  width={1600}
                  height={1200}
                  className="h-[28rem] w-full object-cover md:h-[38rem]"
                />
                {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-6 md:p-8">
                  <p className="max-w-md text-sm leading-6 text-white/95 md:text-base">
                    Een eerste indruk van de mens achter Orato: warm, aandachtig, helder en met oog voor wat echt gezegd wil worden.
                  </p>
                </div> */}
              </div>

              <div className="mt-5 rounded-[2rem] border border-orato-dark/10 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                      Introfilmpje
                    </p>
                    <p className="mt-2 text-sm leading-6 text-orato-dark/75">
                      Hier kan een klikbare video-preview komen zodra het definitieve filmfragment is toegevoegd.
                    </p>
                  </div>
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full border border-orato-dark/10 bg-orato-dark text-white">
                    <span className="ml-1 text-lg">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              {profileSections.map((section) => (
                <article
                  key={section.title}
                  className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.85)] md:p-8"
                >
                  <h2 className={`${notoSerifDisplay.className} text-3xl text-center text-white md:text-left md:text-5xl`}>
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-7 text-white/78">
                    {section.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {"highlight" in section && section.highlight ? (
                    <div className="mt-6 rounded-[1.5rem] border border-orato-orange/25 bg-orato-orange/10 p-5 text-lg leading-7 text-white">
                      {section.highlight}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="space-y-6">
              <div className="aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <Image
                  src="/Ardie/Iris 001.jpg"
                  alt="Ardie in een warm portret."
                  width={1400}
                  height={1600}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <Image
                  src="/Ardie/Ardie legt uit aan groep zittend RPN.jpg"
                  alt="Ardie geeft uitleg aan een groep deelnemers."
                  width={1400}
                  height={1100}
                  className="h-[16rem] w-full object-cover md:h-[20rem]"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <Image
                  src="/Ardie/•geknield flipover koenERF03509_WEB.jpg"
                  alt="Ardie geknield bij een flipover tijdens een coachingsmoment."
                  width={1400}
                  height={1100}
                  className="h-[18rem] w-full object-cover md:h-[22rem]"
                />
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  Mijn persoonlijke motivatie
                </p>
                <p className="mt-3 text-2xl leading-9 text-white">
                  Mensen helpen zichzelf te uiten zodat ze gezien en gehoord worden, letterlijk en figuurlijk, als persoon en professional.
                </p>
                <div className="mt-6 flex justify-end">
                  <QuoteBadge id="profile-motivation" quote={assignRandomQuote("motivation")} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Werkwijze & deskundigheid
              </p>
              <h2 className={`${notoSerifDisplay.className} mt-3 text-4xl text-center text-orato-dark md:text-left md:text-6xl`}>
                Diepgang zonder zweven, richting zonder hard te duwen
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {methodCards.map((card) => (
                <article
                  key={card.title}
                  className={`relative overflow-hidden rounded-[2rem] border bg-white shadow-[0_24px_80px_-45px_rgba(20,20,20,0.25)] ${toneStyles[card.tone]}`}
                >
                  {card.image ? (
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      width={1200}
                      height={900}
                      className="h-52 w-full object-cover"
                    />
                  ) : null}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-center text-orato-dark md:text-left">{card.title}</h3>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-orato-dark/80">
                      {card.text.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {card.title === "Kaders & vertrouwen" ? (
                      <p className="mt-5 text-sm leading-7 text-orato-dark/75">
                        Lees meer in de{" "}
                        <Link href="/Info/PrivacyVerklaring" className="font-semibold text-orato-orange underline-offset-4 hover:underline">
                          privacyverklaring
                        </Link>{" "}
                        en de{" "}
                        <Link href="/Info/AlgemeneVoorwaarden" className="font-semibold text-orato-orange underline-offset-4 hover:underline">
                          algemene voorwaarden
                        </Link>
                        .
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-orato-dark/10 bg-white px-6 py-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Registraties & rollen
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {credentialChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-orato-dark/10 bg-orato-light px-4 py-2 text-sm font-medium text-orato-dark"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <QuoteBadge id="credentials-quote" quote={assignRandomQuote("credentials", 4)} />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Ontwikkeling als rode draad
              </p>
              <h2 className={`${notoSerifDisplay.className} mt-3 text-4xl text-center text-white md:text-left md:text-6xl`}>
                Een leven in beweging, verbeeld als een rode draad
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                Geen rechte lijn, maar een brede golfbeweging van keuzes, verdieping, ondernemerschap, relaties, opleidingen en vakmanschap. Dit is de route waarlangs mijn werk en leven elkaar blijven voeden.
              </p>
            </div>

            <div className="mt-14">
              <RedThreadTimeline entries={timelineEntries} />
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 h-px w-28 bg-gradient-to-r from-orato-red via-orato-orange to-transparent" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Bedrijfsmotto
              </p>
              <h2 className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center text-orato-dark md:text-left md:text-6xl`}>
                Even stil staan . . . om verder te komen!
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-orato-dark/78">
                Omdat ik weet dat het onderbreken van de dagelijkse ratrace middels introspectie jou ontspanning, (zelf)compassie, inzicht, opties en verandering oplevert.
              </p>
              <p className="mt-4 text-lg font-semibold text-orato-orange">
                Ontdek jouw sleutels tot succes.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-6 lg:justify-end">
              <QuoteBadge id="motto-quote-a" quote={assignRandomQuote("motto-a", 5)} />
              <QuoteBadge id="motto-quote-b" quote={assignRandomQuote("motto-b", 8)} />
            </div>
          </div>
        </section>

        <section className="bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_32px_90px_-40px_rgba(0,0,0,0.85)]">
              <Image
                src="/Ardie/•voor boekenkast mooi ERF03356_WEB.jpg"
                alt="Ardie voor een boekenkast in haar werkomgeving."
                width={1400}
                height={1800}
                className="h-[22rem] w-full object-cover md:h-[30rem]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Contact
              </p>
              <h2 className={`${notoSerifDisplay.className} mt-3 max-w-3xl text-4xl text-center text-white md:text-left md:text-6xl`}>
                Ik ben benieuwd naar jou en je vraag
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Klik door naar het contactformulier of bel me. Als jij wilt onderzoeken, oefenen, aanscherpen of veranderen, kijk ik graag met je mee.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/Contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-orato-orange px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-orato-dark"
                >
                  Naar het contactformulier
                </Link>
                <a
                  href="tel:+31651088688"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-orato-orange hover:text-orato-orange"
                >
                  Bel +31 6 5108 8688
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterComp />
    </div>
  );
};

export default ArdiePage;
