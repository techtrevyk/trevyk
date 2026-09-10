import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GitMerge,
  Search,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Check,
  Server,
  Activity,
  Workflow,
} from "lucide-react";
import { SiteSettings } from "../types";
import { BrandGradientDivider } from "../components/BrandGradientBar";
import { soundEngine } from "../utils/audioEngine";
import { Link } from "react-router-dom";

interface ProcessPageProps {
  settings: SiteSettings;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ settings }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const engineeringSteps = [
    {
      number: "01",
      title: "Listen & scope",
      shortName: "Listen & scope",
      timeline: "Start",
      tagline:
        "Understand the school or business problem before proposing software.",
      details: [
        "Clarify who will use the system day to day",
        "Separate must-haves from nice-to-haves",
        "Decide product (Kiduart) vs custom build vs both",
        "Capture constraints: data, roles, timelines, budget band",
      ],
      output: "Short written scope + recommended path",
      icon: Search,
    },
    {
      number: "02",
      title: "Agree the plan",
      shortName: "Agree the plan",
      timeline: "Next",
      tagline: "A clear plan with stages, owners, and what “done” means.",
      details: [
        "Milestones you can review without jargon",
        "Roles and access model sketched early",
        "Parallel-run plan when replacing spreadsheets or legacy tools",
        "Honest risks and open questions listed up front",
      ],
      output: "Agreed plan & kickoff checklist",
      icon: Layers,
    },
    {
      number: "03",
      title: "Build in stages",
      shortName: "Build in stages",
      timeline: "Delivery",
      tagline: "Ship usable slices  not a big-bang dump at the end.",
      details: [
        "Working increments you can click through",
        "Regular demos with your real workflows in mind",
        "Tests where they protect fees, attendance, or access",
        "Change notes so staff know what moved",
      ],
      output: "Staging environment + review notes",
      icon: Code2,
    },
    {
      number: "04",
      title: "Launch carefully",
      shortName: "Launch carefully",
      timeline: "Go-live",
      tagline: "Go live only when numbers and roles match what you expect.",
      details: [
        "Parallel check for fees / attendance when switching systems",
        "Staff walkthrough before full cutover",
        "Rollback / pause option if something does not reconcile",
        "Privacy basics: roles, export, audit trail",
      ],
      output: "Go-live checklist + support contact",
      icon: Rocket,
    },
    {
      number: "05",
      title: "Support & iterate",
      shortName: "Support & iterate",
      timeline: "Ongoing",
      tagline: "Stay available after launch  improve what daily use reveals.",
      details: [
        "Business-day response for product and project questions",
        "Prioritised fixes from real operator feedback",
        "Optional next modules once the baseline is stable",
        "No invented 15-minute MTTR or 99.99% warranty badges",
      ],
      output: "Support channel + improvement backlog",
      icon: Activity,
    },
  ];

  return (
    <div id="process-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* 1. HEADER HERO                                                            */}
        {/* ========================================================================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <GitMerge className="w-3.5 h-3.5" />
            <span>HOW WE DELIVER // 5 STEPS</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8F6FB] leading-tight">
            Clear stages for product rollouts and custom builds
          </h1>

          <p className="mt-5 text-[#B9A6D1] text-base sm:text-lg leading-relaxed">
            The same practical path whether you are adopting Kiduart or
            commissioning custom software from Trevyk listen, plan, build in
            slices, launch carefully, then support.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. SVG CONNECTED 5-STEP JOURNEY MAP                                       */}
        {/* ========================================================================= */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-[#1E1024] border border-[#6B4A87]/40 shadow-2xl relative overflow-hidden">
          {/* Visual SVG Line-Draw Step Navigator */}
          <div className="hidden lg:block mb-10 pb-8 border-b border-[#6B4A87]/30 relative">
            {/* SVG Connecting Line with Brand Gradient */}
            <svg
              className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 -z-0 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="stepConnectorGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#2A1830" />
                  <stop offset="25%" stopColor="#6B4A87" />
                  <stop offset="75%" stopColor="#B9A6D1" />
                  <stop offset="100%" stopColor="#E8A9C2" />
                </linearGradient>
              </defs>
              <line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="url(#stepConnectorGrad)"
                strokeWidth="3"
                strokeDasharray="4 4"
                opacity="0.6"
              />
            </svg>

            {/* Step Selection Nodes */}
            <div className="grid grid-cols-5 gap-2 relative z-10">
              {engineeringSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => {
                      soundEngine.playClick("soft");
                      setActiveStep(idx);
                    }}
                    className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all ${
                      isActive
                        ? "bg-[#2A1830] border-2 border-[#E8A9C2] shadow-[0_0_20px_rgba(232,169,194,0.2)]"
                        : "bg-[#1E1024] border border-[#6B4A87]/30 hover:border-[#6B4A87]"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono-accent font-bold text-xs mb-2 ${
                        isActive
                          ? "bg-[#E8A9C2] text-[#241428]"
                          : "bg-[#2A1830] text-[#B9A6D1]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-[11px] font-heading font-semibold text-[#F8F6FB] line-clamp-1">
                      {step.shortName}
                    </span>
                    <span className="text-[10px] font-mono-accent text-[#B9A6D1] mt-0.5">
                      {step.timeline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="space-y-8">
            {engineeringSteps.map((step, index) => {
              const isActive = activeStep === index;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border transition-all ${
                    isActive
                      ? "bg-[#201026] border-[#E8A9C2]/60 p-6 sm:p-8 shadow-xl"
                      : "bg-[#1E1024]/40 border-[#6B4A87]/20 p-5 cursor-pointer hover:border-[#6B4A87]/60"
                  }`}
                  onClick={() => {
                    if (!isActive) {
                      soundEngine.playClick("soft");
                      setActiveStep(index);
                    }
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono-accent font-bold text-lg ${
                          isActive
                            ? "bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#F8F6FB] shadow-md"
                            : "bg-[#2A1830] text-[#B9A6D1] border border-[#6B4A87]/40"
                        }`}
                      >
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono-accent text-[#6B4A87]">
                            STAGE {step.number}
                          </span>
                          <span className="text-xs font-mono-accent text-[#B9A6D1]">
                            ({step.timeline})
                          </span>
                        </div>
                        <h2 className="font-heading font-bold text-lg sm:text-2xl text-[#F8F6FB] mt-0.5">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <span className="text-xs font-mono-accent px-3 py-1 rounded-full bg-[#2A1830] text-[#E8A9C2] border border-[#6B4A87]/40 self-start sm:self-center shrink-0">
                      {step.timeline}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#B9A6D1] leading-relaxed">
                    {step.tagline}
                  </p>

                  {/* Expanded Step Deep-Dive Details */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-[#6B4A87]/30 space-y-6"
                    >
                      <div>
                        <div className="text-xs font-mono-accent text-[#6B4A87] uppercase mb-3">
                          CORE ENGINEERING ACTIVITIES & DELIVERABLES:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {step.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#1E1024]/80 border border-[#6B4A87]/30 text-xs sm:text-sm text-[#B9A6D1]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#E8A9C2] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#1E1024] border border-[#6B4A87]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center space-x-2">
                          <FileCode className="w-4 h-4 text-[#E8A9C2]" />
                          <span className="text-xs font-mono-accent text-[#B9A6D1] uppercase">
                            FORMAL STAGE ARTIFACT:
                          </span>
                        </div>
                        <span className="text-xs font-mono-accent text-emerald-400 font-medium">
                          {step.output}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 3. ENGINEERING RIGOR & ZERO-COMPROMISE STANDARDS                          */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
              Habits we keep on every engagement
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#B9A6D1]">
              Practical quality not theatre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#1E1024] border border-[#6B4A87]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2A1830] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F8F6FB]">
                Review before release
              </h3>
              <p className="text-xs text-[#B9A6D1] leading-relaxed">
                Changes that touch fees, attendance, or access get an extra
                check. We do not ship “trust us” updates into live school data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1024] border border-[#6B4A87]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2A1830] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F8F6FB]">
                Parallel when it matters
              </h3>
              <p className="text-xs text-[#B9A6D1] leading-relaxed">
                For school cutovers we prefer running old and new methods side
                by side until numbers agree the same idea Kiduart publishes
                publicly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1024] border border-[#6B4A87]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2A1830] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#F8F6FB]">
                Written handoff
              </h3>
              <p className="text-xs text-[#B9A6D1] leading-relaxed">
                You leave with docs, access, and a named contact not a black
                box. Custom work includes source ownership.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#2A1830] via-white to-[#2A1830] border border-[#6B4A87]/40 text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
            Ready to start with a clear scope?
          </h2>
          <p className="text-xs sm:text-sm text-[#B9A6D1] max-w-xl mx-auto leading-relaxed">
            Book a Kiduart demo or tell us about a custom build. We will reply
            with next steps not a jargon deck.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick("hero")}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg"
            >
              <span>Contact Trevyk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
