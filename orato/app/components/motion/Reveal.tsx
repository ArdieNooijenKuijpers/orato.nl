"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.18,
  direction = "up",
}: RevealProps) {
  const reducedMotion = useReducedMotion() ?? false;

  const hiddenOffset =
    direction === "left"
      ? { x: -28, y: 0 }
      : direction === "right"
        ? { x: 28, y: 0 }
        : { x: 0, y: 28 };

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, ...hiddenOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
