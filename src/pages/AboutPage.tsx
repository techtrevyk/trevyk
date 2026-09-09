import React from 'react';
import { motion } from 'motion/react';
import { 
  Info, 
  Target, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  Award, 
  Building2, 
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  HeartHandshake,
  Workflow,
  Compass,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { SiteSettings } from '../types';
import { TrevykLogo } from '../components/TrevykLogo';
import { BrandGradientDivider } from '../components/BrandGradientBar';
import { soundEngine } from '../utils/audioEngine';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  settings: SiteSettings;
  onOpenArchitectureModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  onOpenArchitectureModal,
}) => {
  // Brand Culture & Values inspired by Trevyk's creative philosophy
  const coreValues = [
    {
      title: 'A Bond of Trust',
      tagline: 'Radical Transparency & Code Ownership',
      desc: 'We treat every system we build as a critical institutional commitment. You retain 100% intellectual property ownership, zero vendor locks, and direct access to unvarnished code repositories and automated audit traces.',
      icon: ShieldCheck,
    },
    {
      title: 'A Promise of Support',
      tagline: '24/7 Resilience & Engineering Continuity',
      desc: 'Our engagement doesn’t conclude at production deployment. We provide guaranteed SLAs, proactive telemetry monitoring, and dedicated SRE rotations so your software thrives as user concurrency surges.',
      icon: HeartHandshake,
    },
    {
      title: 'A Partnership for Progress',
      tagline: 'Turning Vision Into Measurable Impact',
      desc: 'We don’t build software for the sake of complexity. Every line of code, distributed database shard, and AI inference pipeline is engineered to drive tangible operational velocity and institutional growth.',
      icon: TrendingUp,
    },
  ];

  return (
    <div id="about-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HEADER HERO                                                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>ABOUT TREVYK TECHNOLOGIES</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
              Turning Vision Into Progress.
            </h1>

            <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed max-w-2xl">
              Trevyk Technologies is an enterprise software engineering company based in Pune, India. We partner with ambitious institutions and businesses to architect high-throughput cloud platforms, event-driven microservices, and our proprietary flagship school ERP platform—Kiduart.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick('hero')}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg"
              >
                <span>Partner with Trevyk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenArchitectureModal}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#5C4A6E] hover:text-[#241428] font-mono-accent text-xs transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-[#E8A9C2]" />
                <span>Inspect 3D Architecture</span>
              </button>
            </div>
          </div>

          {/* Real Team & Office Atmosphere Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#6B4A87]/40 bg-[#FFFFFF] p-2 shadow-2xl group">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Trevyk Technologies Engineering Team in Collaboration"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#6B4A87]/50 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-accent text-[#6B4A87]">ENGINEERING HQ</div>
                    <div className="text-xs font-heading font-semibold text-[#241428]">Pune, Maharashtra, India</div>
                  </div>
                  <div className="text-[10px] font-mono-accent text-[#5C4A6E] px-2 py-1 rounded bg-[#F7F4FA] border border-[#6B4A87]/40">
                    Est. 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 2. THE THREE FOUNDATIONAL VALUES (REWORDED CULTURE STATEMENT)             */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>CULTURE & VALUES</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428]">
              The Trevyk Engineering Pledge
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C4A6E] leading-relaxed">
              Inspired by our founding philosophy: a bond of trust, a promise of support, and a dedicated partnership for progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/35 space-y-4 hover:border-[#E8A9C2]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono-accent text-[#6B4A87] uppercase">
                      {val.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#241428] mt-1">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#5C4A6E]/80 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#6B4A87]/20 flex items-center space-x-1.5 text-xs font-mono-accent text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Non-Negotiable Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 3. THE 5-CUBE LOGO & ARCHITECTURAL MEANING                                */}
        {/* ========================================================================= */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <TrevykLogo layout="vertical" size="xl" showTagline={true} />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono-accent text-[#6B4A87] uppercase">
                THE 3D CUBE ARCHITECTURE PHILOSOPHY
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
                Why the Isometric "Y" Formation Defines Our Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A6E]/85 leading-relaxed">
                In complex software, fragile monoliths break under sudden concurrency. Our brand emblem—an isometric 5-cube cluster in a "Y" formation—is a mathematical metaphor for decoupled micro-architecture:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-xs text-[#5C4A6E]">
                  <strong className="text-[#E8A9C2] block mb-0.5">Top-Left & Top-Right Nodes:</strong>
                  User interface gateways & IoT device streams.
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-xs text-[#5C4A6E]">
                  <strong className="text-[#E8A9C2] block mb-0.5">Center Core Block:</strong>
                  The event choreography broker & business logic orchestrator.
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-xs text-[#5C4A6E]">
                  <strong className="text-[#E8A9C2] block mb-0.5">Stem & Base Nodes:</strong>
                  Distributed database persistence & high-speed caching layers.
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-xs text-[#5C4A6E]">
                  <strong className="text-[#E8A9C2] block mb-0.5">Linear Scalability:</strong>
                  Every module isolates faults without bringing down the system.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. HONEST POSITIONING (NO FAKE PEOPLE)                                   */}
        {/* ========================================================================= */}
        <div className="mt-16 p-8 rounded-3xl bg-[#FFFFFF]/80 border border-[#6B4A87]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-[#241428]">
              Ready to explore an engineering partnership?
            </h4>
            <p className="text-xs text-[#5C4A6E]">
              Connect directly with our solutions architects to discuss technical feasibility and timelines.
            </p>
          </div>

          <Link
            to="/contact"
            onClick={() => soundEngine.playClick('hero')}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading font-semibold text-xs sm:text-sm shrink-0 hover:opacity-95 transition-opacity shadow-lg"
          >
            Connect With Us
          </Link>
        </div>

      </div>
    </div>
  );
};
