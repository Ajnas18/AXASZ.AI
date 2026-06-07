'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { AnalysisResult } from '@/types/analysis';
import RecommendationCard from './RecommendationCard';
import RiskManagementCard from './RiskManagementCard';
import MarketStructureCard from './MarketStructureCard';

interface Props {
  result: AnalysisResult;
}

export default function AnalysisDashboard({ result }: Props) {
  return (
    <div className="w-full mt-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RecommendationCard 
            recommendation={result.recommendation} 
            confidenceScore={result.confidenceScore} 
          />
        </div>
        <div className="lg:col-span-2">
          <RiskManagementCard data={result.riskManagement} />
        </div>
      </div>

      <MarketStructureCard data={result.marketStructure} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-panel p-6 rounded-2xl"
      >
        <h3 className="text-trading-text-muted font-medium flex items-center gap-2 mb-4 border-b border-trading-border pb-4">
          <BrainCircuit className="w-4 h-4 text-trading-accent" /> AI Reasoning
        </h3>
        <p className="text-trading-text leading-relaxed whitespace-pre-wrap">
          {result.reasoning}
        </p>
      </motion.div>
    </div>
  );
}
