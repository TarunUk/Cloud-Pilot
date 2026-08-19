import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = false,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-18 h-18',
  };

  const wordmarkSizes = {
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Branded Hex-Prism Command Beacon Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-2xl bg-[#140725] border border-[#C069FF]/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#E879F9] group-hover:shadow-[0_0_28px_rgba(192,105,255,0.6)] group-hover:scale-[1.03] shrink-0 shadow-satellite-pill overflow-visible`}
      >
        {/* Continuous Ambient Glow Pulse behind logo (3.2s loop) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#C069FF]/30 via-[#EC4899]/25 to-[#D946EF]/25 blur-[10px] animate-logo-halo pointer-events-none" />

        {/* SVG Precision Geometry & Traveling Light Sweep */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="w-full h-full p-2 overflow-visible relative z-10"
        >
          <defs>
            {/* Dynamic Continuous Energy Sweep Gradient (3.2s continuous loop) */}
            <linearGradient id="cloudpilotSweepLinear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C069FF">
                <animate
                  attributeName="stop-color"
                  values="#C069FF; #EC4899; #E879F9; #C069FF"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#EC4899">
                <animate
                  attributeName="stop-color"
                  values="#EC4899; #E879F9; #C069FF; #EC4899"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#E879F9">
                <animate
                  attributeName="stop-color"
                  values="#E879F9; #C069FF; #EC4899; #E879F9"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Circuit Beam Glow Filter */}
            <filter id="cpGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Traveling Light Pulse Gradient along boundary */}
            <linearGradient id="travelingLightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C069FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#E879F9" stopOpacity="1" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Isometric Hex-Prism Precision Boundary */}
          <path
            d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
            stroke="url(#cloudpilotSweepLinear)"
            strokeWidth="2"
            strokeLinejoin="round"
            className="transition-opacity duration-300"
          />

          {/* Internal Telemetry Geometry Facets */}
          <path
            d="M20 3L20 20L35 28.5"
            stroke="rgba(244, 223, 255, 0.45)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M20 20L5 28.5"
            stroke="rgba(244, 223, 255, 0.45)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M20 20L20 37"
            stroke="rgba(244, 223, 255, 0.3)"
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* Continuous Energy Conduit Traveling Pulse */}
          <path
            d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5Z"
            stroke="url(#travelingLightBeam)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-logo-circuit opacity-90"
            filter="url(#cpGlowFilter)"
          />

          {/* Continuous Center Command Core Beacon Breathing Glow */}
          <circle
            cx="20"
            cy="20"
            r="3.5"
            className="fill-[#F4DFFF] animate-logo-beacon"
            filter="drop-shadow(0 0 6px #C069FF)"
          />
          <circle
            cx="20"
            cy="20"
            r="1.5"
            className="fill-white"
          />

          {/* Micro Telemetry Constellation Satellites */}
          <circle cx="20" cy="3" r="1.5" fill="#E879F9" className="opacity-90" />
          <circle cx="35" cy="11.5" r="1.5" fill="#EC4899" className="opacity-90" />
          <circle cx="35" cy="28.5" r="1.5" fill="#C069FF" className="opacity-90" />
          <circle cx="20" cy="37" r="1.5" fill="#E879F9" className="opacity-90" />
          <circle cx="5" cy="28.5" r="1.5" fill="#EC4899" className="opacity-90" />
          <circle cx="5" cy="11.5" r="1.5" fill="#C069FF" className="opacity-90" />
        </svg>
      </div>

      {/* Optional In-Component Continuous Shimmering Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold ${wordmarkSizes[size]} text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4DFFF] to-[#E879F9] tracking-tight group-hover:from-white group-hover:to-[#C069FF] transition-all animate-wordmark-shimmer`}
          >
            CloudPilot
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C4B5FD]/70 -mt-1">
            Command Center
          </span>
        </div>
      )}
    </div>
  );
};
