"use client";

import { useEffect, useState } from "react";

type QuoteBadgeProps = {
  id: string;
  quote: string;
  className?: string;
  tooltipAlign?: "center" | "right";
};

export default function QuoteBadge({
  id,
  quote,
  className = "",
  tooltipAlign = "center",
}: QuoteBadgeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const pathId = `quote-circle-path-${id}`;
  const tooltipPositionClass =
    tooltipAlign === "right"
      ? "fixed inset-x-4 bottom-4 translate-x-0 sm:absolute sm:inset-x-auto sm:bottom-[calc(100%+0.85rem)] sm:left-auto sm:right-0 sm:translate-x-0 group-hover:-translate-y-1"
      : "fixed inset-x-4 bottom-4 translate-x-0 sm:absolute sm:inset-x-auto sm:bottom-[calc(100%+0.85rem)] sm:left-1/2 sm:-translate-x-1/2 group-hover:-translate-y-1";
  const tooltipArrowClass =
    tooltipAlign === "right"
      ? "hidden sm:block sm:left-auto sm:right-8 sm:translate-x-0"
      : "hidden sm:block sm:left-1/2 sm:-translate-x-1/2";
  const tooltipVisibilityClass = isVisible
    ? "pointer-events-auto opacity-100 sm:pointer-events-none sm:opacity-0"
    : "pointer-events-none opacity-0";

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, [isVisible]);

  return (
    <button
      type="button"
      className={`group relative inline-flex appearance-none border-0 bg-transparent p-0 text-left ${className}`}
      onClick={() => setIsVisible(true)}
      aria-expanded={isVisible}
      aria-controls={`quote-tooltip-${id}`}
    >
      <div className="relative flex h-24 w-24 items-center justify-center text-white mix-blend-difference">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full animate-spin [animation-duration:12s] group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          <defs>
            <path
              id={pathId}
              d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
            />
          </defs>
          <text fill="currentColor" fontSize="9" letterSpacing="1.5" textAnchor="middle">
            <textPath href={`#${pathId}`} startOffset="50%" textLength="208" lengthAdjust="spacing">
              QUOTE • QUOTE • QUOTE • QUOTE •
            </textPath>
          </text>
        </svg>
        <div className="z-10 flex flex-col items-center text-inherit">
          <span className="text-sm font-semibold">Click</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div
        id={`quote-tooltip-${id}`}
        role="tooltip"
        className={`z-30 w-auto rounded-[1.5rem] border border-orato-dark/10 bg-white/95 px-4 py-3 text-sm leading-6 text-orato-dark shadow-[0_24px_60px_-28px_rgba(20,20,20,0.45)] transition-all duration-300 group-hover:sm:pointer-events-auto group-hover:sm:opacity-100 sm:w-72 ${tooltipPositionClass} ${tooltipVisibilityClass}`}
      >
        <div
          className={`absolute top-full h-3 w-3 -translate-y-1/2 rotate-45 border-b border-r border-orato-dark/10 bg-white/95 ${tooltipArrowClass}`}
        />
        {quote}
      </div>
    </button>
  );
}
