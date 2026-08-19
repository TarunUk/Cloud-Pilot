import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { ProgressiveBlur } from './ui/progressive-blur';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24);
  });

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Deploy', href: '#deploy' },
    { name: 'Monitoring', href: '#monitoring' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Background Progressive Blur for soft edge blending on scroll */}
      {isScrolled && (
        <ProgressiveBlur
          direction="bottom"
          className="h-24 pointer-events-none -z-10"
          blurLevels={[1, 2, 4, 8, 12, 16]}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between transition-all duration-300 rounded-2xl ${
            isScrolled
              ? 'py-2.5 px-4 sm:px-6 bg-surface/85 backdrop-blur-xl border border-border shadow-xl shadow-black/20'
              : 'py-3 px-2 bg-transparent border border-transparent'
          }`}
        >
          {/* Brand Wordmark & Continuous Animated Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group shrink-0"
            aria-label="CloudPilot Home"
          >
            <Logo size="md" />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-foreground tracking-tight group-hover:text-brand-400 transition-colors">
                CloudPilot
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-text hover:text-foreground transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Controls & CTAs */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Operational Status Pill */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-muted-text px-3 py-1.5 rounded-full bg-surface-secondary/80 border border-border">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>

            <a
              href="#product"
              className="text-sm font-medium text-muted-text hover:text-foreground transition-colors px-2 py-1"
            >
              Sign in
            </a>

            <Button asChild size="sm">
              <a href="#product" className="gap-1.5">
                <span>Explore Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Actions: Animated Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-text hover:text-foreground rounded-xl bg-surface-secondary/70 border border-border relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mx-4 sm:mx-6 mt-2 rounded-2xl bg-surface/98 border border-border backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-400">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  <span>All systems operational</span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-brand-500 py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* CTAs */}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <a href="#product">Sign in</a>
                </Button>
                <Button
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <a href="#product" className="gap-2">
                    <span>Explore Platform</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
