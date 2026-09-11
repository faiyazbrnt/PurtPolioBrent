import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioConfig } from '../types';
import {
  experienceData,
  educationData,
  technicalStackCategories,
} from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Layers,
  Phone,
  User,
  Target,
  Award,
  CheckCircle2,
  FileBadge,
} from 'lucide-react';

interface DigitalResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PortfolioConfig;
}

export const DigitalResumeModal: React.FC<DigitalResumeModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'skills' | 'education' | 'personal'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${config.developerName} — RESUME / CREDENTIALS
**${config.developerRole}**
Address: ${config.location}
Contact No.: ${config.phone || '0915-475-5930'}
Email: ${config.email} | GitHub: ${config.github}

---

## OBJECTIVE
${config.objective || 'To secure an IT internship where I can leverage my skills to support company operations while further developing my professional expertise and problem solving abilities.'}

---

## QUALIFICATIONS
${(config.qualifications || [
  'Dedicated and hard working individual',
  'Exceptionally versatile and adaptability',
  'Exposed and can interact with wide variety of personality'
]).map(q => `● ${q}`).join('\n')}

---

## PERSONAL DATA
● Date of Birth: ${config.personalData?.dateOfBirth || 'November 02, 2004'}
● Citizenship: ${config.personalData?.citizenship || 'Filipino'}
● Sex: ${config.personalData?.sex || 'Male'}
● Civil Status: ${config.personalData?.civilStatus || 'Single'}

---

## SKILLS
${technicalStackCategories
  .map(
    (cat) => `### ${cat.category}
${cat.skills.map((s) => `● ${s.name} (${s.focus || s.depth})`).join('\n')}
`
  )
  .join('\n')}

---

## EDUCATION
${educationData
  .map(
    (edu) => `### ${edu.degree} — ${edu.institution}
*${edu.period} | ${edu.location}*
${edu.details || ''}
`
  )
  .join('\n')}

---

