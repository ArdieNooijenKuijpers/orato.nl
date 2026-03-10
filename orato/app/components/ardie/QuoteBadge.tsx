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
  const pathId = `quote-circle-path-${id}`;
  const tooltipPositionClass =
    tooltipAlign === "right"
      ? "right-0 translate-x-0 group-hover:-translate-y-1"
      : "left-1/2 -translate-x-1/2 group-hover:-translate-y-1";
  const tooltipArrowClass =
    tooltipAlign === "right"
      ? "right-8 translate-x-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <div className={`group relative inline-flex ${className}`}>
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
        className={`pointer-events-none absolute bottom-[calc(100%+0.85rem)] z-30 w-72 rounded-[1.5rem] border border-orato-dark/10 bg-white/95 px-4 py-3 text-sm leading-6 text-orato-dark opacity-0 shadow-[0_24px_60px_-28px_rgba(20,20,20,0.45)] transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${tooltipPositionClass}`}
      >
        <div
          className={`absolute top-full h-3 w-3 -translate-y-1/2 rotate-45 border-b border-r border-orato-dark/10 bg-white/95 ${tooltipArrowClass}`}
        />
        {quote}
      </div>
    </div>
  );
}
