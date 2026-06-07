'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, Activity } from 'lucide-react';
import { AnalysisResult } from '@/types/analysis';

interface Props {
  recommendation: AnalysisResult['recommendation'];
  confidenceScore: number;
}

export default function RecommendationCard({ recommendation, confidenceScore }: Props) {
  const isBuy = recommendation === 'BUY';
  const isSell = recommendation === 'SELL';
  
  const bgColor = isBuy 
    ? 'bg-trading-green/10 border-trading-green/50 text-trading-green' 
    : isSell 
      ? 'bg-trading-red/10 border-trading-red/50 text-trading-red' 
      : 'bg-trading-yellow/10 border-trading-yellow/50 text-trading-yellow';

  const Icon = isBuy ? TrendingUp : isSell ? TrendingDown : Clock;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-trading-card border border-trading-border p-6 rounded-2xl flex flex-col gap-4 shadow-lg shadow-black/20"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-trading-text-muted font-medium flex items-center gap-2">
          <Activity className="w-4 h-4" /> AI Recommendation
        </h3>
        <div className="text-right">
          <p className="text-xs text-trading-text-muted uppercase tracking-wider">Confidence</p>
          <p className="text-lg font-bold text-white">{confidenceScore}%</p>
        </div>
      </div>

      <div className={`mt-2 flex flex-col items-center justify-center py-6 rounded-xl border-2 ${bgColor}`}>
        <Icon className="w-12 h-12 mb-2" />
        <h2 className="text-4xl font-black tracking-tight">{recommendation}</h2>
      </div>
      
      {/* Confidence progress bar */}
      <div className="w-full bg-[#0A0A0A] rounded-full h-2 mt-2 overflow-hidden border border-trading-border">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${confidenceScore}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full ${isBuy ? 'bg-trading-green shadow-[0_0_10px_#00C853]' : isSell ? 'bg-trading-red shadow-[0_0_10px_#FF3D57]' : 'bg-trading-yellow shadow-[0_0_10px_#FFC107]'}`}
        />
      </div>
    </motion.div>
  );
}
