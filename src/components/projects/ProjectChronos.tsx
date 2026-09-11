import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Play,
  RotateCcw,
  Check,
  Building2,
  Users,
} from 'lucide-react';

interface ProjectChronosProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

type SystemHighlightKey = 'timemanagement' | 'payroll' | 'calendar' | 'dole';

export const ProjectChronos: React.FC<ProjectChronosProps> = ({ project, onOpenDetails }) => {
  const [activeHighlight, setActiveHighlight] = useState<SystemHighlightKey>('timemanagement');
  const [isRunningQaTests, setIsRunningQaTests] = useState<boolean>(false);
  const [testRunCount, setTestRunCount] = useState<number>(42);
  const [lastTestedTime, setLastTestedTime] = useState<string>('Just now');

  const handleRunQaTests = () => {
    setIsRunningQaTests(true);
    setTimeout(() => {
      setTestRunCount((prev) => prev + 1);
      setLastTestedTime('Just now');
      setIsRunningQaTests(false);
    }, 600);
  };

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
        <div className="lg:col-span-5 space-y-6">
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
              <span className="text-[10px]">CLICK TO AUDIT IN CONSOLE</span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-editorial-mono text-xs">
              <button
                onClick={() => setActiveHighlight('timemanagement')}
                className={`p-3 border text-left transition-all flex flex-col justify-between h-20 ${
                  activeHighlight === 'timemanagement'
                    ? 'border-[#FB8B24] bg-[#FB8B24]/10 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Clock className="w-4 h-4 text-[#FB8B24]" />
                  <span className="text-[10px] text-white/40">01</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">TimeManagement</span>
              </button>

              <button
                onClick={() => setActiveHighlight('payroll')}
                className={`p-3 border text-left transition-all flex flex-col justify-between h-20 ${
                  activeHighlight === 'payroll'
                    ? 'border-[#FB8B24] bg-[#FB8B24]/10 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] text-white/40">02</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">Payroll Sytem</span>
              </button>

              <button
                onClick={() => setActiveHighlight('calendar')}
                className={`p-3 border text-left transition-all flex flex-col justify-between h-20 ${
                  activeHighlight === 'calendar'
                    ? 'border-[#FB8B24] bg-[#FB8B24]/10 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span className="text-[10px] text-white/40">03</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">Calendar Tracker</span>
              </button>

              <button
                onClick={() => setActiveHighlight('dole')}
                className={`p-3 border text-left transition-all flex flex-col justify-between h-20 ${
                  activeHighlight === 'dole'
                    ? 'border-[#FB8B24] bg-[#FB8B24]/10 text-[#F5F3ED]'
                    : 'border-white/10 bg-[#0F0205] text-white/70 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span className="text-[10px] text-white/40">04</span>
                </div>
                <span className="font-semibold text-xs tracking-tight">DOLE</span>
              </button>
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
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#F5F3ED] text-[#11151A] text-xs font-editorial-mono uppercase tracking-[0.2em] font-semibold hover:bg-[#FB8B24] transition-colors"
            >
              <span>VIEW DEEP DIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-editorial-mono text-white/50">{project.status}</span>
          </div>
        </div>

        {/* Right Column: Interactive Chronos QA Console & MS Teams Simulator */}
        <div className="lg:col-span-7 space-y-3">
          <div className="border border-[#F5F3ED]/20 bg-[#0F0205] overflow-hidden shadow-2xl">
            {/* Console Window Header */}
            <div className="bg-[#171C23] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#F5F3ED]/15 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-editorial-mono text-white/70">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold text-[#F5F3ED]">CHRONOS QA CONSOLE</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-white/50 hidden sm:inline">MGENS INTERNAL // MS TEAMS</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunQaTests}
                  disabled={isRunningQaTests}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 hover:bg-[#FB8B24] hover:text-[#11151A] text-[10px] text-[#F5F3ED] font-editorial-mono uppercase transition-colors"
                  title="Trigger automated regression testing"
                >
                  {isRunningQaTests ? (
                    <>
                      <RotateCcw className="w-3 h-3 animate-spin text-[#FB8B24]" />
                      <span>TESTING...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-emerald-400" />
                      <span>RUN QA TEST</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Internal Tab Navigation matching the 4 System Highlights */}
            <div className="bg-[#11151A] border-b border-white/10 px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none whitespace-nowrap text-xs font-editorial-mono">
              <span className="text-white/40 text-[10px] uppercase tracking-wider shrink-0">MODULE:</span>
              <button
                onClick={() => setActiveHighlight('timemanagement')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors shrink-0 ${
                  activeHighlight === 'timemanagement'
                    ? 'border-b-2 border-[#FB8B24] text-[#FB8B24] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                TimeManagement
              </button>
              <button
                onClick={() => setActiveHighlight('payroll')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors shrink-0 ${
                  activeHighlight === 'payroll'
                    ? 'border-b-2 border-emerald-400 text-emerald-400 font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Payroll Sytem
              </button>
              <button
                onClick={() => setActiveHighlight('calendar')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors shrink-0 ${
                  activeHighlight === 'calendar'
                    ? 'border-b-2 border-sky-400 text-sky-400 font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Calendar Tracker
              </button>
              <button
                onClick={() => setActiveHighlight('dole')}
                className={`px-2.5 py-1 uppercase tracking-wider text-[11px] transition-colors shrink-0 ${
                  activeHighlight === 'dole'
                    ? 'border-b-2 border-amber-300 text-amber-300 font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                DOLE
              </button>
            </div>

            {/* Interactive Module Viewport */}
            <div className="p-4 sm:p-5 md:p-6 min-h-[310px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeHighlight === 'timemanagement' && (
                  <motion.div
                    key="timemanagement"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#FB8B24]">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span className="uppercase tracking-widest font-semibold text-[11px] sm:text-xs">
                          TIMEMANAGEMENT // SHIFT &amp; TIMECARD AUDIT
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-700/40 text-[10px] font-editorial-mono self-start sm:self-auto">
                        VERIFIED: 100% ACCURACY
                      </span>
                    </div>

                    <p className="text-xs text-[#D0D0D0]/80">
                      QA audit verified automated punch-in biometric logs, shift calculations, grace
                      periods, tardiness, and overtime requests through MS Teams integration.
                    </p>

                    {/* Timecard Log Audit Table with Responsive Horizontal Scroll on Mobile */}
                    <div className="overflow-x-auto -mx-1 sm:mx-0">
                      <div className="min-w-[420px] sm:min-w-0 border border-white/10 bg-[#11151A] text-xs font-editorial-mono divide-y divide-white/10">
                        <div className="grid grid-cols-4 p-2.5 text-white/50 text-[10px] uppercase tracking-wider">
                          <span>Event</span>
                          <span>Logged Time</span>
                          <span>Shift Schedule</span>
                          <span className="text-right">QA Status</span>
                        </div>
                        <div className="grid grid-cols-4 p-2.5 items-center">
                          <span className="text-[#F5F3ED] font-medium">Time In</span>
                          <span className="text-emerald-400">08:01:14 AM</span>
                          <span className="text-white/60">08:00 AM (Within grace)</span>
                          <span className="text-right text-emerald-400 flex items-center justify-end gap-1">
                            <Check className="w-3.5 h-3.5" /> PASS
                          </span>
                        </div>
                        <div className="grid grid-cols-4 p-2.5 items-center">
                          <span className="text-[#F5F3ED] font-medium">Lunch Break</span>
                          <span className="text-white/70">12:00 — 13:00</span>
                          <span className="text-white/60">60 Min Mandatory</span>
                          <span className="text-right text-emerald-400 flex items-center justify-end gap-1">
                            <Check className="w-3.5 h-3.5" /> PASS
                          </span>
                        </div>
                        <div className="grid grid-cols-4 p-2.5 items-center">
                          <span className="text-[#F5F3ED] font-medium">Time Out</span>
                          <span className="text-[#FB8B24]">06:30:20 PM</span>
                          <span className="text-white/60">17:00 + 1.5h OT</span>
                          <span className="text-right text-emerald-400 flex items-center justify-end gap-1">
                            <Check className="w-3.5 h-3.5" /> OT APPROVED
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-xs font-editorial-mono p-2 bg-white/5 border border-white/10">
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-white/40 block truncate">REGULAR HOURS</span>
                        <span className="text-[#F5F3ED] font-semibold text-xs sm:text-sm">8.00 hrs</span>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-white/40 block truncate">TARDINESS</span>
                        <span className="text-emerald-400 font-semibold text-xs sm:text-sm">0.00 min</span>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-white/40 block truncate">OVERTIME (1.5x)</span>
                        <span className="text-[#FB8B24] font-semibold text-xs sm:text-sm">1.50 hrs</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeHighlight === 'payroll' && (
                  <motion.div
                    key="payroll"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-emerald-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="uppercase tracking-widest font-semibold">
                          PAYROLL SYTEM // COMPUTATION &amp; DEDUCTION AUDIT
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-700/40 text-[10px] font-editorial-mono">
                        ZERO DISCREPANCY
                      </span>
                    </div>

                    <p className="text-xs text-[#D0D0D0]/80">
                      QA verified automated gross-to-net calculations including basic salary, overtime
                      rates, and precise statutory withholdings.
                    </p>

                    <div className="border border-white/10 bg-[#11151A] p-3 text-xs font-editorial-mono space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Basic Semi-Monthly Pay:</span>
                        <span className="text-[#F5F3ED] font-semibold">₱25,000.00</span>
                      </div>
                      <div className="flex justify-between items-center text-[#FB8B24]">
                        <span>Approved Overtime Premium (125%):</span>
                        <span>+₱2,343.75</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50 text-[11px]">
                        <span>SSS Contribution (Statutory):</span>
                        <span>-₱1,125.00</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50 text-[11px]">
                        <span>PhilHealth Contribution:</span>
                        <span>-₱625.00</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50 text-[11px]">
                        <span>Pag-IBIG Fund:</span>
                        <span>-₱200.00</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50 text-[11px]">
                        <span>Withholding Tax (TRAIN Law Table):</span>
                        <span>-₱1,420.50</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/10 text-emerald-400 font-semibold text-sm">
                        <span>NET TAKE-HOME AUDIT:</span>
                        <span>₱23,973.25</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-editorial-mono text-white/50 px-1">
                      <span>AUTOMATED PAYSLIP GENERATION: ACTIVE</span>
                      <span className="text-emerald-400">FORMULA CHECK PASS (0.00 DIFFERENCE)</span>
                    </div>
                  </motion.div>
                )}

                {activeHighlight === 'calendar' && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-sky-400">
                        <Calendar className="w-4 h-4" />
                        <span className="uppercase tracking-widest font-semibold">
                          CALENDAR TRACKER // ROSTER &amp; LEAVE SYNCHRONIZER
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-sky-950/60 text-sky-400 border border-sky-700/40 text-[10px] font-editorial-mono">
                        SYNCED WITH MS TEAMS
                      </span>
                    </div>

                    <p className="text-xs text-[#D0D0D0]/80">
                      QA verified synchronization between employee attendance calendar, approved leave
                      requests, public holidays, and MGen internal departmental shifts.
                    </p>

                    {/* Visual 7-Day Shift Grid with horizontal overflow safety */}
                    <div className="overflow-x-auto -mx-1 sm:mx-0 pb-1">
                      <div className="min-w-[320px] sm:min-w-0 grid grid-cols-7 gap-1 sm:gap-1.5 text-center font-editorial-mono text-[11px]">
                        {[
                          { day: 'MON', status: '8.0h', type: 'work' },
                          { day: 'TUE', status: '8.0h', type: 'work' },
                          { day: 'WED', status: 'VL (Paid)', type: 'leave' },
                          { day: 'THU', status: 'HOLIDAY', type: 'holiday' },
                          { day: 'FRI', status: '8.0h', type: 'work' },
                          { day: 'SAT', status: 'REST', type: 'rest' },
                          { day: 'SUN', status: 'REST', type: 'rest' },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-1.5 sm:p-2.5 border ${
                              item.type === 'work'
                                ? 'border-emerald-700/30 bg-emerald-950/20 text-[#F5F3ED]'
                                : item.type === 'leave'
                                  ? 'border-sky-700/40 bg-sky-950/30 text-sky-300'
                                  : item.type === 'holiday'
                                    ? 'border-[#FB8B24]/40 bg-[#FB8B24]/15 text-[#FB8B24]'
                                    : 'border-white/10 bg-white/5 text-white/40'
                            }`}
                          >
                            <span className="block text-[9px] sm:text-[10px] opacity-60">{item.day}</span>
                            <span className="font-semibold text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 block truncate">{item.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2 sm:p-2.5 bg-white/5 border border-white/10 text-[11px] sm:text-xs font-editorial-mono flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-white/70">
                      <span>LEAVE BALANCE AUDIT: 12.5 VL / 10.0 SL</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> RECONCILED
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeHighlight === 'dole' && (
                  <motion.div
                    key="dole"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2 text-xs font-editorial-mono text-amber-300">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span className="uppercase tracking-widest font-semibold text-[11px] sm:text-xs">
                          DOLE // STATUTORY LABOR CODE COMPLIANCE AUDIT
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-amber-950/60 text-amber-300 border border-amber-700/40 text-[10px] font-editorial-mono self-start sm:self-auto">
                        DOLE CERTIFIED
                      </span>
                    </div>

                    <p className="text-xs text-[#D0D0D0]/80">
                      QA test suite rigorously validates adherence to Philippine Department of Labor
                      and Employment (DOLE) statutory rules for overtime, holidays, and differentials.
                    </p>

                    {/* DOLE Checklist */}
                    <div className="space-y-1.5 font-editorial-mono text-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 gap-1 bg-[#11151A] border border-white/10">
                        <span className="text-[#F5F3ED] text-[11px] sm:text-xs">Regular Overtime Rate (125% Base):</span>
                        <span className="text-emerald-400 flex items-center gap-1 text-[11px] sm:text-xs">
                          <Check className="w-3.5 h-3.5" /> AUDITED &amp; VERIFIED
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 gap-1 bg-[#11151A] border border-white/10">
                        <span className="text-[#F5F3ED] text-[11px] sm:text-xs">Night Shift Differential (10% 10PM-6AM):</span>
                        <span className="text-emerald-400 flex items-center gap-1 text-[11px] sm:text-xs">
                          <Check className="w-3.5 h-3.5" /> AUDITED &amp; VERIFIED
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 gap-1 bg-[#11151A] border border-white/10">
                        <span className="text-[#F5F3ED] text-[11px] sm:text-xs">Regular Holiday Premium (200% Pay):</span>
                        <span className="text-emerald-400 flex items-center gap-1 text-[11px] sm:text-xs">
                          <Check className="w-3.5 h-3.5" /> AUDITED &amp; VERIFIED
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 gap-1 bg-[#11151A] border border-white/10">
                        <span className="text-[#F5F3ED] text-[11px] sm:text-xs">Special Non-Working Day (130% Pay):</span>
                        <span className="text-emerald-400 flex items-center gap-1 text-[11px] sm:text-xs">
                          <Check className="w-3.5 h-3.5" /> AUDITED &amp; VERIFIED
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Console Status Bar */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[10px] font-editorial-mono text-white/50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">
                    QA TEST SUITE: {testRunCount}/{testRunCount} PASSED ({lastTestedTime})
                  </span>
                </div>
                <span className="text-[#FB8B24] uppercase">REGRESSION RATE: 0.00%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
