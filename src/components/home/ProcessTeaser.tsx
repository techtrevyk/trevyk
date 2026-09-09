import React from 'react';
import { Link } from 'react-router-dom';
import {
  GitBranch,
  ArrowRight,
  Compass,
  MessageSquare,
  Code2,
  Rocket,
  RefreshCw,
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface ProcessTeaserProps {
  settings: SiteSettings;
}

export const ProcessTeaser: React.FC<ProcessTeaserProps> = () => {
  const stages = [
    { num: '01', title: 'Listen & scope', icon: Compass },
    { num: '02', title: 'Agree the plan', icon: MessageSquare },
    { num: '03', title: 'Build in stages', icon: Code2 },
    { num: '04', title: 'Launch carefully', icon: Rocket },
    { num: '05', title: 'Support & iterate', icon: RefreshCw },
  ];

  return (
    <section
      id="process-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F7F4FA]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>04 // HOW WE DELIVER</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            A simple delivery path — product or custom
          </h2>

          <p className="mt-3 text-[#5C4A6E] text-sm sm:text-base max-w-2xl leading-relaxed">
            Whether you are rolling out Kiduart or scoping a custom build, we work in clear stages: understand the work, agree scope, ship in slices, launch with a parallel check when needed, then stay available.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <Link
            to="/process"
            onClick={() => soundEngine.playClick('soft')}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono-accent text-[#8B5CAD] hover:text-[#241428] transition-colors p-2"
          >
            <span>See full process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 sm:gap-4 relative">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.num}
              className="p-5 rounded-2xl bg-white/90 border border-[#8B5CAD]/30 hover:border-[#E8A9C2]/60 hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-accent font-bold text-xs text-[#8B5CAD]">
                    STEP {stage.num}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F7F4FA] border border-[#8B5CAD]/40 flex items-center justify-center text-[#5C4A6E] group-hover:text-[#8B5CAD] group-hover:scale-110 transition-all">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-sm text-[#241428] leading-snug">
                  {stage.title}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-[#8B5CAD]/20 flex items-center text-[10px] font-mono-accent text-[#5C4A6E]">
                <span>
                  {idx + 1} of 5
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
