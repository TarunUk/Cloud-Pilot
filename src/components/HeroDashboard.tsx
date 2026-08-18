import React from 'react';
import { CheckCircle2, Activity, Layers, Rocket, HardDrive, Server, Network } from 'lucide-react';

export const HeroDashboard: React.FC = () => {
  return (
    <section id="product" className="relative py-32 md:py-48 bg-bg-product overflow-hidden">
      
      {/* LAYER 1: Deep Navy + Blue Atmospheric Horizon Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1200px] h-[550px] bg-gradient-to-r from-infra/15 via-telemetry/10 to-transparent blur-[190px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-telemetry/8 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Edge-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Abstract Connected Infrastructure Network Geometry (Low Opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center -z-10">
        <svg className="w-full max-w-5xl h-[500px]" viewBox="0 0 800 450" fill="none">
          {/* Connected Network Paths: Cloud -> Gateway -> Services -> DB / K8s */}
          <path d="M400 50 L400 140" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M400 140 L250 250" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M400 140 L550 250" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M250 250 L180 370" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M250 250 L320 370" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M550 250 L550 370" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Root Cloud Node */}
          <circle cx="400" cy="50" r="14" fill="#0B1120" stroke="#3B82F6" strokeWidth="2" />
          <text x="400" y="54" fill="#93C5FD" fontSize="9" fontFamily="monospace" textAnchor="middle">CLOUD</text>

          {/* Gateway Node */}
          <circle cx="400" cy="140" r="12" fill="#0B1120" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="400" y="144" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">GATEWAY</text>

          {/* Microservices Nodes */}
          <circle cx="250" cy="250" r="11" fill="#0B1120" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="250" y="254" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">AUTH</text>

          <circle cx="550" cy="250" r="11" fill="#0B1120" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="550" y="254" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">WORKER</text>

          {/* Storage & Kubernetes Cluster */}
          <circle cx="180" cy="370" r="10" fill="#0B1120" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="180" y="373" fill="#93C5FD" fontSize="7" fontFamily="monospace" textAnchor="middle">DB</text>

          <circle cx="320" cy="370" r="10" fill="#0B1120" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="320" y="373" fill="#93C5FD" fontSize="7" fontFamily="monospace" textAnchor="middle">CACHE</text>

          <circle cx="550" cy="370" r="12" fill="#0B1120" stroke="#10B981" strokeWidth="1.5" />
          <text x="550" y="373" fill="#34D399" fontSize="7" fontFamily="monospace" textAnchor="middle">K8S</text>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Ample Breathing Room */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-mono text-infra-light uppercase tracking-widest font-semibold mb-3 block">
            The Workspace
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See everything in one place.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3 font-normal">
            A focused command center designed to eliminate context switching.
          </p>
        </div>

        {/* Clean, Non-Overlapping Product Showcase Canvas */}
        <div className="rounded-2xl border border-white/[0.09] bg-[#070B14]/90 shadow-3d-deep backdrop-blur-xl overflow-hidden rim-light">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#090F1E] via-[#0D1426] to-[#090F1E] border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
              </div>
              <span className="text-xs font-mono text-slate-400 ml-3">
                CloudPilot Unified Workspace
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
              <span>Cluster Synchronized</span>
            </div>
          </div>

          {/* Main Showcase Surface */}
          <div className="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-[#070B14] to-[#050810]">
            
            {/* 4 Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8 border-b border-white/[0.06]">
              
              <div className="group">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Infrastructure Health</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight drop-shadow-sm">98.7%</div>
                <span className="text-xs text-brand-400 font-medium mt-1 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Target normal</span>
                </span>
              </div>

              <div className="group">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Applications</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">3</div>
                <span className="text-xs text-slate-400 font-mono mt-1 block">3 Active</span>
              </div>

              <div className="group">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Deployments</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">12</div>
                <span className="text-xs text-slate-400 font-mono mt-1 block">This month</span>
              </div>

              <div className="group">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Containers</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">8</div>
                <span className="text-xs text-infra-light font-mono mt-1 block">8 Running</span>
              </div>

            </div>

            {/* 1 Clean Telemetry Graph + 2 Core Services */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Telemetry Graph (8 cols) */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Cluster Load & Telemetry Stream</span>
                  <span className="font-mono text-brand-400">42% Avg CPU • 61% Mem</span>
                </div>

                <div className="h-44 w-full relative pt-2">
                  <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="productLoadGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      fill="url(#productLoadGrad)"
                      points="0,120 0,70 50,55 100,65 150,35 200,50 250,65 300,45 350,55 400,42 400,120"
                    />
                    <polyline
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="0,70 50,55 100,65 150,35 200,50 250,65 300,45 350,55 400,42"
                    />
                    <circle cx="400" cy="42" r="4" fill="#34D399" />
                  </svg>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.04]">
                  <span>-30 mins</span>
                  <span>-15 mins</span>
                  <span className="text-brand-400">Live</span>
                </div>
              </div>

              {/* 2 Core Services Status (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono">Service Health</span>
                
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between shadow-sm hover:border-white/[0.12] transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white">API Service</div>
                    <div className="text-xs text-slate-400 font-mono">v1.8 • 14ms latency</div>
                  </div>
                  <span className="text-xs font-mono text-brand-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    <span>Healthy</span>
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between shadow-sm hover:border-white/[0.12] transition-colors">
                  <div>
                    <div className="text-sm font-bold text-white">Frontend Service</div>
                    <div className="text-xs text-slate-400 font-mono">v2.4 • 8ms latency</div>
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

      </div>
    </section>
  );
};
