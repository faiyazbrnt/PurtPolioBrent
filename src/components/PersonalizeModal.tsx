import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioConfig } from '../types';
import { X, Check, RotateCcw, SlidersHorizontal, Info } from 'lucide-react';
import { initialPortfolioConfig } from '../data/portfolioData';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PortfolioConfig;
  onSave: (newConfig: PortfolioConfig) => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<PortfolioConfig>(config);

  useEffect(() => {
    setFormData(config);
  }, [config, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(initialPortfolioConfig);
  };

  return (
    <AnimatePresence>
      <div
        id="personalize-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl bg-[#11151A] border border-[#F5F3ED]/25 text-[#D0D0D0] my-auto shadow-2xl relative flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#F5F3ED]/15 bg-[#171C23]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#FB8B24]" />
              <span className="text-[11px] sm:text-xs font-editorial-mono uppercase tracking-widest text-[#F5F3ED]">
                PORTFOLIO IDENTITY &amp; PLACEHOLDER EDITOR
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-white/60 hover:text-white transition-colors"
              aria-label="Close configuration"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1 text-xs">
            <div className="p-3 bg-[#0F0205] border border-white/10 text-white/70 flex items-start gap-2.5 font-editorial-mono">
              <Info className="w-4 h-4 text-[#FB8B24] shrink-0 mt-0.5" />
              <span>
                Use this editor to preview your real name, role, email, and GitHub URLs in place of
                the marked placeholders. Changes persist in your browser session.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-editorial-mono">
              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.developerName}
                  onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="e.g. Brent Liam Emmanuel L. Go"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Developer Title / Role
                </label>
                <input
                  type="text"
                  value={formData.developerRole}
                  onChange={(e) => setFormData({ ...formData, developerRole: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="e.g. Aspiring Fullstack Developer & QA Engineer"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="brentliamemmanuelgo@gmail.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Contact Phone No.
                </label>
                <input
                  type="text"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="0915-475-5930"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Address / Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="Pasig City"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  GitHub URL / Handle
                </label>
                <input
                  type="text"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="https://github.com/username"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Hero Serif Headline
                </label>
                <input
                  type="text"
                  value={formData.editorialHeadline}
                  onChange={(e) => setFormData({ ...formData, editorialHeadline: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] font-editorial-serif text-lg focus:border-[#FB8B24] focus:outline-none"
                  placeholder="To Build Your System Efficiently"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Availability Status
                </label>
                <input
                  type="text"
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="Available for Q4 / 2026"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-white/50 uppercase tracking-wider text-[11px]">
                  Base Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#0F0205] border border-white/15 px-3 py-2 text-[#F5F3ED] focus:border-[#FB8B24] focus:outline-none"
                  placeholder="Tokyo / Remote Worldwide"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-[#F5F3ED]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white font-editorial-mono uppercase tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESTORE DEFAULTS</span>
              </button>

              <div className="flex items-center gap-2.5 sm:gap-3 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 border border-white/15 text-white/70 hover:text-white font-editorial-mono uppercase tracking-wider"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 sm:px-5 py-2 bg-[#F5F3ED] text-[#11151A] font-editorial-mono font-semibold uppercase tracking-widest hover:bg-[#FB8B24] transition-colors"
                >
                  APPLY CHANGES
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
