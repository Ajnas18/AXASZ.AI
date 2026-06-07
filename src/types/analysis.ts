export interface RiskManagement {
  entryPrice: string;
  stopLoss: string;
  takeProfit1: string;
  takeProfit2: string;
  riskRewardRatio: string;
}

export interface MarketStructure {
  supportZones: string[];
  resistanceZones: string[];
  trendDirection: 'BULLISH' | 'BEARISH' | 'SIDEWAYS';
  breakouts: string[];
  retests: string[];
  rejections: string[];
  supplyDemandZones: string[];
}

export interface AnalysisResult {
  recommendation: 'BUY' | 'SELL' | 'WAIT';
  confidenceScore: number;
  reasoning: string;
  riskManagement: RiskManagement;
  marketStructure: MarketStructure;
}
