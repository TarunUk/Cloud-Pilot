import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050609] text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3 group">
              <Logo size="sm" />
              <span className="font-bold text-base text-white tracking-tight">CloudPilot</span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              Your cloud infrastructure. One command center. Monitor applications, deployments, and Kubernetes from one workspace.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3 font-mono">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#product" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#deploy" className="hover:text-white transition-colors">Deployments</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#monitoring" className="hover:text-white transition-colors">Monitoring</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3 font-mono">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">CLI Reference</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Architecture Guide</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3 font-mono">Security</h4>
            <ul className="space-y-2">
              <li><a href="#product" className="hover:text-white transition-colors">SOC-2 Type II</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Zero-Trust IAM</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} CloudPilot Technologies. All rights reserved.
          </div>
          <div>
            <span>CloudPilot is a fictional cloud operations command center concept.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
