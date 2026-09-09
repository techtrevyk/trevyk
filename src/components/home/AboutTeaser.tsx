import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Code2, 
  HeartHandshake 
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface AboutTeaserProps {
  settings: SiteSettings;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ settings }) => {
  return (
    <section
      id="about-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FFFFFF] rounded-3xl border border-[#6B4A87]/30 my-8 shadow-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Real Team Studio Photography */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden border border-[#6B4A87]/40 shadow-xl relative group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Trevyk Technologies Engineering Team & Collaboration Studio"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            
            {/* Overlaid Brand Tagline Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md p-4 rounded-xl border border-[#6B4A87]/40">
              <span className="text-[10px] font-mono-accent text-[#6B4A87] block uppercase tracking-widest">
                Our Core Mission
              </span>
              <span className="font-heading font-bold text-base text-[#241428]">
                "Turning Vision Into Progress."
              </span>
              <p className="text-xs text-[#5C4A6E] mt-1">
                A relentless dedication to robust architecture, long-term stability, and engineering integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Values Preview */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F7F4FA] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>05 // ABOUT TREVYK</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            Engineered By Practitioners, Built for Longevity
          </h2>

          <p className="mt-4 text-[#5C4A6E] text-sm sm:text-base leading-relaxed">
            Trevyk was founded on a simple premise: software systems should be as dependable and well-engineered as physical infrastructure. We don't build disposable code—we construct scalable, resilient foundations that grow with our clients.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 w-full">
            <div className="p-3.5 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/30">
              <div className="font-mono-accent font-bold text-xl text-[#6B4A87]">100%</div>
              <div className="text-xs text-[#241428] font-medium mt-0.5">Source IP Ownership</div>
              <div className="text-[10px] text-[#5C4A6E]">Zero vendor lock-in handoff</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/30">
              <div className="font-mono-accent font-bold text-xl text-[#6B4A87]">Kiduart</div>
              <div className="text-xs text-[#241428] font-medium mt-0.5">Flagship product</div>
              <div className="text-[10px] text-[#5C4A6E]">School ERP at kiduart.com</div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#F7F4FA] border border-[#6B4A87]/40 hover:border-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:bg-[#FFFFFF] transition-all group"
            >
              <span>Read Our Story & Leadership</span>
              <ArrowRight className="w-4 h-4 text-[#E8A9C2] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
