import React, { useState } from 'react';
import { 
  Rocket, 
  Activity, 
  Boxes, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Zap, 
  GitBranch, 
  ShieldCheck, 
  Cpu, 
  BarChart3 
} from 'lucide-react';
import { FEATURES_LIST } from '../data/mockData';

export const ProductIntro: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('deploy');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-brand-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-brand-400" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-brand-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-brand-400" />;
      default:
        return <Zap className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="features" className="relative py-20 md:py-32 scroll-mt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-mono text-brand-400 mb-4 uppercase tracking-wider font-semibold">
            Unified Cloud Operations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Everything your infrastructure needs.{' '}
            <span className="bg-gradient-to-r from-brand-400 via-emerald-200 to-teal-300 bg-clip-text text-transparent">
              In one view.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Consolidate fragmented tools, terminal commands, and dashboards into a single, high-fidelity operations surface.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES_LIST.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl bg-[#0C101A]/90 border border-white/[0.08] hover:border-brand-500/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Ambient Glow on Hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header Tag and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center shadow-glow-sm group-hover:scale-105 group-hover:border-brand-400/60 transition-all">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06] group-hover:text-brand-300 group-hover:border-brand-500/30 transition-all">
                    {feature.badge}
                  </span>
                </div>

                {/* Feature Title & Headline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-emerald-400/90 mb-3">
                  {feature.headline}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div>
                {/* Interactive Visual Element: Code / Pipeline Preview */}
                <div className="p-3 rounded-lg bg-[#080B12] border border-white/[0.06] font-mono text-xs text-slate-400 mb-5 overflow-x-auto">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1.5 text-[10px] pb-1 border-b border-white/[0.04]">
                    <Terminal className="w-3 h-3 text-brand-400" />
                    <span>CLI Quickhook</span>
                  </div>
                  <div className="text-slate-200 flex items-center gap-2">
                    <span className="text-brand-400 select-none">$</span>
                    <span className="text-slate-300">{feature.codeSnippet}</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 border-t border-white/[0.06]">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                      <span className="truncate">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
