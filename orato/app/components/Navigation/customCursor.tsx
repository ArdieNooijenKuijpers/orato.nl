'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Added the mouse following feature use cursor-invert and cursor-small to get the results

export function CustomCursor() {
  const [isHoveringSmall, setIsHoveringSmall] = useState(false);
  const [isInverting, setIsInverting] = useState(false);
  const [isHoveringBig, setIsHoveringBig] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 900, damping: 40, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 900, damping: 40, mass: 0.2 });
//to so if the mouse is hovering over the cursor
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;

      if (!target) {
        return;
      }

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
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;

      if (!target) {
        return;
      }

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

  useEffect(() => {
    const offset = isHoveringSmall ? 8 : isHoveringBig ? 50 : 20;
    const handlePointerMove = (e: PointerEvent) => {
      rawX.set(e.clientX - offset);
      rawY.set(e.clientY - offset);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [isHoveringSmall, isHoveringBig, rawX, rawY]);

  return (
    <>
      {/* Orb that follows the mouse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          x,
          y,
            // this is the css for the cursor so it changes when i hover over the text
          mixBlendMode: isInverting ? 'difference' : 'normal',
        }}
        animate={{
          //here i set the sizes of the cursor
          width: isHoveringSmall ? 8 : isHoveringBig ? 100 : 40,
          height: isHoveringSmall ? 8 : isHoveringBig ? 100 : 40,
          backgroundColor: isInverting ? '#ffffff' : '#f97316', // white or orange-500
        }}
        //here you can play with the settings of the ball and how responsive it is
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
      />
    </>
  );
}

export default CustomCursor;
