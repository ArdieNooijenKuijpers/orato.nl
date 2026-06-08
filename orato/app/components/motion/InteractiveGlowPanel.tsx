"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../../lib/utils";

type InteractiveGlowPanelProps = {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
  hoverLift?: boolean;
};

type GlowPosition = {
  active: boolean;
  x: string;
  y: string;
};

export default function InteractiveGlowPanel({
  children,
  className,
  glowClassName,
  hoverLift = true,
}: InteractiveGlowPanelProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [glowPosition, setGlowPosition] = useState<GlowPosition>({
    active: false,
    x: "50%",
    y: "50%",
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setGlowPosition({
      active: true,
      x: `${x.toFixed(2)}%`,
      y: `${y.toFixed(2)}%`,
    });
  }

  function handleMouseLeave() {
    setGlowPosition((current) => ({
      ...current,
      active: false,
    }));
  }

  return (
    <div
      className={cn(
        "group relative isolate overflow-visible",
        hoverLift &&
          "transition-transform duration-500 ease-out hover:-translate-y-1",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          "--glow-x": glowPosition.x,
          "--glow-y": glowPosition.y,
        } as CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-500",
            reducedMotion || !glowPosition.active
              ? "opacity-0"
              : "opacity-100",
            glowClassName,
          )}
        />
        <div
          aria-hidden="true"
          className="absolute inset-px rounded-[inherit] border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
