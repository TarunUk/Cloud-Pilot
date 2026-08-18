import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-36 md:py-52 bg-bg-cta overflow-hidden">
      
      {/* LAYER 1: Emerald + Deep Blue Dual-Source Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[420px] bg-brand-500/12 blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] md:w-[850px] h-[400px] bg-infra/12 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Radial-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1322]/80 border border-white/[0.08] shadow-satellite-pill text-xs font-mono text-brand-400 mb-8 backdrop-blur-md rim-light">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          <span>Unified Cloud Command</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Take control of your infrastructure.
        </h2>

        {/* Short Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-normal">
          A clearer way to understand your cloud environment.
        </p>

        {/* 3D Elevated CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-glow-brand hover:shadow-[0_0_45px_rgba(16,185,129,0.45)] transition-all duration-200 group active:scale-98 text-sm transform hover:-translate-y-0.5"
          >
            <span>Explore CloudPilot</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-slate-300 bg-[#0E1322]/80 hover:bg-[#151C30] border border-white/[0.08] hover:border-white/[0.15] shadow-lg transition-all duration-200 text-sm backdrop-blur-sm transform hover:-translate-y-0.5"
          >
            <span>View Dashboard</span>
          </a>
        </div>

      </div>
    </section>
  );
};
