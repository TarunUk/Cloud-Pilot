import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const DeploySection: React.FC = () => {
  const steps = [
    { name: 'Code', desc: 'Commit sha-9f3a' },
    { name: 'Build', desc: 'Container packaged' },
    { name: 'Test', desc: '142 integration tests' },
    { name: 'Deploy', desc: 'Canary rollout 100%' },
    { name: 'Live', desc: 'Health verified' },
  ];

  return (
    <section id="deploy" className="relative py-32 md:py-48 bg-bg-deploy overflow-hidden">
      
      {/* LAYER 1: Atmospheric Violet + Electric Blue Gradient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1100px] h-[550px] bg-gradient-to-r from-violet/15 via-infra/15 to-transparent blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-violet/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Radial-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Floating 3D Ambient Pipeline Nodes in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-12 flex items-center justify-center -z-10">
        <svg className="w-full max-w-6xl h-64 animate-float-gentle" viewBox="0 0 1000 200" fill="none">
          <line x1="100" y1="100" x2="900" y2="100" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="250" cy="100" r="20" stroke="#8B5CF6" strokeWidth="2" />
          <circle cx="500" cy="100" r="28" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="750" cy="100" r="20" stroke="#10B981" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Generous Space */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono text-violet-light uppercase tracking-widest font-semibold mb-3 block">
            Continuous Delivery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Deploy without losing visibility.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Ship updates with automated health validation, zero-downtime rollouts, and instant rollbacks.
          </p>
        </div>

        {/* Floating 3D Dimensional Pipeline Canvas */}
        <div className="rounded-2xl border border-white/[0.09] bg-[#090B16]/90 p-8 sm:p-12 shadow-3d-deep backdrop-blur-xl relative rim-light">
          
          {/* Floating Ambient Release Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet/15 border border-violet/30 text-xs font-mono text-violet-light absolute -top-3.5 right-8 shadow-satellite-pill backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-light animate-pulse"></span>
            <span>Zero-Downtime Pipeline</span>
          </div>

          {/* Animated Connecting Line & 3D Step Nodes */}
          <div className="relative mb-12 pt-4">
            
            {/* Desktop Path Line with Gradient */}
            <div className="hidden md:block absolute top-9 left-6 right-6 h-[2px] bg-slate-800 -z-0">
              <div className="h-full bg-gradient-to-r from-brand-500 via-infra to-violet-light w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <div key={step.name} className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 group">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#12182D] to-[#0A0D18] border border-white/[0.12] flex items-center justify-center font-mono text-xs font-bold text-white shadow-satellite-pill shrink-0 group-hover:border-violet-light/50 transition-colors">
                    <span className="text-brand-400">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{step.name}</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Active Rollout Bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-white font-medium">Release: frontend-v2.4</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Canary weight: 100% (Zero dropped requests)</span>
            </div>
            <span className="text-brand-400 font-semibold">Uptime: 100%</span>
          </div>

        </div>

      </div>
    </section>
  );
};
