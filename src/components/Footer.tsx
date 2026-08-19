import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-bg-footer text-muted-text text-xs py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <Logo size="sm" />
              <span className="font-extrabold text-lg text-foreground tracking-tight">CloudPilot</span>
            </div>
            
            <p className="text-muted-text text-xs leading-relaxed max-w-sm mb-5">
              Your cloud infrastructure. One command center. Monitor applications, deployments, and Kubernetes from one workspace.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-secondary/70 border border-border font-mono text-[11px] text-muted-text">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground uppercase text-[11px] tracking-wider mb-3 font-mono">Platform</h4>
            <ul className="space-y-2.5">
              <li><a href="#product" className="hover:text-foreground transition-colors">Overview</a></li>
              <li><a href="#deploy" className="hover:text-foreground transition-colors">Deployments</a></li>
              <li><a href="#product" className="hover:text-foreground transition-colors">Infrastructure</a></li>
              <li><a href="#monitoring" className="hover:text-foreground transition-colors">Monitoring</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground uppercase text-[11px] tracking-wider mb-3 font-mono">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">CLI Reference</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">Architecture Guide</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold text-foreground uppercase text-[11px] tracking-wider mb-3 font-mono">Security</h4>
            <ul className="space-y-2.5">
              <li><a href="#product" className="hover:text-foreground transition-colors">SOC-2 Type II</a></li>
              <li><a href="#product" className="hover:text-foreground transition-colors">Zero-Trust IAM</a></li>
              <li><a href="#product" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#product" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted-text/70">
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
