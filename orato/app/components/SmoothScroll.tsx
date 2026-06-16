"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const restoreFlagKey = "orato:restore-scroll-on-pop";
const scrollKeyPrefix = "orato:scroll-position:";

export default function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const getScrollKey = () =>
      `${scrollKeyPrefix}${window.location.pathname}${window.location.search}`;
    let scrollSaveFrame: number | null = null;
    const saveScrollPosition = () => {
      sessionStorage.setItem(getScrollKey(), String(window.scrollY));
    };
    const scheduleScrollSave = () => {
      if (scrollSaveFrame !== null) {
        return;
      }

      scrollSaveFrame = window.requestAnimationFrame(() => {
        saveScrollPosition();
        scrollSaveFrame = null;
      });
    };
    const restoreScrollPosition = (lenis?: Lenis) => {
      if (sessionStorage.getItem(restoreFlagKey) !== "true") {
        return;
      }

      sessionStorage.removeItem(restoreFlagKey);
      const savedY = Number(sessionStorage.getItem(getScrollKey()) ?? 0);

      window.requestAnimationFrame(() => {
        if (lenis) {
          lenis.scrollTo(savedY, { immediate: true });
          return;
        }

        window.scrollTo(0, savedY);
      });
    };

    if (mediaQuery.matches) {
      restoreScrollPosition();
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      smoothWheel: true,
    });

    let frameId = 0;

    const onFrame = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(onFrame);
    };

    frameId = window.requestAnimationFrame(onFrame);
    restoreScrollPosition(lenis);

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;

      if (!(target instanceof HTMLAnchorElement)) {
        return;
      }

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || target.target) {
        return;
      }

      const url = new URL(target.href, window.location.href);
      if (url.origin === window.location.origin) {
        saveScrollPosition();
      }
    };

    const onPopState = () => {
      sessionStorage.setItem(restoreFlagKey, "true");
      window.setTimeout(() => restoreScrollPosition(lenis), 80);
    };

    document.addEventListener("click", onDocumentClick, true);
    window.addEventListener("scroll", scheduleScrollSave, { passive: true });
    window.addEventListener("popstate", onPopState);
    window.addEventListener("pagehide", saveScrollPosition);

    return () => {
      saveScrollPosition();
      if (scrollSaveFrame !== null) {
        window.cancelAnimationFrame(scrollSaveFrame);
      }
      document.removeEventListener("click", onDocumentClick, true);
      window.removeEventListener("scroll", scheduleScrollSave);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("pagehide", saveScrollPosition);
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
