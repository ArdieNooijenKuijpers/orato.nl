import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";
import FooterComp from "../../components/Navigation/Footer";
import {
  sampleContactConfirmation,
  sampleContactNotification,
  sampleRegistrationConfirmation,
  sampleRegistrationNotification,
} from "../../lib/emailTemplates";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-mail templates",
  description: "Preview van de e-mail templates voor contact en inschrijving.",
  robots: {
    index: false,
    follow: false,
  },
};

const previews = [
  {
    title: "Bevestiging aan bezoeker",
    description:
      "De bevestigingsmail die iemand ontvangt na een contactaanvraag of inschrijving.",
    frames: [
      { label: "Contactformulier", html: sampleContactConfirmation },
      { label: "Inschrijfformulier", html: sampleRegistrationConfirmation },
    ],
  },
  {
    title: "Melding aan Orato",
    description:
      "De interne e-mail voor Ardie met alle ingestuurde gegevens overzichtelijk bij elkaar.",
    frames: [
      { label: "Contactformulier", html: sampleContactNotification },
      { label: "Inschrijfformulier", html: sampleRegistrationNotification },
    ],
  },
];

const EmailTemplatesPreviewPage = () => {
  return (
    <>
      <main className="min-h-screen bg-orato-light px-4 py-10 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <section className="overflow-hidden rounded-[2rem] bg-orato-dark px-6 py-10 text-white shadow-[0_20px_80px_-30px_rgba(20,20,20,0.8)] md:px-10">
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">Preview</p>
            <h1 className={`${notoSerifDisplay.className} mt-4 text-4xl md:text-6xl`}>
              E-mail templates
            </h1>
        
          </section>

          <div className="mt-8 space-y-8">
            {previews.map((preview) => (
              <section
                key={preview.title}
                className="rounded-[2rem] border border-orato-dark/10 bg-white/80 p-6 shadow-[0_20px_80px_-30px_rgba(20,20,20,0.2)] backdrop-blur-sm md:p-8"
              >
                <h2 className={`${notoSerifDisplay.className} text-3xl text-orato-dark md:text-4xl`}>
                  {preview.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-orato-dark/75 md:text-base">
                  {preview.description}
                </p>

                <div className="mt-6 grid gap-6 xl:grid-cols-2">
                  {preview.frames.map((frame) => (
                    <article
                      key={frame.label}
                      className="overflow-hidden rounded-[1.75rem] border border-orato-dark/10 bg-orato-light/60"
                    >
                      <div className="flex items-center justify-between border-b border-orato-dark/10 px-5 py-4">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark/75">
                          {frame.label}
                        </h3>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-orato-dark/60">
                          HTML preview
                        </span>
                      </div>
                      <iframe
                        title={`${preview.title} - ${frame.label}`}
                        srcDoc={frame.html}
                        className="h-[760px] w-full bg-white"
                      />
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <FooterComp />
    </>
  );
};

export default EmailTemplatesPreviewPage;
