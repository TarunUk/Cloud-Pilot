import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, Rocket, ArrowUpRight } from 'lucide-react';
import { ProgressiveBlur } from './ui/progressive-blur';

export const HeroDashboard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 1.5, y: 0 });
  const [parallax, setParallax] = useState({ bgX: 0, bgY: 0, pillY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    // Subtle, restrained 3D tilt
    const rotX = Math.max(-3, Math.min(4, -normY * 3 + 1));
    const rotY = Math.max(-4, Math.min(4, normX * 3.5));
    setRotate({ x: rotX, y: rotY });

    // Multi-speed parallax offsets
    setParallax({
      bgX: normX * 10,
      bgY: normY * 10,
      pillY: -normY * 6,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 1.5, y: 0 });
    setParallax({ bgX: 0, bgY: 0, pillY: 0 });
  };

  return (
    <section
      id="product"
      className="relative py-28 md:py-44 bg-bg-product overflow-hidden transition-colors duration-500"
    >
      {/* LAYER 1: Deep Navy Background + Radial Blue & Cyan Atmospheric Glow */}
      <div
        style={{
          transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1400px] h-[650px] bg-gradient-to-r from-infra/20 via-telemetry/15 to-brand-500/10 blur-[190px] rounded-full pointer-events-none -z-10"
      />
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-telemetry/12 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* LAYER 2: Edge-Faded Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-35 pointer-events-none -z-10" />

      {/* LAYER 3: Abstract Connected Infrastructure Network Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-20 light:opacity-10 flex items-center justify-center -z-10">
        <svg className="w-full max-w-5xl h-[500px]" viewBox="0 0 800 450" fill="none">
          <path d="M400 50 L400 140" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M400 140 L250 250" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M400 140 L550 250" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M250 250 L180 370" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M250 250 L320 370" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M550 250 L550 370" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />

          <circle cx="400" cy="50" r="14" className="fill-surface stroke-infra" strokeWidth="2" />
          <text x="400" y="54" className="fill-infra-light text-[9px] font-mono" textAnchor="middle">
            CLOUD
          </text>

          <circle cx="400" cy="140" r="12" className="fill-surface stroke-infra" strokeWidth="1.5" />
          <text x="400" y="144" className="fill-infra-light text-[8px] font-mono" textAnchor="middle">
            GATEWAY
          </text>

          <circle cx="250" cy="250" r="11" className="fill-surface stroke-infra" strokeWidth="1.5" />
          <text x="250" y="254" className="fill-infra-light text-[8px] font-mono" textAnchor="middle">
            AUTH
          </text>

          <circle cx="550" cy="250" r="11" className="fill-surface stroke-infra" strokeWidth="1.5" />
          <text x="550" y="254" className="fill-infra-light text-[8px] font-mono" textAnchor="middle">
            WORKER
          </text>

          <circle cx="180" cy="370" r="10" className="fill-surface stroke-infra" strokeWidth="1.5" />
          <text x="180" y="373" className="fill-infra-light text-[7px] font-mono" textAnchor="middle">
            DB
          </text>

          <circle cx="320" cy="370" r="10" className="fill-surface stroke-infra" strokeWidth="1.5" />
          <text x="320" y="373" className="fill-infra-light text-[7px] font-mono" textAnchor="middle">
            CACHE
          </text>

          <circle cx="550" cy="370" r="12" className="fill-surface stroke-brand-500" strokeWidth="1.5" />
          <text x="550" y="373" className="fill-brand-400 text-[7px] font-mono" textAnchor="middle">
            K8S
          </text>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-mono text-infra-light uppercase tracking-widest font-semibold mb-3 block">
            The Workspace
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            See everything in one place.
          </h2>
          <p className="text-base sm:text-lg text-muted-text mt-3 font-normal">
            A focused command center designed to eliminate context switching.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DELIBERATE LAYERED FLOATING UI COMPOSITION (NEVER OVERLAPPING)            */}
        {/* ========================================================================= */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto perspective-container"
        >
          {/* TOP ORBITAL SATELLITE BAR: 98.7% Health / Target: normal */}
          <div className="flex justify-center md:justify-end mb-4 px-2">
            <motion.div
              style={{
                transform: `translateY(${parallax.pillY}px)`,
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-surface-card/95 border border-brand-500/35 shadow-satellite-pill backdrop-blur-xl animate-float-gentle rim-light"
            >
              <div className="w-7 h-7 rounded-lg bg-brand-500/15 border border-brand-500/40 flex items-center justify-center text-brand-400 dark:text-brand-400 light:text-brand-600">
                <Activity className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono font-bold text-foreground flex items-center gap-1.5 leading-tight">
                  <span>98.7% Health</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-muted-text leading-tight mt-0.5">
                  Target: normal
                </div>
              </div>
            </motion.div>
          </div>

          {/* MAIN PRODUCT INTERFACE LAYER (FLOATING COMMAND COCKPIT) */}
          <motion.div
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="rounded-2xl border border-border bg-surface-card shadow-3d-deep overflow-hidden preserve-3d rim-light transition-colors duration-300 relative z-10"
          >
            {/* Top Window Chrome Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-surface-secondary/90 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 dark:bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 dark:bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600 dark:bg-slate-700" />
                </div>
                <span className="text-xs font-mono text-muted-text ml-2 hidden sm:inline">
                  CloudPilot Command Center
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-brand-500 dark:text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/25 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>

            {/* Main Cockpit Surface */}
            <div className="p-5 sm:p-8 md:p-10 space-y-8 bg-gradient-to-b from-surface-card to-surface">
              {/* 4 Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-8 border-b border-border">
                <div className="group">
                  <span className="text-[11px] sm:text-xs text-muted-text uppercase tracking-wider block mb-1">
                    Infrastructure Health
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground font-mono tracking-tight drop-shadow-sm">
                    98.7%
                  </div>
                  <span className="text-xs text-brand-500 dark:text-brand-400 font-medium mt-1 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Target normal</span>
                  </span>
                </div>

                <div className="group">
                  <span className="text-[11px] sm:text-xs text-muted-text uppercase tracking-wider block mb-1">
                    Applications
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground font-mono tracking-tight">
                    3
                  </div>
                  <span className="text-xs text-muted-text font-mono mt-1 block">3 Active</span>
                </div>

                <div className="group">
                  <span className="text-[11px] sm:text-xs text-muted-text uppercase tracking-wider block mb-1">
                    Deployments
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground font-mono tracking-tight">
                    12
                  </div>
                  <span className="text-xs text-muted-text font-mono mt-1 block">This month</span>
                </div>

                <div className="group">
                  <span className="text-[11px] sm:text-xs text-muted-text uppercase tracking-wider block mb-1">
                    Containers
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground font-mono tracking-tight">
                    8
                  </div>
                  <span className="text-xs text-infra-light font-mono mt-1 block">8 Running</span>
                </div>
              </div>

              {/* 1 Clean Telemetry Graph + 2 Core Services */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Telemetry Graph (8 cols) */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground font-medium">
                      Cluster Load & Telemetry Stream
                    </span>
                    <span className="font-mono text-brand-500 dark:text-brand-400 font-semibold text-[11px] sm:text-xs">
                      42% Avg CPU • 61% Mem
                    </span>
                  </div>

                  <div className="h-40 sm:h-44 w-full relative pt-2">
                    <svg
                      viewBox="0 0 400 120"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="product3DLoadGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.30" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <polygon
                        fill="url(#product3DLoadGrad)"
                        points="0,120 0,70 50,55 100,65 150,35 200,50 250,65 300,45 350,55 400,42 400,120"
                      />
                      <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,70 50,55 100,65 150,35 200,50 250,65 300,45 350,55 400,42"
                        className="animate-path-draw"
                      />
                      <circle cx="400" cy="42" r="4.5" fill="#34D399" className="animate-ping" />
                      <circle cx="400" cy="42" r="4" fill="#10B981" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[11px] font-mono text-muted-text pt-2">
                    <span>-30 mins</span>
                    <span>-15 mins</span>
                    <span className="text-brand-500 dark:text-brand-400 font-semibold">Live</span>
                  </div>
                </div>

                {/* 2 Core Services Status (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs text-muted-text uppercase tracking-wider block font-mono">
                    Service Health
                  </span>

                  <div className="p-4 rounded-xl bg-surface-secondary/60 border border-border flex items-center justify-between shadow-sm hover:border-border-highlight transition-colors">
                    <div>
                      <div className="text-sm font-bold text-foreground">API Service</div>
                      <div className="text-xs text-muted-text font-mono">v1.8 • 14ms latency</div>
                    </div>
                    <span className="text-xs font-mono text-brand-500 dark:text-brand-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      <span>Healthy</span>
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-secondary/60 border border-border flex items-center justify-between shadow-sm hover:border-border-highlight transition-colors">
                    <div>
                      <div className="text-sm font-bold text-foreground">Frontend Service</div>
                      <div className="text-xs text-muted-text font-mono">v2.4 • 8ms latency</div>
                    </div>
                    <span className="text-xs font-mono text-brand-500 dark:text-brand-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      <span>Healthy</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM ORBITAL SATELLITES (DELIBERATELY LAYERED & NON-OVERLAPPING) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
            {/* Satellite Left: frontend-v2.4 / Deployed • 2m ago */}
            <motion.div
              style={{
                transform: `translateY(${-parallax.pillY * 0.8}px)`,
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-full sm:w-auto flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-surface-card/95 border border-border shadow-satellite-pill backdrop-blur-xl animate-float-counter rim-light"
            >
              <div className="w-7 h-7 rounded-lg bg-infra/15 border border-infra/40 flex items-center justify-center text-infra-light">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono font-bold text-foreground">frontend-v2.4</div>
                <div className="text-[10px] font-mono text-brand-500 dark:text-brand-400 font-medium">
                  Deployed • 2m ago
                </div>
              </div>
            </motion.div>

            {/* Satellite Right: 0.4ms Ingest • P99: 14ms */}
            <motion.div
              style={{
                transform: `translateY(${parallax.pillY * 0.6}px)`,
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-full sm:w-auto flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-surface-card/95 border border-telemetry/35 shadow-satellite-pill backdrop-blur-xl animate-float-gentle rim-light"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-telemetry-light animate-ping" />
              <div className="text-xs font-mono text-muted-text">
                <span className="text-foreground font-bold">0.4ms</span> Ingest{' '}
                <span className="text-muted-text/60">•</span> P99: 14ms
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Atmospheric Progressive Blur Transition into Deploy Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <ProgressiveBlur
          direction="bottom"
          blurLevels={[2, 4, 8, 16, 24]}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-deploy/40 to-bg-deploy" />
      </div>
    </section>
  );
};
