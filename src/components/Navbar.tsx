import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { ProgressiveBlur } from './ui/progressive-blur';
import { useTheme, Theme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 24);
  });

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Deploy', href: '#deploy' },
    { name: 'Monitoring', href: '#monitoring' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'dark', label: 'Dark', icon: <Moon className="w-3.5 h-3.5" /> },
    { value: 'light', label: 'Light', icon: <Sun className="w-3.5 h-3.5" /> },
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
              ? 'py-2.5 px-4 sm:px-6 bg-surface/85 dark:bg-[#07080C]/85 light:bg-white/85 backdrop-blur-xl border border-border shadow-xl shadow-black/20'
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
              <span className="font-extrabold text-xl sm:text-2xl text-foreground tracking-tight group-hover:text-brand-400 dark:group-hover:text-brand-300 light:group-hover:text-emerald-700 transition-colors">
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
            {/* Theme Toggle Segmented Control (Strictly DARK + LIGHT) */}
            <div
              className="flex items-center p-1 rounded-xl bg-surface-secondary/80 border border-border text-muted-text shadow-sm"
              role="radiogroup"
              aria-label="Theme selection"
            >
              {themeOptions.map((opt) => {
                const isActive = theme === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setTheme(opt.value)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-surface text-foreground shadow-sm font-semibold'
                        : 'hover:text-foreground hover:bg-surface/40'
                    }`}
                    title={`Switch to ${opt.label} theme`}
                    aria-checked={isActive}
                    role="radio"
                  >
                    {opt.icon}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Operational Status Pill */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-muted-text px-2 py-1">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span>Operational</span>
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

          {/* Mobile Actions: Quick Theme Switch + Animated Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-muted-text hover:text-foreground bg-surface-secondary/70 border border-border transition-colors"
              aria-label="Toggle dark/light theme"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-brand-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>

            {/* Animated Menu -> X Button */}
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
                <div className="flex items-center gap-2 text-xs font-mono text-brand-500 dark:text-brand-400">
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

              {/* Theme Selector for Mobile (Strictly DARK + LIGHT) */}
              <div className="pt-2">
                <div className="text-xs font-mono text-muted-text uppercase tracking-wider mb-2">
                  Theme
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {themeOptions.map((opt) => {
                    const isActive = theme === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => setTheme(opt.value)}
                        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          isActive
                            ? 'bg-brand-500/15 border-brand-500 text-brand-500 font-semibold shadow-sm'
                            : 'bg-surface-secondary border-border text-muted-text hover:text-foreground'
                        }`}
                      >
                        {opt.icon}
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

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
