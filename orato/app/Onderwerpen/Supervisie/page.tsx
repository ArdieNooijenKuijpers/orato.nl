
"use client";

import { Noto_Serif_Display } from "next/font/google";
import { WobbleCard } from "@/components/ui/wobble-card";
import FooterComp from "../../components/Navigation/Footer";
import InschrijfFormModal from "../../inschrijfformulier/InschrijfFormModal";

const noto_Serif_Display = Noto_Serif_Display({ subsets: ["latin"] });

const SupervisiePage = () => {
  return (
    <div className="min-h-screen bg-orato-light">
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`${noto_Serif_Display.className} text-6xl md:text-8xl font-bold text-orato-dark mb-8`}>
            SUPERVISIE
          </h1>
          <p className="text-xl md:text-2xl text-orato-dark/80 max-w-3xl mx-auto leading-relaxed">
            Een ontmoeting tussen twee professionals met hetzelfde beroep. 
            Ik superviseer coaches, supervisoren en paramedici zoals logopedisten.
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
                  Over Supervisie
                </h2>
                <div className="mt-4 space-y-4 text-left text-base/6 text-orato-dark/80">
                  <p>
                    Supervisie, vaak ook mentoring genoemd, is in mijn ogen een ontmoeting tussen twee professionals met hetzelfde beroep. Ik superviseer coaches, supervisoren en paramedici zoals logopedisten. Evenwaardig, dat wil zeggen als mens niet meer of minder dan de ander. Niet gelijkwaardig, omdat we dat per definitie niet zijn met een ander lijf, verleden en andere (levens)ervaringen, kennis en kunde en verantwoordelijkheden.
                  </p>
                  <p>
                    Je mag van mij verwachten dat ik jouw professionalisering en daarmee de kwaliteit van coachen, centraal zet. Vanuit mijn expertise als Master Coach voorzie ik jou van feedback. Ook jouw welzijn, het restoratieve aspect, valt onder supervisie, naast het normatieve en formatieve.
                  </p>
                  <p>
                    Doel is jouw coachkwaliteiten maximaal in te zetten en blinde vlekken bewust te krijgen. Reflecteren, op allerlei manieren, gaat je nieuwe perspectieven bieden om een nog efficiëntere en tevreden coach, supervisor of therapeut te zijn. Of misschien wil je vooral op de millimeter werken aan de hand van een casus of ontwikkelvraag, of wil je geïnspireerd worden?
                  </p>
                  <p>
                    Supervisie verschilt van coaching door focus op sparren middels een professionele dialoog, nog fijngevoeliger duiden, het proces van jouw ontwikkeling, talrijke perspectieven, verbreden en/of verdiepen van kennis en kunde. Supervisie gebeurt met de grootste psychologische veiligheid. Als een katalysator gericht op secure base.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-orato-orange/20 rounded-lg">
                  <p className="text-sm text-orato-dark/70">
                    <strong>Doel:</strong> Jouw coachkwaliteiten maximaal inzetten en blinde vlekken bewust krijgen.
                  </p>
                </div>
                <div className="mt-6">
                  <InschrijfFormModal
                    triggerLabel="Direct inschrijven"
                    title="Inschrijven voor Speaking Circle"
                    description="Open hier direct het inschrijfformulier zonder de supervisiepagina te verlaten."
                  />
                </div>
              </div>
            </WobbleCard>

            {/* Expertise Card - Single column */}
            <WobbleCard containerClassName="col-span-1 min-h-[600px]">
              <h2 className={`${noto_Serif_Display.className} max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                Mijn Expertise
              </h2>
              <div className="mt-4 max-w-[26rem] text-left text-base/6 text-orato-dark/80 space-y-4">
                <p>
                  Voor de Associatie voor Coaching (AvC) superviseer ik coaches sinds 2018. In 2024 rondde ik de 2-jarige ESIA Certified Supervisor opleiding af, gegeven door Tom Battye in samenwerking met EMCC.
                </p>
                <p>
                  Ik geef bij voorkeur individuele supervisie. In een groep mijn expert-rol inzetten doe ik het liefst als ik professionele coaches opleid, of in de vorm van begeleide intervisie.
                </p>
                <div className="space-y-2">
                  <p>Ik ben een expert in coachen door mijn 35+ jaar werkervaring en betrokkenheid bij ons prachtige vak. Onderscheidend van andere supervisoren is mijn therapeutische ervaring als paramedicus, gesterkt door 10 jaar ervaring met het werken aan emoties, gedachtes en fysieke ervaringen, oftewel door een grondige introspectie, middels een Freudiaanse psycho-analyse. Verder kan ik je helpen bij een (herhaalde) aanvraag van registratie als gecertificeerde coach bij ICF (International Coaching Federation) (doorklik naar ICF global) en NOBCO (doorklik naar NOBCO)/EMCC (doorklik naar EMCC) (Nederlandse Orde van Beroepscoaches/ European Mentoring and Coaching Counsil) ) etc. </p>

                </div>
                <p className="text-sm">
                Als opleider van professionele coaches en coachende leidinggevenden namens de AvC, ben ik vertrouwd met de coachcompetenties van zowel de ICF (International Coaching Federation) als de NOBCO (Nederlandse…) /EMCC. Waar ik trots op ben is dat de AvC (doorklik naar homepage website AvC:  https://associatievoorcoaching.com/?gad_source=1&gclid=Cj0KCQiA1p28BhCBARIsADP9HrPkkX3KIgL66IY8M45cgJAtKyY9VFtLEf-J0eQtf4kAY7y_qTLtHiQaApfPEALw_wcB
) de enige plek in Nederland is waar je sinds 1992 coachopleidingen kunt doen die zowel door de ICF als NOBCO/EMCC geaccrediteerd zijn. Ik vind het belangrijk het ámbacht dat coachen is, te doceren met als basis contact maken, contracteren en de kunst van het vragen stellen. Een ‘kapstok’ dus waar een professionele coach alle methodes, werkvormen en theorieën aan op kan hangen. 
Namens de AvC leid ik ook ESIA gecertificeerde supervisoren op én geef ik de meerdaagse ‘Transactionele Analyse toegepast in professionele coaching’. (doorklik naar TA website AvC:  https://associatievoorcoaching.com/transactionele-analyse/
 ) 
Verder neem ik, zoals jij, natuurlijk ook mijn levenservaring mee in onze werkrelatie.
                </p>
                <div className="mt-4 p-3 bg-orato-blue/10 rounded-lg">
                  <p className="text-sm text-orato-dark/70">
                    <strong>AvC:</strong> De enige plek in Nederland waar je sinds 1992 coachopleidingen kunt doen die zowel door de ICF als NOBCO/EMCC geaccrediteerd zijn.
                  </p>
                </div>
              </div>
            </WobbleCard>

            {/* Werkwijze Card - Full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orato-blue/10 min-h-[700px] lg:min-h-[600px]">
              <div className="max-w-6xl">
                <h2 className={`${noto_Serif_Display.className} max-w-2xl text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Werkwijze
                </h2>
                <p className="mt-4 max-w-4xl text-left text-base/6 text-orato-dark/80">
                  Na een oriëntatiegesprek waarin we kennismaken en ter tafel brengen wat-ertoe-doet, stellen we een werkovereenkomst op. Na akkoord gaan we aan de slag.
                </p>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-orato-dark">Aanpak & Methoden</h3>
                    <ul className="text-orato-dark/80 space-y-2 text-sm">
                      <li>• Pragmatisch en met emotionele diepgang aan de hand van voorbeelden uit jouw beroepspraktijk</li>
                      <li>• Verdieping en/of verbreding van kennis en kunde</li>
                      <li>• Middels alle ervaring en coach- en communicatiemethodes/theorieën die ik in huis heb. Een &apos;kijkje in de keuken van een ander&apos; is altijd leuk</li>
                      <li>• Met de voordelen van de &apos;kruisbestuiving&apos; tussen mijn werk als MasterCoach, Coachopleider, trainer, communicatie expert, therapeut en supervisor</li>
                      <li>• Middels specifieke en diverse reflectiemodellen</li>
                      <li>• Met de mogelijkheid jezelf te oefenen in Relational Presence ter verdieping van cont(r)act maken. Bijvoorbeeld in een groep</li>
                      <li>• Eventueel gebruikmakend van SkillReflect. Een digitale tool voor videofeedback en reflectie speciaal ontwikkeld voor coaches</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-orato-dark">Focus & Planning</h3>
                    <ul className="text-orato-dark/80 space-y-2 text-sm">
                      <li>• Met oog voor de 8 coachcompetenties (met bijbehorende markers) van de ICF en de 8 coachcompetenties (met de bijbehorende vaardigheidsindicatoren) van NOBCO/EMCC</li>
                      <li>• ZIJN-modus ipv Doe-modus</li>
                      <li>• Indien gewenst gericht op een aanvraag voor registratie als een Professional Certified Coach (PCC) of Master Certified Coach (MCC) bij ICF. Of als Senior Practitioner of Master Practitioner bij NOBCO/EMCC</li>
                      <li>• De sessies plannen we in zoals dat bij de ontwikkelvraag en agenda&apos;s past. Bijvoorbeeld om de 6 weken of 1 keer per kwartaal</li>
                      <li>• Handig is een traject van 10 uren zoals vereist door ICF. NOBCO/EMCC vereist 1 uur per kwartaal bij maximaal 140 coachpraktijkuren of bij meer coachpraktijkuren: 1 uur per 35 coachuren</li>
                      <li>• Online sessies zijn mogelijk na een persoonlijke ontmoeting</li>
                      <li>• Uiteraard AVG-proof volgens Privacyverklaring en Algemene voorwaarden</li>
                      <li>• Met aandacht voor ethische aspecten van ons mooie coachvak</li>
                      <li>• Gebaseerd op de 8 ESIA supervisiecompetenties</li>
                      <li>• Je krijgt een bewijs van supervisie/mentoring. Handig voor als je CCEU en/of PE uren nodig hebt</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orato-light/20 rounded-lg">
                  <p className="text-sm text-orato-dark/70">
                    <strong>Wil je meer weten over de professionele en persoonlijke ontwikkeling van Ardie?</strong> Klik dan hier om naar de pagina Ardie te gaan.
                  </p>
                </div>
              </div>
            </WobbleCard>

            {/* Onderwerpen Card - Spans 2 columns */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[700px]">
              <h2 className={`${noto_Serif_Display.className} max-w-80 text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                Supervisie Onderwerpen
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-orato-green/10 rounded-lg border border-orato-green/20 hover:bg-orato-green/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Ik wil mijn manier van reflecteren verbeteren en heb behoefte aan verdieping van mijn zelfreflectie</p>
                </div>
                <div className="p-3 bg-orato-blue/10 rounded-lg border border-orato-blue/20 hover:bg-orato-blue/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Hoe voer ik een 3-gesprek met een coachee en zijn of haar leidinggevende?</p>
                </div>
                <div className="p-3 bg-orato-purple/10 rounded-lg border border-orato-purple/20 hover:bg-orato-purple/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Wat voor soort coaching past bij mij?</p>
                </div>
                <div className="p-3 bg-orato-orange/10 rounded-lg border border-orato-orange/20 hover:bg-orato-orange/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Ik merk dat ik veel adviezen geef en wil graag begeleiding om hiermee te stoppen of een goede balans te vinden tussen coachen en adviseren</p>
                </div>
                <div className="p-3 bg-orato-red/10 rounded-lg border border-orato-red/20 hover:bg-orato-red/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Hoe kan ik mijn werkrelatie met mijn coachees efficiënt inzetten?</p>
                </div>
                <div className="p-3 bg-orato-green/10 rounded-lg border border-orato-green/20 hover:bg-orato-green/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Ben ik geschikt om een coachsupervisor te worden of zijn?</p>
                </div>
                <div className="p-3 bg-orato-blue/10 rounded-lg border border-orato-blue/20 hover:bg-orato-blue/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Ik wil de manier waarop ik me presenteer als coach eens onder de loep nemen</p>
                </div>
                <div className="p-3 bg-orato-purple/10 rounded-lg border border-orato-purple/20 hover:bg-orato-purple/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Hoe kan ik mijn coachee helpen nog meer inzichten te krijgen en/of verantwoordelijkheid te nemen?</p>
                </div>
                <div className="p-3 bg-orato-orange/10 rounded-lg border border-orato-orange/20 hover:bg-orato-orange/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Tot hoever ga ik in het begeleiden van een coachee, hoeveel ben ik bereikbaar en waar liggen andere grenzen?</p>
                </div>
                <div className="p-3 bg-orato-red/10 rounded-lg border border-orato-red/20 hover:bg-orato-red/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Heeft het zin om me te specialiseren?</p>
                </div>
                <div className="p-3 bg-orato-green/10 rounded-lg border border-orato-green/20 hover:bg-orato-green/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Ik wil voorbeelden van werkvormen, oefeningen, theorieën die ik kan inzetten</p>
                </div>
                <div className="p-3 bg-orato-blue/10 rounded-lg border border-orato-blue/20 hover:bg-orato-blue/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Hoe kan ik mijn oplossingsenthousiasme nog meer temperen?</p>
                </div>
                <div className="p-3 bg-orato-purple/10 rounded-lg border border-orato-purple/20 hover:bg-orato-purple/15 transition-colors">
                  <p className="text-orato-dark/80 text-sm leading-relaxed">Ik wil sparren over de kwaliteit van ons vak</p>
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
                  <p className="text-sm">• Referenties opvraagbaar</p>
                  <p className="text-sm">• Online sessies mogelijk</p>
                  <p className="text-sm">• AVG-proof</p>
                </div>
                <div className="mt-6 p-3 bg-orato-orange/10 rounded-lg">
                  <p className="text-sm text-orato-dark/70 text-center">
                    <strong>Flexibele planning:</strong> Om de 6 weken of 1x per kwartaal
                  </p>
                </div>
                <div className="mt-4 p-3 bg-orato-blue/10 rounded-lg">
                  <p className="text-xs text-orato-dark/70 text-center">
                    <strong>Referenties opvraagbaar:</strong> Met plezier ben ik een bruggenbouwer tussen jou en coaches die al supervisie genoten hebben.
                  </p>
                </div>
              </div>
            </WobbleCard>

            {/* Referentie Card - Full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orato-purple/10 min-h-[500px]">
              <div className="max-w-5xl">
                <h2 className={`${noto_Serif_Display.className} max-w-2xl text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Referentie
                </h2>
                <div className="mt-4 max-w-4xl">
                  <div className="bg-orato-light/20 p-6 rounded-lg border border-orato-purple/20">
                    <blockquote className="text-orato-dark/80 italic text-lg leading-relaxed mb-6">
                      &ldquo;Ardie is een supervisor die je raakt, uitdaagt en in beweging zet. 
                      Ze ziet wat ik zelf nog niet doorheb, confronteert me zonder aarzeling, 
                      maar altijd met humor en een vleugje lerares-strengheid. Elke sessie 
                      verrast me met nieuwe inzichten en een flinke dosis energie.&rdquo;
                    </blockquote>
                    <div className="text-orato-dark font-semibold text-lg">
                      — Jasper Nooij
                    </div>
                    <div className="text-orato-dark/60 text-sm">
                      Zelfstandig tenderspecialist en (team)coach, Estland
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-orato-light/10 rounded-lg">
                    <p className="text-orato-dark/80 text-sm">
                      <strong>Referenties opvraagbaar:</strong> Laat het me weten als ik een bruggenbouwer mag zijn tussen jou en een collega die ik als gesuperviseerd heb.
                    </p>
                  </div>
                </div>
              </div>
            </WobbleCard>

            {/* CTA Card - Full width */}
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orato-green/10 min-h-[500px]">
              <div className="max-w-5xl text-center">
                <h2 className={`${noto_Serif_Display.className} max-w-4xl text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-orato-dark`}>
                  Welkom!
                </h2>
                <p className="mt-4 max-w-5xl text-base/6 text-orato-dark/80">
                  Ben jij een coachsupervisor, paramedische therapeut of professionele coach, 
                  met een eigen bedrijf/praktijk of heb je een beroep waar coaching een wezenlijk 
                  deel van uitmaakt, heb je een erkende (coach)opleiding en (veel) ervaring, 
                  en wil jij je verder ontwikkelen, dan ontmoet ik je graag persoonlijk in het kader van supervisie/mentoring.
                </p>
                <p className="mt-4 text-lg text-orato-dark/70 italic">
                  Ik ga ervoor! Waarvoor? Voor jou en je ont-wikkeling.
                </p>
                <div className="mt-6 p-4 bg-orato-light/20 rounded-lg max-w-3xl mx-auto">
                  <p className="text-orato-dark/80 text-sm">
                    <strong>Wat mag ik voor jou betekenen?</strong> Klik hier om naar het contactformulier te gaan of bel me.
                  </p>
                </div>
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

export default SupervisiePage;
