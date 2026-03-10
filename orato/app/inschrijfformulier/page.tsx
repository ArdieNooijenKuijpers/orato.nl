import Image from "next/image";
import { Noto_Serif_Display, Tangerine } from "next/font/google";
import FooterComp from "../components/Navigation/Footer";
import InschrijfForm from "./InschrijfForm";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400"] });

const InschrijfPage = () => {
  return (
    <>
      <main className="min-h-screen bg-orato-light px-4 py-10 md:px-10 lg:px-14">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center gap-8">
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="order-2 cursor-small lg:order-1">
              <InschrijfForm />
            </section>

            <section className="order-1 cursor-small overflow-hidden rounded-3xl bg-orato-dark text-white shadow-[0_20px_80px_-30px_rgba(20,20,20,0.8)] lg:order-2">
              <div className="relative h-full min-h-[420px] w-full md:min-h-[540px] lg:min-h-[640px]">
                <Image
                  src="/Contact/foto ardie deur contact 1.png"
                  alt="Ardie in een rustige pose voor het inschrijfformulier"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orato-dark/55 via-orato-dark/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">Speaking Circle</p>
                  <h1 className={`${notoSerifDisplay.className} mt-3 text-3xl md:text-4xl`}>
                    Authentiek presenteren met Relational Presence
                  </h1>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                    Schrijf je hier in voor een dag met aandacht voor aanwezigheid, expressie en contact.
                  </p>
                  <p className={`${tangerine.className} mt-5 text-4xl leading-none text-orato-orange`}>
                    Even stil staan . . . om verder te komen!
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="cursor-small overflow-hidden rounded-3xl border border-orato-dark/15 bg-white/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-orato-dark/55">Inschrijven</p>
                <h2 className={`${notoSerifDisplay.className} mt-3 text-3xl text-orato-dark md:text-4xl`}>
                  Praktisch
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-orato-dark/80">
                  <p>
                    Na je inschrijving ontvang je automatisch een bevestiging per e-mail. Als er nog iets afgestemd moet worden over lunch, facturatie of planning, neem ik contact met je op.
                  </p>
                  <p>
                    Vragen vooraf? Gebruik gerust de contactpagina of stuur direct een e-mail naar{" "}
                    <a className="underline underline-offset-4 hover:text-orato-orange" href="mailto:ardie@orato.info">
                      ardie@orato.info
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="border-t border-orato-dark/15 bg-orato-dark p-6 text-white md:border-l md:border-t-0 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Orato</p>
                <h3 className={`${notoSerifDisplay.className} mt-3 text-2xl md:text-3xl`}>
                  Contactgegevens
                </h3>
                <div className="mt-5 space-y-2 text-sm leading-relaxed text-white/85">
                  <p className="font-semibold text-white">Drs. Ardie Nooijen-Kuijpers</p>
                  <p>Rutger van den Broeckelaan 3</p>
                  <p>5671 EB Nuenen</p>
                  <p>
                    <a className="underline underline-offset-4 hover:text-orato-orange" href="tel:+31651088688">
                      +31 6 5108 8688
                    </a>
                  </p>
                  <p>
                    <a className="underline underline-offset-4 hover:text-orato-orange" href="mailto:ardie@orato.info">
                      ardie@orato.info
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default InschrijfPage;
