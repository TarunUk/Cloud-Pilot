import React from 'react';
import { motion } from 'framer-motion';
import { ProgressiveBlur } from './ui/progressive-blur';

export const DeploySection: React.FC = () => {
  const steps = [
    { name: 'Code', desc: 'Commit sha-9f3a' },
    { name: 'Build', desc: 'Container packaged' },
    { name: 'Test', desc: '142 integration tests' },
    { name: 'Deploy', desc: 'Canary rollout 100%' },
    { name: 'Live', desc: 'Health verified' },
  ];

  return (
    <section
      id="deploy"
      className="relative py-28 md:py-44 bg-bg-deploy overflow-hidden transition-colors duration-500"
    >
      {/* LAYER 1: Atmospheric Magenta & Violet Gradient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1200px] h-[580px] bg-gradient-to-r from-[#C069FF]/20 via-[#EC4899]/15 to-[#551A94]/20 blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-[#E879F9]/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Radial-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Floating 3D Ambient Pipeline Nodes in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center -z-10">
        <svg className="w-full max-w-6xl h-64 animate-float-gentle" viewBox="0 0 1000 200" fill="none">
          <line x1="100" y1="100" x2="900" y2="100" stroke="#C069FF" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="250" cy="100" r="20" stroke="#E879F9" strokeWidth="2" />
          <circle cx="500" cy="100" r="28" stroke="#C069FF" strokeWidth="2" />
          <circle cx="750" cy="100" r="20" stroke="#EC4899" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#E879F9] uppercase tracking-widest font-semibold mb-3 block">
            Continuous Delivery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
            Deploy without losing visibility.
          </h2>
          <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal">
            Ship updates with automated health validation, zero-downtime rollouts, and instant rollbacks.
          </p>
        </div>

        {/* Floating 3D Dimensional Pipeline Canvas */}
        <div className="rounded-2xl border border-border bg-surface-card/90 p-6 sm:p-10 md:p-12 shadow-3d-deep backdrop-blur-xl relative rim-light transition-colors duration-300">
          {/* Floating Ambient Release Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C069FF]/15 border border-[#C069FF]/30 text-xs font-mono text-[#F4DFFF] absolute -top-3.5 right-8 shadow-satellite-pill backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9] animate-pulse" />
            <span>Zero-Downtime Pipeline</span>
          </div>

          {/* Animated Connecting Line & 3D Step Nodes */}
          <div className="relative mb-12 pt-4">
            {/* Desktop Path Line with Gradient */}
            <div className="hidden md:block absolute top-9 left-6 right-6 h-[2px] bg-surface-secondary -z-0">
              <div className="h-full bg-gradient-to-r from-[#C069FF] via-[#E879F9] to-[#F4DFFF] w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={step.name}
                  className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-surface-secondary border border-border flex items-center justify-center font-mono text-xs font-bold text-foreground shadow-satellite-pill shrink-0 group-hover:border-[#E879F9] group-hover:scale-105 transition-all">
                    <span className="text-[#E879F9] font-bold">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base">{step.name}</h3>
                    <p className="text-xs text-muted-text font-mono mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Rollout Bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E879F9] animate-pulse" />
              <span className="text-foreground font-medium">Release: frontend-v2.4</span>
              <span className="text-muted-text/50 hidden sm:inline">•</span>
              <span className="text-muted-text">Canary weight: 100% (Zero dropped requests)</span>
            </div>
            <span className="text-[#E879F9] font-semibold">Uptime: 100%</span>
          </div>
        </div>
      </div>

      {/* Atmospheric Progressive Blur Transition into Monitoring Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <ProgressiveBlur
          direction="bottom"
          blurLevels={[2, 4, 8, 16, 24]}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-monitor/40 to-bg-monitor" />
      </div>
    </section>
  );
};
