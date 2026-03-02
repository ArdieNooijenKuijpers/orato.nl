'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Added the mouse following feature use cursor-invert and cursor-small to get the results

export function CustomCursor() {
  const [isHoveringSmall, setIsHoveringSmall] = useState(false);
  const [isInverting, setIsInverting] = useState(false);
  const [isHoveringBig, setIsHoveringBig] = useState(false);
  const [isShowingScrollHint, setIsShowingScrollHint] = useState(false);
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

      const isSmall = Boolean(target.closest(".cursor-small"));
      const isInverted = Boolean(target.closest(".cursor-invert"));
      const isBig = Boolean(target.closest(".cursor-big"));
      const isScrollZone = Boolean(target.closest(".cursor-scroll"));

      if (isSmall) {
        setIsHoveringSmall(true);
        setIsShowingScrollHint(false);
      }

      if (isInverted) {
        setIsInverting(true);
      }
      if (isBig) {
        setIsHoveringBig(true);
      }
      if (isScrollZone && !isSmall) {
        setIsShowingScrollHint(true);
      }
    };
//to see if the mouse is not hovering over the cursor
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      const nextTarget = e.relatedTarget instanceof Element ? e.relatedTarget : null;

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
      if (target.closest(".cursor-scroll")) {
        const nextInScrollZone = Boolean(nextTarget?.closest(".cursor-scroll"));
        const nextIsSmall = Boolean(nextTarget?.closest(".cursor-small"));
        setIsShowingScrollHint(nextInScrollZone && !nextIsSmall);
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
    const offset = isShowingScrollHint ? 48 : isHoveringSmall ? 8 : isHoveringBig ? 50 : 20;
    const handlePointerMove = (e: PointerEvent) => {
      rawX.set(e.clientX - offset);
      rawY.set(e.clientY - offset);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [isHoveringSmall, isHoveringBig, isShowingScrollHint, rawX, rawY]);

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
          width: isShowingScrollHint ? 96 : isHoveringSmall ? 8 : isHoveringBig ? 100 : 40,
          height: isShowingScrollHint ? 96 : isHoveringSmall ? 8 : isHoveringBig ? 100 : 40,
          backgroundColor: isInverting ? '#ffffff' : '#f97316', // white or orange-500
        }}
        //here you can play with the settings of the ball and how responsive it is
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
      >
        {isShowingScrollHint && (
          <div className="relative flex h-full w-full items-center justify-center rounded-full  text-black">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-spin [animation-duration:10s]"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="cursor-scroll-circle-path"
                  d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                />
              </defs>
              <text fill="black" fontSize="10" letterSpacing="1.4" textAnchor="middle">
                <textPath
                  href="#cursor-scroll-circle-path"
                  startOffset="50%"
                  textLength="211"
                  lengthAdjust="spacing"
                >
                  SCROLL DOWN • SCROLL DOWN •
                </textPath>
              </text>
            </svg>
            <div className="z-10 flex flex-col items-center">
              <span className="text-[11px] font-medium leading-none">Scroll</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default CustomCursor;
