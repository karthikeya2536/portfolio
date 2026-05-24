"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const CanvasRevealCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "bg-black border border-black/[0.2] group/canvas-card flex items-center justify-center w-full max-w-sm mx-auto p-4 relative h-full rounded-xl overflow-hidden",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 py-2" // simplified canvas placeholder
          >
             <div className="absolute inset-0 bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
             <div className="absolute inset-0 bg-black/50" />
             {/* Simulating chaotic reveal with simple css pattern for robustness */}
             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full h-full">
         {children}
      </div>
    </div>
  );
};
