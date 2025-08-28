import { Timeline } from "@/components/ui/timeline";
import { Noto_Serif_Display } from "next/font/google";

const noto_Serif_Display = Noto_Serif_Display({ subsets: ["latin"] });

const timelineData = [
  {
    title: "1985",
    content: (
      <div>
        <p>Na het Atheneum uitgeloot voor de studie geneeskunde. Start opleiding &apos;Logopedie en Foniatrie&apos;.</p>
      </div>
    ),
  },
  {
    title: "1989",
    content: (
      <div>
        <p>Spraak- en TaalPathologie. Universitaire bovenbouwstudie m.b.t. wetenschappelijk onderzoek op het gebied van spraak, taal, gehoor, stem etc.</p>
        <p>Zitting in &apos;the Thinktank&apos; van Universiteit Nijmegen.</p>
        <p>Start TSP. Bedrijf voor Trainingen in Spreken en Presenteren, samen met Marion Weijts.</p>
      </div>
    ),
  },
  {
    title: "1992",
    content: (
      <div>
        <p>Ik grijp mijn kans om een logopediepraktijk over te kopen: Logopediepraktijk Tiel in een multidisciplinaire setting, samen met collega logopedist Yvonne Dols-Koopman, eerstelijnspsycholoog/seksuoloog Drs. Ruud van Dongen en podotherapeut Irma Kramer-Keijzers, in nauwe samenwerking met andere paramedici, huisartsen en specialisten als verwijzers.</p>
        <p>Ik specialiseer me in stemstoornissen, hyperventilatie en stotteren met name bij pubers en volwassenen en in meer complexe communicatieproblemen bij kinderen en hun ouders, neem logopedisten in dienst en werk met veel plezier.</p>
        <p>Ik ben actief in allerlei commissies van de Nederlandse Vereniging voor Logopedie & Foniatrie.</p>
        <p>Een verblijf in Ghana vanwege een coschap van mijn levenspartner Peet, maakt een onuitwisbare indruk. Ik trouw in 1995 en Eva en Art worden geboren. &apos;TSP&apos; wordt &apos;ORATO spreken en presenteren&apos;.</p>
      </div>
    ),
  },
  {
    title: "2001",
    content: (
      <div>
        <p>Ik verkoop mijn logopediepraktijk omdat we verhuizen van Wijchen naar Nuenen nadat mijn echtgenoot zijn promotieonderzoek en specialisatie tot Patholoog afrondt.</p>
        <p>Een nieuw leven en netwerk opbouwen met o.a. 8 jaar voorzitterschap van de MedezeggenschapsRaad van de basisschool van onze kinderen en ik sluit me aan bij netwerkvereniging OCN Ondernemers Contact Nuenen.</p>
        <p>Ik volg 2 jaren opleidingen tot NLP Master bij het IEP in Nijmegen. Vervolgens de opleiding tot Speaking Circle Facilitator in Amsterdam.</p>
      </div>
    ),
  },
  {
    title: "2004",
    content: (
      <div>
        <p>ORATO verandert van een V.O.F. naar mijn eenmansbedrijf. De training &apos;Effectief Presenteren blijff ik samen met Drs. Marion Weijts geven.</p>
        <p>De combinatie van logopedisch onderzoek en behandeling met het geven van trainingen/workshops/interactieve lezingen gaan door. Nu aangevuld met commerciële (presentatie)coaching voor diverse (non)profit organisaties.</p>
        <p>Ik ontwikkel nieuwe trainingen, samen met Maja Visser voor o.a. MEE Nederland, diverse gemeenten en provincies, met voor zichzelf sprekende namen zoals &apos;Sterk overkomen!&apos;, &apos;Leren acquireren&apos;, &apos;Netwerk MEE&apos;, &apos;Persoonlijke uitstraling&apos; en &apos;Jij en je werk in de schijnwerpers&apos;.</p>
      </div>
    ),
  },
  {
    title: "2005",
    content: (
      <div>
        <p>Een opleiding tot ImageMaster bij Beauty Jeunique in Alphen aan de Rijn volgt om naast alle aandacht voor &apos;de binnenkant&apos; ook deskundig advies te kunnen geven over &apos;de buitenkant&apos;.</p>
        <p>Bij Schouten en Nelissen vergrootte ik mijn deskundigheid in cognitief herstructureren middels RET Rationele Effectiviteits training of, afhankelijk van de toepassing, Rationele Emotieve Therapie.</p>
      </div>
    ),
  },
  {
    title: "2007",
    content: (
      <div>
        <p>Ik ga een intensief en diepgaand avontuur aan middels een klassieke Freudiaanse psychoanalyse. Van grote betekenis voor mij persoonlijk en mijn werk als coach, trainer en therapeut.</p>
      </div>
    ),
  },
  {
    title: "2009",
    content: (
      <div>
        <p>Naast de werk gerelateerde coachvragen word ik steeds vaker gevraagd te helpen bij problematische liefdesrelaties. Ik verdiep me in de Emotionally Focused Therapy middels de &apos;Houd me vast&apos; methode.</p>
        <p>Ik krijg ook verdere training in het trainen van Karin de Galan.</p>
        <p>In 2011 neem ik mijn eigen salesvaardigheden onder de loep met salescoach Michel van Vuuren van de Nederlandse sales Academie. Ik initieer een netwerkgroep van vrouwelijke ondernemers, de OCN-Dames.</p>
      </div>
    ),
  },
  {
    title: "2012",
    content: (
      <div>
        <p>Op mijn initiatief wordt het project XPRSS Express for Success een feit. Een samenwerkingsverband tussen Annelies van Baal-Hoek (topmannequin). Lisette van Kaathoven (kapster en visagiste), Miriam Kahlmann (kledingstyliste) en Diana Kok (fotograaf) met als doel een succesvolle persoonlijke uitstraling c.q. eerste indruk voor mannen en vrouwen.</p>
        <p>Ik bleef zoeken naar de perfecte manier om mijn kennis en kunde vorm te geven. Een baan als &apos;praktijkondersteuner GGZ&apos; in een huisartsenpraktijk ligt binnen handbereik. Ik besluit toch, met volle overtuiging te kiezen voor wat al goed is: ORATO Communicatie Coaching.</p>
      </div>
    ),
  },
  {
    title: "2013",
    content: (
      <div>
        <p>Vanuit de behoefte aan officiële internationale erkenning als professioneel coach start ik met opleidingen tot ACC (Advanced Certified Coach) en PCC (professional Certified Coach) bij de Associatie voor Coaching (AvC) volgens kwalificatie van de ICF International Coach federation. Ik word lid ICF Global en Nederland.</p>
        <p>In 2014 sluit ik me aan bij een intervisiegroep voor professionele coaches: de Binnencirkel van de AvC.</p>
        <p>Met enthousiasme voorzie ik, dankzij het werk van Els Ruiters (Grafidi) in 2015 ORATO van een eigentijds logo, een nieuwe interactieve website en drukwerk. In dit jaar ontwikkel en geef ik samen met Anne Vinke-van Ingen de cursus &apos;Aansprekend (s)Preken&apos;, bedoeld voor mensen die het woord nemen in een kerk.</p>
      </div>
    ),
  },
  {
    title: "2017",
    content: (
      <div>
        <p>Vanuit de vraag uit het bedrijfsleven en mijn eigen behoefte om ook in het Engels te coachen volg ik een taaltraining op maat bij Regina Coeli in Vught.</p>
        <p>In de lente van 2017 word ik 50 jaar en beëindig ik de psychoanalyse. In de zomer die volgt schrijf ik in een paar maanden, in The Little House in Cotswold: &apos;Op de bank&apos;, een ervaringsverhaal over 50 jaar Ardie in 10 jaar psychoanalyse.</p>
        <p>Tijdens de European Speaking Circle Facilitator Days geef ik in Londen een TEDTalk over psychoanalyse en mijn vak als coach/facilitator. Samen met gepassioneerde collega&apos;s in Europa stichten we het Relational Presence Network en word ik bestuurslid.</p>
      </div>
    ),
  },
  {
    title: "2018",
    content: (
      <div>
        <p>De eerste editie van de 4-daagse training: Kerntraject !K-2.0 wordt gegeven als resultaat van een niet nader te noemen samenwerking.</p>
        <p>Ik word gevraagd om samen te gaan werken met de Associatie voor Coaching. Ik volg mijn hart en ga coaches opleiden, (in-company) trainingen geven op het gebied van coachen en coachend leidinggeven/begeleiden én acquireren voor deze organisatie.</p>
        <p>Ik word lid van de NOBCO (Nederlandse Orde van Beroepscoaches). Een update van mijn Algemene voorwaarden en Privacyverklaring wordt gemaakt, net als alle extra beveiligingsmaatregelen die genomen worden, om te voldoen aan de eisen van de Algemene Verordening Gegevensbescherming AVG.</p>
        <p>Ik besluit te gaan voor een volgende stap in professionalisering van mijn vak als coach: registratie bij ICF International als MCC Master Certified Coach met o.a. meer dan 2500 uur coachervaring. Een kroon op mijn werk!</p>
      </div>
    ),
  },
  {
    title: "2019",
    content: (
      <div>
        <p>Het verhaal &apos;Op de bank&apos; wordt vormgegeven door Bas Linssen. Mijn boek &apos;Voorbij de buitenkant&apos; wordt met een kleine oplage uitgegeven in eigen beheer.</p>
        <p>Ik begin met Pitch begeleiding in het kader van de Young Talent Award van het OCN. Geef de workshop &apos;Een groot ei leggen&apos; om belangrijke veranderingen en keuzes te faciliteren.</p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p>Een ongewenste rechtszaak begint en zal na 2 -jaar afgesloten worden met 100% gelijk voor mij en finale kwijting m.b.t. de beëindiging van de niet nader te noemen samenwerking.</p>
        <p>Ik organiseer en host online Practice Circles namens RPN, geef intervisie-begeleiding voor gemeentes.</p>
        <p>Mijn carrière als behandelend logopedist wordt afgesloten met een laatste factuur voor logopedie aan een zorgverzekeraar.</p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <p>Verlenging van de MCC registratie met 3 jaren. Ik leer ik over Transactionele Analyse (TA-101) en doe ik een zogenaamde Herbeslissingsmarathon in deskundige handen bij de TA-Academie.</p>
        <p>Om vervolgens in 2022 me te bekwamen in het vakmanschap in herbeslissen, oftewel Redecision Therapy onder de bezielende begeleiding van Mil en Sonja Rosseau.</p>
        <p>In het kader van de coachopleidingen die ik geef, doe ik in 2023 een PCC assessor training bij ICF Global rekening houdend met de 8 nieuwe ICF coachcompetenties. Ik word lid van de EMCC (European Mentoring and Coaching Council).</p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p>Ik rond de 2-jarige opleiding tot ESIA gecertificeerd Supervisor (van zorgprofessionals) af onder de inspirerende begeleiding van de Engelse Tom Battye en zijn team i.s.m. NOBCO/EMCC. Mijn netwerk met Nederlandse en Europese collega&apos;s wordt flink uitgebreid.</p>
        <p>Op verzoek verzorg ik workshops over supervisie en Relational Presence, bijvoorbeeld in het kader van intervisie. Renewal MCC.</p>
        <p>Ik neem deel aan een intervisiegroep voor supervisie en executive coaching (Vec).</p>
        <p>Ik ontwikkel en geef de meerdaagse &apos;Transactionele Analyse toegepast in professionele coaching&apos; in nauwe samenwerking met Dirk Verhoeven, eigenaar van de Associatie voor Coaching.</p>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p>Samen met collega&apos;s organiseer ik de European Relational Presence Facilitator Days, deze keer in Eindhoven.</p>
        <p>Tot op heden neem ik deel aan allerlei inhoudelijke cursussen op het gebied van professioneel coachen, trainen en superviseren en bezoek ik professionaliseringsdagen zoals de Dag van de Coach.</p>
        <p>Momenteel bestaat mijn werk uit: (Executive) Coachtrajecten vanuit Orato, het opleiden van professionele coaches namens de Associatie voor Coaching en Supervisie van coaches. Met als kers op de taart de dagen &apos;Authentiek Presenteren in Relational Presence&apos; die ik sinds 2003 geef bij ZIN in Vught.</p>
        <p>Het is mijn wens, samen met andere specialisten, mijn werk voor persoonlijke en professionele ontwikkeling voort te zetten!</p>
      </div>
    ),
  },
];

