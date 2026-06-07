import React from 'react';
import { Eye, Shield, Target, TrendingUp } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-trading-accent" />,
      title: "Advanced Vision Models",
      description: "Our proprietary AI analyzes raw chart screenshots instantly, identifying complex market structures that traditional algorithms miss."
    },
    {
      icon: <Target className="w-8 h-8 text-trading-red" />,
      title: "Precision Key Levels",
      description: "Automatically detect institutional supply and demand zones, major support/resistance levels, and critical breakout points."
    },
    {
      icon: <Shield className="w-8 h-8 text-trading-yellow" />,
      title: "Strict Risk Management",
      description: "Every setup includes precise stop-loss and take-profit targets, ensuring a minimum 1:2 Risk/Reward ratio to protect your capital."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-trading-green" />,
      title: "Actionable Trade Setups",
      description: "Get clear, unambiguous BUY, SELL, or WAIT signals based purely on raw price action and high-probability confluences."
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Institutional-Grade Analysis</h2>
        <p className="text-trading-text-muted max-w-2xl mx-auto">
          AXASZ.AI levels the playing field by giving retail traders access to the same 
          advanced chart recognition technology used by top quantitative firms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-trading-card border border-trading-border p-8 rounded-2xl hover:border-trading-text/20 transition-colors">
            <div className="mb-6 p-4 bg-trading-bg inline-block rounded-xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-sm text-trading-text-muted leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
