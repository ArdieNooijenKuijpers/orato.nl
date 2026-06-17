'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const FooterComp = () => {
  const pathname = usePathname();
  const normalizePath = (path: string) => path.replace(/\/$/, "").toLowerCase();
  const currentPath = normalizePath(pathname);
  const footerRef = useRef<HTMLElement | null>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const qrSize = 120;
  const partnerLogoCardWidth = 150;
  const partnerLogoCardHeight = 92;
  const footerCardBackground = "#1b1b1b";

  const footerMenuItems = [
    { name: 'COACHING', path: '/Onderwerpen/Coaching' },
    { name: 'SUPERVISIE', path: '/Onderwerpen/Supervisie' },
    { name: 'PRESENTEREN', path: '/Onderwerpen/Presenteren' },
    { name: 'ARDIE', path: '/Info/Ardie' },
    { name: 'CONTACT', path: '/Contact' },
    { name: 'INSCHRIJFFORMULIER', path: '/inschrijfformulier' },
    { name: 'ALGEMENE VOORWAARDEN', path: '/Info/AlgemeneVoorwaarden' },
    { name: 'PRIVACYVERKLARING', path: '/Info/PrivacyVerklaring' },
  ];

  const getActiveLinkColor = (path: string) => {
    const normalizedPath = normalizePath(path);

    if (normalizedPath === "/onderwerpen/coaching") return "text-orato-blue";
    if (normalizedPath === "/onderwerpen/supervisie") return "text-orato-purple";
    if (normalizedPath === "/onderwerpen/presenteren") return "text-orato-green";

    return "text-orato-orange";
  };

  const partnerLogos = [
    {
      name: "AvC",
      file: "AVC.jpg",
      href: "https://associatievoorcoaching.com/",
    },
    {
      name: "CRKBO",
      file: "CRKBO.jpg",
      href: "https://www.crkbo.nl/",
    },
    {
      name: "EIA",
      file: "EIA.jpg",
      href: "https://emccglobal.org/",
    },
    {
      name: "EMCC",
      file: "EMCC.jpg",
      href: "https://emccglobal.org/",
    },
    {
      name: "ESIA",
      file: "ESIA.jpg",
      href: "https://nobco.nl/voor-coaches/ontwikkeling-en-inspiratie/supervisie/",
    },
    {
      name: "MCC",
      file: "MCC.jpg",
      href: "https://coachingfederation.nl/",
    },
    {
      name: "NOBCO",
      file: "NOBCO.jpg",
      href: "https://nobco.nl",
    },
    {
      name: "OCN",
      file: "OCN.jpg",
      href: "https://www.ocnuenen.nl/",
    },
    {
      name: "Orato",
      file: "Oratowhite.jpg",
      href: "https://orato.nl",
    },
    {
      name: "RP",
      file: "RP.jpg",
      href: "https://relationalpresence.eu/",
    },
    {
      name: "SC",
      file: "SC.png",
      href: "https://www.speakingcircles.com/",
    },
    {
      name: "MySupervisor",
      file: "my supervisor.png",
      href: "https://mysupervisor.eu/",
    },
  ];

  useEffect(() => {
    const updateViewportMetrics = () => {
      setViewportHeight(window.innerHeight);
      setIsDesktop(window.innerWidth >= 768);
    };

    updateViewportMetrics();
    window.addEventListener("resize", updateViewportMetrics);

    return () => window.removeEventListener("resize", updateViewportMetrics);
  }, []);

  useEffect(() => {
    if (!footerRef.current) return;

    const updateFooterHeight = () => {
      setFooterHeight(footerRef.current?.offsetHeight ?? 0);
    };

    updateFooterHeight();

    const observer = new ResizeObserver(updateFooterHeight);
    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  const stickyTop = isDesktop ? Math.max(viewportHeight - footerHeight, 0) : 0;
  const revealWrapperHeight = isDesktop && viewportHeight > 0 && footerHeight > 0
    ? viewportHeight + footerHeight
    : undefined;
  const clipHeight = isDesktop && footerHeight > 0 ? footerHeight : undefined;

  return (
    <div
      className="relative"
      style={
        isDesktop && clipHeight
          ? {
              height: clipHeight,
              clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
            }
          : undefined
      }
    >
      <div
        className="relative"
        style={isDesktop && revealWrapperHeight ? { height: revealWrapperHeight, top: -viewportHeight } : undefined}
      >
        <footer
          ref={footerRef}
          className="relative border-t border-white/10 bg-orato-dark text-white md:sticky"
          style={isDesktop ? { top: stickyTop } : undefined}
        >
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8 lg:px-8">
            <div className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_280px]">
            <nav className="text-center md:text-left">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orato-orange">Menu</h2>
              <ul className="space-y-2">
                {footerMenuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      aria-current={currentPath === normalizePath(item.path) ? "page" : undefined}
                      className={`inline-block cursor-small text-sm transition-colors md:text-base ${
                        currentPath === normalizePath(item.path)
                          ? `font-semibold ${getActiveLinkColor(item.path)}`
                          : "text-white/90 hover:text-orato-orange"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex h-full flex-col text-center md:text-left">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orato-orange">Contact</h2>
              <div className="space-y-1 text-sm text-white/90">
                <p className="font-semibold text-white">Drs. Ardie Nooijen-Kuijpers</p>
                <p>Rutger van den Broeckelaan 3</p>
                <p>5671 EB Nuenen</p>
                <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:block">
                  <Link href="tel:+31402842901" className="hover:text-orato-orange cursor-small">
                    +31 40 284 29 01
                  </Link>
                  <span className="text-white/50 md:mx-2">•</span>
                  <Link href="tel:+31651088688" className="hover:text-orato-orange cursor-small">
                    +31 6 510 88 6 88
                  </Link>
                </p>
                <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:block">
                  <Link href="mailto:ardie@orato.info" className="hover:text-orato-orange cursor-small">
                    ardie@orato.info
                  </Link>
                  <span className="text-white/50 md:mx-2">•</span>
                  <Link
                    href="https://www.orato.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orato-orange cursor-small"
                  >
                    www.orato.nl
                  </Link>
                </p>
                <p className="flex justify-center md:justify-start">
                  <Link
                    href="https://www.linkedin.com/in/ardienooijenkuijpers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white transition-all duration-300 hover:border-orato-orange hover:bg-orato-orange/15 hover:text-orato-orange cursor-small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.9V18H5.5V9.75Zm4.7 0h2.78v1.13h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.49 1.94 3.49 4.46V18h-2.9v-3.69c0-.88-.02-2.01-1.23-2.01-1.23 0-1.42.96-1.42 1.95V18h-2.9V9.75Z" />
                    </svg>
                    LinkedIn
                  </Link>
                </p>
              </div>
              <div className="mt-auto pt-4 text-sm">
                <p className="font-semibold text-white">Scan LinkedIn</p>
              <div
                className="relative mx-auto mt-3 rounded-md border border-white/10 bg-white p-1 md:mx-0"
                style={{ width: qrSize, height: qrSize }}
              >
                <Image
                  src="/Homepage/QR-codes/Orato-linkedin.jpg"
                  alt="Orato LinkedIn QR Code"
                  fill
                  sizes={`${qrSize}px`}
                  className="object-contain"
                />
              </div>
              </div>
            </div>

            <div className="flex h-full flex-col text-center md:text-left">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orato-orange">Bedrijfsgegevens</h2>
              <div className="space-y-1 text-sm text-white/90">
                <p>KvK: 160 65 919</p>
                <p>BTW: NL001890491B36</p>
              </div>
              <div className="mt-auto pt-4 text-sm">
                <p className="font-semibold text-white">Scan voor contactgegevens</p>
                <div
                  className="relative mx-auto mt-3 rounded-md border border-white/10 bg-white p-1 md:mx-0"
                  style={{ width: qrSize, height: qrSize }}
                >
                  <Image
                    src="/Homepage/QR-codes/Orato-contactgegevens.jpg"
                    alt="Orato Contactgegevens QR Code"
                    fill
                    sizes={`${qrSize}px`}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="relative hidden md:flex md:items-start md:justify-end">
              <div className="sticky top-10">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-orato-orange/10 blur-3xl" />
                  <div className="relative h-[21rem] w-[14rem] overflow-hidden rounded-full border border-white/15 bg-black shadow-[0_30px_90px_-35px_rgba(0,0,0,0.9)] cursor-big cursor-invert">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    >
                      <source src="/Homepage/temp-vid-3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%,rgba(0,0,0,0.35))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center text-xs text-white/70 md:text-sm">
              Website by{" "}
              <Link
                href="https://nl.linkedin.com/in/art-nooijen-2752952a5"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#f6c36b]/40 bg-gradient-to-r from-[#f6c36b]/15 via-white/10 to-transparent px-3 py-1 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_28px_-18px_rgba(246,195,107,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:border-orato-orange hover:from-orato-orange/25 hover:via-white/15 hover:text-orato-orange hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_36px_-20px_rgba(255,115,0,0.9)] cursor-small"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.9V18H5.5V9.75Zm4.7 0h2.78v1.13h.04c.39-.73 1.34-1.5 2.76-1.5 2.95 0 3.49 1.94 3.49 4.46V18h-2.9v-3.69c0-.88-.02-2.01-1.23-2.01-1.23 0-1.42.96-1.42 1.95V18h-2.9V9.75Z" />
                  </svg>
                </span>
                Art Nooijen
              </Link>{" "}
              2025
              {" | "}
              <Link
                href="https://github.com/ArtNooijen"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#f6c36b]/40 bg-gradient-to-r from-[#f6c36b]/15 via-white/10 to-transparent px-3 py-1 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_28px_-18px_rgba(246,195,107,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:border-orato-orange hover:from-orato-orange/25 hover:via-white/15 hover:text-orato-orange hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_36px_-20px_rgba(255,115,0,0.9)] cursor-small"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.68-.21.68-.47v-1.66c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.88 1.5 2.31 1.07 2.88.82.09-.63.35-1.07.63-1.31-2.22-.25-4.56-1.1-4.56-4.92 0-1.09.39-1.97 1.02-2.67-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.29 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.64.7 1.02 1.58 1.02 2.67 0 3.83-2.35 4.66-4.58 4.91.36.31.68.91.68 1.84v2.72c0 .26.18.56.69.47A10 10 0 0 0 12 2Z" />
                  </svg>
                </span>
                ArtNooijen
              </Link>
              {" | Fotografie Grafidi | Film "}
              <Link
                href="https://martijnwelles.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#f6c36b]/40 bg-gradient-to-r from-[#f6c36b]/15 via-white/10 to-transparent px-3 py-1 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_28px_-18px_rgba(246,195,107,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:border-orato-orange hover:from-orato-orange/25 hover:via-white/15 hover:text-orato-orange hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_36px_-20px_rgba(255,115,0,0.9)] cursor-small"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M4 7.75A2.75 2.75 0 0 1 6.75 5h10.5A2.75 2.75 0 0 1 20 7.75v8.5A2.75 2.75 0 0 1 17.25 19H6.75A2.75 2.75 0 0 1 4 16.25v-8.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H6.75Zm1.5 2.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3.75 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3.75 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z" />
                  </svg>
                </span>
                Martijn Welles
              </Link>
              {" | Copyright Ardie Nooijen-Kuijpers"}
            </p>
            <div className="relative mt-5 w-full overflow-hidden py-1">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10"
                style={{ background: `linear-gradient(to right, ${footerCardBackground}, transparent)` }}
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10"
                style={{ background: `linear-gradient(to left, ${footerCardBackground}, transparent)` }}
              />
              <div className="flex w-max animate-marquee gap-4">
                {partnerLogos.concat(partnerLogos).map((logo, index) => (
                  <Link
                    key={index}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${logo.name} website`}
                    title={logo.name}
                    className="relative flex-shrink-0 rounded-xl border border-white/15 bg-white p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]"
                    style={{ width: partnerLogoCardWidth, height: partnerLogoCardHeight }}
                  >
                    <Image
                      src={`/Homepage/bedrijven/${encodeURIComponent(logo.file)}`}
                      alt={`${logo.name} logo`}
                      fill
                      sizes={`${partnerLogoCardWidth}px`}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 34s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FooterComp;
