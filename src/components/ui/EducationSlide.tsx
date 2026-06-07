'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, TrendingDown, Layers } from 'lucide-react';

export default function EducationSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-7xl mx-auto my-12"
    >
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-trading-border relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-trading-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-trading-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-trading-accent/20 rounded-xl">
              <BookOpen className="w-6 h-6 text-trading-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Understanding S&R Strategy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-trading-bg/40 p-6 rounded-2xl border border-trading-border/50">
              <div className="w-10 h-10 bg-trading-green/20 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-trading-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Support (Floor)</h3>
              <p className="text-trading-text-muted text-sm leading-relaxed">
                A price level where a downtrend tends to pause due to a concentration of demand (buying interest). 
                When the price drops to this level, buyers step in, preventing it from falling further. 
                In our AI analysis, look for BUY setups near strong support zones.
              </p>
            </div>

            <div className="bg-trading-bg/40 p-6 rounded-2xl border border-trading-border/50">
              <div className="w-10 h-10 bg-trading-red/20 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-trading-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resistance (Ceiling)</h3>
              <p className="text-trading-text-muted text-sm leading-relaxed">
                A price level where an uptrend tends to pause temporarily, due to a concentration of supply (selling interest). 
                When the price rises to this level, sellers step in. 
                In our AI analysis, look for SELL setups near strong resistance zones.
              </p>
            </div>

            <div className="bg-trading-bg/40 p-6 rounded-2xl border border-trading-border/50">
              <div className="w-10 h-10 bg-trading-accent/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-trading-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">The Breakout & Retest</h3>
              <p className="text-trading-text-muted text-sm leading-relaxed">
                When price breaks through a resistance, that level often becomes the new support (and vice-versa). 
                The safest entries occur when the price breaks a level, then pulls back to <strong>retest</strong> it before continuing the trend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
