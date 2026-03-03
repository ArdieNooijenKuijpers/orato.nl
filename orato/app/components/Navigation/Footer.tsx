'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const FooterComp = () => {
  const pathname = usePathname();
  const qrSize = 120;
  const partnerLogoSize = 84;

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

  const bedrijfImages = [
    "AVC.jfif",
    "CRKBO.jfif",
    "EIA.jfif",
    "EMCC.jfif",
    "ESIA.jfif",
    "MCC.jfif",
    "NOBCO.jfif",
    "OCN.jfif",
    "OratoWhite.jfif",
    "RP.jfif",
    "SC.tif", //TODO ADD A JPEG OR OTHER VARIANT
  ];

  return (
    <div
      className="relative h-auto md:h-[55vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-auto md:h-[calc(100vh+55vh)] top-0 md:-top-[100vh]">
        <footer className="h-auto md:h-[55vh] relative md:sticky md:top-[calc(100vh-55vh)] border-t border-white/10 bg-orato-dark text-white">
          <div className="mx-auto max-w-7xl px-4 py-4 md:flex md:h-full md:items-end md:px-6 md:py-3 lg:px-8">
            <div className="w-full min-w-0 max-w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <nav>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Menu</h2>
              <ul className="space-y-2">
                {footerMenuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`inline-block text-sm md:text-base transition-colors hover:text-orato-orange cursor-small ${
                        pathname === item.path ? "font-semibold text-orato-orange" : "text-white/90"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact</h2>
              <div className="space-y-1 text-sm text-white/90">
                <p className="font-semibold text-white">Drs. Ardie Nooijen-Kuijpers</p>
                <p>Rutger van den Broeckelaan 3</p>
                <p>5671 EB Nuenen</p>
                <p>
                  <Link href="tel:+31402842901" className="hover:text-orato-orange cursor-small">
                    +31 40 284 29 01
                  </Link>
                  <span className="mx-2 text-white/50">•</span>
                  <Link href="tel:+31651088688" className="hover:text-orato-orange cursor-small">
                    +31 6 5108 8688
                  </Link>
                </p>
                <p>
                  <Link href="mailto:ardie@orato.info" className="hover:text-orato-orange cursor-small">
                    ardie@orato.info
                  </Link>
                  <span className="mx-2 text-white/50">•</span>
                  <Link
                    href="https://orato.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orato-orange cursor-small"
                  >
                    orato.nl
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://www.linkedin.com/in/ardienooijenkuijpers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orato-orange cursor-small"
                  >
                    LinkedIn
                  </Link>
                </p>
              </div>
              <div
                className="mt-4 relative rounded-md border border-white/10 bg-white p-1"
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

            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Bedrijfsgegevens</h2>
              <div className="space-y-1 text-sm text-white/90">
                <p>KvK: 160 65 919</p>
                <p>BTW: NL001890491B36</p>
                <p>IBAN: NL40 RABO 01774.110.74</p>
              </div>
              <div className="mt-4 text-sm">
                <p className="font-semibold text-white">Scan voor contactgegevens</p>
                <div
                  className="mt-3 relative rounded-md border border-white/10 bg-white p-1"
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
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center text-xs text-white/70 md:text-sm">
              Website Art Nooijen 2025 | Fotografie Grafidi | Film Martijn Welles | Copyright Ardie Nooijen-Kuijpers
            </p>
            <div className="mt-5 w-full overflow-hidden">
              <div className="flex animate-marquee">
                {bedrijfImages.concat(bedrijfImages).map((image, index) => (
                  <div
                    key={index}
                    className="relative mx-2 flex-shrink-0"
                    style={{ width: partnerLogoSize, height: partnerLogoSize }}
                  >
                    <Image
                      src={`/Homepage/bedrijven/${encodeURIComponent(image)}`}
                      alt={image}
                      fill
                      sizes={`${partnerLogoSize}px`}
                      className="object-contain"
                    />
                  </div>
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FooterComp;
