/*
 * ================================================================
 *  WEBSITE-INHOUD — HIER KAN ALLES AANGEPAST WORDEN VOOR DE WEBSITE
 * ================================================================
 *
 * Lees eerst: HANDLEIDING-WEBSITE-BEWERKEN.md in de hoofdmap van de repository
 * (dus naast de map `orato`).
 *
 * KORTE UITLEG
 * - Pas alleen tekst aan die tussen "aanhalingstekens" staat.
 * - Laat de komma's, haakjes en aanhalingstekens eromheen staan, anders kan
 *   de website niet worden gebouwd.
 * - Een komma betekent: er komt nog een item erna. Het laatste item in een
 *   lijst heeft géén komma.
 *
 * INSpringen = TREDEN VAN EEN TRAP
 * Zie de spaties voor een regel als treden van een trap. Een item dat bij
 * dezelfde lijst hoort, moet op precies dezelfde trede beginnen.
 *
 * GOED: twee referenties beginnen allebei op dezelfde trede:
 *     {
 *       quote: "Eerste referentie",
 *     },
 *     {
 *       quote: "Tweede referentie",
 *     },
 *
 * Werkwijze voor iets nieuws: kopieer altijd een volledig bestaand blok,
 * plak het eronder en vervang alleen de tekst tussen de aanhalingstekens.
 *
 * BESTANDEN UPLOADEN (foto, video of PDF)
 * Start altijd in de hoofdmap voor alle media:
 * https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public
 * Kies daar de juiste map en vervolgens: Add file > Upload files.
 * - coaching = foto's voor Coaching
 * - presenteren = foto's voor Presenteren
 * - supervisie = foto's en Speaking Circle-flyer (PDF)
 * - Ardie = foto's en video's voor Over Ardie
 * - downloads = Algemene voorwaarden en Privacyverklaring (PDF)
 */

import type { ArdieTimelineEntry } from "../components/ardie/RedThreadTimeline";

type Referentie = { quote: string; name: string; role: string };

