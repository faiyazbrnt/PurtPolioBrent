import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ArrowUpRight, Github, CheckCircle2, Server, Cpu, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-[#11151A] border border-[#F5F3ED]/25 text-[#D0D0D0] my-auto shadow-2xl relative max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#F5F3ED]/15 bg-[#171C23]">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-editorial-mono text-[#FB8B24] uppercase">
                {project.number} // ARCHITECTURAL DEEP DIVE
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-xs font-editorial-mono text-[#E5E5E5] hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 text-[#E5E5E5]/70 hover:text-[#F5F3ED] hover:bg-white/10 transition-colors"
              aria-label="Close case study dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 overflow-y-auto flex-1 font-light">
            {/* Title & Metadata */}
            <div className="space-y-2.5 sm:space-y-3 border-b border-[#F5F3ED]/10 pb-4 sm:pb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial-serif text-[#F5F3ED] font-normal tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-editorial-mono text-white/50">
                <span>CLIENT: {project.client}</span>
                <span className="hidden sm:inline">•</span>
                <span>ROLE: {project.role}</span>
                <span className="hidden sm:inline">•</span>
                <span>YEAR: {project.year}</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-emerald-400 font-semibold">{project.status}</span>
              </div>
            </div>

            {/* Overview & Architecture Narrative */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs font-editorial-mono uppercase tracking-widest text-[#FB8B24]">
                SYSTEM OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-4 border border-[#F5F3ED]/15 bg-[#0F0205]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1 font-editorial-mono">
                  <span className="text-[10px] sm:text-xs text-white/40 uppercase block">{m.label}</span>
                  <span className="text-lg sm:text-xl font-bold text-[#FB8B24]">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Architectural Decisions & Engineering Highlights */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs font-editorial-mono uppercase tracking-widest text-[#FB8B24]">
                ARCHITECTURAL DECISIONS &amp; RESILIENCE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 border border-white/10 bg-[#171C23] space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#F5F3ED]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>SPEC 0{idx + 1}</span>
                    </div>
                    <p className="text-xs text-[#D0D0D0] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-editorial-mono uppercase tracking-widest text-white/40">
                TECHNOLOGY MATRIX
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-editorial-mono bg-[#5F0F40]/40 border border-[#F5F3ED]/20 text-[#E5E5E5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-[#F5F3ED]/15 bg-[#171C23] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#F5F3ED] text-[#11151A] text-xs font-editorial-mono uppercase tracking-widest font-semibold hover:bg-[#FB8B24] transition-colors"
              >
                <span>OPEN LIVE DEMO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 border border-white/20 text-[#E5E5E5] text-xs font-editorial-mono uppercase tracking-widest hover:border-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>REPOSITORY</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-editorial-mono text-white/50 hover:text-white uppercase tracking-widest text-left sm:text-right py-1"
            >
              [ CLOSE ESC ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
