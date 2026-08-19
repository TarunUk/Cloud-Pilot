import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Cpu, Network, Boxes, Zap, Server } from 'lucide-react';
import { Button } from './button';
import { InfiniteSlider } from './infinite-slider';
import { ProgressiveBlur } from './progressive-blur';

export interface HeroSection5Props {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  sliderItems?: {
    icon: React.ReactNode;
    label: string;
    badge?: string;
  }[];
  children?: React.ReactNode;
}

export const HeroSection5: React.FC<HeroSection5Props> = ({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  sliderItems,
  children,
}) => {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg-hero transition-colors duration-500 flex flex-col justify-center">
      {/* Visual Background Layer: Abstract Cloud/Infrastructure Motion & Dual Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Large Ambient Gradients (Charcoal + Emerald + Deep Blue) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1300px] h-[550px] bg-gradient-to-tr from-brand-500/18 via-infra/15 to-transparent blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] md:w-[950px] h-[450px] bg-gradient-to-bl from-infra/18 via-telemetry/12 to-transparent blur-[170px] rounded-full pointer-events-none" />

        {/* Dynamic Abstract Infrastructure SVG Visual Stream (autolooping motion) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 dark:opacity-25 light:opacity-15">
          <svg className="w-full max-w-6xl h-[550px]" viewBox="0 0 1200 550" fill="none">
            <defs>
              <linearGradient id="heroOrbitGradTemplate" x1="100" y1="100" x2="1100" y2="450" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gridGlowGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Subtle 3D Orbital Geometry Rings */}
            <ellipse cx="600" cy="275" rx="520" ry="180" stroke="url(#heroOrbitGradTemplate)" strokeWidth="1.5" strokeDasharray="8 12" className="animate-float-gentle" />
            <ellipse cx="600" cy="275" rx="340" ry="120" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="5 8" className="animate-float-counter" />

            {/* Glowing Infrastructure Cluster Points */}
            <circle cx="280" cy="180" r="5" fill="#10B981" className="animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="280" cy="180" r="4" fill="#10B981" />
            <circle cx="920" cy="370" r="5" fill="#38BDF8" className="animate-ping" style={{ animationDuration: '5s' }} />
            <circle cx="920" cy="370" r="4" fill="#38BDF8" />
            <circle cx="600" cy="95" r="4" fill="#8B5CF6" />
          </svg>
        </div>

        {/* Edge-Faded Technical Grid */}
        <div className="absolute inset-0 bg-grid-faded opacity-35" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Pill Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-card/90 border border-border shadow-satellite-pill text-xs font-mono text-muted-text mb-8 backdrop-blur-md rim-light"
          >
            {badge}
          </motion.div>
        )}

        {/* Large Typography Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            {title}
          </h1>
        </motion.div>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-muted-text max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {description}
        </motion.p>

        {/* Call to Action Buttons */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16"
          >
            {primaryCta && (
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={primaryCta.href}>
                  <span>{primaryCta.text}</span>
                  {primaryCta.icon || <ArrowRight className="w-4 h-4" />}
                </a>
              </Button>
            )}

            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={secondaryCta.href}>
                  <span>{secondaryCta.text}</span>
                  {secondaryCta.icon}
                </a>
              </Button>
            )}
          </motion.div>
        )}

        {/* CloudPilot Technical Capabilities Infinite Slider */}
        {sliderItems && sliderItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl mx-auto pt-4 pb-2"
          >
            <div className="text-xs font-mono text-muted-text/80 uppercase tracking-widest mb-4">
              Unified Infrastructure Architecture
            </div>

            <InfiniteSlider gap={16} duration={32} pauseOnHover>
              {sliderItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-surface-secondary/70 border border-border text-xs font-mono text-foreground backdrop-blur-md shadow-sm shrink-0 hover:border-brand-500/40 transition-colors"
                >
                  <div className="text-brand-400 dark:text-brand-400 light:text-brand-600">
                    {item.icon}
                  </div>
                  <span className="font-semibold">{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-brand-500/15 text-brand-400 font-mono border border-brand-500/25">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </InfiniteSlider>

            {/* Side fading progressive blur effect for slider edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-hero to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-hero to-transparent pointer-events-none z-10" />
          </motion.div>
        )}

        {/* Optional Custom Injected Dashboard / Child Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Atmospheric Progressive Blur Transition into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <ProgressiveBlur
          direction="bottom"
          blurLevels={[2, 4, 8, 16, 24]}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-product/40 to-bg-product" />
      </div>
    </section>
  );
};
