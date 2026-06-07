'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Loader2, AlertCircle } from 'lucide-react';
import ImageUpload from '@/components/ui/ImageUpload';
import EducationSlide from '@/components/ui/EducationSlide';
import AnalysisDashboard from '@/components/dashboard/AnalysisDashboard';
import StatsCards from '@/components/home/StatsCards';
import FeaturesSection from '@/components/home/FeaturesSection';
import Logo from '@/components/ui/Logo';
import { AnalysisResult } from '@/types/analysis';

export default function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        // Remove the data:image/jpeg;base64, prefix for the API
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageSelected = async (file: File | null) => {
    setSelectedFile(file);
    setAnalysisResult(null);
    setError(null);
    
    if (!file) return;

    try {
      setIsAnalyzing(true);
      
      const base64Data = await fileToBase64(file);
      
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: base64Data,
          mimeType: file.type,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze chart');
      }

      setAnalysisResult(data);
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(err.message || 'An unexpected error occurred during analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      
      {/* Hero Section */}
      <section className="w-full relative py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-trading-green/5 to-transparent z-[-1]" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <Logo width={64} height={64} className="scale-125" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
            AI-Powered Trading Intelligence
          </h1>
          <p className="text-xl text-trading-text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Upload any trading chart and let our institutional-grade Vision AI identify key levels, 
            market structure, and generate professional trading recommendations instantly.
          </p>
          <p className="text-lg font-bold text-trading-green max-w-2xl mx-auto italic mb-12 bg-trading-green/10 border border-trading-green/20 py-3 px-6 rounded-full inline-block">
            "Protect your capital first. Opportunities will always come again."
          </p>
        </motion.div>

        {/* Upload Section */}
        <div className="w-full max-w-3xl mx-auto relative z-10">
          <ImageUpload 
            onImageSelected={handleImageSelected} 
            isAnalyzing={isAnalyzing} 
          />
          
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-4 bg-trading-red/10 border border-trading-red/30 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-trading-red shrink-0 mt-0.5" />
              <div className="text-trading-red text-sm">
                <span className="font-bold">Analysis Failed</span>
                <p className="mt-1 opacity-90">{error}</p>
              </div>
            </motion.div>
          )}

          {analysisResult && selectedFile && (
            <div className="mt-12">
              <AnalysisDashboard result={analysisResult} />
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <div className="w-full border-y border-trading-border/50 bg-[#0A0A0A]/80 backdrop-blur-md">
        <StatsCards />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Education Slide */}
      <div className="w-full px-4 mb-20">
        <EducationSlide />
      </div>

    </main>
  );
}
