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
        <main className="flex-grow flex items-center justify-center overflow-x-hidden p-4">
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

      <div className="bg-orato-dark min-h-screen flex items-center justify-center overflow-x-hidden">

        <div className="  cursor-small   ">
          <ParticleRing />
        </div>

      </div>
      <section className="relative overflow-hidden bg-orato-light px-4 py-16 text-orato-dark md:px-10 md:py-24">
        <div className="mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-center gap-12 md:min-h-[68vh] md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2
              className={`${noto_Serif_Display.className} cursor-invert cursor-big text-5xl leading-[0.95] text-orato-dark sm:text-6xl md:text-7xl lg:text-8xl`}
            >
              Plus veel mensen
              <span className="block font-bold">op persoonlijke titel!</span>
            </h2>
          </div>

          <div className="relative flex w-full max-w-md flex-col items-start md:items-end">
            <div className="text-[8rem] font-bold leading-none text-orato-orange sm:text-[10rem] md:text-[12rem]">
              9+
            </div>
            <div className="max-w-sm border-t border-orato-dark/15 pt-5 text-left md:text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orato-dark/60">
                Gemiddelde evaluatiescore
              </p>
              <p className="mt-3 text-xl font-medium leading-snug text-orato-dark md:text-2xl">
                Gebaseerd op ervaringen van deelnemers en opdrachtgevers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-orato-light px-4 pb-14 text-orato-dark md:px-10 md:pb-20">
        <div className="mx-auto max-w-5xl border-y border-orato-dark/10 py-10 text-center md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orato-dark/55">
            Referentie
          </p>
          <blockquote
            className={`${noto_Serif_Display.className} mx-auto mt-5 max-w-3xl text-4xl leading-tight md:text-6xl`}
          >
            &ldquo;Ik gun iedereen een Ardie!&rdquo;
          </blockquote>
          <p className="mt-6 text-base font-semibold text-orato-dark">
            Arthur Gieles
          </p>
          <p className="mt-1 text-sm text-orato-dark/60">
            Huisarts, in memoriam
          </p>
        </div>
      </section>
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
