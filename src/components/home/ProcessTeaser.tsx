import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  MessageSquare,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";
import { GapAccent } from "../GapAccent";

interface ProcessTeaserProps {
  settings: SiteSettings;
}

export const ProcessTeaser: React.FC<ProcessTeaserProps> = ({ settings }) => {
  const stages = [
    {
      num: "01",
      title: "Discovery & scope",
      desc: "Map operators, constraints, and success criteria before any build starts.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Solution agreement",
      desc: "Architecture, milestones, and ownership written into a shared plan.",
      icon: MessageSquare,
    },
    {
      num: "03",
      title: "Incremental build",
      desc: "Ship in reviewable stages with demos your stakeholders can validate.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Controlled release",
      desc: "Handover, training, and cutover paced to protect live operations.",
      icon: Rocket,
    },
    {
      num: "05",
      title: "Operate & evolve",
      desc: "Accountable support, iteration backlog, and measured improvements.",
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="process-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          reducedMotion={settings.reducedMotion}
        >
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
              <span className="font-semibold text-[#F8F6FB]/50">04</span>
              <span>HOW WE DELIVER</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
              A delivery path institutions can follow.
            </h2>

            <p className="mt-3 text-[#B9A6D1] text-sm sm:text-base max-w-2xl leading-relaxed">
              Whether you are adopting Kiduart or commissioning a custom system,
              we work in transparent stages — discovery through operate — so
              progress stays visible and ownership stays with you.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:block">
              <GapAccent
                variant="nodes"
                reducedMotion={settings.reducedMotion}
                className="scale-75 origin-bottom-right"
              />
            </div>
            <Link
              to="/process"
              onClick={() => soundEngine.playClick("soft")}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono-accent text-[#E8A9C2] hover:text-[#F8F6FB] transition-colors p-2 shrink-0"
            >
              <span>See full process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden sm:block absolute top-10 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#6B4A87] to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 sm:gap-4 relative">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <ScrollReveal
                  key={stage.num}
                  delay={0.05 * idx}
                  reducedMotion={settings.reducedMotion}
                >
                  <div className="relative h-full p-5 rounded-2xl bg-[#1E1024]/95 border border-[#B9A6D1]/35 hover:border-[#E8A9C2]/55 hover:bg-[#24132B] transition-all flex flex-col justify-between group shadow-[0_10px_26px_rgba(0,0,0,0.25)]">
                    <div className="hidden sm:flex absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#2A1830] border-2 border-[#E8A9C2] z-10" />
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono-accent font-bold text-xs text-[#E8A9C2]">
                          STEP {stage.num}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-[#2A1830] border border-[#B9A6D1]/40 flex items-center justify-center text-[#B9A6D1] group-hover:text-[#E8A9C2] group-hover:scale-110 transition-all">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="font-heading font-semibold text-sm text-[#F8F6FB] leading-snug">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-[11px] text-[#B9A6D1] leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#6B4A87]/30 flex items-center text-[10px] font-mono-accent text-[#B9A6D1]">
                      <span>
                        {idx + 1} of {stages.length}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
