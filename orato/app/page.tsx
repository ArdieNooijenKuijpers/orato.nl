import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Display , Tangerine } from "next/font/google";
import RotatingImageWithDate from "./components/mainpage/rotatingImageWithDate";
import VideoMain from "./components/mainpage/videoMain";
import LineAtBottom from "./components/mainpage/lineAtBottom";
import Example from "./components/mainpage/horizontalScrollCarousel";
import Navbar from "./components/Navigation/navbar";
import ParticleRing from "./components/mainpage/ParticleRing";
import ParticleRing2 from "./components/mainpage/ParticleRing2";
import FooterComp from "./components/Navigation/Footer";
import CompanyCircles from "./components/mainpage/CompanyCircles";
import LandingIntro from "./components/mainpage/LandingIntro";
const noto_Serif_Display = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orato - Home",
  description: "Orato Coaching, Presenting and Supervision",
};

export default function Home() {
  return (
    <>
      <LandingIntro />

      {/* Page layout */}
      <div className="flex flex-col min-h-screen static bg-orato-light">
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
              ml-0 sm:ml-4 md:ml-4 lg:ml-8 cursor-invert cursor-big
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
                  <br />{" "}
                  <Link href="/Onderwerpen/Coaching" className="font-semibold text-inherit no-underline cursor-small">
                    COACHING
                  </Link>{" "}
                  <br />
                  <Link href="/Onderwerpen/Supervisie" className="text-inherit no-underline cursor-small">
                    SUPERVISIE
                  </Link>
                  <br />{" "}
                  <Link href="/Onderwerpen/Presenteren" className="text-inherit no-underline cursor-small">
                    PRESENTEREN
                  </Link>
                  <br />
                  <Link href="/Contact" className="text-inherit no-underline cursor-small">
                    COMMUNICEREN
                  </Link>
                </div>
              </div>
              {/*old transform for long text transform translate-y-16 translate-x-44  */}
              {/* ORATO */}
              <div
                className="
            text-7xl sm:text-8xl md:text-9xl lg:text-10xl
            font-bold
            -ml-4 sm:-ml-8 md:-ml-16 lg:-ml-24 cursor-invert cursor-big
          "
              >
                ORATO
              </div>

              {/* VOOR JOU */}
              <div
                className={`${noto_Serif_Display.className}            
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl cursor-invert cursor-big     
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
                HET JUISTE ADRES VOOR{" "}
                <Link href="/Onderwerpen/Coaching" className="font-semibold text-inherit no-underline">
                  COACHING
                </Link>
                <br />
                <Link href="/Onderwerpen/Supervisie" className="text-inherit no-underline">
                  SUPERVISIE
                </Link>
                ,{" "}
                <Link href="/Onderwerpen/Presenteren" className="text-inherit no-underline">
                  PRESENTEREN
                </Link>{" "}
                EN{" "}
                <Link href="/Contact" className="text-inherit no-underline">
                  COMMUNICEREN
                </Link>
                .
              </div>
            </div>
          </div>
        </main>
        <RotatingImageWithDate /> {/* The speed is controlled in the tailwind config and the steps */}
        <LineAtBottom />
        <VideoMain />
      </div>
      <div className="bg-orato-dark  min-h-screen">
        <Example />
      </div>
      {/* <div className="  min-h-screen bg-orato-light   ">
        <p>TEST</p>
      </div> */}

      <div className="bg-orato-dark min-h-screen flex items-center justify-center ">

        <div className="  cursor-small   ">
          <ParticleRing />
        </div>

      </div>
      <div className="  min-h-screen bg-orato-light   ">
          <CompanyCircles />
      </div>

      <FooterComp />
      {/* <footer className="text-white p-4 text-center min-h-screen">
        <p>&copy; 2024 Orato. All rights reserved.</p>
        
      </footer> */}
    </>
  );
}
