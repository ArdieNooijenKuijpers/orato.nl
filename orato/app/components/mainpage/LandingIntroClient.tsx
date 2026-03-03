"use client";

import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

const INTRO_STORAGE_KEY = "orato-home-intro-session-v1";
type VideoSource = {
  src: string;
  type: "video/webm" | "video/mp4";
};

// Timing constants for the intro animation and outro transition
const OUTRO_MASK_MS = 700;
const OUTRO_FADE_MS = 1000;
const OUTRO_FADE_DELAY_MS = 1100;
const OUTRO_MS = OUTRO_FADE_DELAY_MS + OUTRO_FADE_MS;
const OUTRO_EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const MASK_START_SIZE = "2400vmax";
const MASK_END_SIZE = "44vmin";

export default function LandingIntroClient({ sources }: { sources: VideoSource[] }) {
  const [showIntro, setShowIntro] = useState(true);
  const [isOutro, setIsOutro] = useState(false);
  const [animateOutro, setAnimateOutro] = useState(false);
  const doneTimeoutRef = useRef<number | null>(null);

  const finishIntro = useCallback(() => {
    setAnimateOutro(true);

    if (doneTimeoutRef.current) {
      window.clearTimeout(doneTimeoutRef.current);
    }

    doneTimeoutRef.current = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
      setShowIntro(false);
    }, OUTRO_MS);
  }, []);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";
    if (hasSeenIntro) {
      setShowIntro(false);
    }

    return () => {
      if (doneTimeoutRef.current) {
        window.clearTimeout(doneTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOutro) {
      return;
    }

    const id = window.requestAnimationFrame(() => {
      setAnimateOutro(true);
    });

    return () => {
      window.cancelAnimationFrame(id);
    };
  }, [isOutro]);

  const startOutro = useCallback(() => {
    if (isOutro) {
      return;
    }

    setIsOutro(true);
    finishIntro();
  }, [finishIntro, isOutro]);

  if (!showIntro || sources.length === 0) {
    return null;
  }

  const outroStyle: CSSProperties = {
    WebkitMaskImage: "url('/Homepage/LandingAnimation/orato-bloem-wit.svg')",
    maskImage: "url('/Homepage/LandingAnimation/orato-bloem-wit.svg')",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    maskMode: "alpha",
    WebkitMaskSize: animateOutro ? MASK_END_SIZE : MASK_START_SIZE,
    maskSize: animateOutro ? MASK_END_SIZE : MASK_START_SIZE,
    opacity: animateOutro ? 0 : 1,
    transition: `-webkit-mask-size ${OUTRO_MASK_MS}ms ${OUTRO_EASING}, mask-size ${OUTRO_MASK_MS}ms ${OUTRO_EASING}, opacity ${OUTRO_FADE_MS}ms ease-out ${OUTRO_FADE_DELAY_MS}ms`,
  };

  return (
    <div className="fixed inset-0 z-[300] bg-transparent">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        style={outroStyle}
        onEnded={startOutro}
      >
        {sources.map((source) => (
          <source key={`${source.type}-${source.src}`} src={source.src} type={source.type} />
        ))}
      </video>

      <button
        type="button"
        onClick={startOutro}
        className="absolute bottom-6 right-6 rounded-full border border-white/60 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/10"
      >
        Overslaan
      </button>
    </div>
  );
}
