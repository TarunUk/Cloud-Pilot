import React, { useState } from 'react';
import { 
  Network, 
  Activity, 
  GitCommit, 
  Cpu, 
  HardDrive, 
  Server, 
  Boxes, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Sliders, 
  ChevronRight,
  Terminal,
  Zap
} from 'lucide-react';
import { INFRA_SERVICES, ACTIVITY_LOGS, K8S_NODES } from '../data/mockData';

type ShowcaseTab = 'topology' | 'services' | 'timeline' | 'activity';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('topology');
  const [selectedNode, setSelectedNode] = useState<string>('Edge API Gateway');

  return (
    <section id="workspace" className="relative py-20 md:py-32 scroll-mt-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/25 text-xs font-mono text-tech-cyan mb-4 font-semibold uppercase tracking-wider">
            THE CLOUDPILOT WORKSPACE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            See your infrastructure differently.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A real-time visual canvas connecting your distributed topology, deployment pipelines, and telemetry streams into an actionable command center.
          </p>
        </div>

        {/* Tab Selector Controls */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-xl bg-[#0D111C] border border-white/[0.08] backdrop-blur-md gap-1">
            {[
              { id: 'topology', label: 'Topology Graph', icon: Network },
              { id: 'services', label: 'Service Health', icon: Activity },
              { id: 'timeline', label: 'Deployment Timeline', icon: GitCommit },
              { id: 'activity', label: 'Live Activity Stream', icon: Clock },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ShowcaseTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-glow-sm font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Panel Card */}
        <div className="rounded-2xl border border-white/[0.09] bg-[#0A0D15]/95 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
          
          {/* Top Panel Navigation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 bg-[#0E121E] border-b border-white/[0.07] text-xs font-mono text-slate-400 gap-2">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-bold">VIEW:</span>
              <span className="text-brand-300 font-semibold uppercase tracking-wider">{activeTab}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">global-telemetry-feed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                <span>Synthesizing 6 nodes • 42 pods</span>
              </span>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-5 sm:p-8 min-h-[460px] bg-[#080B12]/80">
            
            {/* 1. TOPOLOGY GRAPH VIEW */}
            {activeTab === 'topology' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-base font-bold text-white">Interactive Infrastructure Topology</h3>
                    <p className="text-xs text-slate-400">Click any service to inspect real-time ingress routes and downstream health.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span> 100% Healthy
                    <span className="w-2.5 h-2.5 rounded-full bg-tech-cyan ml-2"></span> Envoy Routed
                  </div>
                </div>

                {/* Topology Network Nodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {INFRA_SERVICES.map((svc) => {
                    const isSelected = selectedNode === svc.name;
                    return (
                      <div
                        key={svc.name}
                        onClick={() => setSelectedNode(svc.name)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-500/10 border-brand-500/50 shadow-glow-sm'
                            : 'bg-[#0E121E] border-white/[0.06] hover:border-white/[0.15] hover:bg-[#121727]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-brand-400 font-semibold tracking-wider">
                            {svc.type}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{svc.latency}</span>
                        </div>
                        <h4 className="font-bold text-white text-sm mb-1">{svc.name}</h4>
                        <p className="text-xs text-slate-400 font-mono mb-3">{svc.region}</p>
                        
                        <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] text-[11px]">
                          <span className="text-brand-300 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-brand-400" />
                            <span>{svc.health}% Health</span>
                          </span>
                          <span className="text-slate-500 font-mono">Status: {svc.status}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Node In-Depth Drawer */}
                <div className="p-4 rounded-xl bg-[#0E121E] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{selectedNode}</div>
                      <div className="text-slate-400 text-[11px]">Route: direct ingress via AWS ALB & Envoy Proxy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div>
                      <span className="text-slate-500 block text-[10px]">CPU ALLOCATION</span>
                      <span className="text-brand-300 font-bold">18.4% (0.37 vCPU)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">P99 LATENCY</span>
                      <span className="text-tech-cyan font-bold">14ms</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. SERVICES & TELEMETRY CHARTS VIEW */}
            {activeTab === 'services' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Multi-Stream CPU Utilization */}
                  <div className="p-5 rounded-xl bg-[#0E121E] border border-white/[0.07]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-brand-400" />
                        <h4 className="font-bold text-white text-sm">Cluster CPU Stream</h4>
                      </div>
                      <span className="text-xs font-mono text-brand-400 font-bold">42% (Normal)</span>
                    </div>
                    <div className="h-36 w-full relative">
                      <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="streamCpuGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polygon fill="url(#streamCpuGrad)" points="0,100 0,60 50,45 100,55 150,30 200,45 250,60 300,50 300,100" />
                        <polyline
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          points="0,60 50,45 100,55 150,30 200,45 250,60 300,50"
                        />
                        <circle cx="300" cy="50" r="4" fill="#34D399" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-3 pt-2 border-t border-white/[0.04]">
                      <span>6 Nodes reporting</span>
                      <span>Target ceiling: 75%</span>
                    </div>
                  </div>

                  {/* Multi-Stream Memory Utilization */}
                  <div className="p-5 rounded-xl bg-[#0E121E] border border-white/[0.07]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-tech-cyan" />
                        <h4 className="font-bold text-white text-sm">Memory Allocation Stream</h4>
                      </div>
                      <span className="text-xs font-mono text-tech-cyan font-bold">61% (19.5 GB)</span>
                    </div>
                    <div className="h-36 w-full relative">
                      <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="streamMemGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polygon fill="url(#streamMemGrad)" points="0,100 0,40 50,42 100,35 150,30 200,38 250,42 300,39 300,100" />
                        <polyline
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          points="0,40 50,42 100,35 150,30 200,38 250,42 300,39"
                        />
                        <circle cx="300" cy="39" r="4" fill="#38BDF8" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-3 pt-2 border-t border-white/[0.04]">
                      <span>Heap buffer healthy</span>
                      <span>Zero Out-of-Memory kills</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 3. DEPLOYMENT TIMELINE VIEW */}
            {activeTab === 'timeline' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <h3 className="text-base font-bold text-white">Canary & Continuous Delivery Pipeline</h3>
                  <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
                    Automated Verification Active
                  </span>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                  {[
                    { title: 'frontend-v2.4 Canary Promotion', step: 'Stage 4: 100% Traffic Switched', status: 'Completed', time: '2m ago', color: 'emerald' },
                    { title: 'api-service-v1.8 Build & Integration Tests', step: 'Stage 3: All 142 Integration tests passed', status: 'Completed', time: '18m ago', color: 'emerald' },
                    { title: 'worker-service-v3.1 Rolling Deployment', step: 'Stage 2: 3 of 6 pods rotated', status: 'Running', time: '42m ago', color: 'cyan' },
                    { title: 'payments-api-v1.2 Security Audit & SBOM Scan', step: 'Stage 1: Vulnerability score 0 (Clean)', status: 'Completed', time: '1h ago', color: 'emerald' },
                  ].map((item, idx) => (
                    <div key={idx} className="relative group">
                      <span className={`absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0A0D15] ${item.color === 'emerald' ? 'bg-brand-500' : 'bg-tech-cyan animate-ping'}`} />
                      <div className="p-4 rounded-xl bg-[#0E121E] border border-white/[0.06] hover:border-brand-500/30 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h4 className="font-bold text-white text-sm">{item.title}</h4>
                          <span className="text-xs font-mono text-slate-400">{item.time}</span>
                        </div>
                        <p className="text-xs font-mono text-slate-400">{item.step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. ACTIVITY & AUDIT FEED VIEW */}
            {activeTab === 'activity' && (
              <div className="space-y-3 animate-in fade-in duration-300 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-slate-400">Live Structured Event Stream</span>
                  <span className="text-brand-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    <span>Real-time</span>
                  </span>
                </div>

                {ACTIVITY_LOGS.map((log) => (
                  <div
                    key={log.id}
                    className="p-3 rounded-lg bg-[#0E121E] border border-white/[0.05] hover:border-brand-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-[11px]">{log.timestamp}</span>
                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                          log.severity === 'success'
                            ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20'
                            : log.severity === 'warning'
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                            : 'bg-tech-cyan/15 text-tech-cyan border border-tech-cyan/20'
                        }`}
                      >
                        {log.category}
                      </span>
                      <span className="text-slate-200 font-semibold">{log.message}</span>
                    </div>
                    <span className="text-slate-400 text-[11px] truncate max-w-sm sm:text-right">
                      {log.details}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
