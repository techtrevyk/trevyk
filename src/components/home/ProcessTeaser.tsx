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

interface ProcessTeaserProps {
  settings: SiteSettings;
}

export const ProcessTeaser: React.FC<ProcessTeaserProps> = () => {
  const stages = [
    { num: "01", title: "Listen & scope", icon: Compass },
    { num: "02", title: "Agree the plan", icon: MessageSquare },
    { num: "03", title: "Build in stages", icon: Code2 },
    { num: "04", title: "Launch carefully", icon: Rocket },
    { num: "05", title: "Support & iterate", icon: RefreshCw },
  ];

  return (
    <section
      id="process-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
            <span className="font-semibold text-[#F8F6FB]/50">04</span>
            <span>HOW WE DELIVER</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
            A clear path from brief to launch
          </h2>

          <p className="mt-3 text-[#B9A6D1] text-sm sm:text-base max-w-2xl leading-relaxed">
            Whether you are adopting Kiduart or commissioning a custom build, we
            work in transparent stages — discovery, agreement, incremental
            delivery, careful launch, and accountable support.
          </p>
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

      {/* Distinctive element: timeline connector */}
      <div className="relative">
        <div className="hidden sm:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#6B4A87] to-transparent" />
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 sm:gap-4 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                className="relative p-5 rounded-2xl bg-[#1E1024] border border-[#B9A6D1]/35 hover:border-[#E8A9C2]/55 hover:bg-[#24132B] transition-all flex flex-col justify-between group shadow-[0_10px_26px_rgba(0,0,0,0.25)]"
              >
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
                </div>
                <div className="mt-4 pt-3 border-t border-[#6B4A87]/30 flex items-center text-[10px] font-mono-accent text-[#B9A6D1]">
                  <span>{idx + 1} of 5</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
