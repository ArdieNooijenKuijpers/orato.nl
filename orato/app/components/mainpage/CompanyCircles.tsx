'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { companies } from '../mainpage/Data/Companies';

// Tailwind sizing classes for each company size.
const sizeMap: Record<'K' | 'M' | 'G' | 'GG', string> = {
  K: 'w-6 h-6',   // 16px
  M: 'w-10 h-10',   // 24px
  G: 'w-16 h-16', // 40px
  GG: 'w-28 h-28' // 96px
};

// Pixel sizes corresponding to the Tailwind sizes.
const pixelSizeMap: Record<'K' | 'M' | 'G' | 'GG', number> = {
  K: 24,
  M: 40,
  G: 64,
  GG: 112,
};

interface Position {
  x: number;
  y: number;
  radius: number;
}

// A helper to compute the scaling variants based on company size.
const getOrbVariants = (size: 'K' | 'M' | 'G' | 'GG') => {
  // For GG orbs, we don't scale on hover.
  if (size === 'GG') {
    return {
      initial: { scale: 1 },
      hover: { scale: 1 },
    };
  }
  // For smaller orbs, scale so the final diameter equals that of a GG orb.
  return {
    initial: { scale: 1 },
    hover: { scale: pixelSizeMap['GG'] / pixelSizeMap[size] },
  };
};

interface CompanyOrbProps {
  company: { name: string; size: 'K' | 'M' | 'G' | 'GG' };
  position: Position;
  dimensions: { width: number; height: number };
}

const CompanyOrb: React.FC<CompanyOrbProps> = ({ company, position, dimensions }) => {
  // Local state to control the text animation.
  const [isHovered, setIsHovered] = useState(false);

  // Compute parent's scale factor if this is a smaller orb.
  // For non-GG orbs, parent's hover scale factor is:
  const parentScaleFactor =
    company.size !== 'GG' ? pixelSizeMap['GG'] / pixelSizeMap[company.size] : 1;

  return (
    <motion.div
      className={`absolute rounded-full bg-orato-dark   flex justify-center items-center text-center transition-colors duration-300 cursor-invert cursor-small overflow-visible ${sizeMap[company.size]}`}
      style={{
        top: `${(position.y / dimensions.height) * 100}%`,
        left: `${(position.x / dimensions.width) * 100}%`,
      }}
      variants={getOrbVariants(company.size)}
      initial="initial"
      whileHover="hover"
      // Update local hover state.
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {company.size === 'GG' ? (
        // GG orbs always display their text at normal scale.
        <span className="absolute text-white font-bold text-sm pointer-events-none">
          {company.name}
        </span>
      ) : (
        // For smaller orbs, fade in the text.
        // Also apply an inverse scale when hovered to counteract the parent's scale.
        <motion.span
          className="absolute text-white font-bold text-xs pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0,
            // When hovered, apply inverse scale to keep the text size constant.
            scale: isHovered ? 1 / parentScaleFactor : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {company.name}
        </motion.span>
      )}
    </motion.div>
  );
};

