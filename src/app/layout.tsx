import type { Metadata } from 'next';
import './globals.css';
import BullBearBackground from '@/components/ui/BullBearBackground';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'AXASZ.AI - Premium Trading Intelligence',
  description: 'Institutional-grade AI Trading Chart Analysis Web Application powered by Vision Models.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-transparent text-trading-text selection:bg-trading-accent/30 selection:text-white flex flex-col">
        <BullBearBackground />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
