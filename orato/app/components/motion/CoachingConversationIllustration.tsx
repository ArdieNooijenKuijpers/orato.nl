"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const steps = [
  {
    title: "Kennismaken",
    text: "We brengen ter tafel wat-ertoe-doet en onderzoeken welke vraag, wens of ontwikkelrichting centraal staat.",
  },
  {
    title: "Onderzoeken",
    text: "In gesprek ontstaat ruimte voor reflectie, inzicht en het beantwoorden van vragen die gaan over werk, gedrag, gevoel en keuzes.",
  },
  {
    title: "In Beweging",
    text: "Vanuit meer bewustwording en zelfvertrouwen kun je anders denken, voelen en handelen in de context van je werk of studie.",
  },
];

export default function CoachingConversationIllustration() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const reducedProgress = useMotionValue(0.5);

  const progress = reducedMotion ? reducedProgress : scrollYProgress;

  const leftX = useTransform(progress, [0, 0.32, 0.62, 1], [46, 112, 112, 58]);
  const rightX = useTransform(progress, [0, 0.32, 0.62, 1], [274, 208, 208, 262]);
  const leftY = useTransform(progress, [0, 0.32, 0.62, 1], [92, 92, 108, 92]);
  const rightY = useTransform(progress, [0, 0.32, 0.62, 1], [92, 92, 108, 92]);
  const leftScale = useTransform(progress, [0, 0.45, 0.7, 1], [1, 1, 0.96, 0.98]);
  const rightScale = useTransform(progress, [0, 0.45, 0.7, 1], [1, 1, 0.96, 0.98]);

  const tableOpacity = useTransform(progress, [0.18, 0.34, 0.68, 0.82], [0, 1, 1, 0]);
  const chairsOpacity = useTransform(progress, [0.22, 0.38, 0.64, 0.78], [0, 1, 1, 0]);
  const chatOpacity = useTransform(progress, [0, 0.1, 0.28, 0.38], [0.2, 1, 0.9, 0]);
  const insightOpacity = useTransform(progress, [0.3, 0.44, 0.7, 0.88], [0, 1, 1, 0.15]);
  const pathProgress = useTransform(progress, [0, 1], [0.18, 1]);

  const stepOneOpacity = useTransform(progress, [0, 0.18, 0.3, 0.42], [0.45, 1, 1, 0.25]);
  const stepTwoOpacity = useTransform(progress, [0.24, 0.4, 0.6, 0.76], [0.2, 1, 1, 0.3]);
  const stepThreeOpacity = useTransform(progress, [0.6, 0.78, 1], [0.2, 1, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh] bg-orato-light px-4 py-8 md:px-8 lg:px-10 cursor-scroll"
    >
      <div className="sticky top-20 cursor-scroll">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-orato-dark/10 bg-white/80 p-6 shadow-[0_40px_120px_-48px_rgba(20,20,20,0.22)] backdrop-blur md:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orato-dark/50">
              Coachingproces
            </p>
            <h2 className="mt-3 max-w-xl text-3xl leading-tight text-orato-dark md:text-5xl">
              Van kennismaken naar inzicht en concrete beweging.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-orato-dark/72 md:text-lg">
              Scroll door een indruk van hoe coaching kan verlopen: we maken
              contact, brengen de vraag in beeld, onderzoeken wat aandacht
              vraagt en werken toe naar verandering die merkbaar is in de
              praktijk.
            </p>

            <div className="mt-8 space-y-4">
              <motion.article
                style={{ opacity: stepOneOpacity }}
                className="rounded-[1.5rem] border border-orato-blue/12 bg-orato-blue/5 px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orato-blue">
                  {steps[0].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-orato-dark/72">
                  {steps[0].text}
                </p>
              </motion.article>
              <motion.article
                style={{ opacity: stepTwoOpacity }}
                className="rounded-[1.5rem] border border-orato-blue/12 bg-orato-blue/5 px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orato-blue">
                  {steps[1].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-orato-dark/72">
                  {steps[1].text}
                </p>
              </motion.article>
              <motion.article
                style={{ opacity: stepThreeOpacity }}
                className="rounded-[1.5rem] border border-orato-blue/12 bg-orato-blue/5 px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orato-blue">
                  {steps[2].title}
                </p>
                <p className="mt-2 text-sm leading-6 text-orato-dark/72">
                  {steps[2].text}
                </p>
              </motion.article>
            </div>
          </div>

          <div className="order-1 relative overflow-hidden rounded-[2rem] border border-orato-blue/15 bg-[linear-gradient(180deg,rgba(86,133,245,0.06),rgba(255,255,255,0.82))] p-4 md:p-6 lg:order-2">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(86,133,245,0.14),transparent_68%)]" />
            <div className="relative flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-orato-dark/46">
              <span>Contact</span>
              <span>Reflectie</span>
              <span>Verandering</span>
            </div>

            <svg
              viewBox="0 0 340 230"
              className="relative mt-4 h-auto w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M32 184C88 164 118 131 145 116C167 103 181 101 201 110C226 122 247 153 308 184"
                stroke="#5685F5"
                strokeOpacity="0.18"
                strokeWidth="1.6"
                strokeLinecap="round"
                style={{ pathLength: pathProgress }}
              />

              <motion.g style={{ x: leftX, y: leftY, scale: leftScale }}>
                <circle cx="0" cy="-30" r="14" fill="#5685F5" fillOpacity="0.22" />
                <path
                  d="M-26 8C-17 -9 -2 -18 15 -18C30 -18 45 -9 54 8"
                  stroke="#5685F5"
                  strokeOpacity="0.4"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M-4 -12V26"
                  stroke="#5685F5"
                  strokeOpacity="0.28"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M-18 28H18"
                  stroke="#5685F5"
                  strokeOpacity="0.2"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ opacity: chairsOpacity }}
                />
              </motion.g>

              <motion.g style={{ x: rightX, y: rightY, scale: rightScale }}>
                <circle cx="0" cy="-30" r="14" fill="#5685F5" fillOpacity="0.22" />
                <path
                  d="M-26 8C-17 -9 -2 -18 15 -18C30 -18 45 -9 54 8"
                  stroke="#5685F5"
                  strokeOpacity="0.4"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M-4 -12V26"
                  stroke="#5685F5"
                  strokeOpacity="0.28"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M-18 28H18"
                  stroke="#5685F5"
                  strokeOpacity="0.2"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ opacity: chairsOpacity }}
                />
              </motion.g>

              <motion.g style={{ opacity: tableOpacity }}>
                <rect
                  x="137"
                  y="144"
                  width="66"
                  height="9"
                  rx="4.5"
                  fill="#5685F5"
                  fillOpacity="0.18"
                />
                <path
                  d="M149 153V178"
                  stroke="#5685F5"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M191 153V178"
                  stroke="#5685F5"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.g>

              <motion.g style={{ opacity: chatOpacity }}>
                <rect
                  x="118"
                  y="34"
                  width="44"
                  height="22"
                  rx="11"
                  fill="#5685F5"
                  fillOpacity="0.1"
                />
                <rect
                  x="176"
                  y="34"
                  width="44"
                  height="22"
                  rx="11"
                  fill="#5685F5"
                  fillOpacity="0.1"
                />
                <circle cx="131" cy="45" r="2.5" fill="#5685F5" fillOpacity="0.26" />
                <circle cx="140" cy="45" r="2.5" fill="#5685F5" fillOpacity="0.26" />
                <circle cx="149" cy="45" r="2.5" fill="#5685F5" fillOpacity="0.26" />
                <circle cx="189" cy="45" r="2.5" fill="#5685F5" fillOpacity="0.26" />
                <circle cx="198" cy="45" r="2.5" fill="#5685F5" fillOpacity="0.26" />
                <circle cx="207" cy="45" r="2.5" fill="#5685F5" fillOpacity="0.26" />
              </motion.g>

              <motion.g style={{ opacity: insightOpacity }}>
                <circle cx="170" cy="56" r="20" fill="#5685F5" fillOpacity="0.08" />
                <path
                  d="M170 40L174.2 49.6L184.6 50.5L176.7 57.3L179 67.4L170 62L161 67.4L163.3 57.3L155.4 50.5L165.8 49.6L170 40Z"
                  fill="#5685F5"
                  fillOpacity="0.5"
                />
              </motion.g>
            </svg>

            <motion.div
              style={{ scaleX: pathProgress }}
              className="mt-4 h-1 origin-left rounded-full bg-gradient-to-r from-orato-blue/35 via-orato-blue to-orato-blue/35"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
