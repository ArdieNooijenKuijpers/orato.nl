"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const trackConfig = [
  {
    id: "coaching",
    label: "1-op-1 presentatiecoaching",
    accent: "#54a65e",
    triggerOffset: 0.35,
    panelClassName:
      "border-orato-dark/18 bg-white/96 text-orato-dark shadow-[0_22px_60px_-26px_rgba(20,20,20,0.36)] backdrop-blur-lg",
    sheenClassName:
      "bg-[linear-gradient(135deg,rgba(20,20,20,0.06),transparent_55%)]",
    dividerClassName: "bg-orato-dark/10",
    labelClassName: "text-orato-dark/58",
    textClassName: "text-orato-dark",
  },
  {
    id: "speaking-circle",
    label: "Speaking Circle®",
    accent: "#ffffff",
    triggerOffset: 0.35,
    panelClassName:
      "border-white/18 bg-[#101010]/82 text-white shadow-[0_22px_60px_-26px_rgba(0,0,0,0.7)] backdrop-blur-md",
    sheenClassName:
      "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]",
    dividerClassName: "bg-white/8",
    labelClassName: "text-white/45",
    textClassName: "text-white",
  },
  {
    id: "workshops",
    label: "Workshops",
    accent: "#54a65e",
    triggerOffset: 0.5,
    panelClassName:
      "border-orato-dark/18 bg-[#f1f5ea]/96 text-orato-dark shadow-[0_22px_60px_-26px_rgba(20,20,20,0.32)] backdrop-blur-lg",
    sheenClassName:
      "bg-[linear-gradient(135deg,rgba(84,166,94,0.14),transparent_55%)]",
    dividerClassName: "bg-orato-dark/10",
    labelClassName: "text-orato-dark/58",
    textClassName: "text-orato-dark",
  },
] as const;

export default function TrackTransitionIndicator() {
  const reducedMotion = useReducedMotion() ?? false;
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [visibleTrack, setVisibleTrack] = useState<(typeof trackConfig)[number] | null>(null);
  const initializedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const getCurrentTrack = () => {
      for (let index = trackConfig.length - 1; index >= 0; index -= 1) {
        const track = trackConfig[index];
        const element = document.getElementById(track.id);
        const triggerOffset = window.innerHeight * (track.triggerOffset ?? 0.35);

        if (element && element.getBoundingClientRect().top <= triggerOffset) {
          return track.id;
        }
      }

      return null;
    };

    const updateTrack = () => {
      const nextTrack = getCurrentTrack();

      setActiveTrack((previousTrack) => {
        if (previousTrack === nextTrack) {
          return previousTrack;
        }

        if (!initializedRef.current) {
          initializedRef.current = true;
          return nextTrack;
        }

        if (nextTrack === null) {
          return null;
        }

        const track = trackConfig.find((item) => item.id === nextTrack) ?? null;
        setVisibleTrack(track);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setVisibleTrack(null);
        }, reducedMotion ? 700 : 1600);

        return nextTrack;
      });

      if (!initializedRef.current) {
        initializedRef.current = true;
      }
    };

    updateTrack();
    window.addEventListener("scroll", updateTrack, { passive: true });
    window.addEventListener("resize", updateTrack);

    return () => {
      window.removeEventListener("scroll", updateTrack);
      window.removeEventListener("resize", updateTrack);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-24 z-20 hidden justify-center lg:flex">
      <AnimatePresence mode="wait">
        {visibleTrack ? (
          <motion.div
            key={visibleTrack.id}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -18, scale: 0.96 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0.18 : 0.45, ease: "easeOut" }}
            className={`relative flex items-center gap-3 overflow-hidden rounded-full border px-5 py-3 ${visibleTrack.panelClassName}`}
          >
            <div className={`absolute inset-0 ${visibleTrack.sheenClassName}`} />
            <div className={`absolute inset-x-6 bottom-0 h-px ${visibleTrack.dividerClassName}`} />
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 56 24"
              className="relative h-6 w-14 flex-none"
              fill="none"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M3 12h34"
                stroke={visibleTrack.accent}
                strokeWidth="2.2"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0.4 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: reducedMotion ? 0.15 : 0.35, ease: "easeOut" }}
              />
              <motion.path
                d="M29 5l8 7-8 7"
                stroke={visibleTrack.accent}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0.4 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{
                  duration: reducedMotion ? 0.15 : 0.28,
                  ease: "easeOut",
                  delay: reducedMotion ? 0 : 0.08,
                }}
              />
              <motion.circle
                cx="47"
                cy="12"
                r="3"
                fill={visibleTrack.accent}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.6 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: [0.8, 1.15, 1] }}
                transition={{ duration: reducedMotion ? 0.15 : 0.45, ease: "easeOut" }}
              />
            </motion.svg>

            <div className="relative flex items-center gap-2">

              <span className={`text-base font-semibold ${visibleTrack.textClassName}`}>
                {visibleTrack.label}
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
