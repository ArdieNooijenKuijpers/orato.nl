'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/app/utils/useMousePosition';

// Added the mouse following feature use cursor-invert and cursor-small to get the results

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHoveringSmall, setIsHoveringSmall] = useState(false);
  const [isInverting, setIsInverting] = useState(false);
  const [isHoveringBig, setIsHoveringBig] = useState(false);
//to so if the mouse is hovering over the cursor
  useEffect(() => {
    const handleMouseOver = (e: { target: any }) => {
      const target = e.target;

      if (target.closest(".cursor-small")) {
        setIsHoveringSmall(true);
      }

      if (target.closest(".cursor-invert")) {
        setIsInverting(true);
      }
      if (target.closest(".cursor-big")) {
        setIsHoveringBig(true);
      }
    };
//to see if the mouse is not hovering over the cursor
    const handleMouseOut = (e: { target: any }) => {
      const target = e.target;

      if (target.closest(".cursor-small")) {
        setIsHoveringSmall(false);
      }

      if (target.closest(".cursor-invert")) {
        setIsInverting(false);
      }
      if (target.closest(".cursor-big")) {
        setIsHoveringBig(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Orb that follows the mouse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
            // this is the css for the cursor so it changes when i hover over the text
          mixBlendMode: isInverting ? 'difference' : 'normal',
        }}
        animate={{
          x: x !== null ? x - (isHoveringSmall ? 8 : isHoveringBig ? 50 : 20) : 0,
          y: y !== null ? y - (isHoveringSmall ? 8 : isHoveringBig ? 50 : 20) : 0,
          //here i set the sizes of the cursor
          width: isHoveringSmall ? 8 : isHoveringBig ? 100 : 40,
          height: isHoveringSmall ? 8 : isHoveringBig ? 100 : 40,
          backgroundColor: isInverting ? '#ffffff' : '#f97316', // white or orange-500
        }}
        //here you can play with the settings of the ball and how responsive it is
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 30,
          mass: 1,
          ease: 'easeInOut',
          duration: 5,
        }}
      />
    </>
  );
}

export default CustomCursor;
