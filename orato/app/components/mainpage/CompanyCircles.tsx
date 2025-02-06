'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { companies } from '../mainpage/Data/Companies';
import { div } from 'framer-motion/client';

// Tailwind sizing classes for each company size.
const sizeMap: Record<'K' | 'M' | 'G' | 'GG', string> = {
  K: 'w-4 h-4',   // e.g., 16px
  M: 'w-6 h-6',   // e.g., 24px
  G: 'w-10 h-10', // e.g., 40px
  GG: 'w-24 h-24' // e.g., 96px
};

// Pixel sizes corresponding to the Tailwind sizes (assuming default Tailwind scale)
const pixelSizeMap: Record<'K' | 'M' | 'G' | 'GG', number> = {
  K: 16,
  M: 24,
  G: 40,
  GG: 96,
};

interface Position {
  x: number;
  y: number;
  radius: number;
}

const CompanyCircles: React.FC = () => {
  // Ref to measure container dimensions for responsiveness.
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 1000,
    height: 500,
  });

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

  // Compute non-overlapping positions in the bottom half only.
  const positions = React.useMemo(() => {
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
        // Ensure the orb is placed in the bottom half:
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

      // Fallback: even if overlapping, place the orb.
      if (!newPos) {
        const x = Math.random() * (containerWidth - diameter);
        const y =
          containerHeight / 2 +
          Math.random() * ((containerHeight / 2) - diameter);
        newPos = { x, y, radius };
      }
      posArray.push(newPos);
    });

    return posArray;
  }, [dimensions]);

  // Variants for the orb scaling and text appearance.
  const orbVariants = {
    initial: { scale: 1 },
    hover: { scale: 2 },
  };

  // Now the text not only fades in, but also moves upward so it's clearly visible.
  const textVariants = {
    initial: { opacity: 0, y: 0 },
    hover: { opacity: 1, y: -20 },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-orato-white overflow-hidden"
    >
      {/* Centered text div occupying the top half */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-xl lg:text-2xl xl:text-4xl font-bold text-black">
        References available at your request
      </div>
      {companies.map((company, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-orato-dark flex justify-center items-center transition-colors duration-300 cursor-invert overflow-visible ${sizeMap[company.size]}`}
          style={{
            // Convert computed positions to percentages.
            top: `${(positions[index]?.y / dimensions.height) * 100}%`,
            left: `${(positions[index]?.x / dimensions.width) * 100}%`,
          }}
          variants={orbVariants}
          initial="initial"
          whileHover="hover"
        >
          {company.size === 'GG' ? (
            // For "GG" orbs, the company name is always visible.
            <span className="absolute text-white font-bold text-sm pointer-events-none">
              {company.name}
            </span>
          ) : (
            // For other orbs, animate the text on hover.
            <motion.span
              className="absolute text-white font-bold text-sm pointer-events-none"
              variants={textVariants}
              initial="initial"
            >
              {company.name}
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CompanyCircles;
