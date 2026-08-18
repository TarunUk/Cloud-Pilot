import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} rounded-lg bg-[#0E1322] border border-brand-500/30 flex items-center justify-center text-brand-400 transition-all duration-300 group-hover:border-brand-400/70 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full p-1.5 overflow-visible">
        <defs>
          <linearGradient id="logoDynamicSweep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981">
              <animate attributeName="stop-color" values="#10B981; #38BDF8; #10B981" dur="3.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#38BDF8">
              <animate attributeName="stop-color" values="#38BDF8; #10B981; #38BDF8" dur="3.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Outer Hex-Prism Path */}
        <path 
          d="M12 2L20 7V17L12 22L4 17V7L12 2Z" 
          stroke="url(#logoDynamicSweep)" 
          strokeWidth="2" 
          strokeLinejoin="round" 
        />

        {/* Inner Flight Ray lines */}
        <path 
          d="M12 2L12 12L20 17" 
          stroke="currentColor" 
          strokeWidth="1.2" 
          strokeOpacity="0.35" 
        />
        <path 
          d="M12 12L4 17" 
          stroke="currentColor" 
          strokeWidth="1.2" 
          strokeOpacity="0.35" 
        />

        {/* Pulsing Center Beacon */}
        <circle 
          cx="12" 
          cy="12" 
          r="3" 
          fill="#10B981" 
          className="animate-logo-pulse" 
        />
      </svg>
    </div>
  );
};
