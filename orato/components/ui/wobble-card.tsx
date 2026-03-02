"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WobbleCardProps {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
}

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: WobbleCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative h-full w-full",
        containerClassName
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className={cn(
          "relative h-full w-full rounded-2xl bg-gradient-to-br from-orato-light to-orato-light/80 p-6 shadow-lg border border-orato-dark/10",
          "group-hover:shadow-2xl group-hover:shadow-orato-orange/20",
          "transition-all duration-300 ease-out",
          className
        )}
        whileHover={{
          rotateX: 4,
          rotateY: 4,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
        
        {/* Background noise texture - uncomment when noise.webp is added to public folder */}
        {/* <div 
          className="absolute inset-0 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            backgroundImage: "url('/noise.webp')",
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        /> */}
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orato-orange/5 via-transparent to-orato-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};
