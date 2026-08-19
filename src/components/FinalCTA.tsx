import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ProgressiveBlur } from './ui/progressive-blur';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-bg-cta overflow-hidden transition-colors duration-500">
      {/* LAYER 1: Radiant Magenta + Deep Purple Dual-Source Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[450px] bg-[#C069FF]/20 blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] md:w-[900px] h-[420px] bg-[#EC4899]/18 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Radial-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card/90 border border-[#C069FF]/35 shadow-satellite-pill text-xs font-mono text-[#F4DFFF] mb-8 backdrop-blur-md rim-light">
          <span className="w-2 h-2 rounded-full bg-[#E879F9] animate-pulse" />
          <span>Unified Cloud Command</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
          Take control of your infrastructure.
        </h2>

        {/* Short Supporting Copy */}
        <p className="text-lg sm:text-xl text-muted-text max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          A clearer way to understand your cloud environment.
        </p>

        {/* 3D Elevated CTA Buttons using shadcn Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#product">
              <span>Explore CloudPilot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#product">
              <span>View Dashboard</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Atmospheric Progressive Blur Transition into Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none">
        <ProgressiveBlur
          direction="bottom"
          blurLevels={[2, 4, 8, 16]}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-footer/40 to-bg-footer" />
      </div>
    </section>
  );
};
