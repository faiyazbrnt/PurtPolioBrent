import React from 'react';
import { motion } from 'motion/react';
import { PortfolioConfig } from '../types';
import { ArrowDownRight, Terminal, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  config: PortfolioConfig;
  onExploreProjects: () => void;
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onExploreProjects, onResumeClick }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-14 border-b border-[#F5F3ED]/10"
    >
      {/* Background subtle geometric line grid (Swiss aesthetic) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F5F3ED 1px, transparent 1px), linear-gradient(to bottom, #F5F3ED 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
        {/* Two-Column Asymmetric Layout (approx 36% Left / 64% Right on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Metadata, introduction, coordinates, architectural discipline (36% width ~ col-span-5 or 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8 pt-2"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-editorial-mono tracking-[0.2em] text-[#FB8B24] uppercase">
                  INDEX // 001
                </span>
                <span className="w-8 h-[1px] bg-[#FB8B24]/40" />
                <span className="text-[11px] font-editorial-mono tracking-[0.2em] text-[#E5E5E5]/60 uppercase">
                  DEV_EDITION
                </span>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-[#F5F3ED] font-editorial-sans tracking-tight">
                  {config.developerName}
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E5E5E5]/70 font-editorial-mono mt-1">
                  {config.developerRole}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-[#D0D0D0] max-w-sm font-light">
                {config.editorialSubhead}
              </p>
            </div>

            {/* Micro Discipline Specs */}
            <div className="border-t border-[#F5F3ED]/15 pt-5 sm:pt-6 space-y-3">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-editorial-mono">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider mb-0.5">
                    PARADIGM
                  </span>
                  <span className="text-[#F5F3ED] break-words">Reactive &amp; Distributed</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider mb-0.5">
                    SPECIALTY
                  </span>
                  <span className="text-[#F5F3ED] break-words">Creative Full Stack</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-editorial-mono pt-1 sm:pt-2">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider mb-0.5">
                    STACK ARCH
                  </span>
                  <span className="text-[#F5F3ED] break-words">Next.js / Node / WebGL</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider mb-0.5">
                    DEPLOYMENT
                  </span>
                  <span className="text-[#F5F3ED] break-words">Vercel Edge / Cloud</span>
                </div>
              </div>
            </div>

            {/* Quick action triggers */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="hero-explore-btn"
                onClick={onExploreProjects}
                className="group inline-flex items-center gap-2 text-xs font-editorial-mono uppercase tracking-[0.2em] text-[#F5F3ED] hover:text-[#FB8B24] transition-colors py-2"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Dominant Serif Headline (64% width ~ col-span-8 or 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-start lg:pl-6 pt-4 lg:pt-0"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 border border-[#F5F3ED]/15 text-[10px] sm:text-[11px] font-editorial-mono tracking-widest text-[#E5E5E5] bg-[#5F0F40]/30 backdrop-blur-sm self-start">
                <Terminal className="w-3.5 h-3.5 text-[#FB8B24] shrink-0" />
                <span className="uppercase">ENGINEERING // ARTISTIC DIRECTION</span>
              </div>

              {/* CRITICAL DESIGN REQUIREMENT: 
                  Main hero headline MUST use a SERIF FONT: "To Build Your System Efficiently"
                  Target size: 56px-76px desktop (~64px target), line-height: 0.95 - 1.05, font-weight: 400.
                  Responsive clamp: clamp(2.35rem, 6.75vw, 5.85rem) scales cleanly down to mobile viewports without overflowing!
              */}
              <h1
                id="hero-editorial-headline"
                className="font-editorial-serif text-[#F5F3ED] font-normal tracking-[-0.03em] select-none break-words"
                style={{
                  fontSize: 'clamp(2.25rem, 6.5vw, 5.85rem)',
                  lineHeight: 1.02,
                }}
              >
                {config.editorialHeadline}
              </h1>

              {/* Editorial sub-statement supporting the headline */}
              <div className="pt-2 sm:pt-4 lg:pt-6 max-w-2xl">
                <p className="text-sm sm:text-base md:text-lg text-[#D0D0D0] leading-relaxed font-light">
                  Architecting resilient full-stack platforms, high-throughput backend services, and
                  sculpted web interfaces that transform complex digital infrastructure into intuitive,
                  unforgettable tools.
                </p>
              </div>

              {/* Visual rhythm separator with engineering metrics */}
              <div className="pt-5 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#F5F3ED]/15 max-w-xl">
                <div>
                  <span className="block text-xl sm:text-2xl md:text-3xl font-editorial-serif text-[#F5F3ED]">
                    02
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-editorial-mono uppercase tracking-wider sm:tracking-widest text-white/50 block truncate">
                    Projects
                  </span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl md:text-3xl font-editorial-serif text-[#FB8B24]">
                    100%
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-editorial-mono uppercase tracking-wider sm:tracking-widest text-white/50 block truncate">
                    QA Coverage
                  </span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl md:text-3xl font-editorial-serif text-[#F5F3ED]">
                    MS Teams
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-editorial-mono uppercase tracking-wider sm:tracking-widest text-white/50 block truncate">
                    Active System
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer of Hero: Asymmetrical scroll indicator & coordinate footer */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-editorial-mono text-white/40 border-t border-[#F5F3ED]/10">
        <div className="flex items-center gap-3">
          <span>COORDINATES:</span>
          <span className="text-[#E5E5E5]/70">35.6762° N, 139.6503° E</span>
          <span className="hidden sm:inline-block">/</span>
          <span className="hidden sm:inline-block text-[#FB8B24]/90">
            CLASSIC EDITORIAL VIEW
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="animate-bounce">↓</span>
          <span className="tracking-widest uppercase text-[#E5E5E5]/70">
            SCROLL TO INSPECT ARCHIVES
          </span>
        </div>
      </div>
    </section>
  );
};
