import React, { useState, useRef } from 'react';
import { CheckCircle2, Activity, Rocket } from 'lucide-react';

export const HeroDashboard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 3, y: 0 });
  const [parallax, setParallax] = useState({ bgX: 0, bgY: 0, pillX: 0, pillY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    // Main dashboard subtle tilt
    const rotX = Math.max(-4, Math.min(6, -normY * 4 + 2));
    const rotY = Math.max(-5, Math.min(5, normX * 4));
    setRotate({ x: rotX, y: rotY });

    // Multi-speed parallax offsets
    setParallax({
      bgX: normX * 12,
      bgY: normY * 12,
      pillX: -normX * 16,
      pillY: -normY * 16,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 3, y: 0 });
    setParallax({ bgX: 0, bgY: 0, pillX: 0, pillY: 0 });
  };

  return (
    <section id="product" className="relative py-32 md:py-48 bg-bg-product overflow-hidden">
      
      {/* LAYER 1: Deep Navy + Electric Blue & Cyan Ambient Horizon Lighting */}
      <div 
        style={{
          transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] md:w-[1250px] h-[600px] bg-gradient-to-r from-infra/15 via-telemetry/12 to-brand-500/10 blur-[190px] rounded-full pointer-events-none -z-10" 
      />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-telemetry/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Edge-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Generous Space */}
        <div className="text-center max-w-2xl mx-auto mb-20">
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

        {/* 3D Floating Multi-Layered Composition Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative perspective-container transition-transform duration-300 ease-out"
        >
          
          {/* Depth Shelf (Underlay Panel) */}
          <div className="hidden md:block absolute -inset-3 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] blur-[1px] transform translate-y-3 scale-[0.98] pointer-events-none -z-10" />

          {/* LAYER 4A: Floating Overlapping Top-Right Health Badge */}
          <div 
            style={{
              transform: `translate(${parallax.pillX}px, ${parallax.pillY}px)`,
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#090E1B]/95 border border-brand-500/30 shadow-satellite-pill absolute -top-5 -right-4 z-30 backdrop-blur-xl animate-float-gentle rim-light"
          >
            <div className="w-8 h-8 rounded-xl bg-brand-500/15 border border-brand-500/40 flex items-center justify-center text-brand-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <span>98.7% Health</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">Target: normal</div>
            </div>
          </div>

          {/* LAYER 4B: Floating Overlapping Bottom-Left Deployment Pill */}
          <div 
            style={{
              transform: `translate(${-parallax.pillX * 0.8}px, ${-parallax.pillY * 0.8}px)`,
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#090E1B]/95 border border-white/[0.08] shadow-satellite-pill absolute -bottom-5 -left-4 z-30 backdrop-blur-xl animate-float-counter rim-light"
          >
            <div className="w-8 h-8 rounded-xl bg-infra/15 border border-infra/40 flex items-center justify-center text-infra-light">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white">frontend-v2.4</div>
              <div className="text-[10px] font-mono text-brand-400">Deployed • 2m ago</div>
            </div>
          </div>

          {/* LAYER 4C: Floating Overlapping Bottom-Right Telemetry Ingest Pill */}
          <div 
            style={{
              transform: `translate(${parallax.pillX * 0.6}px, ${parallax.pillY * 0.6}px)`,
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#090E1B]/95 border border-telemetry/30 shadow-satellite-pill absolute -bottom-5 right-8 z-30 backdrop-blur-xl animate-float-gentle rim-light"
          >
            <div className="w-2 h-2 rounded-full bg-telemetry-light animate-ping" />
            <div className="text-xs font-mono text-slate-300">
              <span className="text-white font-bold">0.4ms</span> Ingest <span className="text-slate-500">•</span> P99: 14ms
            </div>
          </div>

          {/* LAYER 3: Main 3D Tilted Dashboard Panel (Focal Point) */}
          <div 
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="rounded-2xl border border-white/[0.09] bg-[#070B14] shadow-3d-deep overflow-hidden preserve-3d rim-light"
          >
            
            {/* Top Chrome Window Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#090F1E] via-[#0D1426] to-[#090F1E] border-b border-white/[0.07]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                </div>
                <span className="text-xs font-mono text-slate-400 ml-3">
                  CloudPilot Command Center
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                <span>All Systems Operational</span>
              </div>
            </div>

            {/* Main Cockpit Surface */}
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
                        <linearGradient id="cleanParallaxGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <polygon
                        fill="url(#cleanParallaxGrad)"
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

                  <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2">
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

      </div>
    </section>
  );
};
