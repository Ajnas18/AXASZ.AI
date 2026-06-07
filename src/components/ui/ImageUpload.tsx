'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageUploadProps {
  onImageSelected: (file: File | null, previewUrl: string | null) => void;
  isAnalyzing?: boolean;
}

export default function ImageUpload({ onImageSelected, isAnalyzing }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onImageSelected(file, objectUrl);
    }
  }, [onImageSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    maxFiles: 1,
    disabled: isAnalyzing,
  });

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    onImageSelected(null, null);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!preview ? (
          <div {...getRootProps()} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`relative p-8 w-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors
                ${isDragActive ? 'border-trading-accent bg-trading-accent/10' : 'border-trading-border bg-trading-card hover:border-trading-accent/50'}
                ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}
                glass-panel
              `}
            >
              <input {...getInputProps()} />
              <div className="bg-trading-bg p-4 rounded-full mb-4 shadow-lg border border-trading-border">
                <UploadCloud className="w-8 h-8 text-trading-accent" />
              </div>
              <p className="text-lg font-medium text-trading-text mb-1">
                {isDragActive ? 'Drop chart here...' : 'Upload Trading Chart'}
              </p>
              <p className="text-sm text-trading-text-muted">
                Drag & drop or click to select (PNG, JPG, JPEG)
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full rounded-xl overflow-hidden glass-panel border border-trading-border group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={preview} 
              alt="Chart preview" 
              className="w-full h-auto object-contain max-h-[500px] bg-black/50"
            />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={clearImage}
                disabled={isAnalyzing}
                className="bg-trading-red/90 hover:bg-trading-red text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <X className="w-4 h-4" /> Remove Image
              </button>
            </div>
            
            <div className="absolute top-4 left-4 bg-trading-card/80 backdrop-blur text-xs px-3 py-1.5 rounded-full border border-trading-border flex items-center gap-2 text-trading-text-muted">
              <ImageIcon className="w-3 h-3" /> Chart Uploaded
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
