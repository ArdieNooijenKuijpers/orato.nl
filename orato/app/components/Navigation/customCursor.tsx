'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/app/utils/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHoveringSmall, setIsHoveringSmall] = useState(false);
  const [isInverting, setIsInverting] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: { target: any; }) => {
      const target = e.target;

      if (target.closest('.cursor-small')) {
        setIsHoveringSmall(true);
      }

      if (target.closest('.cursor-invert')) {
        setIsInverting(true);
      }
    };

    const handleMouseOut = (e: { target: any; }) => {
      const target = e.target;

      if (target.closest('.cursor-small')) {
        setIsHoveringSmall(false);
      }

      if (target.closest('.cursor-invert')) {
        setIsInverting(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Orb that follows the mouse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          mixBlendMode: isInverting ? 'difference' : 'normal',
        }}
        animate={{
          x: x !== null ? x - (isHoveringSmall ? 8 : 20) : 0,
          y: y !== null ? y - (isHoveringSmall ? 8 : 20) : 0,
          width: isHoveringSmall ? 8 : 40,
          height: isHoveringSmall ? 8 : 40,
          backgroundColor: isInverting ? '#ffffff' : '#f97316', // white or orange-500
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          mass: 1,
        }}
      />
    </>
  );
}

export default CustomCursor;
