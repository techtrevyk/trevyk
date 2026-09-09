import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  GitBranch, 
  ArrowRight, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  Gauge, 
  Rocket 
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface ProcessTeaserProps {
  settings: SiteSettings;
}

export const ProcessTeaser: React.FC<ProcessTeaserProps> = ({ settings }) => {
  const stages = [
    { num: '01', title: 'Architecture Blueprint', icon: Compass },
    { num: '02', title: 'Modular Prototyping', icon: Cpu },
    { num: '03', title: 'Zero-Trust Engineering', icon: ShieldCheck },
    { num: '04', title: 'Chaos & Load Hardening', icon: Gauge },
    { num: '05', title: 'Production Operations', icon: Rocket },
  ];

  return (
    <section
      id="process-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F7F4FA]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>04 // DELIVERY METHODOLOGY</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            Predictable Software Delivery, Step by Step
          </h2>

          <p className="mt-3 text-[#5C4A6E] text-sm sm:text-base max-w-2xl leading-relaxed">
            From technical requirement discovery to high-availability deployment, every phase is governed by strict CI/CD gates and zero-downtime release protocols.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <Link
            to="/process"
            onClick={() => soundEngine.playClick('soft')}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono-accent text-[#6B4A87] hover:text-[#241428] transition-colors p-2"
          >
            <span>View Full 5-Stage Methodology</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 5 Compact Linear Step Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 sm:gap-4 relative">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.num}
              className="p-5 rounded-2xl bg-[#FFFFFF]/90 border border-[#6B4A87]/30 hover:border-[#E8A9C2]/60 hover:bg-[#FFFFFF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-accent font-bold text-xs text-[#E8A9C2]">
                    PHASE {stage.num}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#5C4A6E] group-hover:text-[#E8A9C2] group-hover:scale-110 transition-all">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-sm text-[#241428] leading-snug">
                  {stage.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#6B4A87]/20 flex items-center text-[10px] font-mono-accent text-[#5C4A6E]">
                <span>Stage 0{idx + 1} of 05</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
