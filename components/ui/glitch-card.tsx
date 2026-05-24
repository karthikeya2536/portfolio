"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchCardProps {
  children: React.ReactNode;
}

export const GlitchCard: React.FC<GlitchCardProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Glitch Layers */}
      <motion.div
        className="absolute inset-0 bg-red-500/20 mix-blend-screen z-0 pointer-events-none"
        animate={isHovered ? {
          x: [-2, 2, -1, 3, 0],
          y: [1, -1, 2, -2, 0],
          opacity: [0, 0.5, 0],
        } : { opacity: 0 }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
      />
       <motion.div
        className="absolute inset-0 bg-blue-500/20 mix-blend-screen z-0 pointer-events-none"
        animate={isHovered ? {
          x: [2, -2, 1, -3, 0],
          y: [-1, 1, -2, 2, 0],
          opacity: [0, 0.5, 0],
        } : { opacity: 0 }}
        transition={{ duration: 0.25, repeat: Infinity, repeatType: "mirror" }}
      />
      
      {/* Scanline */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-20"
        initial={{ y: "-100%" }}
        animate={isHovered ? { y: "100%" } : { y: "-100%" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
