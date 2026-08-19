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
        className={`relative ${sizeClasses[size]} rounded-2xl bg-[#090D17] dark:bg-[#070A12] light:bg-[#0B101D] border border-brand-500/35 dark:border-brand-500/35 light:border-emerald-600/35 flex items-center justify-center transition-all duration-300 group-hover:border-brand-400 group-hover:shadow-[0_0_28px_rgba(16,185,129,0.45)] group-hover:scale-[1.03] shrink-0 shadow-satellite-pill overflow-visible`}
      >
        {/* Continuous Ambient Glow Pulse behind logo (3.2s loop) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-500/25 via-infra/20 to-telemetry/20 blur-[8px] animate-logo-halo pointer-events-none" />

        {/* SVG Precision Geometry & Traveling Light Sweep */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="w-full h-full p-2 overflow-visible relative z-10"
        >
          <defs>
            {/* Dynamic Continuous Energy Sweep Gradient (3.2s continuous loop) */}
            <linearGradient id="cloudpilotSweepLinear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981">
                <animate
                  attributeName="stop-color"
                  values="#10B981; #38BDF8; #8B5CF6; #10B981"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#38BDF8">
                <animate
                  attributeName="stop-color"
                  values="#38BDF8; #8B5CF6; #10B981; #38BDF8"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#8B5CF6">
                <animate
                  attributeName="stop-color"
                  values="#8B5CF6; #10B981; #38BDF8; #8B5CF6"
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
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#34D399" stopOpacity="1" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
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
            stroke="rgba(56, 189, 248, 0.45)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M20 20L5 28.5"
            stroke="rgba(56, 189, 248, 0.45)"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Continuous Flowing Energy Conduit Ray (Seamless 3.2s Loop) */}
          <path
            d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
            stroke="#34D399"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#cpGlowFilter)"
            className="animate-logo-circuit"
          />

          {/* Precision Secondary Cross-Conduit */}
          <path
            d="M5 11.5L20 20L35 11.5"
            stroke="#38BDF8"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-logo-circuit"
            style={{ animationDelay: '-1.6s' }}
          />

          {/* Center Orbital Command Beacon & Breathing Glow */}
          <circle
            cx="20"
            cy="20"
            r="3.5"
            fill="#10B981"
            className="animate-logo-beacon"
          />
          <circle
            cx="20"
            cy="20"
            r="7.5"
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            strokeOpacity="0.75"
          />
        </svg>
      </div>

      {/* CloudPilot Branded Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold tracking-tight text-foreground ${wordmarkSizes[size]} bg-gradient-to-r from-foreground via-foreground/90 to-muted-text bg-clip-text transition-colors`}
          >
            CloudPilot
          </span>
        </div>
      )}
    </div>
  );
};