const ArdiePage = () => {
  return (
    <>
      {/* Hero Section - Light Background */}
      <div className="min-h-screen bg-orato-light">
        <div className="bg-orato-light py-20 px-4 md:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className={`${noto_Serif_Display.className} text-4xl md:text-6xl lg:text-7xl text-orato-dark mb-6`}>
                Ardie
              </h1>
              <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                MasterCoach, coachsupervisor, coachopleider en presentatietrainer-en coach. 
                Ik help jou graag met wat jij wilt onderzoeken en bereiken.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section - Dark Background */}
      <div className="min-h-screen bg-orato-dark">
        <Timeline data={timelineData} />
      </div>

      {/* Additional Section - Light Background */}
      <div className="min-h-screen bg-orato-light flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10 text-center">
          <h2 className={`${noto_Serif_Display.className} text-3xl md:text-5xl lg:text-6xl text-orato-dark mb-8`}>
            Even stil staan . . . om verder te komen!
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
            Omdat ik weet dat het onderbreken van de dagelijkse ratrace middels introspectie jou ontspanning, (zelf)compassie, inzicht, opties en verandering oplevert.
          </p>
          <p className="text-lg md:text-xl text-orato-orange font-semibold mt-6">
            Ontdek jouw sleutels tot succes.
          </p>
        </div>
      </div>

      {/* Contact Section - Dark Background */}
      <div className="min-h-screen bg-orato-dark flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10 text-center">
          <h2 className={`${noto_Serif_Display.className} text-3xl md:text-5xl lg:text-6xl text-white mb-8`}>
            Ik ben benieuwd naar jou en je vraag
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
            Klik hier om naar het contactformulier te gaan of bel me.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orato-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Contact Formulier
            </button>
            <button className="bg-transparent border-2 border-orato-orange text-orato-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orato-orange hover:text-white transition-colors">
              Bel +31-651088688
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArdiePage;