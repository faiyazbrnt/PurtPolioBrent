import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import {
  ArrowUpRight,
  FileText,
  CreditCard,
  RotateCcw,
  CheckCircle2,
  Check,
  Building2,
  PackageCheck,
  ShieldCheck,
  Layers,
  Send,
  Eye,
  X,
  ClipboardCheck,
} from 'lucide-react';

interface ProjectOneOpsProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

type ModalHighlightKey = 'rfq' | 'brf' | 'rma';

export const ProjectOneOps: React.FC<ProjectOneOpsProps> = ({ project, onOpenDetails }) => {
  const [activeHighlight, setActiveHighlight] = useState<ModalHighlightKey>('rfq');
  const [isSimulatingAction, setIsSimulatingAction] = useState<boolean>(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);
  const [isInteractiveModalOpen, setIsInteractiveModalOpen] = useState<boolean>(false);

  const handleSimulateModalAction = (actionName: string) => {
    setIsSimulatingAction(true);
    setActionSuccessMessage(null);
    setTimeout(() => {
      setIsSimulatingAction(false);
      setActionSuccessMessage(`${actionName} completed successfully`);
      setTimeout(() => setActionSuccessMessage(null), 3000);
    }, 600);
  };

  return (
    <div
      id="project-02-container"
      className="border border-[#F5F3ED]/15 bg-[#11151A]/70 p-6 md:p-10 transition-colors duration-300 relative group"
    >
      {/* Top micro metadata header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F5F3ED]/10 text-xs font-editorial-mono">
        <div className="flex items-center gap-3">
          <span className="text-xl font-editorial-serif text-[#FB8B24]">{project.number}</span>
          <span className="text-[#FB8B24] uppercase tracking-widest font-semibold">
            [ONEOPS SYSTEM]
          </span>
          <span className="text-white/30 hidden sm:inline">/</span>
          <span className="text-[#E5E5E5] hidden sm:inline">{project.category}</span>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <span className="text-[#FB8B24] font-medium">ROLE: {project.role}</span>
          <span className="hidden md:inline">•</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE IN TASS (MICROGENESIS)
          </span>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
        {/* Left Column: Title, Description, Role, System Highlights (RFQ, BRF, RMA), Badges */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#5F0F40]/40 border border-[#F5F3ED]/15 text-[11px] font-editorial-mono text-[#FB8B24] uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>MICROGENESIS BUSINESS SYSTEMS // TASS DEPT</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial-serif text-[#F5F3ED] font-normal tracking-tight group-hover:text-[#FB8B24] transition-colors leading-[1.08]">
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-[#D0D0D0] leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          {/* System Highlights Selector Cards: RFQ, BRF, RMA */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs font-editorial-mono text-white/50">
              <span className="uppercase tracking-[0.2em] text-[#FB8B24]">
                SYSTEM HIGHLIGHTS:
              </span>
              <span className="text-[10px]">CLICK TO PREVIEW MODAL</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 font-editorial-mono text-xs">
              <button
                onClick={() => setActiveHighlight('rfq')}
                className={`p-2.5 sm:p-3 border text-left transition-all flex flex-col justify-between h-20 sm:h-24 ${
                  activeHighlight === 'rfq'
                    ? 'border-[#FB8B24] bg-[#FB8B24]/10 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FB8B24]" />
                  <span className="text-[9px] sm:text-[10px] text-white/40">01</span>
                </div>
                <div>
                  <span className="font-semibold text-xs sm:text-sm tracking-tight block text-[#F5F3ED]">RFQ</span>
                  <span className="text-[9px] sm:text-[10px] text-white/50 block truncate">Quotation Modal</span>
                </div>
              </button>

              <button
                onClick={() => setActiveHighlight('brf')}
                className={`p-2.5 sm:p-3 border text-left transition-all flex flex-col justify-between h-20 sm:h-24 ${
                  activeHighlight === 'brf'
                    ? 'border-emerald-400 bg-emerald-950/20 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  <span className="text-[9px] sm:text-[10px] text-white/40">02</span>
                </div>
                <div>
                  <span className="font-semibold text-xs sm:text-sm tracking-tight block text-[#F5F3ED]">BRF</span>
                  <span className="text-[9px] sm:text-[10px] text-white/50 block truncate">Billing Modal</span>
                </div>
              </button>

              <button
                onClick={() => setActiveHighlight('rma')}
                className={`p-2.5 sm:p-3 border text-left transition-all flex flex-col justify-between h-20 sm:h-24 ${
                  activeHighlight === 'rma'
                    ? 'border-sky-400 bg-sky-950/20 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <PackageCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                  <span className="text-[9px] sm:text-[10px] text-white/40">03</span>
                </div>
                <div>
                  <span className="font-semibold text-xs sm:text-sm tracking-tight block text-[#F5F3ED]">RMA</span>
                  <span className="text-[9px] sm:text-[10px] text-white/50 block truncate">Return Modal</span>
                </div>
              </button>
            </div>
          </div>

          {/* Department & Operational Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-[#F5F3ED]/10 font-editorial-mono">
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 truncate">
                Department
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#FB8B24]">TASS MGen</span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 truncate">
                Core Modals
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-400 truncate block">RFQ • BRF • RMA</span>
            </div>
            <div>
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 truncate">
                Architecture
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#F5F3ED]">Fullstack</span>
            </div>
          </div>

          {/* Action triggers */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#F5F3ED] text-[#11151A] text-xs font-editorial-mono uppercase tracking-[0.2em] font-semibold hover:bg-[#FB8B24] transition-colors"
            >
              <span>VIEW DEEP DIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsInteractiveModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 border border-[#F5F3ED]/20 text-[#F5F3ED] text-xs font-editorial-mono uppercase tracking-wider hover:border-[#FB8B24] hover:text-[#FB8B24] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>TEST IN-POPUP MODAL</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive OneOps TASS Modal Console & Workbench */}
        <div className="lg:col-span-7 space-y-3">
          <div className="border border-[#F5F3ED]/20 bg-[#0F0205] overflow-hidden shadow-2xl">
            {/* Console Window Header */}
            <div className="bg-[#171C23] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#F5F3ED]/15 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-editorial-mono text-white/70">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold text-[#F5F3ED]">ONEOPS MODAL CONSOLE</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-white/50 hidden sm:inline">TASS DEPARTMENT // V2.4</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handleSimulateModalAction(
                      activeHighlight === 'rfq'
                        ? 'RFQ Margin & Quote Calculation'
                        : activeHighlight === 'brf'
                          ? 'BRF Finance Billing Dispatch'
                          : 'RMA Replacement Waybill'
                    )
                  }
                  disabled={isSimulatingAction}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-[#FB8B24] hover:text-[#11151A] text-[10px] text-[#F5F3ED] font-editorial-mono uppercase transition-colors"
                  title="Trigger automated modal action"
                >
                  {isSimulatingAction ? (
                    <>
                      <RotateCcw className="w-3 h-3 animate-spin text-[#FB8B24]" />
                      <span>EXECUTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 text-emerald-400" />
                      <span>RUN WORKFLOW</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Internal Tab Navigation matching RFQ, BRF, RMA Modals */}
            <div className="bg-[#11151A] border-b border-white/10 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none whitespace-nowrap text-xs font-editorial-mono">
              <span className="text-white/40 text-[10px] uppercase tracking-wider shrink-0">ACTIVE MODAL:</span>
              <button
                onClick={() => setActiveHighlight('rfq')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors flex items-center gap-1.5 shrink-0 ${
                  activeHighlight === 'rfq'
                    ? 'border-b-2 border-[#FB8B24] text-[#FB8B24] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>RFQ Modal</span>
              </button>
              <button
                onClick={() => setActiveHighlight('brf')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors flex items-center gap-1.5 shrink-0 ${
                  activeHighlight === 'brf'
                    ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <CreditCard className="w-3 h-3" />
                <span>BRF Modal</span>
              </button>
              <button
                onClick={() => setActiveHighlight('rma')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors flex items-center gap-1.5 shrink-0 ${
                  activeHighlight === 'rma'
                    ? 'border-b-2 border-sky-400 text-sky-400 font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <PackageCheck className="w-3 h-3" />
                <span>RMA Modal</span>
              </button>
            </div>

            {/* Simulated Live Modal Content */}
            <div className="p-4 sm:p-5 md:p-6 min-h-[330px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeHighlight === 'rfq' && (
                  <motion.div
                    key="rfq"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24]">
                        <FileText className="w-4 h-4 shrink-0" />
                        <span className="uppercase tracking-widest font-semibold text-[11px] sm:text-xs">
                          RFQ MODAL // REQUEST FOR QUOTATION #RFQ-2025-0842
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-amber-950/60 text-amber-300 border border-amber-700/40 text-[10px] font-editorial-mono self-start sm:self-auto">
                        APPROVED BY TASS LEAD
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-[11px] font-editorial-mono text-white/70 p-2 sm:p-2.5 bg-white/5 border border-white/10">
                      <div>
                        <span className="text-[9px] text-white/40 block">REQUESTER</span>
                        <span className="text-[#F5F3ED] truncate block">TASS Network Tier-3</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-white/40 block">SUPPLIER</span>
                        <span className="text-[#F5F3ED] truncate block">Cisco Philippines</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-white/40 block">PROJECT REF</span>
                        <span className="text-[#FB8B24] truncate block">BDO DC Expansion</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-white/40 block">DELIVERY TARGET</span>
                        <span className="text-emerald-400 truncate block">7-10 Work Days</span>
                      </div>
                    </div>

                    {/* RFQ Line Items Table with horizontal overflow safety on small screens */}
                    <div className="overflow-x-auto -mx-1 sm:mx-0">
                      <div className="min-w-[420px] sm:min-w-0 border border-white/10 bg-[#11151A] text-xs font-editorial-mono divide-y divide-white/10">
                        <div className="grid grid-cols-12 p-2 text-white/40 text-[10px] uppercase tracking-wider">
                          <span className="col-span-6">Hardware Item / Description</span>
                          <span className="col-span-2 text-center">Qty</span>
                          <span className="col-span-2 text-right">Unit (₱)</span>
                          <span className="col-span-2 text-right">Subtotal</span>
                        </div>
                        <div className="grid grid-cols-12 p-2 items-center text-[11px]">
                          <span className="col-span-6 text-[#F5F3ED] font-medium truncate">
                            Catalyst 9300 48-Port PoE+ Switch
                          </span>
                          <span className="col-span-2 text-center text-white/70">2</span>
                          <span className="col-span-2 text-right text-white/70">165,000</span>
                          <span className="col-span-2 text-right text-[#FB8B24]">₱330,000</span>
                        </div>
                        <div className="grid grid-cols-12 p-2 items-center text-[11px]">
                          <span className="col-span-6 text-[#F5F3ED] font-medium truncate">
                            SFP-10G-SR 10G Optical Transceiver
                          </span>
                          <span className="col-span-2 text-center text-white/70">4</span>
                          <span className="col-span-2 text-right text-white/70">12,500</span>
                          <span className="col-span-2 text-right text-[#FB8B24]">₱50,000</span>
                        </div>
                        <div className="grid grid-cols-12 p-2 items-center text-[11px]">
                          <span className="col-span-6 text-[#F5F3ED] font-medium truncate">
                            Cat6A Shielded Patch Panels 24P
                          </span>
                          <span className="col-span-2 text-center text-white/70">6</span>
                          <span className="col-span-2 text-right text-white/70">4,200</span>
                          <span className="col-span-2 text-right text-[#FB8B24]">₱25,200</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-xs font-editorial-mono p-2 bg-white/5 border border-white/10">
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-white/40 block truncate">NET HARDWARE COST</span>
                        <span className="text-[#F5F3ED] font-semibold text-xs sm:text-sm">₱405,200.00</span>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-white/40 block truncate">TASS MARGIN</span>
                        <span className="text-emerald-400 font-semibold text-xs sm:text-sm">+18.5% (₱74,962)</span>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-white/40 block truncate">FINAL QUOTE TOTAL</span>
                        <span className="text-[#FB8B24] font-semibold text-xs sm:text-sm">₱480,162.00</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeHighlight === 'brf' && (
                  <motion.div
                    key="brf"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-emerald-400">
                        <CreditCard className="w-4 h-4 shrink-0" />
                        <span className="uppercase tracking-widest font-semibold text-[11px] sm:text-xs">
                          BRF MODAL // BILLING REQUEST FORM #BRF-2025-1104
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-700/40 text-[10px] font-editorial-mono self-start sm:self-auto">
                        VERIFIED BY TASS HEAD
                      </span>
                    </div>

                    <div className="border border-white/10 bg-[#11151A] p-2.5 sm:p-3 text-xs font-editorial-mono space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-2 pb-2 border-b border-white/10">
                        <span className="text-white/60 text-[11px]">Target Client Account:</span>
                        <span className="text-[#F5F3ED] font-semibold text-right sm:text-left">
                          UnionBank Corporate Center Ortigas
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-2 text-white/70">
                        <span className="text-[11px]">Contract Scope:</span>
                        <span className="text-white/90 text-right sm:text-left">
                          Annual SLA Network Maintenance &amp; 24/7 Incident Support
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-2 text-white/70">
                        <span className="text-[11px]">Billing Milestone:</span>
                        <span className="text-[#FB8B24] font-medium text-right sm:text-left">
                          Q3 Preventive Audit &amp; Core Firmware Upgrades
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-2 text-white/50 text-[11px]">
                        <span>Engineering Sign-off:</span>
                        <span className="text-emerald-400 flex items-center gap-1 justify-end sm:justify-start">
                          <Check className="w-3 h-3 shrink-0" /> Engr. M. Dela Cruz (Lead TASS Architect)
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 sm:gap-2 text-white/50 text-[11px]">
                        <span>SLA Performance Met:</span>
                        <span className="text-emerald-400 text-right sm:text-left">99.98% (Exceeds SLA threshold)</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pt-2 border-t border-white/10 text-emerald-400 font-semibold text-xs sm:text-sm">
                        <span>BILLABLE AMOUNT FOR FINANCE:</span>
                        <span className="text-right sm:text-left">₱245,000.00 (VAT Inc.)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-editorial-mono text-white/50 px-1">
                      <span>FINANCE RECONCILIATION: ACTIVE</span>
                      <span className="text-emerald-400">READY FOR INVOICE GENERATION</span>
                    </div>
                  </motion.div>
                )}

                {activeHighlight === 'rma' && (
                  <motion.div
                    key="rma"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-sky-400">
                        <PackageCheck className="w-4 h-4 shrink-0" />
                        <span className="uppercase tracking-widest font-semibold text-[11px] sm:text-xs">
                          RMA MODAL // RETURN MERCHANDISE AUTHORIZATION #RMA-2025-0288
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-sky-950/60 text-sky-400 border border-sky-700/40 text-[10px] font-editorial-mono self-start sm:self-auto">
                        ADVANCE REPLACEMENT
                      </span>
                    </div>

                    <div className="space-y-1.5 font-editorial-mono text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 p-2 bg-[#11151A] border border-white/10">
                        <span className="text-white/60 text-[11px]">Defective Hardware:</span>
                        <span className="text-[#F5F3ED] font-semibold text-right sm:text-left">
                          FortiGate 100F Next-Gen Security Gateway
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 p-2 bg-[#11151A] border border-white/10">
                        <span className="text-white/60 text-[11px]">Serial Number (S/N):</span>
                        <span className="text-sky-300 font-mono text-right sm:text-left">FG100FTK21004819</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 p-2 bg-[#11151A] border border-white/10">
                        <span className="text-white/60 text-[11px]">Defect Diagnosis:</span>
                        <span className="text-[#FB8B24] text-right sm:text-left">PSU-1 Thermal Fluctuation (No POST)</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 p-2 bg-[#11151A] border border-white/10">
                        <span className="text-white/60 text-[11px]">Warranty Status:</span>
                        <span className="text-emerald-400 flex items-center gap-1 justify-end sm:justify-start">
                          <Check className="w-3.5 h-3.5 shrink-0" /> MGen Platinum Care Active (Valid to 2027)
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2 p-2 bg-[#11151A] border border-white/10">
                        <span className="text-white/60 text-[11px]">Vendor Ticket &amp; Tracking:</span>
                        <span className="text-emerald-400 text-right sm:text-left">Fortinet TAC #9482103 (Depot In-Transit)</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Console Status Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-editorial-mono text-white/50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    {actionSuccessMessage ? (
                      <span className="text-emerald-400 font-semibold">{actionSuccessMessage}</span>
                    ) : (
                      <span>TASS MODALS READY: RFQ • BRF • RMA VALIDATION ACTIVE</span>
                    )}
                  </span>
                </div>
                <span className="text-[#FB8B24] uppercase">DEPARTMENT: TASS MGEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulated Contextual In-Screen Modal Popup */}
      <AnimatePresence>
        {isInteractiveModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsInteractiveModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#11151A] border border-[#FB8B24]/40 shadow-2xl p-4 sm:p-6 space-y-4 sm:space-y-5 text-[#D0D0D0] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FB8B24] shrink-0" />
                  <h4 className="text-sm sm:text-base font-editorial-serif text-[#F5F3ED] font-semibold">
                    OneOps TASS Modal Engine
                  </h4>
                  <span className="text-[10px] sm:text-xs font-editorial-mono text-[#FB8B24]">
                    [{activeHighlight.toUpperCase()}]
                  </span>
                </div>
                <button
                  onClick={() => setIsInteractiveModalOpen(false)}
                  className="p-1 text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs font-editorial-mono space-y-3">
                <p className="text-white/80">
                  This demonstrates the real modal architecture implemented in OneOps for the
                  Microgenesis TASS Department. Users can trigger and review RFQs, BRFs, and RMAs
                  with zero friction:
                </p>

                <div className="p-3 bg-white/5 border border-white/10 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <span className="text-white/50">Current Modal:</span>
                    <span className="text-[#FB8B24] font-semibold uppercase">
                      {activeHighlight === 'rfq'
                        ? 'RFQ (Request for Quotation)'
                        : activeHighlight === 'brf'
                          ? 'BRF (Billing Request Form)'
                          : 'RMA (Return Merchandise Authorization)'}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <span className="text-white/50">Target Userbase:</span>
                    <span className="text-white/90">Microgenesis TASS Department Engineers</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                    <span className="text-white/50">Validation Status:</span>
                    <span className="text-emerald-400">All Fields Enforced (No Errors)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs font-editorial-mono">
                <div className="flex gap-2">
                  {(['rfq', 'brf', 'rma'] as ModalHighlightKey[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveHighlight(type)}
                      className={`px-3 py-1.5 border text-[11px] uppercase ${
                        activeHighlight === type
                          ? 'border-[#FB8B24] bg-[#FB8B24]/20 text-[#F5F3ED]'
                          : 'border-white/10 text-white/50 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    handleSimulateModalAction(`${activeHighlight.toUpperCase()} Dispatch`);
                    setIsInteractiveModalOpen(false);
                  }}
                  className="px-4 py-2 bg-[#FB8B24] text-[#11151A] font-semibold uppercase tracking-wider hover:bg-[#F5F3ED] transition-colors text-center"
                >
                  Confirm &amp; Dispatch
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
