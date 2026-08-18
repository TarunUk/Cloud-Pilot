import React from 'react';
import { Radio, CheckCircle2 } from 'lucide-react';

export const MonitoringSection: React.FC = () => {
  return (
    <section id="monitoring" className="relative py-32 md:py-48 bg-bg-monitor overflow-hidden">
      
      {/* LAYER 1: Atmospheric Cyan + Subtle Emerald Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1100px] h-[550px] bg-gradient-to-r from-telemetry/15 via-brand-500/10 to-transparent blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-telemetry/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Radial-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Atmospheric Floating Waveform Lines in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center -z-10">
        <svg className="w-full max-w-6xl h-64 animate-float-counter" viewBox="0 0 1000 200" fill="none">
          <path d="M0 100 Q 250 20, 500 100 T 1000 100" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M0 130 Q 300 170, 600 120 T 1000 140" stroke="#10B981" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Generous Whitespace */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono text-telemetry-light uppercase tracking-widest font-semibold mb-3 block">
            Real-Time Observability
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Know when something needs attention.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Sub-second telemetry combined with automated anomaly detection gives you instant clarity before issues impact users.
          </p>
        </div>

        {/* 3D Floating Observability Canvas */}
        <div className="rounded-2xl border border-white/[0.09] bg-[#060D17]/90 p-8 sm:p-12 shadow-3d-deep backdrop-blur-xl relative rim-light">
          
          {/* Floating Telemetry Indicator Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-telemetry/15 border border-telemetry/30 text-xs font-mono text-telemetry-light absolute -top-3.5 right-8 shadow-satellite-pill backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-telemetry-light animate-pulse"></span>
            <span>Live Stream Synced</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Clean Waveform Telemetry Chart (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Live Ingest Telemetry</span>
                <span className="text-telemetry-light">0.4ms Ingest • P99: 14ms</span>
              </div>

              <div className="h-48 w-full relative pt-2">
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="monWave3DFaded" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#monWave3DFaded)"
                    points="0,120 0,60 50,45 100,55 150,30 200,45 250,60 300,50 350,35 400,45 400,120"
                  />
                  <polyline
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,60 50,45 100,55 150,30 200,45 250,60 300,50 350,35 400,45"
                  />
                  <circle cx="400" cy="45" r="4" fill="#38BDF8" />
                </svg>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.04]">
                <span>Zero packet drops</span>
                <span className="text-brand-400">99.99% Reliability</span>
              </div>
            </div>

            {/* Right: Exactly 2 Clean Monitored Services (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono">
                Active Core Services
              </span>

              {/* Service 1: API */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between shadow-sm hover:border-white/[0.12] transition-colors">
                <div>
                  <div className="text-sm font-bold text-white">API Service</div>
                  <div className="text-xs text-slate-400 font-mono">14ms latency • 0.00% error rate</div>
                </div>
                <span className="text-xs font-mono text-brand-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                  <span>Healthy</span>
                </span>
              </div>

              {/* Service 2: Frontend */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between shadow-sm hover:border-white/[0.12] transition-colors">
                <div>
                  <div className="text-sm font-bold text-white">Frontend Service</div>
                  <div className="text-xs text-slate-400 font-mono">8ms latency • 100% availability</div>
                </div>
                <span className="text-xs font-mono text-brand-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                  <span>Healthy</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
