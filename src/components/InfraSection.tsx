import React, { useState } from 'react';
import { Server, Network, Boxes, Database, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { INFRA_SERVICES, K8S_NODES } from '../data/mockData';

export const InfraSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Edge API Gateway');

  return (
    <section id="infrastructure" className="relative py-24 md:py-36 bg-bg-infra overflow-hidden">
      
      {/* Background Visual Storytelling: Ambient Network Topology Graph (Low Opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden flex items-center justify-center -z-10">
        <svg className="w-full max-w-5xl h-[500px]" viewBox="0 0 800 500" fill="none">
          {/* Subtle Topology Lines */}
          <path d="M400 60 L400 160" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M400 160 L240 280" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M400 160 L560 280" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M240 280 L180 400" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M240 280 L300 400" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M560 280 L560 400" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Cloud Root */}
          <circle cx="400" cy="60" r="16" fill="#090D18" stroke="#3B82F6" strokeWidth="2" />
          <text x="400" y="64" fill="#93C5FD" fontSize="10" fontFamily="monospace" textAnchor="middle">CLOUD</text>

          {/* Gateway Node */}
          <circle cx="400" cy="160" r="14" fill="#090D18" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="400" y="164" fill="#93C5FD" fontSize="9" fontFamily="monospace" textAnchor="middle">GATEWAY</text>

          {/* Microservices Nodes */}
          <circle cx="240" cy="280" r="12" fill="#090D18" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="240" y="284" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">AUTH</text>

          <circle cx="560" cy="280" r="12" fill="#090D18" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="560" y="284" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">WORKER</text>

          {/* Data & K8s Cluster */}
          <circle cx="180" cy="400" r="12" fill="#090D18" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="180" y="404" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">POSTGRES</text>

          <circle cx="300" cy="400" r="12" fill="#090D18" stroke="#3B82F6" strokeWidth="1.5" />
          <text x="300" y="404" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">REDIS</text>

          <circle cx="560" cy="400" r="14" fill="#090D18" stroke="#10B981" strokeWidth="1.5" />
          <text x="560" y="404" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">K8S (42P)</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infra/10 border border-infra/20 text-xs font-mono text-infra-light mb-4 font-semibold uppercase tracking-wider">
            Infrastructure Command
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Understand your infrastructure.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Eliminate cross-cloud blind spots. Inspect cluster topologies, distributed service latencies, and node health across all environments.
          </p>
        </div>

        {/* 2-Column Layout: Services List + Deep Node Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Service Grid */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
              <span>Distributed Services</span>
              <span>Health Status</span>
            </div>

            {INFRA_SERVICES.map((svc) => {
              const isSelected = selectedService === svc.name;
              return (
                <div
                  key={svc.name}
                  onClick={() => setSelectedService(svc.name)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0E1528] border-infra/50 shadow-glow-infra/20'
                      : 'bg-[#0A0E1A] border-white/[0.05] hover:border-white/[0.12] hover:bg-[#0C1222]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-infra/15 text-infra-light flex items-center justify-center shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{svc.name}</h4>
                      <p className="text-xs font-mono text-slate-500">{svc.region} • {svc.latency}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-brand-400 font-semibold">{svc.health}%</span>
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Kubernetes & Node Telemetry Panel */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0A0E1A] p-6 sm:p-7 shadow-2xl shadow-black/50">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
              <div className="flex items-center gap-2">
                <Boxes className="w-5 h-5 text-infra-light" />
                <h3 className="text-base font-bold text-white">production-cluster</h3>
              </div>
              <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">
                6 Nodes Ready
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-5 font-mono">
              <div className="p-3 rounded-lg bg-[#070A14] border border-white/[0.04]">
                <span className="text-[11px] text-slate-500 block">Pods Scheduled</span>
                <span className="text-xl font-bold text-white">42 / 42</span>
              </div>
              <div className="p-3 rounded-lg bg-[#070A14] border border-white/[0.04]">
                <span className="text-[11px] text-slate-500 block">Node Health</span>
                <span className="text-xl font-bold text-brand-400">100%</span>
              </div>
            </div>

            {/* Node Breakdown */}
            <span className="text-xs font-mono text-slate-400 block mb-2.5">Node Cluster Distribution</span>
            <div className="space-y-2 font-mono text-xs mb-6">
              {K8S_NODES.slice(0, 4).map((node) => (
                <div
                  key={node.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#070A14] border border-white/[0.03]"
                >
                  <span className="text-slate-300">{node.name}</span>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="text-slate-400">CPU {node.cpuUsage}%</span>
                    <span className="text-slate-400">MEM {node.memUsage}%</span>
                    <span className="text-brand-400 font-semibold">{node.pods} pods</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-infra/10 border border-infra/20 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>Auto-healing & scaling</span>
              <span className="text-infra-light font-bold">Enabled</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
