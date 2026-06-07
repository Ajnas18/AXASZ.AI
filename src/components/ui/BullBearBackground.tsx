'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BullBearBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0d1117] pointer-events-none">
      {/* Bullish Green Glow (Moving up) */}
      <motion.div
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] bg-trading-green/20 rounded-full blur-[120px]"
      />

      {/* Bearish Red Glow (Moving down) */}
      <motion.div
        animate={{
          y: [0, 100, 0],
          x: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-trading-red/20 rounded-full blur-[120px]"
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