export const websiteInhoud: {
  coaching: { tarief: string; referenties: Referentie[] };
  supervisie: { tarief: string; referentie: Referentie };
  presenteren: {
    eenOpEenTarief: string;
    speakingCircle: {
      flyer: string;
      data: string[];
      locatieTekst: string[];
      locatieDataIntro: string;
      investering: string;
      knopTarief: string;
      investeringToelichting: string;
      referenties: Referentie[];
    };
  };
  documenten: { algemeneVoorwaardenPdf: string; privacyverklaringPdf: string };
  ardie: { volgendeJaren: ArdieTimelineEntry[] };
} = {
  // =================================================================
  // PAGINA 1 — COACHING
  // Wijzig hieronder het tarief en voeg eventueel een referentie toe.
  // Een tarief is alleen het bedrag, bijvoorbeeld: "€195".
  // =================================================================
  coaching: {
    tarief: "€185",
    referenties: [
      // NIEUWE REFERENTIE? Kopieer een volledig blok van { tot en met },
      // plak het onder de laatste referentie en vul quote, name en role in.
      // Voorbeeld:
      // {
      //   quote: "Mijn ervaring met Ardie was ...",
      //   name: "Voornaam Achternaam",
      //   role: "Functie of organisatie",
      // },
      {
        quote: "Ik heb jou ervaren als een fijn, oprecht mens, bij wie ik me volkomen op mijn gemak en veilig voelde. En ook als ik dacht, wat moeten we nu, wist je dat aan te raken wat me verder hielp en ik nodig had. Met een zachte, maar vaste hand. Dank voor je wijsheid, inlevingsvermogen en inzicht. Jij hebt me laten ervaren dat ook als het niet duidelijk is wat er speelt of hoe het moet, ik al doende op weg kom. Veel dank!",
        name: "Henriëtte den Hartog",
        role: "Advocaat Generaal Openbaar Ministerie",
      },
      {
        quote: "Coaching door Ardie is absoluut zinvol. Alles wat ik heb geleerd kan ik zowel op het werk als privé toepassen. Het zorgt ervoor dat ik me professioneler kan opstellen, maar toch dicht bij mezelf kan blijven.",
        name: "Meggie Spierings",
        role: "Projectleider gemeente",
      },
      {
        quote: "Ik zit beter in mijn vel waardoor het ook prettiger is voor mijn collega's om me heen. Ook krijg ik meer gedaan. Dit is dus niet alleen voor de algehele sfeer bevorderlijk maar ook te merken aan het werk, omzet, projecten. Door verschillende vragen, gesprekken en oefeningen ben ik me meer bewust geworden van de mogelijkheden en keuzes die in mijn eigen hand liggen en wat ik daarmee kan doen. Dus als iemand in twijfel is over zijn of haar situatie of niet zeker weet wat hij of zij wil (werk/thuis). Of als iemand in de knoop zit met zichzelf of ergens tegenaan blijft lopen, gun ik je Ardie als coach.",
        name: "Koen Huiskes",
        role: "Coachee",
      },
      {
        quote: "Ardie, je hebt me niet alleen geholpen mijn uitdagingen rondom stotteren aan te pakken, maar ook om meer zelfvertrouwen te ontwikkelen en te ontdekken waar mijn kracht en passie liggen. Dankjewel voor je inzichten en de veilige ruimte die je hebt gecreëerd om aan mezelf te werken. Je hebt echt het verschil gemaakt en dat waardeer ik enorm.",
        name: "Joost Rijksen",
        role: "Beleidsmedewerker Gemeente Geldrop-Mierlo",
      },
      {
        quote: "Ardie heeft voor diverse medewerkers het verschil gemaakt in hun persoonlijke ontwikkeling. Zowel op teamniveau als in individuele coaching is Ardie aan te bevelen.",
        name: "Anouschka van Laarhoven",
        role: "Manager team Ruimtelijk Economische Ontwikkeling",
      },
    ],
  },
  // =================================================================
  // PAGINA 2 — SUPERVISIE
  // Wijzig hieronder het tarief en de referentie.
  // De drie regels in de referentie zijn: quote = tekst, name = naam,
  // role = functie of organisatie.
  // =================================================================
  supervisie: {
    tarief: "€185",
    referentie: {
      quote: "Ardie is een supervisor die je raakt, uitdaagt en in beweging zet. Ze ziet wat ik zelf nog niet doorheb, confronteert me zonder aarzeling, maar altijd met humor en een vleugje lerares-strengheid. Elke sessie verrast me met nieuwe inzichten en een flinke dosis energie.",
      name: "Jasper Nooij",
      role: "Zelfstandig tenderspecialist en (team)coach, Estland",
    },
  },
  // =================================================================
  // PAGINA 3 — PRESENTEREN
  // 1-op-1, Speaking Circle, flyer, data, locatie en referenties.
  // =================================================================
  presenteren: {
    // --- 1-OP-1 PRESENTATIECOACHING ---
    eenOpEenTarief: "€185",
    speakingCircle: {
      // --- SPEAKING CIRCLE: INFORMATIEFLYER ---
      // Upload een nieuwe flyer (PDF) in deze GitHub-map:
      // https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/supervisie
      // Open de link in een nieuw tabblad en kies: Add file > Upload files.
      // Pas alleen de tekst tussen de aanhalingstekens aan; de flyer wordt automatisch getoond.
      flyer: "/supervisie/Authentiek%20presenteren%20met%20SPEAKING%20CIRCLE%C2%AE%20en%20Relational%20Presence%C2%AE%202026.pdf",
      // --- SPEAKING CIRCLE: DATA ---
      // Een datum moet deze vorm houden: "Dinsdag 24 maart 2026 | 9.30 - 17.30 u".
      // Nieuwe datum? Kopieer één regel, plak hem op de volgende trede en
      // verander alleen dag, datum, jaar en tijd. Laat de komma staan, behalve
      // bij de allerlaatste datum. De datum verschijnt automatisch ook in het
      // inschrijfformulier.
      data: [
        "Dinsdag 24 maart 2026 | 9.30 - 16.30 u",
        "Vrijdag 26 juni 2026 | 9.30 - 17.30 u",
        "Maandag 9 november 2026 | 9.30 - 17.30 u",
      ],
      // --- SPEAKING CIRCLE: LOCATIE ZIN ---
      // Iedere regel tussen de haakjes is een aparte alinea op de website.
      locatieTekst: [
        "Omdat mijn Speaking Circle® werk wordt georganiseerd in een zeer inspirerende omgeving, volgt hieronder extra informatie over deze bijzondere locatie te Vught waar jij als deelnemer kunt overnachten.",
        "ZIN is een adviserende gesprekspartner voor organisaties die met ziel en zakelijkheid willen werken. Het klooster waarin ZIN is gehuisvest, is stijlvol verbouwd en biedt ruimte aan 2 tot 150 gasten. De combinatie van moderne architectuur en het behoud van de kloostertraditie levert een unieke plek op voor een bijzondere ontmoeting.",
      ],
      locatieDataIntro: "Deze dag wordt in 2026 georganiseerd bij ZIN op",
      // --- SPEAKING CIRCLE: INVESTERING ---
      // `investering` is het grote bedrag op de pagina.
      // `knopTarief` is hetzelfde bedrag, maar zonder spaties/leestekens voor
      // het kleine tariefknopje bovenaan.
      investering: "€ 250,-",
      knopTarief: "€250",
      investeringToelichting: "Excl. btw. / incl. lunch en video-opnames.",
      // --- SPEAKING CIRCLE: REFERENTIES ---
      // Nieuwe referentie? Gebruik hetzelfde voorbeeld als bij Coaching.
      referenties: [
        {
          quote: "De presentatiedag bij ZIN was echt een eye opener. Ik voel me een stuk comfortabeler bij het presenteren van onze financiele cijfers en voel me vrijer tijdens meetings. Aanbevolen bij collega's. Gecombineerd met coaching. Ardie is hartelijk, beschikt over een brok ervaring, geeft zelf het goede voorbeeld, Growth mindset, praktijkgericht, flexibiliteit t.a.v. de onderwerpen die aandacht nodig hebben.",
          name: "Folkert Botma",
          role: "Controller",
        },
        { quote: "Dit gun ik elke collega!", name: "Sander Hoen", role: "Technisch projectleider" },
        {
          quote: "Dank voor de leerzame workshop. Wat doe je het goed met je mentale fysio. Ik liet me verrassen en ik ben ook verrast over hoe jij mij in een uur coaching, verder hebt geholpen. Van heel treuzelend in mijn woordkeus en een beetje in elkaar gedoken naar een zelfverzekerde dit ben ik. Dit smaakt naar meer!",
          name: "Touria Agrandi",
          role: "Intercultureel coach - taaltrainer Arabisch en Spaans - Beedigd tolk en vertaler",
        },
        {
          quote: "Ik heb gemerkt dat Y vaker presentaties geeft (en dit ook goed doet). En dat ze minder maskeert met humor maar gewoon aangeeft wat er speelt. Ook het impulsief reageren is sterk veranderd, ze kan nu beter laten bezinken en reactie uitstellen. En ze pakt meer haar verantwoordelijkheid terwijl ze het eerder comfortabeler vond om anderen zich namens haar uit te laten spreken.",
          name: "Tamar Euser",
          role: "Manager Content & Operations bij ACSI Publishing BV",
        },
      ],
    },
  },
  // =================================================================
  // PAGINA 4 & 5 — ALGEMENE VOORWAARDEN EN PRIVACYVERKLARING
  // Upload eerst de nieuwe PDF in deze GitHub-map:
  // https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/downloads
  // Open de link in een nieuw tabblad en kies: Add file > Upload files.
  // Wijzig daarna
  // alleen de tekst tussen de aanhalingstekens hieronder.
  // =================================================================
  documenten: {
    // Voorbeeld: heeft het bestand een spatie, schrijf die in de link als %20.
    // "Mijn nieuwe document.pdf" wordt: "/downloads/Mijn%20nieuwe%20document.pdf"
    algemeneVoorwaardenPdf: "/downloads/Algemene%20voorwaarden%20ORATO%202025%20.pdf",
    privacyverklaringPdf: "/downloads/Privacyverklaring%20ORATO%202025%20.pdf",
  },
  // =================================================================
  // PAGINA 6 — OVER ARDIE: VOLGENDE JAREN
  // Kopieer een volledig tijdvak om een nieuw jaar toe te voegen. De velden
  // betekenen: year = periode, title = kop, summary = korte intro, details =
  // losse alinea's en images = foto bij het tijdvak.
  // =================================================================
  ardie: {
    // Kopieer dit hele blok voor een volgend tijdvak. Upload de foto in deze GitHub-map:
    // https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/Ardie
    // Open de link in een nieuw tabblad en kies: Add file > Upload files.
    volgendeJaren: [
      // === KOPIEER VANAF HIER (inclusief de accolade hieronder) ===
      {
        year: "2025-2026",
        title: "Doorgaan met wat ertoe doet",
        summary: "Mijn werk is stevig geworteld, kleurrijk en blijft in beweging.",
        details: [
          { text: "Samen met collega’s organiseer ik de European Relational Presence Facilitator Days, dit keer in Eindhoven.", highlights: ["European Relational Presence Facilitator Days", "Eindhoven"] },
          { text: "Ik neem nog altijd deel aan inhoudelijke cursussen, professionaliseringsdagen, intervisie en spar regelmatig met een supervisor om 'mijn zaag scherp te houden'.", highlights: ["mijn zaag scherp te houden"] },
          { text: "Momenteel bestaat mijn werk uit (executive) coachtrajecten vanuit Orato, het opleiden van professionele coaches namens de Associatie voor Coaching en supervisie van coaches.", highlights: ["(executive) coachtrajecten", "het opleiden van professionele coaches", "supervisie van coaches"] },
          { text: "Met als kers op de taart de dagen Authentiek Presenteren in Relational Presence die ik sinds 2003 geef bij ZIN in Vught.", highlights: ["Authentiek Presenteren in Relational Presence"] },
          { text: "Een half jaar na elkaar overlijden mijn geliefde schoonmoeder en vader. In dankbaarheid nemen we waardig afscheid. Meer tijd is nodig om met toewijding mantelzorg te verlenen aan mijn schoonvader en moeder.", highlights: ["dankbaarheid", "mantelzorg"] },
          { text: "In 2026 besluit ik minder dagen per week te gaan werken. De nieuwe up-to-date website voor ORATO is een feit. Dankjewel Art! Ik blijf, samen met andere vakmensen, mijn werk voor persoonlijke en professionele ontwikkeling voortzetten!" },
        ],
        images: [{ src: "/Ardie/Ardie timeline new/naast 2025 boom met gekleurde bladeren.JPG", alt: "Boom met gekleurde bladeren als beeld voor doorgaan en blijven groeien.", placement: "edge", quote: "Als je goed om je heen kijkt, zie je dat alles gekleurd is." }],
        accentColor: "blue",
      },
      // === TOT HIER KOPIËREN (inclusief de komma hierboven) ===

      // Plak hier het gekopieerde stuk voor een volgend tijdvak. Upload de foto
      // eerst via de GitHub-link hierboven en pas daarna de bestandsnaam bij `src` aan.
      // `alt` is een korte omschrijving van de foto voor toegankelijkheid.
    ],
  },
};
