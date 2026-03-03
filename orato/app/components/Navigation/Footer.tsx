'use client';
// Footer.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const FooterComp = () => {
  const pathname = usePathname();

  const footerMenuItems = [
    { name: 'COACHING', path: '/Onderwerpen/Coaching' },
    { name: 'SUPERVISIE', path: '/Onderwerpen/Supervisie' },
    { name: 'PRESENTEREN', path: '/Onderwerpen/Presenteren' },
    { name: 'ARDIE', path: '/Info/Ardie' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'INSCHRIJFFORMULIER', path: '/inschrijfformulier' },
    { name: 'ALGEMENE VOORWAARDEN', path: '/Info/AlgemeneVoorwaarden' },
    { name: 'PRIVACYVERKLARING', path: '/Info/PrivacyVerklaring' },
  ];

  // Define the company logo file names. Adjust the file names and paths as needed.
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
    // On mobile: auto height; on md+: fixed vh height (80vh)
    <div 
      className="relative h-auto md:h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* The inner container uses auto height on mobile and fixed vh on md+ */}
      <div className="relative h-auto md:h-[calc(100vh+80vh)] top-0 md:-top-[100vh]">
        {/* Footer container: relative on mobile (scrolls normally) and sticky on md+ */}
        <div className="h-auto md:h-[80vh] relative md:sticky md:top-[calc(100vh-80vh)] bg-orato-dark text-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Logo & Navigation */}
              <div>
                <nav>
                  <h2 className="font-bold mb-2">Menu</h2>
                  <ul className="space-y-1">
                    {footerMenuItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className={`relative inline-block text-lg font-medium transition-all 
                            hover:text-white 
                            before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 
                            before:bg-white before:transition-transform before:duration-300 
                            hover:before:scale-x-100 cursor-small
                            ${pathname === item.path ? 'before:scale-x-100 text-black' : ''}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Column 2: Contact Information */}
              <div>
                <h2 className="font-bold mb-2">Contact</h2>
                <p>Drs. Ardie Nooijen-Kuijpers</p>
                <p>Rutger van den Broeckelaan 3</p>
                <p>5671 EB Nuenen</p>
                <p>
                  <Link href="tel:+31402842901" className="hover:underline cursor-small">
                    +31 40 284 29 01
                  </Link>
                  <span className="text-blue-400 mx-2 ">•</span>
                  <Link href="tel:+31651088688" className="hover:underline cursor-small">
                    +31 6 5108 8688
                  </Link>
                </p>
                <p>
                  <Link
                    href="mailto:ardie@orato.info"
                    className="text-orato-blue hover:underline cursor-small"
                  >
                    ardie@orato.info
                  </Link>
                  <span className="mx-2">•</span>
                  <Link
                    href="https://orato.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-small"
                  >
                    orato.nl
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://www.linkedin.com/in/ardienooijenkuijpers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-small"
                  >
                    LinkedIn
                  </Link>
                </p>
                <div className="mt-2 relative w-[120px] h-[120px] md:w-[120px] md:h-[120px]">
                  <Image
                    src="/Homepage/QR-codes/Orato-linkedin.jpg"
                    alt="Orato LinkedIn QR Code"
                    fill
                    sizes="120px"
                    className="object-contain transition-transform duration-500 group-hover:rotate-12"
                  />
                </div>
              </div>

              {/* Column 3: Company Details & Additional Info */}
              <div>
                <h2 className="font-bold mb-2">Bedrijfsgegevens</h2>
                <p>KvK: 160 65 919</p>
                <p>BTW: NL001890491B36</p>
                <p>IBAN: NL40 RABO 01774.110.74</p>
                <div className="mt-4">
                  {/* Additional company details can be added here */}
                </div>
                <div className="mt-4 text-sm">
                  <p className="font-bold">Scan voor mijn contact gegevens</p>
                  <div className="mt-4 relative w-[150px] h-[150px] md:w-[150px] md:h-[150px]">
                    <Image
                      src="/Homepage/QR-codes/Orato-contactgegevens.jpg"
                      alt="Orato Contactgegevens QR Code"
                      fill
                      sizes="150px"
                      className="object-contain transition-transform duration-500 group-hover:rotate-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Infinite scrolling logos (marquee) */}
            <div className="mt-8 w-full overflow-hidden">
              {/* Centered credits text */}
              <div className="text-center mb-4">
                Website Art Nooijen 2025 | Fotografie Grafidi | Film Martijn Welles | Copyright Ardie Nooijen-Kuijpers
              </div>

              {/* Marquee for company logos */}
              <div className="flex animate-marquee">
                {bedrijfImages.concat(bedrijfImages).map((image, index) => (
                  <div key={index} className="mx-2 flex-shrink-0 relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
                    <Image
                      src={`/Homepage/bedrijven/${encodeURIComponent(image)}`}
                      alt={image}
                      fill
                      sizes="(max-width: 767px) 80px, 100px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for the marquee animation */}
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
