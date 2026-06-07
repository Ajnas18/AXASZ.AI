import React from 'react';
import Link from 'next/link';
import { Hammer } from 'lucide-react';

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="p-6 bg-trading-accent/10 rounded-full mb-8">
        <Hammer className="w-12 h-12 text-trading-accent animate-pulse" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
        {title}
      </h1>
      <p className="text-trading-text-muted text-lg max-w-lg mb-8">
        We are currently building this section to bring you the best premium trading tools. Stay tuned!
      </p>
      <Link href="/" className="bg-trading-card border border-trading-border px-6 py-3 rounded-xl hover:bg-trading-border transition-colors">
        Back to Terminal
      </Link>
    </div>
  );
}
