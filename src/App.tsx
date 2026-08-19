import React from 'react';
import { SpaceGravityCanvas } from './components/SpaceGravityCanvas';
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
    <div className="relative min-h-screen bg-[#0C0414] text-foreground selection:bg-[#C069FF]/30 selection:text-[#F4DFFF] font-sans overflow-x-hidden">
      {/* Living Cosmic Space / Particle Background Layer */}
      <SpaceGravityCanvas />

      {/* Top Floating Navbar */}
      <Navbar />

      {/* Narrative Page Flow in Unified Cosmic Pink & Purple Palette */}
      <main className="relative z-10">
        {/* 1. Hero — Cosmic Purple & Radiant Pink Ambient Glow */}
        <Hero />

        {/* 2. Product Dashboard Centerpiece — Purple, Magenta & Pink Telemetry */}
        <HeroDashboard />

        {/* 3. Deployment Narrative — Deep Violet & Pink Pipeline */}
        <DeploySection />

        {/* 4. Monitoring & Observability Narrative — Magenta & Fuchsia Telemetry */}
        <MonitoringSection />

        {/* 5. How It Works — Lilac & Pink Typographic System */}
        <HowItWorks />

        {/* 6. Final Call to Action — Cosmic Glow & Elevated Pink CTAs */}
        <FinalCTA />
      </main>

      {/* 7. Interactive Hover Footer */}
      <Footer />
    </div>
  );
};

export default App;
