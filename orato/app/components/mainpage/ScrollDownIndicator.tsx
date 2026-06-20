type ScrollDownIndicatorProps = {
  className?: string;
  color?: string;
  pathId: string;
};

const ScrollDownIndicator = ({
  className = "",
  color = "black",
  pathId,
}: ScrollDownIndicatorProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full animate-spin [animation-duration:10s]"
          aria-hidden="true"
        >
          <defs>
            <path
              id={pathId}
              d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
            />
          </defs>
          <text
            fill={color}
            fontSize="10"
            letterSpacing="1.4"
            textAnchor="middle"
          >
            <textPath
              href={`#${pathId}`}
              startOffset="50%"
              textLength="211"
              lengthAdjust="spacing"
            >
              SCROLL DOWN • SCROLL DOWN •
            </textPath>
          </text>
        </svg>
        <div className="z-10 flex flex-col items-center" style={{ color }}>
          <span className="animate-pulse text-lg">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
    </div>
  );
};

export default ScrollDownIndicator;
