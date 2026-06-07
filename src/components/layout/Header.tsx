import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-trading-border bg-trading-bg/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo width={32} height={32} />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-trading-text hover:text-white transition-colors">Terminal</Link>
          <Link href="/markets" className="text-trading-text-muted hover:text-white transition-colors">Markets</Link>
          <Link href="/education" className="text-trading-text-muted hover:text-white transition-colors">Education</Link>
          <Link href="/pricing" className="text-trading-text-muted hover:text-white transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:inline-flex text-sm font-medium text-trading-text hover:text-white transition-colors">
            Log in
          </Link>
          <Link href="/" className="bg-trading-green text-white px-4 py-2 rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(0,200,83,0.3)] hover:shadow-[0_0_25px_rgba(0,200,83,0.5)] transition-shadow">
            Start Trading
          </Link>
        </div>
      </div>
    </header>
  );
}
