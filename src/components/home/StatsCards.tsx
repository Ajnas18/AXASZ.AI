import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, ShieldCheck } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    {
      title: "Charts Analyzed",
      value: "1.2M+",
      icon: <Activity className="w-6 h-6 text-trading-green" />,
      color: "bg-trading-green/10",
      border: "border-trading-green/20"
    },
    {
      title: "Analysis Speed",
      value: "1.4s",
      icon: <Zap className="w-6 h-6 text-trading-yellow" />,
      color: "bg-trading-yellow/10",
      border: "border-trading-yellow/20"
    },
    {
      title: "Accuracy Rate",
      value: "94.8%",
      icon: <ShieldCheck className="w-6 h-6 text-trading-accent" />,
      color: "bg-trading-accent/10",
      border: "border-trading-accent/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-16">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`flex items-center gap-4 p-6 rounded-2xl bg-trading-card border ${stat.border}`}
        >
          <div className={`p-4 rounded-xl ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm font-medium text-trading-text-muted">{stat.title}</p>
            <h3 className="text-3xl font-black text-white tracking-tight">{stat.value}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
