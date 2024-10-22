import Head from "next/head";
import Image from "next/image";
import { Noto_Serif_Display } from "next/font/google";
import RotatingImageWithDate from "./components/mainpage/rotatingImageWithDate";

const noto_Serif_Display = Noto_Serif_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Metadata section */}
      <Head>
        <title>Orato - Home</title>
        <meta
          name="description"
          content="Orato Coaching, Presenting and Supervision"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      {/* Page layout */}
      <div className="flex flex-col min-h-screen static">
        {/* Main content */}
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left">
            {/* Container for "WELKOM BIJ" and Subtext */}
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
              <div className="relative flex flex-col">
                {/* WELKOM BIJ */}
                <div
                  className={`${noto_Serif_Display.className}
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              ml-0 sm:ml-4 md:ml-4 lg:ml-8
            `}
                >
                  WELKOM BIJ
                </div>
                {/* Subtext attached to "WELKOM BIJ" on larger screens */}
                <div
                  className="
              hidden md:block
              absolute
              bottom-0
              right-0
              transform translate-y-32 translate-x-20 md:translate-y-28 md:translate-x-32 lg:translate-y-32 lg:translate-x-20
              text-sm sm:text-xs md:text-sm lg:text-base
              font-light
              mt-2 md:mt-4
              ml-4 sm:ml-8 md:ml-12 lg:ml-32
              max-w-xs sm:max-w-sm md:max-w-md
              text-right


            "
                >
                  <span >
                    HET JUISTE ADRES VOOR
                  </span>
                  <br /> <span className="font-semibold ">COACHING</span> <br />
                  SUPERVISIE
                  <br /> PRESENTEREN
                  <br />
                  COMMUNICEREN
                </div>
              </div>
              {/*old transform for long text transform translate-y-16 translate-x-44  */}
              {/* ORATO */}
              <div
                className="
            text-7xl sm:text-8xl md:text-9xl lg:text-10xl
            font-bold
            -ml-4 sm:-ml-8 md:-ml-16 lg:-ml-24
          "
              >
                ORATO
              </div>

              {/* VOOR JOU */}
              <div
                className={`${noto_Serif_Display.className}            
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl       
          `}
                // text-6xl sm:text-7xl md:text-8xl lg:text-9xl
              >
                VOOR JOU
              </div>

              {/* Subtext below "VOOR JOU" on smaller screens */}
              <div
                className="
                          md:hidden
                          text-sm sm:text-base md:text-lg lg:text-xl
                          font-light
                          mt-4
                          ml-0 sm:ml-4
                          max-w-xs sm:max-w-sm
                          text-center
                        "
              >
                HET JUISTE ADRES VOOR COACHING
                <br />
                SUPERVISIE, PRESENTEREN EN COMMUNICEREN.
              </div>
            </div>
          </div>
        </main>
        <RotatingImageWithDate />

      </div>

      <footer className="bg-gray-800 text-white p-4 text-center min-h-screen">
        <p>&copy; 2024 Orato. All rights reserved.</p>
      </footer>
    </>
  );
}
