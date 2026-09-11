import React, { useEffect } from 'react';
import { PortfolioConfig } from '../types';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-none pb-2 sm:pb-0 -mb-2 sm:mb-0">
        
        {/* Left Side: Availability */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {/* Metadata Information */}
          <div className="flex items-center gap-2 text-xs text-[#E5E5E5]/80 font-editorial-mono shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#FB8B24] animate-pulse shrink-0" />
            <span className="uppercase tracking-wider text-[10px] sm:text-[11px] text-[#F5F3ED]">
              {config.availability}
            </span>
          </div>
        </div>

        {/* Right Side: [ RESUME ] Download Button */}
        <a
          id="resume-btn"
          href="/Brent_Go_Resume.pdf"
          download="Brent_Go_Resume.pdf"
          className="shrink-0 group relative inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 border border-[#F5F3ED]/30 hover:border-[#F5F3ED] text-[#F5F3ED] text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-editorial-sans transition-all duration-300 hover:bg-[#F5F3ED] hover:text-[#11151A] focus:outline-none focus:ring-2 focus:ring-[#FB8B24] min-h-[38px] w-fit ml-auto"
          aria-label="Download Digital Resume"
        >
          <span className="w-1.5 h-1.5 bg-[#FB8B24] rounded-full group-hover:bg-[#11151A] transition-colors shrink-0" />
          <span>[RESUME]</span>
        </a>

      </div>
    </header>
  );
};
