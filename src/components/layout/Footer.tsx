import React from 'react';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-trading-border bg-[#050505] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo width={24} height={24} className="mb-4" />
            <p className="text-trading-text-muted text-sm max-w-md">
              Premium AI-Powered Trading Intelligence. AXASZ.AI provides institutional-grade chart analysis, risk management, and trade setups using advanced vision models.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Platform</h4>
            <ul className="space-y-2 text-sm text-trading-text-muted">
              <li><Link href="/" className="hover:text-trading-green transition-colors">Terminal</Link></li>
              <li><Link href="/markets" className="hover:text-trading-green transition-colors">Market Screener</Link></li>
              <li><Link href="/pricing" className="hover:text-trading-green transition-colors">Pro Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-trading-text-muted">
              <li><Link href="#" className="hover:text-trading-green transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-trading-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-trading-green transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 bg-trading-red/5 border border-trading-red/10 rounded-xl mb-8 flex gap-4">
          <ShieldAlert className="w-8 h-8 text-trading-red shrink-0" />
          <div className="text-xs text-trading-text-muted leading-relaxed">
            <strong className="text-trading-red">HIGH RISK WARNING:</strong> Trading foreign exchange, cryptocurrencies, and other financial instruments on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The AI analysis provided by AXASZ.AI is for educational and informational purposes only and should not be construed as financial advice.
          </div>
        </div>

        <div className="border-t border-trading-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-trading-text-muted">
            &copy; {new Date().getFullYear()} AXASZ.AI. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-trading-text-muted">
            <span>Status: All Systems Operational <span className="inline-block w-2 h-2 bg-trading-green rounded-full ml-1 animate-pulse"></span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
