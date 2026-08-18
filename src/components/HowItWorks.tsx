import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Connect',
      text: 'Bring your cloud environments into one workspace with zero-credential discovery.',
    },
    {
      num: '02',
      title: 'Deploy',
      text: 'Track applications and deployments from one place with automated canary validation.',
    },
    {
      num: '03',
      title: 'Monitor',
      text: 'Understand infrastructure health in real time with sub-second telemetry and instant triage.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 md:py-48 bg-bg-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid-faded opacity-30 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            From connect to control in three steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            No complex agent configurations or setup overhead.
          </p>
        </div>

        {/* 3 Step Open Typography Columns with Dimensional Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step) => (
            <div key={step.num} className="space-y-4 group">
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-brand-400 tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform duration-300 inline-block">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
