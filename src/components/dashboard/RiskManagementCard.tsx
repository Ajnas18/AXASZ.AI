'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Target, AlertOctagon, ArrowRightLeft } from 'lucide-react';
import { RiskManagement } from '@/types/analysis';

interface Props {
  data: RiskManagement;
}

export default function RiskManagementCard({ data }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-trading-card border border-trading-border p-6 rounded-2xl flex flex-col gap-6 shadow-lg shadow-black/20 col-span-1 md:col-span-2"
    >
      <h3 className="text-trading-text-muted font-medium flex items-center gap-2 mb-2">
        <ShieldAlert className="w-4 h-4" /> Risk Management
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-trading-bg/50 p-4 rounded-xl border border-trading-border/50">
          <p className="text-xs text-trading-text-muted flex items-center gap-1 mb-1">
            <Crosshair className="w-3 h-3" /> Entry Price
          </p>
          <p className="text-lg font-mono text-trading-text">{data.entryPrice}</p>
        </div>

        <div className="bg-trading-bg/50 p-4 rounded-xl border border-trading-border/50">
          <p className="text-xs text-trading-text-muted flex items-center gap-1 mb-1">
            <AlertOctagon className="w-3 h-3 text-trading-red" /> Stop Loss
          </p>
          <p className="text-lg font-mono text-trading-red">{data.stopLoss}</p>
        </div>

        <div className="bg-trading-bg/50 p-4 rounded-xl border border-trading-border/50">
          <p className="text-xs text-trading-text-muted flex items-center gap-1 mb-1">
            <Target className="w-3 h-3 text-trading-green" /> Take Profit 1
          </p>
          <p className="text-lg font-mono text-trading-green">{data.takeProfit1}</p>
        </div>

        <div className="bg-trading-bg/50 p-4 rounded-xl border border-trading-border/50">
          <p className="text-xs text-trading-text-muted flex items-center gap-1 mb-1">
            <Target className="w-3 h-3 text-trading-green" /> Take Profit 2
          </p>
          <p className="text-lg font-mono text-trading-green">{data.takeProfit2}</p>
        </div>
      </div>

      <div className="mt-auto bg-trading-accent/10 border border-trading-accent/20 p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2 text-trading-accent text-sm font-medium">
          <ArrowRightLeft className="w-4 h-4" /> Risk/Reward Ratio
        </div>
        <div className="text-xl font-bold font-mono text-trading-accent">
          {data.riskRewardRatio}
        </div>
      </div>
    </motion.div>
  );
}
