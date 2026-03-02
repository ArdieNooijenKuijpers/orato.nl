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
      className={`absolute rounded-full bg-orato-dark   flex justify-center items-center text-center transition-colors duration-300 cursor-invert overflow-visible ${sizeMap[company.size]}`}
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

  // Compute non-overlapping positions for each orb (placed in the bottom half).
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

    return posArray;
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-orato-white overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-xl lg:text-2xl xl:text-4xl font-bold text-black">
        References available at your request
      </div>
      {companies.map((company, index) => (
        <CompanyOrb
          key={index}
          company={company}
          position={positions[index]}
          dimensions={dimensions}
        />
      ))}
    </div>
  );
};

export default CompanyCircles;
