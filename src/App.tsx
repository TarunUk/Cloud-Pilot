import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground selection:bg-brand-500/30 selection:text-brand-300 font-sans overflow-x-hidden transition-colors duration-300">
        {/* Living Space / Gravity Background Layer */}
        <SpaceGravityCanvas />

        {/* Top Floating Navbar */}
        <Navbar />

        {/* Narrative Page Flow */}
        <main className="relative z-10">
          {/* 1. Hero — Charcoal + Emerald + Electric Blue */}
          <Hero />

          {/* 2. Product Dashboard Centerpiece — Deep Navy + Blue + Cyan */}
          <HeroDashboard />

          {/* 3. Deployment Narrative — Dark Indigo + Violet + Blue */}
          <DeploySection />

          {/* 4. Monitoring & Observability Narrative — Deep Blue + Cyan + Cool White */}
          <MonitoringSection />

          {/* 5. How It Works — Deep Navy/Slate + Emerald Typographic System */}
          <HowItWorks />

          {/* 6. Final Call to Action — Charcoal + Emerald + Blue Glow */}
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
