import React from 'react';
import { PortfolioConfig } from '../types';
import { ArrowUpRight, ArrowUp, Mail, Github, FileText, Heart } from 'lucide-react';

interface FooterEditorialProps {
  config: PortfolioConfig;
  onResumeClick: () => void;
}

export const FooterEditorial: React.FC<FooterEditorialProps> = ({ config, onResumeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mailtoHref = config.email.startsWith('mailto:')
    ? config.email
    : `mailto:${config.email}?subject=Project%20Inquiry%20%2F%20System%20Architecture`;

  return (
    <footer
      id="editorial-footer"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 bg-[#11151A] text-[#D0D0D0] relative border-t border-[#F5F3ED]/15"
    >
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Editorial Conclusion Headline */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl">
          <span className="text-xs font-editorial-mono text-[#FB8B24] uppercase tracking-[0.25em] block">
            CONCLUSION // ARCHIVAL CODA
          </span>

          <h2 className="font-editorial-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F3ED] font-normal leading-[1.1] sm:leading-[1.05] tracking-tight">
            &ldquo;Let&apos;s build something worth remembering.&rdquo;
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#D0D0D0]/80 font-light max-w-2xl leading-relaxed">
            Open for Fullstack Development, Quality Assurance, and Front-end Development roles. Available for opportunities to build, test, and deliver impactful digital experiences.
          </p>
        </div>

        {/* Action / Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#F5F3ED]/15">
          {/* Email Channel */}
          <a
            href={mailtoHref}
            className="p-4 sm:p-6 border border-white/10 bg-[#0F0205] hover:border-[#FB8B24] transition-all duration-300 space-y-2 sm:space-y-3 group"
          >
            <div className="flex items-center justify-between text-xs font-editorial-mono text-[#FB8B24]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[11px] sm:text-xs">ELECTRONIC MAIL</span>
              </div>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#F5F3ED] group-hover:text-[#FB8B24] transition-colors truncate">
              {config.email}
            </p>
            <span className="text-[10px] sm:text-[11px] font-editorial-mono text-white/40 block">
              Direct inbox / PGP Available
            </span>
          </a>

          {/* GitHub Channel */}
          <a
            href={config.github.startsWith('http') ? config.github : `https://${config.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-6 border border-white/10 bg-[#0F0205] hover:border-[#FB8B24] transition-all duration-300 space-y-2 sm:space-y-3 group"
          >
            <div className="flex items-center justify-between text-xs font-editorial-mono text-[#FB8B24]">
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[11px] sm:text-xs">SOURCE CODE</span>
              </div>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#F5F3ED] group-hover:text-[#FB8B24] transition-colors truncate">
              {config.github}
            </p>
            <span className="text-[10px] sm:text-[11px] font-editorial-mono text-white/40 block">
              Open source &amp; experiments
            </span>
          </a>

          {/* Resume Channel */}
          <button
            onClick={onResumeClick}
            className="p-4 sm:p-6 border border-white/10 bg-[#0F0205] hover:border-[#FB8B24] transition-all duration-300 space-y-2 sm:space-y-3 text-left group w-full sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center justify-between text-xs font-editorial-mono text-[#FB8B24]">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[11px] sm:text-xs">CURRICULUM VITAE</span>
              </div>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#F5F3ED] group-hover:text-[#FB8B24] transition-colors">
              [ ACCESS DIGITAL RESUME ]
            </p>
            <span className="text-[10px] sm:text-[11px] font-editorial-mono text-white/40 block">
              Printable PDF &amp; Markdown export
            </span>
          </button>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-white/10 text-xs font-editorial-mono text-white/40">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} {config.developerName}. ALL RIGHTS RESERVED.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5E5E5] hover:text-[#FB8B24] transition-colors self-start sm:self-auto py-1"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
