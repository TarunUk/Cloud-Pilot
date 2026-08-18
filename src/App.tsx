import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroDashboard } from './components/HeroDashboard';
import { DeploySection } from './components/DeploySection';
import { MonitoringSection } from './components/MonitoringSection';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bg-hero text-slate-100 selection:bg-brand-500/30 selection:text-brand-300 font-sans overflow-x-hidden">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Narrative Page Flow */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Product Dashboard Centerpiece */}
        <HeroDashboard />

        {/* 3. Deployment Narrative */}
        <DeploySection />

        {/* 4. Monitoring & Observability Narrative */}
        <MonitoringSection />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
