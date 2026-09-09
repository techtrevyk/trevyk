import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import { SiteSettings } from '../../types';
import { TrevykLogo } from '../TrevykLogo';
import { soundEngine } from '../../utils/audioEngine';

interface AboutTeaserProps {
  settings: SiteSettings;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = () => {
  return (
    <section
      id="about-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl border border-[#6B4A87]/30 my-8 shadow-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl border border-[#6B4A87]/25 bg-[#F7F4FA] p-8 sm:p-12 flex flex-col items-center text-center gap-5">
            <TrevykLogo layout="horizontal" size="lg" showTagline={true} />
            <p className="text-sm text-[#5C4A6E] max-w-md leading-relaxed">
              Parent company of Kiduart. We build school software people can run every day — and take on B2B work when you need more than a product alone.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-[10px] font-mono-accent uppercase tracking-wider text-[#6B4A87]">
              <span className="px-2.5 py-1 rounded-full bg-white border border-[#6B4A87]/25">Noida, India</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-[#6B4A87]/25">B2B + B2C</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-[#6B4A87]/25">Honest claims only</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F7F4FA] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>05 // ABOUT TREVYK</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            The company behind Kiduart
          </h2>

          <p className="mt-4 text-[#5C4A6E] text-sm sm:text-base leading-relaxed">
            Trevyk Technologies turns vision into progress by shipping real products and scoped IT services. We do not invent school counts, fake testimonials, or borrowed certifications — the same standard published on{' '}
            <a href="https://kiduart.com" target="_blank" rel="noopener noreferrer" className="text-[#6B4A87] font-semibold underline underline-offset-2">
              kiduart.com
            </a>
            .
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 w-full">
            <div className="p-3.5 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/30">
              <GraduationCap className="w-4 h-4 text-[#6B4A87] mb-2" />
              <div className="text-xs text-[#241428] font-medium">Flagship product</div>
              <div className="text-[10px] text-[#5C4A6E] mt-0.5">Kiduart School ERP</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/30">
              <Briefcase className="w-4 h-4 text-[#6B4A87] mb-2" />
              <div className="text-xs text-[#241428] font-medium">Services lane</div>
              <div className="text-[10px] text-[#5C4A6E] mt-0.5">Custom software &amp; integrations</div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#F7F4FA] border border-[#6B4A87]/40 hover:border-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:bg-white transition-all group"
            >
              <span>Read our story</span>
              <ArrowRight className="w-4 h-4 text-[#6B4A87] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
