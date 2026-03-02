"use client";

import { Noto_Serif_Display } from "next/font/google";
import { WobbleCard } from "@/components/ui/wobble-card";
import FooterComp from "../../components/Navigation/Footer";

const noto_Serif_Display = Noto_Serif_Display({ subsets: ["latin"] });

const CoachingPage = () => {
  return (
    <div className="min-h-screen bg-orato-light">
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`${noto_Serif_Display.className} text-6xl md:text-8xl font-bold text-orato-dark mb-8`}>
            COACHING
          </h1>
          <p className="text-xl md:text-2xl text-orato-dark/80 max-w-3xl mx-auto leading-relaxed">
            Betekenisvolle gesprekken met impact. Coaching is meer dan een goed gesprek. 
            Een effectieve manier om mensen te helpen antwoorden te vinden op hun vragen.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute lg:bottom-20 lg:translate-y-6 right-20 md:bottom-16 bottom-12 flex flex-col items-center">
          <span className="text-orato-dark text-sm mb-2 animate-pulse">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Main Content with Wobble Cards */}
      <div className="bg-orato-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            
            {/* Intro Card - Spans 2 columns */}
            <WobbleCard 
              containerClassName="col-span-1 lg:col-span-2 h-full bg-orato-orange/10 min-h-[600px] lg:min-h-[500px]"
              className=""
            >
              <div className="max-w-3xl">
                <h2 className={`${noto_Serif_Display.className} text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Wat is Coaching?
                </h2>
                <div className="mt-4 space-y-4 text-left text-base/6 text-orato-dark/80">
                  <p>
                    Betekenisvolle gesprekken met impact. Coaching is meer dan een goed gesprek. Voor mij is coaching een effectieve manier om mensen te helpen antwoorden te vinden op hun vragen. Die vragen kunnen gaan over een wens, probleem, ambitie, verandering, keuze etc.
                  </p>
                  <p>
                    Mensen verander je niet, wel de manier waarop je je in een situatie gedraagt, voelt en denkt. Coaching door mij, gaat altijd over jou als persoon in de context van je werk (of studie). Een persoonlijke aangelegenheid dus, met concrete doelen en effecten.
                  </p>
                  <p className="text-lg font-semibold text-orato-orange">
                    Coaching met ZIEL en ZAKELIJKHEID.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-orato-orange/20 rounded-lg">
                  <p className="text-sm text-orato-dark/70">
                    <strong>Je bent welkom voor een kennismakingsgesprek.</strong>
                  </p>
                </div>
              </div>
            </WobbleCard>

            {/* Coachonderwerpen Card - Single column */}
            <WobbleCard containerClassName="col-span-1 min-h-[600px]">
              <h2 className={`${noto_Serif_Display.className} max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                Coachonderwerpen
              </h2>
              <div className="mt-4 max-w-[26rem] text-left text-base/6 text-orato-dark/80 space-y-4">
                <p className="text-sm">
                  De ontwikkelvragen van de mensen die ik coach hebben in zijn algemeenheid te maken met:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-orato-green/10 rounded-lg">
                    <p className="text-sm"><strong>Bewustwording vergroten.</strong> Jouw blinde vlekken in beeld krijgen met mijn analytisch vermogen als spiegel van de realiteit.</p>
                  </div>
                  <div className="p-3 bg-orato-blue/10 rounded-lg">
                    <p className="text-sm"><strong>Keuzes maken.</strong> Leven door te handelen vanuit &apos;een innerlijk kompas&apos; in plaats van te veel afgestemd zijn op de ander.</p>
                  </div>
                  <div className="p-3 bg-orato-purple/10 rounded-lg">
                    <p className="text-sm"><strong>Overtuigend(er) overkomen.</strong> Of juist minder &apos;hard&apos;, &apos;bedreigend&apos;. Zoals dat echt past bij jouw persoonlijkheid.</p>
                  </div>
                  <div className="p-3 bg-orato-orange/10 rounded-lg">
                    <p className="text-sm"><strong>Zelfvertrouwen voelen.</strong> Senang zijn met wie je bent en hoe je doet, werkt altijd. Men noemt mij een &apos;makelaar in zelfvertrouwen&apos;.</p>
                  </div>
                  <div className="p-3 bg-orato-red/10 rounded-lg">
                    <p className="text-sm"><strong>Gezonder en &apos;lichter&apos; leven.</strong> Je bent succesvol, hebt je leven prima op orde en toch houdt &apos;iets&apos; je tegen.</p>
                  </div>
                  <div className="p-3 bg-orato-green/10 rounded-lg">
                    <p className="text-sm"><strong>Echt doen.</strong> Verantwoordelijkheid nemen en ernaar handelen. Doen wat ertoe doet.</p>
                  </div>
                </div>
              </div>
            </WobbleCard>

            {/* Specialiteiten Card - Full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orato-blue/10 min-h-[700px] lg:min-h-[600px]">
              <div className="max-w-6xl">
                <h2 className={`${noto_Serif_Display.className} max-w-2xl text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Specialiteiten
                </h2>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="p-6 bg-orato-light/20 rounded-lg">
                      <h3 className="text-xl font-semibold text-orato-dark mb-4">Therapeutische Coaching</h3>
                      <p className="text-orato-dark/80 text-sm leading-relaxed">
                        Ik coach therapeutisch waar nodig en gewenst, dat wil zeggen met emotionele diepgang. Iemands verleden maakt namelijk deel uit van de oplossing in de toekomst. Met name met mijn jarenlange ervaring als paramedisch therapeut met kennis van psychopathologie, als NLP-Master, Relational Presence facilitator en met mijn TA-deskundigheid gespecialiseerd in herbeslissingswerk kan ik je dan helpen.
                      </p>
                    </div>
                    <div className="p-6 bg-orato-light/20 rounded-lg">
                      <h3 className="text-xl font-semibold text-orato-dark mb-4">Expressie Coaching</h3>
                      <p className="text-orato-dark/80 text-sm leading-relaxed">
                        Voor als jij je wilt uiten (verbaal en non-verbaal) zoals dat past bij jou als persoon en past bij jouw verantwoordelijkheden (professioneel en privé). Aan de slag dus met de zogenaamde buitenkant, jouw persoonlijke uitstraling en manier van communiceren én met de binnenkant oftewel jouw gedachtes en gevoelens.
                      </p>
                    </div>
                    <div className="p-6 bg-orato-light/20 rounded-lg">
                      <h3 className="text-xl font-semibold text-orato-dark mb-4">Bijzondere aandacht voor Spreektechniek</h3>
                      <p className="text-orato-dark/80 text-sm leading-relaxed">
                        Authentieke expressie gaat ook over de manier waarop je spreekt. Als je daar iets in wilt veranderen is coaching met speciale aandacht voor de manier waarop je spreekt en wilt spreken van toegevoegde waarde. Mijn specifieke ervaring als logopedist en spraak-en taalpatholoog zet ik dan graag voor jou in.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-orato-light/20 rounded-lg">
                      <h3 className="text-xl font-semibold text-orato-dark mb-4">Executive Coaching</h3>
                      <p className="text-orato-dark/80 text-sm leading-relaxed">
                        Meer specifiek: nadrukkelijk géén businesscoaching. Wél meesterlijke hulp bij het verder ontwikkelen van de menselijke kant van leidinggeven en nemen. Diepgaande introspectie op identiteitsniveau om in combinatie met je zakelijke kennis en kunde te excelleren. Leiderschap vraagt bezieling van binnenuit.
                      </p>
                    </div>
                    <div className="p-6 bg-orato-light/20 rounded-lg">
                      <h3 className="text-xl font-semibold text-orato-dark mb-4">Communicatie Coaching</h3>
                      <p className="text-orato-dark/80 text-sm leading-relaxed">
                        Vaak, eigenlijk altijd, is anders communiceren met anderen (en jezelf) belangrijk om iets te laten lukken. In het bijzonder coach ik ook kinderen vanaf 15 jaar met hun ouders en help ik liefdespartners met hun manier van communiceren. Impactvolle gespreksvaardigheden kun je leren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </WobbleCard>

            {/* Werkwijze Card - Spans 2 columns */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[700px]">
              <h2 className={`${noto_Serif_Display.className} max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                Werkwijze
              </h2>
              <div className="mt-4 space-y-4 text-left text-base/6 text-orato-dark/80">
                <p>
                  Na een oriëntatiegesprek waarin we kennismaken en ter tafel brengen wat-ertoe-doet, stellen we een werkovereenkomst op. Eventueel wordt ook afgestemd met een leidinggevende en wordt gevraagd naar zijn of haar succescriteria, bij voorkeur in een 3-gesprek. Na akkoord gaan we aan de slag.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orato-dark">Aanpak & Methoden</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Pragmatisch en met emotionele diepgang</li>
                      <li>• Middels de kunst van het vragen stellen en een grote diversiteit aan (ervarings)oefeningen, modellen en theorieën</li>
                      <li>• Middels mijn 7V-methode en A-methode</li>
                      <li>• Coaching gebeurt op basis van de 8 coachcompetenties van de ICF en de 8 coachcompetenties van NOBCO/EMCC</li>
                      <li>• Persoonlijk &apos;ontdekwerk&apos; middels reflectie, video-feedback, coaching -on-the-job etc.</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-orato-dark">Planning & Evaluatie</h4>
                    <ul className="text-sm space-y-2">
                      <li>• De sessies plannen we in zoals dat bij de ontwikkelvraag en agenda&apos;s past</li>
                      <li>• Bijvoorbeeld aanvankelijk om de 2 weken een sessie van 1 tot anderhalf uur</li>
                      <li>• Online sessies zijn mogelijk na een persoonlijke ontmoeting</li>
                      <li>• Er wordt expliciet geëvalueerd, tussentijd, en bij afronding</li>
                      <li>• Volgens de Ethische gedragscodes van ICF en NOBCO/EMCC</li>
                      <li>• Uiteraard AVG-proof volgens Privacyverklaring en Algemene voorwaarden</li>
                      <li>• Je ontvangt een bewijs van deelname</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orato-light/20 rounded-lg">
                  <p className="text-sm text-orato-dark/70">
                    <strong>APK. Ardie&apos;s Periodieke Koaching. 😉</strong> Regelmatig onderhoud, een soort &apos;strippenkaart&apos; bijv. 1x per kwartaal, voor (door)ontwikkeling van oude en nieuwe thema&apos;s m.b.t. je professionele en persoonlijke ontwikkeling.
                  </p>
                </div>
              </div>
            </WobbleCard>

            {/* Voorbeelden Card - Single column */}
            <WobbleCard containerClassName="col-span-1 min-h-[700px]">
              <h2 className={`${noto_Serif_Display.className} max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                Voorbeelden
              </h2>
              <div className="mt-4 max-w-[26rem] text-left text-base/6 text-orato-dark/80 space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <div className="p-2 bg-orato-green/10 rounded text-xs">Ik wil duidelijkheid over…</div>
                  <div className="p-2 bg-orato-blue/10 rounded text-xs">Ik wil niet langer uitstellen</div>
                  <div className="p-2 bg-orato-purple/10 rounded text-xs">Hoe kan ik een volgende burn-out voorkomen?</div>
                  <div className="p-2 bg-orato-orange/10 rounded text-xs">Ik moet anders overkomen</div>
                  <div className="p-2 bg-orato-red/10 rounded text-xs">Hoe kan ik zonder te veel stress &apos;alle ballen in de lucht houden&apos;?</div>
                  <div className="p-2 bg-orato-green/10 rounded text-xs">Wat gaat er (communicatief) fout in de samenwerking?</div>
                  <div className="p-2 bg-orato-blue/10 rounded text-xs">Zal ik dit werk blijven doen of toch een andere functie?</div>
                  <div className="p-2 bg-orato-purple/10 rounded text-xs">Ik wil een &apos;normaal gesprek&apos; kunnen voeren met mijn ouders</div>
                  <div className="p-2 bg-orato-orange/10 rounded text-xs">Het wordt tijd dat ik anders ga denken over mezelf en anderen!</div>
                  <div className="p-2 bg-orato-red/10 rounded text-xs">Ik heb last van &apos;alles goed willen doen&apos;</div>
                  <div className="p-2 bg-orato-green/10 rounded text-xs">Ik wil weten wat ik wil</div>
                  <div className="p-2 bg-orato-blue/10 rounded text-xs">Ik wil weerstand kunnen bieden aan verleidingen</div>
                  <div className="p-2 bg-orato-purple/10 rounded text-xs">Ik wil mijn collega&apos;s kunnen motiveren</div>
                  <div className="p-2 bg-orato-orange/10 rounded text-xs">Blijf ik hier werken of ga ik op zoek naar een andere baan?</div>
                  <div className="p-2 bg-orato-red/10 rounded text-xs">Ik wil mensen gepast kunnen aanspreken op hun gedrag</div>
                </div>
              </div>
            </WobbleCard>

            {/* Investering Card - Single column */}
            <WobbleCard containerClassName="col-span-1 min-h-[500px]">
              <h2 className={`${noto_Serif_Display.className} max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                Investering
              </h2>
              <div className="mt-4 text-center">
                <div className="text-4xl font-bold text-orato-orange mb-2">€185</div>
                <div className="text-orato-dark/70 mb-6">per uur</div>
                <div className="space-y-3 text-orato-dark/80 text-left">
                  <p className="text-sm font-semibold">Tijd en aandacht</p>
                  <p className="text-sm">• Om het maximale uit een coachtraject te halen heb je ruimte nodig (letterlijk en figuurlijk) in je agenda en hoofd</p>
                  <p className="text-sm">• Uurtarief vanaf €185, uiteraard afgestemd op het beschikbare budget</p>
                </div>
                <div className="mt-6 p-3 bg-orato-orange/10 rounded-lg">
                  <p className="text-sm text-orato-dark/70 text-center">
                    <strong>Ik ga ervoor! Waarvoor? Voor jou en je ontwikkeling.</strong>
                  </p>
                </div>
              </div>
            </WobbleCard>

            {/* Referenties Card - Full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orato-purple/10 min-h-[600px]">
              <div className="max-w-6xl">
                <h2 className={`${noto_Serif_Display.className} max-w-2xl text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Referenties
                </h2>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-orato-light/20 p-6 rounded-lg border border-orato-purple/20">
                    <blockquote className="text-orato-dark/80 italic text-base leading-relaxed mb-4">
                      &ldquo;Ik heb jou ervaren als een fijn, oprecht mens, bij wie ik me volkomen op mijn gemak en veilig voelde. En ook als ik dacht, wat moeten we nu, wist je dát aan te raken wat me verder hielp en ik nodig had. Met een zachte, maar vaste hand. Dank voor je wijsheid, inlevingsvermogen en inzicht.&rdquo;
                    </blockquote>
                    <div className="text-orato-dark font-semibold">
                      — Henriëtte den Hartog
                    </div>
                    <div className="text-orato-dark/60 text-sm">
                      Advocaat Generaal Openbaar Ministerie
                    </div>
                  </div>
                  <div className="bg-orato-light/20 p-6 rounded-lg border border-orato-purple/20">
                    <blockquote className="text-orato-dark/80 italic text-base leading-relaxed mb-4">
                      &ldquo;Coaching door Ardie is absoluut zinvol. Alles wat ik heb geleerd kan ik zowel op het werk als privé toepassen. Het zorgt ervoor dat ik me professioneler kan opstellen, maar toch dicht bij mezelf kan blijven.&rdquo;
                    </blockquote>
                    <div className="text-orato-dark font-semibold">
                      — Meggie Spierings
                    </div>
                    <div className="text-orato-dark/60 text-sm">
                      Projectleider Gemeente
                    </div>
                  </div>
                  <div className="bg-orato-light/20 p-6 rounded-lg border border-orato-purple/20">
                    <blockquote className="text-orato-dark/80 italic text-base leading-relaxed mb-4">
                      &ldquo;Ardie, je hebt me niet alleen geholpen mijn uitdagingen rondom stotteren aan te pakken, maar ook om meer zelfvertrouwen te ontwikkelen en te ontdekken waar mijn kracht en passie liggen. Je hebt echt het verschil gemaakt en dat waardeer ik enorm.&rdquo;
                    </blockquote>
                    <div className="text-orato-dark font-semibold">
                      — Joost Rijksen
                    </div>
                    <div className="text-orato-dark/60 text-sm">
                      Beleidsmedewerker Gemeente Geldrop-Mierlo
                    </div>
                  </div>
                  <div className="bg-orato-light/20 p-6 rounded-lg border border-orato-purple/20">
                    <blockquote className="text-orato-dark/80 italic text-base leading-relaxed mb-4">
                      &ldquo;Ardie heeft voor diverse medewerkers het verschil gemaakt in hun persoonlijke ontwikkeling. Zowel op teamniveau als in individuele coaching is Ardie aan te bevelen.&rdquo;
                    </blockquote>
                    <div className="text-orato-dark font-semibold">
                      — Anouschka van Laarhoven
                    </div>
                    <div className="text-orato-dark/60 text-sm">
                      Manager team Ruimtelijk Economische Ontwikkeling
                    </div>
                  </div>
                </div>
              </div>
            </WobbleCard>

            {/* CTA Card - Full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orato-green/10 min-h-[500px]">
              <div className="max-w-5xl text-center">
                <h2 className={`${noto_Serif_Display.className} max-w-4xl text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Bedrijfsmotto Orato
                </h2>
                <p className="mt-4 text-2xl text-orato-orange italic font-semibold">
                  &ldquo;Even stil staan . . . om verder te komen!&rdquo;
                </p>
                <p className="mt-6 max-w-4xl text-base/6 text-orato-dark/80">
                  Ik ben benieuwd wat ik voor je mag betekenen? Klik hier om naar het contactformulier te gaan of bel me.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button className="px-8 py-4 bg-orato-orange text-white rounded-lg font-semibold hover:bg-orato-orange/90 transition-colors shadow-lg">
                    Contactformulier
                  </button>
                  <button className="px-8 py-4 border-2 border-orato-dark text-orato-dark rounded-lg font-semibold hover:bg-orato-dark hover:text-white transition-colors">
                    Bel me: +31-651088688
                  </button>
                </div>
              </div>
            </WobbleCard>
            
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
};

export default CoachingPage;