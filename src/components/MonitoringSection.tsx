import React from 'react';
import { ProgressiveBlur } from './ui/progressive-blur';

export const MonitoringSection: React.FC = () => {
  return (
    <section
      id="monitoring"
      className="relative py-28 md:py-44 bg-bg-monitor overflow-hidden transition-colors duration-500"
    >
      {/* LAYER 1: Atmospheric Magenta + Glowing Purple Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1200px] h-[580px] bg-gradient-to-r from-[#EC4899]/20 via-[#C069FF]/18 to-transparent blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-[#E879F9]/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Radial-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Atmospheric Floating Waveform Lines in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center -z-10">
        <svg className="w-full max-w-6xl h-64 animate-float-counter" viewBox="0 0 1000 200" fill="none">
          <path d="M0 100 Q 250 20, 500 100 T 1000 100" stroke="#EC4899" strokeWidth="2" fill="none" />
          <path d="M0 130 Q 300 170, 600 120 T 1000 140" stroke="#C069FF" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-[#F472B6] uppercase tracking-widest font-semibold mb-3 block">
            Real-Time Observability
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
            Know when something needs attention.
          </h2>
          <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal">
            Sub-second telemetry combined with automated anomaly detection gives you instant clarity before issues impact users.
          </p>
        </div>

        {/* 3D Floating Observability Canvas */}
        <div className="rounded-2xl border border-border bg-surface-card/90 p-6 sm:p-10 md:p-12 shadow-3d-deep backdrop-blur-xl relative rim-light transition-colors duration-300">
          {/* Floating Telemetry Indicator Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/30 text-xs font-mono text-[#F4DFFF] absolute -top-3.5 right-8 shadow-satellite-pill backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F472B6] animate-pulse" />
            <span>Live Stream Synced</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Clean Waveform Telemetry Chart (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground font-medium">Live Ingest Telemetry</span>
                <span className="text-[#F472B6] font-semibold">0.4ms Ingest • P99: 14ms</span>
              </div>

              <div className="h-44 sm:h-48 w-full relative pt-2">
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="monWave3DFaded" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EC4899" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#C069FF" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#0C0414" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#monWave3DFaded)"
                    points="0,120 0,60 50,45 100,55 150,30 200,45 250,60 300,50 350,35 400,45 400,120"
                  />
                  <polyline
                    fill="none"
                    stroke="#F472B6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,60 50,45 100,55 150,30 200,45 250,60 300,50 350,35 400,45"
                    className="animate-path-draw"
                  />
                  <circle cx="400" cy="45" r="4.5" fill="#F4DFFF" className="animate-ping" />
                  <circle cx="400" cy="45" r="4" fill="#EC4899" />
                </svg>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-muted-text pt-2 border-t border-border">
                <span>Zero packet drops</span>
                <span className="text-[#E879F9] font-semibold">99.99% Reliability</span>
              </div>
            </div>

            {/* Right: Exactly 2 Clean Monitored Services (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs text-muted-text uppercase tracking-wider block font-mono">
                Active Core Services
              </span>

              {/* Service 1: API */}
              <div className="p-4 rounded-xl bg-surface-secondary/70 border border-border flex items-center justify-between shadow-sm hover:border-border-highlight transition-colors">
                <div>
                  <div className="text-sm font-bold text-foreground">API Service</div>
                  <div className="text-xs text-muted-text font-mono">14ms latency • 0.00% error rate</div>
                </div>
                <span className="text-xs font-mono text-[#E879F9] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9]" />
                  <span>Healthy</span>
                </span>
              </div>

              {/* Service 2: Frontend */}
              <div className="p-4 rounded-xl bg-surface-secondary/70 border border-border flex items-center justify-between shadow-sm hover:border-border-highlight transition-colors">
                <div>
                  <div className="text-sm font-bold text-foreground">Frontend Service</div>
                  <div className="text-xs text-muted-text font-mono">8ms latency • 100% availability</div>
                </div>
                <span className="text-xs font-mono text-[#E879F9] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9]" />
                  <span>Healthy</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric Progressive Blur Transition into How It Works */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <ProgressiveBlur
          direction="bottom"
          blurLevels={[2, 4, 8, 16, 24]}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-how-it-works/40 to-bg-how-it-works" />
      </div>
    </section>
  );
};
