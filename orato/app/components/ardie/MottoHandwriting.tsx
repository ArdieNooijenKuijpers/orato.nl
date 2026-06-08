"use client";

import { motion, useReducedMotion } from "framer-motion";

type MottoHandwritingProps = {
  className?: string;
  text: string;
};

export default function MottoHandwriting({
  className,
  text,
}: MottoHandwritingProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const characters = Array.from(text);

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      whileInView={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="overflow-visible"
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={{
          hidden: {},
          visible: {
            transition: reducedMotion
              ? {}
              : {
                  staggerChildren: 0.045,
                  delayChildren: 0.08,
                },
          },
        }}
        className={className}
        style={{ textShadow: "0 10px 22px rgba(197,117,38,0.16)" }}
      >
        {characters.map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            variants={{
              hidden: reducedMotion
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {
                    opacity: 0,
                    y: 6,
                    rotate: -4,
                    filter: "blur(2px)",
                  },
              visible: reducedMotion
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.26,
                      ease: "easeOut",
                    },
                  },
            }}
            style={{
              display: character === " " ? "inline" : "inline-block",
              whiteSpace: character === " " ? "pre" : undefined,
            }}
          >
            {character === " " ? "\u00A0" : character}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  );
}
