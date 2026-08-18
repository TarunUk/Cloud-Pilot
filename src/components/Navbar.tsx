import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Deploy', href: '#deploy' },
    { name: 'Monitoring', href: '#monitoring' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07080C]/85 backdrop-blur-lg border-b border-white/[0.06] py-3.5 shadow-xl shadow-black/40' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark & Animated Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo size="md" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-slate-100 transition-colors">
                CloudPilot
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span>Operational</span>
            </div>

            <a
              href="#product"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1"
            >
              Sign in
            </a>

            <a
              href="#product"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-all shadow-glow-brand/50 active:scale-95"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.04] border border-white/[0.08]"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-6 py-6 bg-[#07080C]/98 border-b border-white/[0.08] backdrop-blur-2xl">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-400 pb-2 border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span>All systems operational</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
              <a
                href="#product"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-300 rounded-lg bg-white/[0.04] border border-white/[0.08]"
              >
                Sign in
              </a>
              <a
                href="#product"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-lg shadow-glow-brand/50"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
