import React, { useState, useEffect } from 'react';
import { initialPortfolioConfig, portfolioProjects } from './data/portfolioData';
import { PortfolioConfig, Project } from './types';
import { HeaderMeta } from './components/HeaderMeta';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { FooterEditorial } from './components/FooterEditorial';
import { DigitalResumeModal } from './components/DigitalResumeModal';
import { PersonalizeModal } from './components/PersonalizeModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [config, setConfig] = useState<PortfolioConfig>(() => {
    try {
      const saved = localStorage.getItem('portfolio_config_v3');
      if (saved) {
        return { ...initialPortfolioConfig, ...JSON.parse(saved) };
      }
    } catch {
      // fallback to initial
    }
    return initialPortfolioConfig;
  });

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState<boolean>(false);

  const handleSaveConfig = (newConfig: PortfolioConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('portfolio_config_v3', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#9A031E] text-[#D0D0D0] relative selection:bg-[#FB8B24] selection:text-[#11151A]">
      {/* Minimalist Interactive Cursor (Disabled on touch devices) */}
      <CustomCursor />

      {/* Top Bar with [ RESUME ] Button & Live Studio Coordinates (No traditional navbar) */}
      <HeaderMeta
        config={config}
        onResumeClick={() => setIsResumeOpen(true)}
        onPersonalizeClick={() => setIsPersonalizeOpen(true)}
      />

      <main className="w-full">
        {/* Asymmetrical Hero with Serif Headline */}
        <Hero
          config={config}
          onExploreProjects={handleExploreProjects}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* Section 03 - Projects */}
        <ProjectList
          projects={portfolioProjects}
        />
      </main>

      {/* Editorial Footer with "Let's build something worth remembering." */}
      <FooterEditorial
        config={config}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Digital Resume Modal (Curriculum Vitae with Print, Copy MD, Experience, Education) */}
      <DigitalResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        config={config}
      />

      {/* Interactive Personalization / Placeholder Customizer Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
