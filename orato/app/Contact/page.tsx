import Image from "next/image";
import { Noto_Serif_Display, Tangerine } from "next/font/google";
import ContactForm from "./contactForm";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400"] });

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-orato-light px-4 py-10 md:px-10 lg:px-14">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center gap-8">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="order-2 cursor-small lg:order-1">
            <ContactForm />
          </section>

          <section className="order-1 cursor-small overflow-hidden rounded-3xl bg-orato-dark text-white shadow-[0_20px_80px_-30px_rgba(20,20,20,0.8)] lg:order-2">
            <div className="relative h-full min-h-[420px] w-full md:min-h-[540px] lg:min-h-[640px]">
              <Image
                src="/Contact/foto ardie deur contact 1.png"
                alt="Ardie bij de deuropening"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orato-dark/20 via-transparent to-transparent" />
            </div>
          </section>
        </div>

        <section className="cursor-small overflow-hidden rounded-3xl border border-orato-dark/15 bg-white/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
            <div className="p-6 md:p-8">
              <h1 className={`${notoSerifDisplay.className} text-3xl text-orato-dark md:text-4xl`}>
                Contact
              </h1>
              <p className="mt-2 text-sm text-orato-dark/80">Alvast bedankt voor je interesse.</p>
              <p className={`${tangerine.className} mt-4 text-4xl leading-none text-orato-orange`}>
                Even stil staan . . . om verder te komen!
              </p>

              <div className="mt-5 space-y-2 text-sm leading-relaxed text-orato-dark/85">
                <p className="font-semibold text-orato-dark">Drs. Ardie Nooijen-Kuijpers</p>
                <p>Rutger van den Broeckelaan 3</p>
                <p>5671 EB Nuenen</p>
                <p>
                  <a className="underline underline-offset-4 hover:text-orato-blue" href="tel:+31402842901">
                    +31 40 284 29 01
                  </a>{" "}
                  <span className="mx-2 inline-block h-2 w-2 rounded-full bg-orato-blue align-middle" />
                  <a className="underline underline-offset-4 hover:text-orato-blue" href="tel:+31651088688">
                    +31 6 5108 8688
                  </a>
                </p>
                <p>
                  <a className="underline underline-offset-4 hover:text-orato-green" href="mailto:ardie@orato.info">
                    ardie@orato.info
                  </a>{" "}
                  <span className="mx-2 inline-block h-2 w-2 rounded-full bg-orato-green align-middle" />
                  <a
                    className="underline underline-offset-4 hover:text-orato-green"
                    href="https://orato.nl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    orato.nl
                  </a>
                </p>
                <p>
                  <a
                    className="underline underline-offset-4 hover:text-orato-orange"
                    href="https://nl.linkedin.com/in/ardienooijenkuijpers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn berichten
                  </a>
                  {" "}of Let&apos;s connect.
                </p>
              </div>

              <div className="mt-5 flex flex-col justify-center space-y-2 text-xs text-orato-dark/75">
                <p>KvK 16065919</p>
                <p>BTW NL001890491B36</p>
              </div>
            </div>

            <div className="relative min-h-[320px] border-t border-orato-dark/15 md:min-h-full md:border-t-0 md:border-l">
              <iframe
                title="Locatie Orato in Nuenen"
                src="https://www.google.com/maps?output=embed&q=ORATO,+Rutger+van+den+Broeckelaan+3,+5671+EB+Nuenen,+Netherlands"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