const CompanyCircles: React.FC = () => {
  // Ref and state to track container dimensions for responsiveness.
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFirefox, setIsFirefox] = useState(false);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    setIsFirefox(
      typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox')
    );
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width <= 0 || dimensions.height <= 0) {
      return;
    }

    const posArray: Position[] = [];
    const containerWidth = dimensions.width;
    const containerHeight = dimensions.height;

    companies.forEach((company) => {
      const diameter = pixelSizeMap[company.size];
      const radius = diameter / 2;
      let newPos: Position | null = null;
      let attempts = 0;

      while (!newPos && attempts < 100) {
        const x = Math.random() * (containerWidth - diameter);
        const y =
          containerHeight / 2 +
          Math.random() * ((containerHeight / 2) - diameter);
        const centerX = x + radius;
        const centerY = y + radius;

        let overlapping = false;
        for (const pos of posArray) {
          const otherCenterX = pos.x + pos.radius;
          const otherCenterY = pos.y + pos.radius;
          const dx = centerX - otherCenterX;
          const dy = centerY - otherCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < radius + pos.radius + 5) {
            overlapping = true;
            break;
          }
        }

        if (!overlapping) {
          newPos = { x, y, radius };
        }
        attempts++;
      }

      // Fallback: if no non-overlapping position is found.
      if (!newPos) {
        const x = Math.random() * (containerWidth - diameter);
        const y =
          containerHeight / 2 +
          Math.random() * ((containerHeight / 2) - diameter);
        newPos = { x, y, radius };
      }
      posArray.push(newPos);
    });

    setPositions(posArray);
  }, [dimensions]);

  const ggCompanies = companies.filter((company) => company.size === 'GG');
  const otherCompanies = companies.filter((company) => company.size !== 'GG');
  const otherRows = Array.from({ length: 4 }, (_, rowIndex) =>
    otherCompanies.filter((_, index) => index % 4 === rowIndex)
  );
  const mobileRows = [ggCompanies, ...otherRows];

  const mobileSizeMap: Record<'K' | 'M' | 'G' | 'GG', string> = {
    K: 'min-w-[140px]',
    M: 'min-w-[170px]',
    G: 'min-w-[200px]',
    GG: 'min-w-[230px]',
  };

  const mobileHeightMap: Record<'K' | 'M' | 'G' | 'GG', string> = {
    K: 'h-10 text-xs',
    M: 'h-12 text-sm',
    G: 'h-14 text-sm',
    GG: 'h-16 text-base',
  };

  const mobileColorMap: Record<'K' | 'M' | 'G' | 'GG', string> = {
    K: 'border-black/15 bg-white text-black',
    M: 'border-black/20 bg-black/5 text-black',
    G: 'border-orato-blue/60 bg-orato-blue text-white',
    GG: 'border-orato-orange/60 bg-orato-orange text-white',
  };

  return (
    <div className="relative min-h-screen w-full bg-orato-white overflow-hidden">
      {/* Desktop: existing circle layout */}
      <div
        ref={containerRef}
        className="relative hidden min-h-screen w-full overflow-hidden md:block"
      >
        <div className="absolute left-1/2 top-[24%] z-10 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-4 text-center text-5xl md:text-8xl xl:text-9xl font-bold tracking-tight text-black cursor-invert cursor-big">
          References available at your request
        </div>

        {/* Desktop interaction demo: fixed orb + cursor hover example */}
        <div className="pointer-events-none absolute left-[32%] top-[38%] z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-36 w-72">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orato-dark"
              style={{ width: 24, height: 24 }}
              animate={
                isFirefox
                  ? { scale: [1, 1, 4.2, 4.2, 1] }
                  : { width: [24, 24, 102, 102, 24], height: [24, 24, 102, 102, 24] }
              }
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.5, 0.72, 1] }}
            >
              <motion.span
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-center leading-none text-[11px] font-bold text-white"
                animate={
                  isFirefox
                    ? { opacity: [0, 0, 1, 1, 0], scale: [1, 1, 0.24, 0.24, 1] }
                    : { opacity: [0, 0, 1, 1, 0] }
                }
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.5, 0.72, 1] }}
              >
                Össur
              </motion.span>
            </motion.div>

            <motion.div
              className="absolute left-1/2 top-1/2"
              animate={{
                x: ["-120%", "-35%", "-8%", "-8%", "-120%"],//here i change the path of the cursor hover demo, to make it more dynamic and interesting, and to show that the orbs can be placed anywhere on the screen without breaking the animation
                y: ["-40%", "100%", "38%", "40%", "-40%"],
              }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.45, 0.72, 1] }}
            >
              <div className="relative">
                <motion.span
                  className="absolute left-[10px] top-[10px] h-5 w-5 rounded-full border border-orato-blue/70"
                  animate={{ scale: [0.5, 0.5, 1.5, 1.2, 0.5], opacity: [0, 0, 0.7, 0, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.5, 0.72, 1] }}
                />
                <svg
                  viewBox="0 0 20 20"
                  className="h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
                  aria-hidden="true"
                >
                  <path d="M2 1 L15 11 L9.2 11.5 L11.8 18.8 L8.6 20 L6 12.8 L2 16 Z" fill="#111" />
                  <path d="M2 1 L15 11 L9.2 11.5 L11.8 18.8 L8.6 20 L6 12.8 L2 16 Z" fill="none" stroke="#fff" strokeWidth="0.9" />
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="mt-1 rounded-full border border-black/20 bg-white/85 px-5 py-2 text-center text-sm font-semibold tracking-wide text-black shadow-md backdrop-blur-sm">
            Hover over an orb to expand and reveal the company
          </div>
        </div>

        {positions.length === companies.length && companies.map((company, index) => (
          <CompanyOrb
            key={company.name}
            company={company}
            position={positions[index]}
            dimensions={dimensions}
          />
        ))}
      </div>

      {/* Mobile: marquee-style references */}
      <div className="md:hidden min-h-screen px-3 py-6 flex flex-col justify-center">
        <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-black">
          References available at your request
        </h2>
        <div className="flex flex-col gap-2">
          {mobileRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative w-full overflow-hidden py-1">
              <div
                className={`flex w-max gap-3 ${rowIndex % 2 === 0 ? "animate-company-marquee" : "animate-company-marquee-reverse"}`}
                style={{ animationDuration: `${24 + rowIndex * 3}s` }}
              >
                {row.concat(row).map((company, index) => (
                  <div
                    key={`row-${rowIndex}-${company.name}-${index}`}
                    title={company.name}
                    className={`shrink-0 whitespace-nowrap rounded-full border px-4 font-semibold shadow-sm flex items-center justify-center ${mobileSizeMap[company.size]} ${mobileHeightMap[company.size]} ${mobileColorMap[company.size]}`}
                  >
                    {company.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes companyMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-company-marquee {
          animation: companyMarquee 28s linear infinite;
        }
        .animate-company-marquee-reverse {
          animation: companyMarquee 32s linear infinite reverse;
        }
      `}</style>
    </div>
  );
};

export default CompanyCircles;
