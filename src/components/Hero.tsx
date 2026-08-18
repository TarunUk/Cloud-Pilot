import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-28 md:pt-56 md:pb-40 overflow-hidden bg-bg-hero">
      
      {/* Ambient Lighting: Multi-Layered Emerald + Blue Dual Lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1050px] h-[480px] bg-gradient-to-tr from-brand-500/14 via-infra/10 to-transparent blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] md:w-[850px] h-[420px] bg-gradient-to-bl from-infra/12 via-telemetry/8 to-transparent blur-[170px] rounded-full pointer-events-none -z-10" />

      {/* Edge-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* Abstract 3D Geometric Orbital Wireframe */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center -z-10">
        <svg className="w-full max-w-5xl h-[450px] animate-float-gentle" viewBox="0 0 1000 450" fill="none">
          <ellipse cx="500" cy="225" rx="380" ry="130" stroke="url(#heroOrbitGradClean)" strokeWidth="1.5" strokeDasharray="6 8" />
          <ellipse cx="500" cy="225" rx="240" ry="80" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="240" cy="170" r="4" fill="#10B981" />
          <circle cx="760" cy="280" r="4" fill="#38BDF8" />
          <defs>
            <linearGradient id="heroOrbitGradClean" x1="120" y1="95" x2="880" y2="355" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Status Indicator with 3D Pill Elevation */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1322]/85 border border-white/[0.08] shadow-satellite-pill text-xs font-mono text-slate-300 mb-8 backdrop-blur-md rim-light">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span>All systems operational</span>
        </div>

        {/* Large Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-8">
          Your cloud infrastructure.{' '}
          <span className="block mt-2 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            One command center.
          </span>
        </h1>

        {/* Short Readable Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Deploy, monitor, and understand your infrastructure from one beautifully designed workspace.
        </p>

        {/* Strong CTA Buttons with 3D Depth */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-glow-brand hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-200 group active:scale-98 text-sm transform hover:-translate-y-0.5"
          >
            <span>Explore CloudPilot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 bg-[#0E1322]/80 hover:bg-[#151C30] border border-white/[0.08] hover:border-white/[0.15] shadow-lg transition-all duration-200 text-sm backdrop-blur-sm transform hover:-translate-y-0.5"
          >
            <span>View Dashboard</span>
          </a>
        </div>

      </div>
    </section>
  );
};
