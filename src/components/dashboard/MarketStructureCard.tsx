'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, CheckCircle2, XCircle, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { MarketStructure } from '@/types/analysis';

interface Props {
  data: MarketStructure;
}

export default function MarketStructureCard({ data }: Props) {
  const TrendIcon = 
    data.trendDirection === 'BULLISH' ? ArrowUpRight :
    data.trendDirection === 'BEARISH' ? ArrowDownRight : Minus;

  const trendColor = 
    data.trendDirection === 'BULLISH' ? 'text-trading-green' :
    data.trendDirection === 'BEARISH' ? 'text-trading-red' : 'text-trading-accent';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-trading-card border border-trading-border p-6 rounded-2xl flex flex-col gap-6 shadow-lg shadow-black/20"
    >
      <div className="flex justify-between items-center border-b border-trading-border pb-4">
        <h3 className="text-trading-text-muted font-medium flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4" /> Market Structure
        </h3>
        <div className={`flex items-center gap-2 font-bold ${trendColor}`}>
          <TrendIcon className="w-5 h-5" />
          {data.trendDirection}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm text-trading-text-muted mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-trading-green" /> Support Zones
          </h4>
          <ul className="space-y-2">
            {data.supportZones.map((zone, idx) => (
              <li key={idx} className="bg-trading-bg/50 px-3 py-2 rounded border border-trading-border/50 text-sm font-mono">
                {zone}
              </li>
            ))}
            {data.supportZones.length === 0 && <li className="text-sm text-trading-text-muted">None detected</li>}
          </ul>
        </div>

        <div>
          <h4 className="text-sm text-trading-text-muted mb-3 flex items-center gap-2">
            <XCircle className="w-4 h-4 text-trading-red" /> Resistance Zones
          </h4>
          <ul className="space-y-2">
            {data.resistanceZones.map((zone, idx) => (
              <li key={idx} className="bg-trading-bg/50 px-3 py-2 rounded border border-trading-border/50 text-sm font-mono">
                {zone}
              </li>
            ))}
            {data.resistanceZones.length === 0 && <li className="text-sm text-trading-text-muted">None detected</li>}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        <div className="bg-trading-bg/30 p-4 rounded-xl border border-trading-border/30">
          <p className="text-xs text-trading-text-muted mb-1">Breakouts</p>
          <div className="flex flex-wrap gap-1">
            {data.breakouts.map((item, i) => (
              <span key={i} className="text-xs bg-trading-accent/10 text-trading-accent px-2 py-1 rounded">{item}</span>
            ))}
            {data.breakouts.length === 0 && <span className="text-xs text-trading-text-muted">-</span>}
          </div>
        </div>

        <div className="bg-trading-bg/30 p-4 rounded-xl border border-trading-border/30">
          <p className="text-xs text-trading-text-muted mb-1">Retests</p>
          <div className="flex flex-wrap gap-1">
            {data.retests.map((item, i) => (
              <span key={i} className="text-xs bg-trading-accent/10 text-trading-accent px-2 py-1 rounded">{item}</span>
            ))}
            {data.retests.length === 0 && <span className="text-xs text-trading-text-muted">-</span>}
          </div>
        </div>

        <div className="bg-trading-bg/30 p-4 rounded-xl border border-trading-border/30">
          <p className="text-xs text-trading-text-muted mb-1">Rejections</p>
          <div className="flex flex-wrap gap-1">
            {data.rejections.map((item, i) => (
              <span key={i} className="text-xs bg-trading-accent/10 text-trading-accent px-2 py-1 rounded">{item}</span>
            ))}
            {data.rejections.length === 0 && <span className="text-xs text-trading-text-muted">-</span>}
          </div>
        </div>

        <div className="bg-trading-bg/30 p-4 rounded-xl border border-trading-border/30">
          <p className="text-xs text-trading-text-muted mb-1">Supply/Demand</p>
          <div className="flex flex-wrap gap-1">
            {data.supplyDemandZones.map((item, i) => (
              <span key={i} className="text-xs bg-trading-accent/10 text-trading-accent px-2 py-1 rounded">{item}</span>
            ))}
            {data.supplyDemandZones.length === 0 && <span className="text-xs text-trading-text-muted">-</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