## WORK & PROJECT EXPERIENCE
${experienceData
  .map(
    (exp) => `### ${exp.role} — ${exp.company}
*${exp.period} | ${exp.location}*
${exp.description}
${exp.achievements.map((a) => `- ${a}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`
  )
  .join('\n')}

---

## REFERENCES
${config.references || 'Available Upon Request'}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl bg-[#11151A] border border-[#F5F3ED]/25 text-[#D0D0D0] my-auto shadow-2xl relative max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-[#F5F3ED]/15 bg-[#171C23] no-print">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-editorial-mono text-[#FB8B24] uppercase">
                [ CREDENTIALS // CURRICULUM VITAE ]
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-xs font-editorial-mono text-white/50 hidden sm:inline">
                FULLSTACK DEVELOPER &amp; QA ENGINEER
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border border-[#F5F3ED]/20 hover:border-white text-xs font-editorial-mono uppercase text-[#F5F3ED] transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT / PDF</span>
              </button>

              <button
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border border-[#F5F3ED]/20 hover:border-white text-xs font-editorial-mono uppercase text-[#F5F3ED] transition-colors"
                title="Copy Resume as Markdown"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">COPY MARKDOWN</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors ml-1 sm:ml-2"
                aria-label="Close credentials"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Tab Filter */}
          <div className="px-3 sm:px-6 py-2 bg-[#0F0205] border-b border-[#F5F3ED]/10 flex items-center gap-2 sm:gap-3 overflow-x-auto text-xs font-editorial-mono no-print scrollbar-none whitespace-nowrap">
            <span className="text-white/40 uppercase tracking-widest text-[10px] shrink-0">SECTION:</span>
            {(['all', 'experience', 'skills', 'education', 'personal'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 sm:px-3 py-1 uppercase tracking-wider transition-colors text-[11px] shrink-0 ${
                  activeTab === tab
                    ? 'border-b-2 border-[#FB8B24] text-[#FB8B24] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Printable / Viewable Resume Body */}
          <div className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-9 overflow-y-auto flex-1 font-light">
            {/* Header: Name, Title, Contact */}
            <div className="space-y-4 border-b border-[#F5F3ED]/15 pb-6 sm:pb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-editorial-serif text-[#F5F3ED] font-normal tracking-tight">
                    {config.developerName}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base font-editorial-mono uppercase tracking-[0.2em] text-[#FB8B24] mt-1">
                    {config.developerRole}
                  </p>
                </div>

                <div className="text-xs font-editorial-mono space-y-1.5 text-white/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FB8B24] shrink-0" />
                    <span>{config.location}</span>
                  </div>
                  {config.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FB8B24] shrink-0" />
                      <span>Contact No.: {config.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#FB8B24] shrink-0" />
                    <a href={`mailto:${config.email}`} className="hover:text-[#FB8B24] transition-colors underline-offset-2">
                      {config.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-[#FB8B24] shrink-0" />
                    <a href={config.github} target="_blank" rel="noreferrer" className="hover:text-[#FB8B24] transition-colors">
                      {config.github}
                    </a>
                  </div>
                </div>
              </div>

              {/* Objective & Qualifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-white/10">
                <div className="md:col-span-7 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-wider">
                    <Target className="w-3.5 h-3.5" />
                    <span>OBJECTIVE</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#D0D0D0] leading-relaxed">
                    {config.objective ||
                      'To secure an IT internship where I can leverage my skills to support company operations while further developing my professional expertise and problem solving abilities.'}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>QUALIFICATIONS</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D0D0D0]">
                    {(config.qualifications || [
                      'Dedicated and hard working individual',
                      'Exceptionally versatile and adaptability',
                      'Exposed and can interact with wide variety of personality'
                    ]).map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FB8B24] text-base leading-none">●</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Personal Data Section */}
            {(activeTab === 'all' || activeTab === 'personal') && config.personalData && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-[0.25em] border-b border-[#F5F3ED]/10 pb-2">
                  <User className="w-3.5 h-3.5" />
                  <span>PERSONAL DATA</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-editorial-mono text-xs p-4 bg-[#0F0205] border border-white/10">
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider">Date of Birth</span>
                    <span className="text-[#F5F3ED] font-medium">{config.personalData.dateOfBirth}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider">Citizenship</span>
                    <span className="text-[#F5F3ED] font-medium">{config.personalData.citizenship}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider">Sex</span>
                    <span className="text-[#F5F3ED] font-medium">{config.personalData.sex}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider">Civil Status</span>
                    <span className="text-[#F5F3ED] font-medium">{config.personalData.civilStatus}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {(activeTab === 'all' || activeTab === 'skills') && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-[0.25em] border-b border-[#F5F3ED]/10 pb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SKILLS &amp; TECHNICAL CAPABILITIES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {technicalStackCategories.map((cat) => (
                    <div key={cat.code} className="space-y-3 p-4 bg-[#0F0205] border border-white/10">
                      <h4 className="text-xs font-editorial-mono uppercase text-[#FB8B24] font-semibold">
                        {cat.category}
                      </h4>
                      <ul className="space-y-2.5 text-xs">
                        {cat.skills.map((s, idx) => (
                          <li key={idx} className="space-y-0.5">
                            <div className="flex justify-between text-[#F5F3ED]">
                              <span className="font-medium">{s.name}</span>
                              <span className="text-[10px] text-[#FB8B24]/80 font-editorial-mono">{s.depth}</span>
                            </div>
                            {s.focus && (
                              <span className="block text-[10px] text-white/50 font-editorial-mono leading-relaxed">
                                {s.focus}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-[0.25em] border-b border-[#F5F3ED]/10 pb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>EDUCATION</span>
                </div>

                <div className="space-y-3.5">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 border border-white/10 bg-[#0F0205] flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-[#F5F3ED]">{edu.degree}</h4>
                        <div className="text-xs font-editorial-mono text-[#FB8B24]">
                          {edu.institution}
                        </div>
                        {edu.details && (
                          <p className="text-xs text-white/60 leading-relaxed pt-0.5">{edu.details}</p>
                        )}
                      </div>
                      <span className="text-xs font-editorial-mono text-white/40 shrink-0">
                        {edu.period} • {edu.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Section */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-[0.25em] border-b border-[#F5F3ED]/10 pb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>WORK &amp; PROJECT SYSTEMS</span>
                </div>

                <div className="space-y-8">
                  {experienceData.map((exp) => (
                    <div key={exp.id} className="space-y-3 p-4 bg-[#0F0205] border border-white/10">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div>
                          <h3 className="text-base font-semibold text-[#F5F3ED] font-editorial-sans">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-editorial-mono text-[#FB8B24] uppercase">
                            {exp.company}
                          </span>
                        </div>
                        <div className="text-xs font-editorial-mono text-white/50">
                          <span>{exp.period}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-[#D0D0D0] leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5 pl-4 text-xs text-[#D0D0D0]/90">
                        {exp.achievements.map((item, aIdx) => (
                          <li key={aIdx} className="list-disc marker:text-[#FB8B24]">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-editorial-mono bg-white/5 border border-white/10 text-[#E5E5E5]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* References Section */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-editorial-mono text-white/60">
              <span className="uppercase tracking-wider">REFERENCES:</span>
              <span className="text-[#F5F3ED] font-medium">{config.references || 'Available Upon Request'}</span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-[#F5F3ED]/15 bg-[#171C23] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 no-print">
            <span className="text-xs font-editorial-mono text-white/40">
              PRESS [ESC] OR CLICK OUTSIDE TO RETURN TO PORTFOLIO
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#F5F3ED] text-[#11151A] text-xs font-editorial-mono uppercase tracking-widest font-semibold hover:bg-[#FB8B24] transition-colors self-end sm:self-auto"
            >
              DONE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
