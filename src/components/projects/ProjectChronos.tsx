import React from 'react';
import { Project } from '../../types';
import {
  Building2,
  Users,
  Clock,
  DollarSign,
  Calendar,
  ShieldCheck,
} from 'lucide-react';

interface ProjectChronosProps {
  project: Project;
}

export const ProjectChronos: React.FC<ProjectChronosProps> = ({ project }) => {

  return (
    <div
      id="project-01-container"
      className="border border-[#F5F3ED]/15 bg-[#11151A]/70 p-6 md:p-10 transition-colors duration-300 relative group"
    >
      {/* Top micro metadata header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F5F3ED]/10 text-xs font-editorial-mono">
        <div className="flex items-center gap-3">
          <span className="text-xl font-editorial-serif text-[#FB8B24]">{project.number}</span>
          <span className="text-[#FB8B24] uppercase tracking-widest font-semibold">
            [CHRONOS SYSTEM]
          </span>
          <span className="text-white/30 hidden sm:inline">/</span>
          <span className="text-[#E5E5E5] hidden sm:inline">{project.category}</span>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <span className="text-[#FB8B24] font-medium">ROLE: {project.role}</span>
          <span className="hidden md:inline">•</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE ON MGENS (MS TEAMS)
          </span>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
        {/* Left Column: Title, Description, Role, System Highlights, Badges */}
        <div className="lg:col-span-12 max-w-5xl space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#5F0F40]/40 border border-[#F5F3ED]/15 text-[11px] font-editorial-mono text-[#FB8B24] uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>MGEN INTERNAL ECOSYSTEM // MS TEAMS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif text-[#F5F3ED] font-normal tracking-tight group-hover:text-[#FB8B24] transition-colors leading-[1.08]">
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-[#D0D0D0] leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          {/* System Highlights Selector Cards */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs font-editorial-mono text-white/50">
              <span className="uppercase tracking-[0.2em] text-[#FB8B24]">
                SYSTEM HIGHLIGHTS:
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-editorial-mono text-xs">
              <div
                className="p-3 border text-left transition-all flex flex-col justify-between h-20 border-white/10 bg-[#0F0205] text-white/70"
              >
                <div className="flex items-center justify-between">
                  <Clock className="w-4 h-4 text-[#FB8B24]" />
                  <span className="text-[10px] text-white/40">01</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">Time Management</span>
              </div>

              <div
                className="p-3 border text-left transition-all flex flex-col justify-between h-20 border-white/10 bg-[#0F0205] text-white/70"
              >
                <div className="flex items-center justify-between">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] text-white/40">02</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">Payroll Sytem</span>
              </div>

              <div
                className="p-3 border text-left transition-all flex flex-col justify-between h-20 border-white/10 bg-[#0F0205] text-white/70"
              >
                <div className="flex items-center justify-between">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span className="text-[10px] text-white/40">03</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">Calendar Tracker</span>
              </div>

              <div
                className="p-3 border text-left transition-all flex flex-col justify-between h-20 border-white/10 bg-[#0F0205] text-white/70"
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span className="text-[10px] text-white/40">04</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">DOLE</span>
              </div>
            </div>
          </div>

          {/* QA Rigor Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-[#F5F3ED]/10 font-editorial-mono">
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 truncate">
                QA Coverage
              </span>
              <span className="text-sm sm:text-base font-semibold text-emerald-400">100%</span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 truncate">
                Platform
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#F5F3ED]">MS Teams</span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 truncate">
                Statutory
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#FB8B24]">DOLE Verified</span>
            </div>
          </div>

          {/* Action trigger */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-xs font-editorial-mono text-white/50">{project.status}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
