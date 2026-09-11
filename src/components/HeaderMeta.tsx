import React, { useState, useEffect } from 'react';
import { PortfolioConfig } from '../types';
import { Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface HeaderMetaProps {
  config: PortfolioConfig;
  onResumeClick: () => void;
  onPersonalizeClick: () => void;
}

export const HeaderMeta: React.FC<HeaderMetaProps> = ({
  config,
  onResumeClick,
  onPersonalizeClick,
}) => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener: press 'r' or 'R' to toggle resume
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === 'r' || e.key === 'R') &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        onResumeClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onResumeClick]);

  return (
    <header
      id="editorial-header"
      className="w-full pt-4 sm:pt-6 pb-3 sm:pb-4 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-[#F5F3ED]/10 relative z-30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-none pb-2 sm:pb-0 -mb-2 sm:mb-0">
        
        {/* Top-left: [ RESUME ] compact, elegant button as mandated */}
        <button
          id="resume-btn"
          onClick={onResumeClick}
          className="shrink-0 group relative inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 border border-[#F5F3ED]/30 hover:border-[#F5F3ED] text-[#F5F3ED] text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-editorial-sans transition-all duration-300 hover:bg-[#F5F3ED] hover:text-[#11151A] focus:outline-none focus:ring-2 focus:ring-[#FB8B24] min-h-[38px] w-fit"
          aria-label="Open Digital Resume"
        >
          <span className="w-1.5 h-1.5 bg-[#FB8B24] rounded-full group-hover:bg-[#11151A] transition-colors shrink-0" />
          <span>[RESUME]</span>
          <span className="hidden sm:inline-block text-[10px] opacity-60 ml-1 font-editorial-mono">
            [R]
          </span>
        </button>

        {/* Quick interactive customizer to preview own details */}
        <button
          id="personalize-btn"
          onClick={onPersonalizeClick}
          className="shrink-0 inline-flex items-center gap-1.5 px-0 py-1 sm:py-2 border border-transparent text-[#E5E5E5]/70 hover:text-[#F5F3ED] text-xs uppercase tracking-widest transition-all font-editorial-mono"
          title="Edit placeholder content & personal details"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#FB8B24] shrink-0" />
          <span className="border-b border-transparent hover:border-[#F5F3ED]/50 pb-0.5 transition-colors">EDIT INFO</span>
        </button>

        {/* Metadata Information */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs text-[#E5E5E5]/80 font-editorial-mono shrink-0">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#FB8B24] animate-pulse shrink-0" />
            <span className="uppercase tracking-wider text-[10px] sm:text-[11px] text-[#F5F3ED]">
              {config.availability}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-white/50 shrink-0">
            <span>LOC:</span>
            <span className="text-[#E5E5E5]">{config.location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-white/60 text-[10px] sm:text-xs shrink-0">
            <span>SYS_TIME:</span>
            <span className="text-[#F5F3ED] font-semibold">{timeString || 'LIVE'}</span>
          </div>

          <a
            id="github-header-link"
            href={config.github.startsWith('http') ? config.github : `https://${config.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#E5E5E5] hover:text-[#FB8B24] transition-colors uppercase tracking-widest text-[10px] sm:text-[11px] py-1 shrink-0"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
};
