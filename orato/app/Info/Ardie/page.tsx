import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Display, Tangerine } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";
import IntroVideoCard from "../../components/ardie/IntroVideoCard";
import MottoHandwriting from "../../components/ardie/MottoHandwriting";
import QuoteBadge from "../../components/ardie/QuoteBadge";
import RedThreadTimeline, {
  type ArdieTimelineEntry,
} from "../../components/ardie/RedThreadTimeline";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ardie",
  description:
    "Maak kennis met Ardie Nooijen-Kuijpers: Master Certified Coach, coachsupervisor, coachopleider en presentatietrainer met meer dan 35 jaar ervaring.",
  alternates: {
    canonical: "/Info/Ardie",
  },
  openGraph: {
    title: "Ardie | ORATO",
    description:
      "Maak kennis met Ardie Nooijen-Kuijpers en haar werk als Master Certified Coach, coachsupervisor, coachopleider en presentatietrainer.",
    url: "/Info/Ardie",
    images: [
      {
        url: "/Ardie/orato_2024_21 september 2024-41_WEB 03634 schommel hand links.jpg",
        width: 1200,
        height: 630,
        alt: "Ardie Nooijen-Kuijpers in een groene omgeving.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardie | ORATO",
    description:
      "Maak kennis met Ardie Nooijen-Kuijpers en haar werk als coach, supervisor en opleider.",
    images: ["/Ardie/orato_2024_21 september 2024-41_WEB 03634 schommel hand links.jpg"],
  },
};

const heroContent = {
  eyebrow: "Kennismaken met Ardie",
  title: "Ardie",
  intro:
    "Hallo, welkom op mijn website, bedoeld als kennismaking met mij en mijn werk als MasterCoach, coachsupervisor, coachopleider en presentatietrainer-en coach. Ja, ik heb iets met communicatie en vooral met coaching.",
  body: "Ik help jou graag met wat jij wilt onderzoeken en bereiken. Je bent van harte welkom!",
  roles: [
    { label: "Mastercoach", href: "/Onderwerpen/Coaching" },
    { label: "Supervisie", href: "/Onderwerpen/Supervisie" },
    { label: "Coachopleider", href: "/Onderwerpen/Supervisie#coachopleider" },
    { label: "Presentatietrainer", href: "/Onderwerpen/Presenteren" },
  ],
  image: {
    src: "/Ardie/orato_2024_21 september 2024-41_WEB 03634 schommel hand links.jpg",
    alt: "Ardie met haar gezin op een schommel in het groen.",
  },
};

const introVideo = {
  
  src: "/Ardie/Ardie intro edited.mov",
  title: "Introfilmpje",
  description: "Maak alvast kort kennis met mij en mijn werk.",
};

const profileSections = [
  {
    title: "Typisch Ardie",
    text: [
      "Men kent mij als een betrokken en warm mens, denkend in mogelijkheden en genietend van het leven. Als oudste dochter geboren in het Noord-Brabantse Deurne, nu wonend in Nuenen, gelukkig met Peet Nooijen als levenspartner sinds ons 15e levensjaar én gezegend met onze kinderen Eva en Art.",
      "Van jongs af aan ben ik degene voor 'het goede gesprek'. Ik vind aansluiting met mensen van jong tot oud, met uiteenlopende opvattingen, functies en levenservaringen. Ik houd van afspraken nakomen en mijn perfectionisme maakt dat ik zorgvuldig te werk ga en zeker ben van mijn onzekerheden.",
      "Ik sport veel, houd van lekker eten, inspiratie opdoen, kunst, bloemen en de rust van de natuur. Ook ik heb veerkracht moeten tonen in het leven met impactvolle levenslessen zoals: gooi niet weg wat goed is en blijf trouw aan je eigen waarheid.",
      "Mijn boek 'Voorbij de buitenkant' beschrijft een grondige introspectie, een ervaringsverhaal over 50 jaar Ardie in 10 jaar psychoanalyse. Ik ben trots op meer dan 35 jaar werk als eigenaar van Orato. De naam is afgeleid van 'Oratio', Latijns voor welsprekendheid, redevoering. Ik voel me een bevoorrecht mens, rijk van binnen en van buiten, dankbaar voor alles en iedereen waar ik iets voor mag betekenen.",
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
      "Ik sta bekend om mijn professionele aanpak in de omgang met cliënten en opdrachtgevers en wordt ervaren als een veelzijdig gesprekspartner. Men voelt zich snel vertrouwd bij mij. De essentie van een vraagstuk ligt snel op tafel, resultaatgericht en zonder gezweef.",
      "Confronterend waar nodig, uitgesproken en liefdevol sturend met tact. Pragmatisch ook, met emotionele diepgang, therapeutisch indien gewenst. Doelen stellen is niet genoeg: we gaan voor wenselijke effecten, zo concreet mogelijk geformuleerd als succescriteria.",
      "Mijn brede aanbod van zeer veel werkvormen wordt gewaardeerd.",
      "Je mag verwachten dat ik gebruik wat zich aandient in onze werkrelatie aan gedrag, gedachtes en gevoelens, in dienst van jouw ontwikkelvraag. Kortom, warm en structurerend.",
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
      "Momenteel kent mijn werk vier pijlers: (executive)coaching, coachsupervisie, coachopleiding en presentatietraining-coaching, met alle voordelen van de kruisbestuiving daartussen. Verder ben ik actief als inspirator van de OCN-Dames (Ondernemers Contact Nuenen) en houd ik ook mijn eigen zaag scherp middels intervisie en supervisie.",
      "Ik heb sinds 1989 honderden mensen therapeutisch behandeld, minstens 400 mensen individueel gecoacht en gesuperviseerd en meer dan honderd groepstrainingen en workshops gegeven. Men noemt mij een makelaar in zelfvertrouwen en nieuw perspectief.",
      "Ambitie is mij niet vreemd."
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
  "ICF Master Certified Coach",
  "NOBCO/EMCC Senior Practitioner",
  "ESIA Supervisor",
  "Coachopleider",
  "Speaking Circle Facilitator",
  "OCN-Dames inspirator",
];

const featuredReference = {
  quote: "Ik gun iedereen een Ardie!",
  name: "Arthur Gieles",
  role: "Huisarts, in memoriam",
};

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
    year: "1985-1989",
    title: "De eerste afslag",
    summary: "Na het Atheneum loopt de route anders dan gedacht, maar wel precies richting mijn passie.",
    details: [
      {
        text: "Na het Atheneum word ik uitgeloot voor de studie geneeskunde.",
        highlights: ["Atheneum"],
      },
      {
        text: "Ik start de opleiding Logopedie en Foniatrie en leg daar de basis voor mijn latere werk. Communicatie als basis.",
        highlights: ["Logopedie en Foniatrie","opleiding"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 1985 of 11986-1989.jpeg",
        alt: "Foto van een microfoon als beeld bij de eerste studiejaren.",
        tall: true,
      },
    ],
    accentColor: "orange",
  },
  {
    year: "1989-1992",
    title: "Wetenschap en ondernemerschap",
    summary: "Ik combineer onderzoek met mijn eerste onderneming.",
    details: [
      {
        text: "Ik volg de universitaire bovenbouwstudie Spraak- en Taalpathologie, gericht op wetenschappelijk onderzoek naar spraak, taal, gehoor en stem.",
        highlights: ["Spraak- en Taalpathologie", "wetenschappelijk onderzoek"],
      },
      {
        text: "Ik neem zitting in de Thinktank van Universiteit Nijmegen.",
        highlights: ["Thinktank"],
      },
      {
        text: "Samen met Marion Weijts start ik TSP, een bedrijf voor trainingen in spreken en presenteren.",
        highlights: ["start ik TSP", "Marion Weijts"],
      },
    ],
    accentColor: "blue",
  },
  {
    year: "1992-2000",
    title: "Praktijk, gezin en een steeds bredere horizon",
    summary: "Mijn werk verdiept zich inhoudelijk en verbreedt tegelijk in ondernemerschap en levenservaring.",
    details: [
      {
        text: "Ik koop Logopediepraktijk Tiel over in een multidisciplinaire setting en specialiseer me in stemstoornissen, hyperventilatie, stotteren en complexe communicatieproblemen bij kinderen en hun ouders.",
        highlights: ["Logopediepraktijk Tiel"],
      },
      {
        text: "Ik neem logopedisten in dienst, werk intensief samen met andere paramedici, huisartsen en specialisten en ben actief in allerlei commissies van de Nederlandse Vereniging voor Logopedie & Foniatrie.",
        highlights: ["in allerlei commissies"],
      },
      {
        text: "Een verblijf in Ghana vanwege een coschap van mijn levenspartner Peet maakt diepe indruk. Ik trouw in 1995. Eva en Art worden geboren. TSP groeit door tot ORATO spreken en presenteren.",
        highlights: ["Ghana", "trouw", "ORATO spreken en presenteren"],
      },
      {
        text: "Ik train ambtenaren en wethouders voor Bestuursacademie Nederland, en krijg een aanbod van Schouten & Nelissen als trainer/acquisiteur. Een intensieve periode volgt waarin praktijkwerk, trainen, verdere scholing, een jong gezin en een druk sociaal leven samenkomen.",
        highlights: ["Bestuursacademie Nederland"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 1992-2000jpeg.jpeg",
        alt: "Trouwfoto als beeld bij gezin, groei en ondernemerschap.",
        placement: "edge",
      },
    ],
    accentColor: "red",
  },
  {
    year: "2001-2002",
    title: "Verhuizen en opnieuw wortelen",
    summary: "Een nieuwe woonplaats vraagt om een nieuw netwerk en nieuwe professionele rollen.",
    details: [
      {
        text: "Ik verkoop mijn logopediepraktijk als we verhuizen naar Nuenen nadat mijn echtgenoot zijn promotieonderzoek en specialisatie tot patholoog afrondt.",
        highlights: ["logopediepraktijk"],
      },
      {
        text: "Ik bouw een nieuw leven op, onder meer met acht jaar voorzitterschap van de MedezeggenschapsRaad van de basisschool van onze kinderen en door me aan te sluiten bij netwerkvereniging OCN (Ondernemers Contact Nuenen).",
        highlights: ["voorzitterschap van de MedezeggenschapsRaad", "OCN"],
      },
      {
        text: "Ik word externe deskundige bij examinering van studenten, geef gastcolleges over ondernemerschap, neem deel aan een klankbordgroep van Fontys Paramedisch Hogeschool  waar ik jarenlang lid van de Raad van Advies zal zijn. Ik sluit me aan bij Logopediekring Nuenen.",
        highlights: ["externe deskundige", "gastcolleges", "Logopediekring Nuenen"],
      },
      {
        text: "Daarnaast volg ik twee jaaropleidingen tot NLP Master bij het IEP in Nijmegen en vervolgens de opleiding tot Speaking Circle Facilitator in Amsterdam.",
        highlights: ["NLP Master", "Speaking Circle Facilitator"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2001-2002 plantje met wortelnetwerk.JPG",
        alt: "Plantje met wortelnetwerk als beeld voor opnieuw wortelen.",
        placement: "edge",
        tall: true,
      },
    ],
    accentColor: "green",
  },
  {
    year: "2004",
    title: "ORATO wint aan eigenheid",
    summary: "Mijn bedrijf en aanbod worden scherper, zelfstandiger en creatiever.",
    details: [
      {
        text: "ORATO verandert van een V.O.F. naar mijn eenmansbedrijf. De training Effectief Presenteren blijf ik samen met Drs. Marion Weijts geven.",
        highlights: ["ORATO", "Effectief Presenteren"],
      },
      {
        text: "De combinatie van logopedisch onderzoek en behandeling met trainingen, workshops en interactieve lezingen blijft bestaan en wordt aangevuld met commerciële (presentatie)coaching voor diverse (non)profitorganisaties.",
        highlights: ["commerciële (presentatie)coaching"],
      },
      {
        text: "Samen met Maja Visser ontwikkel ik nieuwe trainingen voor onder meer MEE Nederland, gemeenten en provincies, zoals: Sterk overkomen, Leren acquireren, Netwerk MEE, Persoonlijke uitstraling en Jij en je werk in de schijnwerpers.",
        highlights: ["ontwikkel ik nieuwe trainingen", "Maja Visser"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2004 eigenheid s.jpg",
        alt: "Spotlight als beeld voor eigenheid en zichtbaarheid.",
        placement: "edge",
        wide: true,
      },
    ],
    accentColor: "orange",
  },
  {
    year: "2005",
    title: "Binnenkant en buitenkant verbinden",
    summary: "Ik investeer bewust in congruentie. ",
    details: [
      {
        text: "Ik volg de opleiding tot ImageMaster bij Beauty Jeunique om naast aandacht voor de binnenkant ook deskundig advies te kunnen geven over de buitenkant.",
        highlights: ["ImageMaster bij Beauty Jeunique"],
      },
      {
        text: "Bij Schouten & Nelissen vergroot ik mijn deskundigheid in cognitief herstructureren met RET, afhankelijk van de toepassing als Rationele Effectiviteitstraining of Rationele Emotieve Therapie.",
        highlights: ["RET", "Rationele Effectiviteitstraining"],
      },
    ],
    accentColor: "blue",
  },
  {
    year: "2007",
    title: "Ken uzelve! Een grondige introspectie",
    summary: "You have to feel it, to heal it. Carl Jung",
    details: [
      {
        text: "Ik ga een intensief en diepgaand avontuur aan via een klassieke Freudiaanse psychoanalyse.",
        highlights: ["klassieke Freudiaanse psychoanalyse"],
      },
      {
        text: "Dit zal van grote betekenis blijken voor mij persoonlijk en voor mijn werk als coach, trainer en therapeut.",
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2007 Freudiaanse bank.jpg",
        alt: "Freudiaanse bank als beeld bij de psychoanalyse.",
        placement: "edge",
        tall: true,
      },
      {
        src: "/Ardie/mijn dijn pijn fijn zijn.jpg",
        alt: "Gedicht met de woorden mijn, dijn, pijn en fijn zijn.",
        placement: "edge",
        tall: true,
        contain: true,
      },
    ],
    accentColor: "red",
  },
  {
    year: "2008-2011",
    title: "Relaties, sales en vrouwelijk ondernemerschap",
    summary: "Mensenwerk kent allerlei uitdagingen en dus kansen om te ont-wikkelen.",
    details: [
      {
        text: "Naast werkgerelateerde coachvragen word ik steeds vaker gevraagd te helpen bij problematische liefdesrelaties. Ik verdiep me in Emotionally Focused Therapy via de Houd me vast-methode.",
        highlights: ["Emotionally Focused Therapy"],
      },
      {
        text: "Ik krijg verdere training in het trainen van Karin de Galan.",
        highlights: ["trainen"],
      },
      {
        text: "In 2011 neem ik mijn eigen salesvaardigheden onder de loep met salescoach Michel van Vuuren van de Nederlandse Sales Academie.",
        highlights: ["Nederlandse Sales Academie"],
      },
      {
        text: "Ik initieer de OCN-Dames, een netwerkgroep van vrouwelijke ondernemers.",
        highlights: ["OCN-Dames"],
      },
    ],
    accentColor: "green",
  },
  {
    year: "2011-2012",
    title: "Kiezen voor wat al goed is",
    summary: "Ik blijf zoeken naar de beste vorm voor mijn talenten en kies opnieuw bewust voor ORATO.",
    details: [
      {
        text: "Op mijn initiatief ontstaat XPRSS Express for Success, een samenwerking met specialisten in persoonlijke uitstraling, catwalk, styling en fotografie om mannen en vrouwen een sterke eerste indruk te geven.",
        highlights: ["XPRSS Express for Success"],
      },
      {
        text: "Een baan als praktijkondersteuner GGZ in een huisartsenpraktijk ligt binnen handbereik, maar ik kies met volle overtuiging voor wat al goed is: ORATO Communicatie Coaching.",
        highlights: ["praktijkondersteuner GGZ", "ORATO Communicatie Coaching"],
      },
      {
        text: "In deze periode verdiep ik me ook in psychopathologie bij volwassenen via een cursus bij het RINO.",
        highlights: ["psychopathologie","bij vowassenen"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2011-2012 xprss kleur voor corten.jpg",
        alt: "XPRSS Express for Success met de deelnemende dames.",
        placement: "edge",
        wide: true,
      },
      {
        src: "/Ardie/Ardie timeline new/xprss logo transparant.png",
        alt: "Logo van XPRSS Express for Success.",
        placement: "edge",
        wide: true,
        whiteBackground: true,
      },
    ],
    accentColor: "orange",
  },
  {
    year: "2013-2016",
    title: "Professionaliseren doe je samen",
    summary: "Internationale erkenning maakt het verschil en ORATO krijgt een nieuwe visuele jas.",
    details: [
      {
        text: "Ik start met opleidingen bij de Associatie voor Coaching tot professionele coach (ACC Advanced Certified Coach en PCC Professional Certified Coach) volgens kwalificaties van de ICF en EMCC.",
        highlights: ["professionele coach", "ACC", "PCC"],
      },
      {
        text: "Ik word lid van ICF International Coach Federation en Nederland en sluit me in 2014 aan bij een intervisiegroep voor professionele coaches: de Binnencirkel van de AvC.",
        highlights: ["intervisiegroep", "Binnencirkel"],
      },
      {
        text: "Dankzij het werk van Els Ruiters van Grafidi krijgt ORATO in 2015 een eigentijds logo, een nieuwe interactieve website en nieuw drukwerk.",
      },
      {
        text: "In diezelfde periode ontwikkel en geef ik samen met Anne Vinke-van Ingen de cursus Aansprekend (s)Preken voor mensen die het woord nemen in een kerk.",
        highlights: ["cursus Aansprekend (s)Preken"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2013-2014 met Anne.jpg",
        alt: "Ardie samen met Anne Vinke-van Ingen.",
        placement: "edge",
        wide: true,
      },
    ],
    accentColor: "blue",
  },
  {
    year: "2017",
    title: "Schrijven, presenteren en Relational Presence",
    summary: "Een jaar van oogsten, zelfexpressie en internationale verbondenheid.",
    details: [
      {
        text: "Vanuit de vraag uit het bedrijfsleven en mijn eigen behoefte om ook in het Engels te coachen volg ik een taaltraining op maat bij Regina Coeli in Vught. Een mooie bijvangst is de tijd voor bezinning.",
        highlights: ["Regina Coeli"],
      },
      {
        text: "In de lente van 2017 word ik 50 jaar en beëindig ik de psychoanalyse. In de zomemaanden sschrijf ik in the Little House in Cotswold: 'Op de bank' Een ervaringsverhaal over 50 jaar Ardie in 10 jaar psychoanalyse.  Een ervaringsverhaal t/m analyse moet vet.",
        highlights: ["The Little House in Cotswold", "een ervaringsverhaal"],
      },
      {
        text: "Tijdens de European Speaking Circle Facilitator Days geef ik in Londen een TEDTalk over psychoanalyse en mijn vak als coach en facilitator.",
        highlights: ["TEDTalk"],
      },
      {
        text: "Samen met gepassioneerde collega’s in Europa stichten we het Relational Presence Network en word ik bestuurslid.",
        highlights: ["Relational Presence Network", "bestuurslid"],
      },
    ],
    images: [
      {
        src: "/Ardie/KAI DSC_1643 gekropt.jpg",
        alt: "Ardie in een open portret in de natuur.",
        tall: true,
      },
    ],
    accentColor: "red",
  },
  {
    year: "2018",
    title: "Volle bak manifestatie van senioriteit.",
    summary: "Mijn rol als opleider en supervisor krijgt stevig vorm.",
    details: [
      {
        text: "De eerste editie van de 4-daagse training Kerntraject !K-2.0 wordt gegeven als resultaat van een niet nader te noemen samenwerking.",
        highlights: ["Kerntraject !K-2.0"],
      },
      {
        text: "k volg mijn hart en ga namens de Associatie voor Coaching professionele coaches opleiden, geef in-company trainingen in coachen, coachend leidinggeven en acquireren en start met groepssupervisie.",
        highlights: ["professionele coaches opleiden", "coaches op", "in-company trainingen", "groepssupervisie"],
      },
      {
        text: "Ik train Technasiumdocenten in coachend begeleiden. Heerlijk dit opleidingsinstituut op fietsafstand in Aarle-Rixtel. Onder de vlag van Orato help ik steeds vaker teams beter te communiceren met elkaar en collega’s.",
        highlights: ["teams"]
      },
      {
        text: "Ik word lid van de NOBCO. Mijn algemene voorwaarden en privacyverklaring worden geactualiseerd in het kader van de AVG en ik zet de stap naar registratie als MCC Master Certified Coach bij de ICF met o.a. meer dan 2500 uur coachervaring. Een kroon op mijn werk!",
        highlights: ["AVG", "MCC Master Certified Coach"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2018 Diploma mcc. of filmpje.jpeg",
        alt: "Diploma als beeld bij de MCC-registratie.",
        placement: "edge",
        wide: true,
        badgeLabel: "Kroon op mijn werk",
        badgeIcon: "crown",
      },
    ],
    accentColor: "orange",
  },
  {
    year: "2019",
    title: "Boek, pitchbegeleiding en workshop",
    summary: "Binnenkant krijgt buitenkant en ik help anderen met hun zichtbaarheid.",
    details: [
      {
        text: "Mijn boek 'Voorbij de buitenkant' wordt gedrukt in kleine oplage in eigen beheer, prachtig vormgegeven door Bas Linssen.",
        highlights: ["Mijn boek 'Voorbij de buitenkant'"],
      },
      {
        text: "Ik start met pitchbegeleiding in het kader van de Young Talent Award van het OCN en geef de workshop ' Een groot ei leggen' om belangrijke veranderingen en keuzes te faciliteren.",
        highlights: ["pitchbegeleiding", "workshop ' Een groot ei leggen'", "Young Talent Award"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2019 Boek.jpeg",
        alt: "Boekcover van Voorbij de buitenkant.",
        placement: "edge",
        tall: true,
      },
    ],
    accentColor: "blue",
  },
  {
    year: "2020",
    title: "Volhouden in een lastige periode",
    summary: "Ook onder druk blijf ik werken, hosten en betekenisvolle ontmoetingen organiseren.",
    details: [
      {
        text: "Een ongewenste rechtszaak begint en zal na twee jaar aafgesloten worden met 100% gelijk voor mij en finale kwijting m.b.t. de beëindiging van een collegiale samenwerking. Een levensles rijker.",
        highlights: ["ongewenste", "rechtszaak", "100% gelijk"],
      },
      {
        text: "Ik organiseer en host online Practice Circles namens Relational Presence Network en geef intervisiebegeleiding voor gemeentes.",
        highlights: ["Practice Circles", "intervisiebegeleiding"],
      },
      {
        text: "Samen met theologen, een psychiater en anderen ben ik programmaleider en gastvrouw tijdens inspiratiebijeenkomsten op basis van bijbelschrift en zelftheologie.",
        highlights: ["programmaleider", "gastvrouw", "inspiratiebijeenkomsten"],
      },
      {
        text: "Mijn carrière als behandelend logopedist wordt afgesloten met een groot compliment van een klant die stotterde en een laatste factuur voor logopedie aan een zorgverzekeraar.",
        highlights: ["laatste factuur voor logopedie"],
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2020 Niet betreden kwetsbaar gebied.jpeg",
        alt: "Kwetsbaar gebied-bord als beeld bij een moeilijke periode.",
        placement: "edge",
        wide: true,
      },
    ],
    accentColor: "red",
  },
  {
    year: "2021-2023",
    title: "Verdieping, herbeslissen en Europese erkenning",
    summary: "Ik blijf mijn vak aanscherpen en verbreed mijn professionele registraties.",
    details: [
      {
        text: "Mijn MCC-registratie wordt verlengd met drie jaren. Ik leer over Transactionele Analyse (TA-101) en doe een herbeslissingsmarathon bij de TA-Academie.",
        highlights: ["MCC-registratie wordt verlengd", "Transactionele Analyse", "herbeslissingsmarathon"],
      },
      {
        text: "In 2022 bekwaam ik me verder in Redecision Therapy onder de bezielende begeleiding van Mil en Sonja Rosseau.",
        highlights: ["Redecision Therapy"],
      },
      {
        text: "In het kader van de coachopleidingen die ik geef, volg ik in 2023 een PCC assessor training bij ICF Global gebaseerd op de 8 nieuwe coachcompetenties.",
        highlights: ["PCC assessor training"],
      },
      {
        text: "Ik word lid van de EMCC en sta m.i.v. september 2023 2023 ook bij de European Mentoring and Coaching Council, met NOBCO als Nederlandse divisie, geregistreerd als Senior Practitioner coach.",
        highlights: ["Senior Practitioner"],
      },
      {
        text: "Met de aanschaf van krielkippen die cliënten nieuwsgierig tegemoet kunnen komen, geniet ik volop van mijn afkomst uit boerenfamilies.",
      },
    ],
    images: [
      {
        src: "/Ardie/kippen koppel.jpeg",
        alt: "Een koppel krielkippen in de tuin.",
      },
    ],
    accentColor: "green",
  },
  {
    year: "2024",
    title: "Supervisor worden op Europees niveau",
    summary: "Mijn netwerk en mijn rol als opleider en supervisor groeien opnieuw.",
    details: [
      {
        text: "Ik rond de tweejarige opleiding tot ESIA gecertificeerd Supervisor van zorgprofessionals af onder begeleiding van de Engelse Tom Battye en zijn team in samenwerking met NOBCO/EMCC.",
        highlights: ["ESIA gecertificeerd Supervisor"],
      },
      {
        text: "Mijn netwerk met Nederlandse en Europese collega’s wordt flink uitgebreid en ik verzorg workshops over supervisie en Relational Presence, bijvoorbeeld in het kader van intervisie. Opnieuw een renewal als MCC.",
        highlights: ["workshops over supervisie en Relational Presence", "Relational Presence"],
      },
      {
        text: "Ik neem deel aan een intervisiegroep voor supervisie en executive coaching (VEC). Ik ontwikkel en geef de meerdaagse Transactionele Analyse toegepast in professionele coaching in nauwe samenwerking met Dirk Verhoeven, Associatie voor Coaching.",
        highlights: ["intervisiegroep voor supervisie en executive coaching","meerdaagse Transactionele Analyse toegepast in professionele coaching"],
      },
      {
        text: "Inmiddels lever ik ook mijn bijdrage aan de opleiding tot ESIA gecertificeerde Supervisor.",
      },
    ],
    accentColor: "orange",
  },
  {
    year: "2025-2026",
    title: "Doorgaan met wat ertoe doet",
    summary: "Mijn werk is stevig geworteld, kleurrijk en blijft in beweging.",
    details: [
      {
        text: "Samen met collega’s organiseer ik de European Relational Presence Facilitator Days, dit keer in Eindhoven.",
        highlights: ["European Relational Presence Facilitator Days", "Eindhoven"],
      },
      {
        text: "Ik neem nog altijd deel aan inhoudelijke cursussen, professionaliseringsdagen, intervisie en spar regelmatig met een supervisor om 'mijn zaag scherp te houden'.",
        highlights: ["mijn zaag scherp te houden"],
      },
      {
        text: "Momenteel bestaat mijn werk uit (executive) coachtrajecten vanuit Orato, het opleiden van professionele coaches namens de Associatie voor Coaching en supervisie van coaches.",
        highlights: ["(executive) coachtrajecten", "het opleiden van professionele coaches", "supervisie van coaches"],
      },
      {
        text: "Met als kers op de taart de dagen Authentiek Presenteren in Relational Presence die ik sinds 2003 geef bij ZIN in Vught.",
        highlights: ["Authentiek Presenteren in Relational Presence"],
      },
      {
        text: "Een half jaar na elkaar overlijden mijn geliefde schoonmoeder en vader. In dankbaarheid nemen we waardig afscheid. Meer tijd is nodig om met toewijding mantelzorg te verlenen aan mijn schoonvader en moeder.",
        highlights: ["dankbaarheid", "mantelzorg"],
      },
      {
        text: "In 2026 besluit ik minder dagen per week te gaan werken. De nieuwe up-to-date website voor ORATO is een feit. Dankjewel Art! Ik blijf, samen met andere vakmensen, mijn werk voor persoonlijke en professionele ontwikkeling voortzetten!",
      },
    ],
    images: [
      {
        src: "/Ardie/Ardie timeline new/naast 2025 boom met gekleurde bladeren.JPG",
        alt: "Boom met gekleurde bladeren als beeld voor doorgaan en blijven groeien.",
        placement: "edge",
        quote: "Als je goed om je heen kijkt, zie je dat alles gekleurd is.",
      },
    ],
    accentColor: "blue",
  },
];

const toneStyles: Record<string, string> = {
  orange: "border-orato-orange/25 bg-orato-orange/10",
  blue: "border-orato-blue/25 bg-orato-blue/10",
  green: "border-orato-green/25 bg-orato-green/10",
};

const kennismakingCtaClassName =
  "inline-flex min-h-14 items-center justify-center rounded-full px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] transition";

const ArdiePage = () => {
  return (
    <div className="overflow-x-clip">
      <main className="bg-orato-light text-orato-dark">
        <section className="relative overflow-hidden bg-orato-light px-4 py-12 md:px-8 md:py-20 lg:px-10">
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

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 lg:grid-cols-4">
                {heroContent.roles.map((role) => (
                  <Link
                    key={role.label}
                    href={role.href}
                    className="inline-flex min-h-12 cursor-small items-center justify-center rounded-full border border-orato-dark/10 bg-white/75 px-4 py-2 text-center text-sm font-semibold text-orato-dark shadow-sm transition hover:-translate-y-0.5 hover:border-orato-orange/45 hover:text-orato-orange hover:shadow-[0_16px_34px_-24px_rgba(20,20,20,0.3)]"
                  >
                    {role.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/Contact"
                  className={`${kennismakingCtaClassName} bg-orato-dark text-white hover:bg-orato-orange`}
                >
                  Vrijblijvend kennismaken                </Link>
                <a
                  href="tel:+31651088688"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-orato-dark/20 bg-white/60 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark transition hover:border-orato-orange hover:text-orato-orange"
                >
                  Bel +31 6 510 88 6 88
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

              <IntroVideoCard
                src={introVideo.src}
                title={introVideo.title}
                description={introVideo.description}
              />
            </div>
          </div>

          <div
            className={`${tangerine.className} absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-4xl text-orato-dark/85 md:block lg:text-5xl`}
          >
            &lsquo;Even stil staan . . . om verder te komen!&rsquo;
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
              <Link
                href="/Contact"
                className={`${kennismakingCtaClassName} w-full bg-orato-orange text-white hover:bg-white hover:text-orato-dark sm:w-auto`}
              >
                Vrijblijvend kennismaken
              </Link>
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
                  src="/Ardie/zonsopkomst gratis pxhere.jpg"
                  alt="Zonsopkomst als beeld voor een nieuw perspectief."
                  width={1200}
                  height={675}
                  className="h-[18rem] w-full object-cover md:h-[22rem]"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Mijn persoonlijke motto
            </p>
            <p
              className={`${tangerine.className} mt-2 text-5xl font-bold leading-none text-orato-orange md:text-7xl`}
            >
              Liefdevol voorwaarts
            </p>
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
              {methodCards.map((card) => {
                const isTrustCard = card.title === "Kaders & vertrouwen";

                return (
                  <article
                    key={card.title}
                    className={`relative overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_-45px_rgba(20,20,20,0.25)] ${
                      isTrustCard
                        ? "cursor-invert border-orato-dark/90 bg-orato-dark text-white shadow-[0_28px_90px_-42px_rgba(20,20,20,0.55)]"
                        : `bg-white ${toneStyles[card.tone]}`
                    }`}
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
                      <h3
                        className={`text-2xl font-semibold text-center md:text-left ${
                          isTrustCard ? "text-white" : "text-orato-dark"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <div
                        className={`mt-4 space-y-4 text-sm leading-7 ${
                          isTrustCard ? "text-white/78" : "text-orato-dark/80"
                        }`}
                      >
                        {card.text.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {isTrustCard ? (
                        <p className="mt-5 text-sm leading-7 text-white/70">
                          Lees meer in de{" "}
                          <Link
                            href="/Info/PrivacyVerklaring"
                            className="cursor-small font-semibold text-orato-orange underline decoration-white/20 underline-offset-4 transition hover:decoration-orato-orange"
                          >
                            privacyverklaring
                          </Link>{" "}
                          en de{" "}
                          <Link
                            href="/Info/AlgemeneVoorwaarden"
                            className="cursor-small font-semibold text-orato-orange underline decoration-white/20 underline-offset-4 transition hover:decoration-orato-orange"
                          >
                            algemene voorwaarden
                          </Link>
                          .
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>



            <article className="mt-6 rounded-[2rem] border border-orato-orange/20 bg-orato-orange/8 px-6 py-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                Referentie
              </p>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
                <blockquote className="min-w-0 flex-1 text-2xl leading-tight text-orato-dark md:text-3xl">
                  &ldquo;{featuredReference.quote}&rdquo;
                </blockquote>
                <div className="relative z-30 flex h-20 w-20 shrink-0 justify-end overflow-visible">
                  <QuoteBadge
                    id="credentials-quote"
                    quote={assignRandomQuote("credentials", 4)}
                    className="origin-top-right scale-[0.82]"
                    badgeClassName="text-orato-dark"
                    tooltipAlign="right"
                  />
                </div>
              </div>
              <p className="mt-5 text-base font-semibold text-orato-dark">
                {featuredReference.name}
              </p>
              <p className="mt-1 text-sm text-orato-dark/60">{featuredReference.role}</p>
            </article>

            <div className="mt-6 flex justify-start">
              <Link
                href="/Contact"
                className={`${kennismakingCtaClassName} bg-orato-dark text-white hover:bg-orato-orange`}
              >
                vrijblijvend kennismaken
              </Link>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-orato-dark px-4 py-16 text-white md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Een leven in beweging
              </p>
              <h2 className={`${notoSerifDisplay.className} mt-3 text-4xl text-center text-white md:text-left md:text-6xl`}>
                Ontwikkeling als 'rode draad' 
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                Geen rechte lijn, juist een golfbeweging van keuzes, verdieping, ondernemerschap, relaties, opleidingen en vakmanschap. Dit is de route waarlangs mijn professionele en persoonlijke leven elkaar blijven voeden:
              </p>
            </div>

            <div className="mt-14">
              <RedThreadTimeline entries={timelineEntries} />
            </div>
          </div>
        </section>

        <section className="bg-orato-light px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-orato-dark/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,241,234,0.96))] shadow-[0_32px_90px_-45px_rgba(0,0,0,0.28)]">
            <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
              <div className="relative px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
                <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-orato-dark/10 to-transparent lg:block" />
                <div className="mb-6 h-px w-28 bg-gradient-to-r from-orato-red via-orato-orange to-transparent" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
                  Bedrijfsmotto
                </p>
                <div className="mt-3">
                  <h2 className={`${notoSerifDisplay.className} max-w-3xl text-4xl text-center text-orato-dark md:text-left md:text-6xl`}>
                    Even stil staan
                  </h2>
                  <MottoHandwriting
                    className={`${tangerine.className} text-center text-[3.3rem] leading-[0.9] text-orato-orange md:text-left md:text-[5.3rem] lg:text-[6rem]`}
                    text=". . . om verder te komen!"
                  />
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-orato-dark/78">
                  Omdat ik weet dat het onderbreken van de dagelijkse ratrace middels introspectie jou ontspanning, (zelf)compassie, inzicht, opties en verandering oplevert.
                </p>
                <p className="mt-4 text-lg font-semibold text-orato-orange">
                  Ontdek jouw sleutels tot succes.
                </p>
                <div className="mt-8">
                  <Link
                    href="/Contact"
                    className={`${kennismakingCtaClassName} bg-orato-dark text-white hover:bg-orato-orange`}
                  >
                    vrijblijvend kennismaken
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[23rem] overflow-hidden bg-orato-light px-6 py-8 md:px-10 md:py-10">
                <div className="relative mx-auto h-full max-w-[32rem]">
                  <div className="relative overflow-hidden rounded-[2rem] border border-orato-dark/10 bg-white p-3 shadow-[0_30px_90px_-44px_rgba(20,20,20,0.28)]">
                    <Image
                      src="/Ardie/Ardie timeline new/naast motto onderaan pag Ardiesleutelbos.jpg"
                      alt="Sleutelbos met bloemen als beeld bij het bedrijfsmotto."
                      width={1200}
                      height={900}
                      className="h-[20rem] w-full rounded-[1.35rem] object-cover md:h-[24rem]"
                    />
                    <div className="absolute inset-x-6 bottom-6 rounded-[1rem] border border-white/60 bg-white/88 px-4 py-3 shadow-sm backdrop-blur-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orato-dark/48">
                        Sleutels Tot Succes
                      </p>
                      <p className={`${tangerine.className} mt-1 text-4xl leading-none text-orato-orange`}>
                        even stil staan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                 Ik ontmoet je graag persoonlijk.              </p>

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
                  Bel <br />
                  +316 510 88 6 88
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
