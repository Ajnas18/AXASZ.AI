import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 40, height = 40 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Left Leg: Red Bearish Arrow */}
        <path 
          d="M 50 20 L 25 80 L 15 80 L 15 95 L 35 95 L 35 80 L 25 80 L 50 20 Z" 
          fill="#FF3D57" 
        />
        {/* Right Leg: Green Bullish Arrow */}
        <path 
          d="M 50 20 L 75 80 L 65 80 L 85 95 L 95 80 L 85 80 L 50 20 Z" 
          fill="#00C853" 
        />
        {/* Crossbar */}
        <path
          d="M 35 60 L 65 60"
          stroke="#F3F4F6"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* The Peak of 'A' */}
        <path
          d="M 50 10 L 58 30 L 42 30 Z"
          fill="#F3F4F6"
        />
      </svg>
      <span className="text-xl md:text-2xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
        AXASZ.AI
      </span>
    </div>
  );
}
