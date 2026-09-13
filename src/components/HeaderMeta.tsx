import React, { useEffect } from 'react';
import { PortfolioConfig } from '../types';
import { Sparkles, SlidersHorizontal, Moon, Sun, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { downloadCv } from '../utils/downloadCv';

interface HeaderMetaProps {
  config: PortfolioConfig;
  onResumeClick: () => void;
  onPersonalizeClick: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const HeaderMeta: React.FC<HeaderMetaProps> = ({
  config,
  onResumeClick,
  onPersonalizeClick,
  isDarkMode,
  onToggleDarkMode,
}) => {
  // Keyboard shortcut listener: press 'r' or 'R' for resume download, 'd' or 'D' for dark mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'r' || e.key === 'R') {
        downloadCv();
      }
      if (e.key === 'd' || e.key === 'D') {
        onToggleDarkMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleDarkMode]);

  return (
    <header
      id="editorial-header"
      className="w-full pt-3 sm:pt-6 pb-3 sm:pb-4 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-[#11151A]/10 dark:border-[#F5F3ED]/10 relative z-30 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
        
        {/* Left Side: Availability */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          {/* Metadata Information */}
          <div className="flex items-center gap-2 text-xs text-[#11151A]/70 dark:text-[#E5E5E5]/80 font-editorial-mono min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#FB8B24] animate-pulse shrink-0" />
            <span className="uppercase tracking-wider text-[10px] sm:text-[11px] text-[#11151A] dark:text-[#F5F3ED] font-semibold sm:font-normal break-words">
              {config.availability}
            </span>
          </div>
        </div>

        {/* Right Side: Dark Mode Toggle & [ RESUME ] Button aligned together */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-start sm:self-auto">
          {/* Dark Mode Button (Icon Only with Microinteraction) */}
          <motion.button
            id="dark-mode-toggle-btn"
            type="button"
            onClick={onToggleDarkMode}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className="shrink-0 group relative inline-flex items-center justify-center w-[38px] h-[38px] border border-[#11151A]/30 hover:border-[#11151A] text-[#11151A] hover:bg-[#11151A]/5 dark:border-[#F5F3ED]/30 dark:hover:border-[#F5F3ED] dark:text-[#F5F3ED] dark:hover:bg-[#F5F3ED]/5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FB8B24] cursor-pointer overflow-visible"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDarkMode ? 'Switch to Light Mode (Press D)' : 'Switch to Dark Mode (Press D)'}
          >
            {/* Micro-interaction expanding tactile pulse ring on theme switch */}
            <AnimatePresence>
              <motion.span
                key={isDarkMode ? 'pulse-dark' : 'pulse-light'}
                initial={{ scale: 0.85, opacity: 0.75 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 border border-[#FB8B24] pointer-events-none"
              />
            </AnimatePresence>

            {/* Micro-interaction rotating and scaling icon switch */}
            <AnimatePresence mode="wait" initial={false}>
              {isDarkMode ? (
                <motion.div
                  key="sun-icon"
                  initial={{ rotate: -80, scale: 0.45, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 80, scale: 0.45, opacity: 0 }}
                  transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center pointer-events-none"
                >
                  <Sun className="w-4 h-4 text-[#FB8B24] group-hover:text-[#11151A] dark:group-hover:text-[#F5F3ED] transition-colors shrink-0" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon-icon"
                  initial={{ rotate: 80, scale: 0.45, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -80, scale: 0.45, opacity: 0 }}
                  transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center pointer-events-none"
                >
                  <Moon className="w-4 h-4 text-[#FB8B24] group-hover:text-[#11151A] transition-colors shrink-0" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Resume Direct Download Button */}
          <button
            id="resume-btn"
            onClick={downloadCv}
            className="shrink-0 group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 border border-[#11151A]/30 hover:border-[#11151A] text-[#11151A] hover:bg-[#11151A] hover:text-[#fefae0] dark:border-[#F5F3ED]/30 dark:hover:border-[#F5F3ED] dark:text-[#F5F3ED] dark:hover:bg-[#F5F3ED] dark:hover:text-[#11151A] text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-editorial-sans transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FB8B24] min-h-[38px] w-fit cursor-pointer"
            aria-label="Download cv.pdf"
            title="Download cv.pdf"
          >
            <Download className="w-3.5 h-3.5 text-[#FB8B24] group-hover:text-[#fefae0] dark:group-hover:text-[#11151A] transition-colors shrink-0" />
            <span>[DOWNLOAD CV]</span>
          </button>
        </div>

      </div>
    </header>
  );
};
