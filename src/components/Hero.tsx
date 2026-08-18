import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, Activity, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 3, y: 0 });
  const [parallax, setParallax] = useState({ bgX: 0, bgY: 0, pillX: 0, pillY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    // Subtle 3D perspective tilt
    const rotX = Math.max(-4, Math.min(6, -normY * 4 + 2));
    const rotY = Math.max(-5, Math.min(5, normX * 4));
    setRotate({ x: rotX, y: rotY });

    // Multi-speed parallax offsets
    setParallax({
      bgX: normX * 12,
      bgY: normY * 12,
      pillX: -normX * 14,
      pillY: -normY * 14,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 3, y: 0 });
    setParallax({ bgX: 0, bgY: 0, pillX: 0, pillY: 0 });
  };

  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-36 overflow-hidden bg-bg-hero">
      
      {/* LAYER 1: Dual-Source Ambient Lighting (Emerald + Electric Blue) */}
      <div 
        style={{
          transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[500px] bg-gradient-to-tr from-brand-500/14 via-infra/10 to-transparent blur-[180px] rounded-full pointer-events-none -z-10" 
      />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] md:w-[850px] h-[450px] bg-gradient-to-bl from-infra/12 via-telemetry/8 to-transparent blur-[170px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Edge-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Abstract 3D Geometric Orbital Wireframe */}
      <div className="absolute inset-0 pointer-events-none opacity-15 flex items-center justify-center -z-10">
        <svg className="w-full max-w-5xl h-[450px] animate-float-gentle" viewBox="0 0 1000 450" fill="none">
          <ellipse cx="500" cy="225" rx="380" ry="130" stroke="url(#heroOrbitGrad3)" strokeWidth="1.5" strokeDasharray="6 8" />
          <ellipse cx="500" cy="225" rx="240" ry="80" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="240" cy="170" r="4" fill="#10B981" />
          <circle cx="760" cy="280" r="4" fill="#38BDF8" />
          <defs>
            <linearGradient id="heroOrbitGrad3" x1="120" y1="95" x2="880" y2="355" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Status Indicator with 3D Elevation */}
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16 md:mb-24">
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

        {/* ========================================================================= */}
        {/* CENTERPIECE: 3D Floating CloudPilot Dashboard Visual Mockup with Parallax */}
        {/* ========================================================================= */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative perspective-container max-w-5xl mx-auto text-left transition-transform duration-300 ease-out"
        >
          
          {/* Depth Shelf (Translucent Underlay Panel) */}
          <div className="hidden md:block absolute -inset-3 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] blur-[1px] transform translate-y-3 scale-[0.98] pointer-events-none -z-10" />

          {/* Floating Satellite 1: Top-Right Health Badge */}
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

          {/* Floating Satellite 2: Bottom-Left Deployment Pill */}
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

          {/* Floating Satellite 3: Bottom-Right Telemetry Ingest Pill */}
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

          {/* Main 3D Floating Dashboard Card */}
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
                        <linearGradient id="heroParallaxGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <polygon
                        fill="url(#heroParallaxGrad)"
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
