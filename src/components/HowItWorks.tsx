import React from 'react';
import { ProgressiveBlur } from './ui/progressive-blur';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Connect',
      text: 'Bring your cloud environments into one workspace with zero-credential discovery.',
      accent: 'text-brand-500 dark:text-brand-400',
    },
    {
      num: '02',
      title: 'Deploy',
      text: 'Track applications and deployments from one place with automated canary validation.',
      accent: 'text-violet-light',
    },
    {
      num: '03',
      title: 'Monitor',
      text: 'Understand infrastructure health in real time with sub-second telemetry and instant triage.',
      accent: 'text-telemetry-light',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-28 md:py-44 bg-bg-how-it-works overflow-hidden transition-colors duration-500"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1100px] h-[450px] bg-gradient-to-r from-brand-500/10 via-infra/10 to-violet/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-faded opacity-30 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs font-mono text-brand-500 dark:text-brand-400 uppercase tracking-widest font-semibold mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
            From connect to control in three steps.
          </h2>
          <p className="text-base sm:text-lg text-muted-text font-normal">
            No complex agent configurations or setup overhead.
          </p>
        </div>

        {/* 3 Step Open Typography Columns with Dimensional Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step) => (
            <div key={step.num} className="space-y-4 group">
              <div
                className={`text-4xl sm:text-5xl font-extrabold font-mono ${step.accent} tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform duration-300 inline-block`}
              >
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Atmospheric Progressive Blur Transition into CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <ProgressiveBlur
          direction="bottom"
          blurLevels={[2, 4, 8, 16, 24]}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-cta/40 to-bg-cta" />
      </div>
    </section>
  );
};
