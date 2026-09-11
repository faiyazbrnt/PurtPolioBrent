import React from 'react';
import { Project } from '../types';
import { ProjectChronos } from './projects/ProjectChronos';
import { ProjectOneOps } from './projects/ProjectOneOps';

interface ProjectListProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onOpenDetails }) => {
  return (
    <section
      id="projects-section"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-20 md:py-28 border-b border-[#F5F3ED]/10 relative bg-[#9A031E]"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F5F3ED]/15 pb-5 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
              <span>SECTION // 03</span>
              <span>—</span>
              <span className="text-[#F5F3ED]">PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial-serif text-[#F5F3ED] font-normal tracking-tight">
              Projects
            </h2>
          </div>

          <div className="text-xs font-editorial-mono text-white/50 text-left sm:text-right uppercase tracking-wider">
            <span>[ 02 WORKS RECORDED ]</span>
            <span className="block text-[10px] text-[#FB8B24] mt-0.5">FILTER: ALL DOMAINS</span>
          </div>
        </div>

        {/* Project 01: Chronos Time and Payroll System */}
        {projects[0] && (
          <ProjectChronos project={projects[0]} onOpenDetails={onOpenDetails} />
        )}

        {/* Project 02: OneOps System (TASS Management) */}
        {projects[1] && (
          <ProjectOneOps project={projects[1]} onOpenDetails={onOpenDetails} />
        )}
      </div>
    </section>
  );
};
