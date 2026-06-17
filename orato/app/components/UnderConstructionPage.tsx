import Image from "next/image";

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen bg-orato-light text-orato-dark">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-orato-orange">
            ORATO
          </p>
          <h1 className="text-5xl font-bold leading-none sm:text-6xl md:text-7xl">
            Onder constructie
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-orato-dark/75 md:text-xl">
            Er wordt met aandacht aan de website gewerkt. ORATO is binnenkort
            weer online.
          </p>
          <a
            className="mt-8 inline-flex rounded-full bg-orato-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-orato-orange focus:outline-none focus:ring-2 focus:ring-orato-orange focus:ring-offset-4 focus:ring-offset-orato-light"
            href="mailto:info@orato.nl"
          >
            ardie@orato.info
          </a>
        </div>

        <div className="relative h-[46vh] min-h-80 overflow-hidden rounded-lg md:h-[70vh]">
          <Image
            src="/Ardie/werk in uitvoering bij Orato.jpeg"
            alt="Werk in uitvoering bij ORATO"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 46vw, 100vw"
          />
        </div>
      </section>
    </main>
  );
}
