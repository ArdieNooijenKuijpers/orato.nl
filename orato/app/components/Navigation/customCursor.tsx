'use client';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Added the mouse following feature use cursor-invert and cursor-small to get the results

export function CustomCursor() {
  const pathname = usePathname();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHoveringSmall, setIsHoveringSmall] = useState(false);
  const [isInverting, setIsInverting] = useState(false);
  const [isHoveringBig, setIsHoveringBig] = useState(false);
  const [isShowingScrollHint, setIsShowingScrollHint] = useState(false);
  const [presenterenTrack, setPresenterenTrack] = useState<string | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 900, damping: 40, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 900, damping: 40, mass: 0.2 });
  const normalizedPath = pathname.replace(/\/$/, '').toLowerCase();
  const isPresenterenPage = normalizedPath === '/onderwerpen/presenteren';
  const sectionCursorColor =
    presenterenTrack === 'coaching'
      ? '#ffffff'
      : presenterenTrack === 'speaking-circle'
        ? '#141414'
        : presenterenTrack === 'workshops'
          ? '#77b829'
          : null;
  const sectionCursorLabel =
    presenterenTrack === 'coaching'
      ? '1-OP-1'
      : presenterenTrack === 'speaking-circle'
        ? 'SPEAKING CIRCLE'
        : presenterenTrack === 'workshops'
          ? 'WORKSHOPS'
          : null;
  const cursorColor = sectionCursorColor ?? '#f97316';
  const cursorTextColor = cursorColor === '#141414' ? '#ffffff' : '#141414';
  const isShowingSectionLabel =
    Boolean(sectionCursorLabel) &&
    !isShowingScrollHint &&
    !isHoveringSmall &&
    !isHoveringBig;

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateEnabledState = () => {
      setIsEnabled(!mobileQuery.matches && finePointerQuery.matches);
    };

    updateEnabledState();
    mobileQuery.addEventListener("change", updateEnabledState);
    finePointerQuery.addEventListener("change", updateEnabledState);

    return () => {
      mobileQuery.removeEventListener("change", updateEnabledState);
      finePointerQuery.removeEventListener("change", updateEnabledState);
    };
  }, []);

  useEffect(() => {
    if (!isPresenterenPage) {
      setPresenterenTrack(null);
      return;
    }

    const updatePresenterenTrack = () => {
      const trackIds = ['coaching', 'speaking-circle', 'workshops'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let index = trackIds.length - 1; index >= 0; index -= 1) {
        const id = trackIds[index];
        const element = document.getElementById(id);

        if (element && element.offsetTop <= scrollPosition) {
          setPresenterenTrack(id);
          return;
        }
      }

      setPresenterenTrack(null);
    };

    updatePresenterenTrack();
    window.addEventListener('scroll', updatePresenterenTrack, { passive: true });
    window.addEventListener('resize', updatePresenterenTrack);

    return () => {
      window.removeEventListener('scroll', updatePresenterenTrack);
      window.removeEventListener('resize', updatePresenterenTrack);
    };
  }, [isPresenterenPage]);

//to so if the mouse is hovering over the cursor
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

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
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const offset = isShowingScrollHint
      ? 48
      : isHoveringSmall
        ? 8
        : isHoveringBig
          ? 50
          : isShowingSectionLabel
            ? 42
            : 20;
    const handlePointerMove = (e: PointerEvent) => {
      rawX.set(e.clientX - offset);
      rawY.set(e.clientY - offset);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [
    isEnabled,
    isHoveringSmall,
    isHoveringBig,
    isShowingScrollHint,
    isShowingSectionLabel,
    rawX,
    rawY,
  ]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      {/* Orb that follows the mouse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[500] rounded-full"
        style={{
          x,
          y,
            // this is the css for the cursor so it changes when i hover over the text
          mixBlendMode: isInverting ? 'difference' : 'normal',
        }}
        animate={{
          //here i set the sizes of the cursor
          width: isShowingScrollHint ? 96 : isHoveringSmall ? 8 : isHoveringBig ? 100 : isShowingSectionLabel ? 84 : 40,
          height: isShowingScrollHint ? 96 : isHoveringSmall ? 8 : isHoveringBig ? 100 : isShowingSectionLabel ? 84 : 40,
          backgroundColor: isInverting ? '#ffffff' : cursorColor,
        }}
        //here you can play with the settings of the ball and how responsive it is
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
      >
        {isShowingScrollHint && (
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full"
            style={{ color: cursorTextColor }}
          >
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
              <text fill="currentColor" fontSize="10" letterSpacing="1.4" textAnchor="middle">
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
            {/* <div className="z-10 flex flex-col items-center">
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
            </div> */}
          </div>
        )}
        {isShowingSectionLabel && sectionCursorLabel && (
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full"
            style={{ color: cursorTextColor }}
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-spin [animation-duration:12s]"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="cursor-section-circle-path"
                  d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                />
              </defs>
              <text fill="currentColor" fontSize="9" letterSpacing="1.5" textAnchor="middle">
                <textPath
                  href="#cursor-section-circle-path"
                  startOffset="50%"
                  textLength="211"
                  lengthAdjust="spacing"
                >
                  {sectionCursorLabel} • {sectionCursorLabel} •
                </textPath>
              </text>
            </svg>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default CustomCursor;
