import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Layers,
  ArrowRight,
  CheckCircle2,
  Compass,
  Building2,
  GraduationCap,
  Briefcase,
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
  onOpenArchitectureModal,
}) => {
  const coreValues = [
    {
      title: 'Publish only what exists',
      tagline: 'Honest product & service claims',
      desc: 'We describe capabilities that are built and shippable. Anything still in development is labelled clearly — not billed as live. Same charter our Kiduart product team holds publicly.',
      icon: ShieldCheck,
    },
    {
      title: 'Support that stays close',
      tagline: 'Same team for demos and rollout',
      desc: 'Demos, onboarding, and support run with the people who ship the product. No invented 24/7 SLA theatre — we reply within one business day and stay accountable.',
      icon: HeartHandshake,
    },
    {
      title: 'Partnership for progress',
      tagline: 'B2B services + B2C products',
      desc: 'Trevyk is the parent company behind Kiduart and related IT work. We help schools and businesses with real software — products they can buy, and custom builds when a product alone is not enough.',
      icon: TrendingUp,
    },
  ];

  return (
    <div id="about-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>ABOUT TREVYK TECHNOLOGIES</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
              Turning Vision Into Progress.
            </h1>

            <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed max-w-2xl">
              Trevyk Technologies is the parent company behind{' '}
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B5CAD] font-semibold underline underline-offset-2"
              >
                Kiduart
              </a>
              — a school ERP built for Indian schools — and the home for our wider B2B and B2C software work. Based in Noida, Uttar Pradesh, we ship product and custom IT with the same honesty standard: no invented adoption numbers, no borrowed credibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick('hero')}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CAD] to-[#A078C8] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg"
              >
                <span>Talk to Trevyk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#5C4A6E] hover:text-[#241428] font-mono-accent text-xs transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#8B5CAD]" />
                <span>Visit kiduart.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-[#8B5CAD]/25 bg-white p-8 sm:p-10 shadow-xl flex flex-col items-center text-center space-y-6">
              <TrevykLogo layout="horizontal" size="lg" showTagline={true} />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-[#F7F4FA] border border-[#8B5CAD]/20">
                  <div className="flex items-center gap-2 text-[#8B5CAD] mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono-accent uppercase">Base</span>
                  </div>
                  <div className="text-sm font-heading font-semibold text-[#241428]">Noida, UP, India</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F4FA] border border-[#8B5CAD]/20">
                  <div className="flex items-center gap-2 text-[#8B5CAD] mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono-accent uppercase">Focus</span>
                  </div>
                  <div className="text-sm font-heading font-semibold text-[#241428]">B2B &amp; B2C software</div>
                </div>
              </div>
              <p className="text-xs text-[#5C4A6E] leading-relaxed">
                Individual team profiles will be published when ready. Until then we keep this page honest — brand, product, and how to reach us.
              </p>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428]">
              The same honesty we publish on Kiduart
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C4A6E] leading-relaxed">
              Parent company standards match the product charter — trust first, polish second.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-7 rounded-2xl bg-white border border-[#8B5CAD]/35 space-y-4 hover:border-[#E8A9C2]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F7F4FA] border border-[#8B5CAD]/40 flex items-center justify-center text-[#8B5CAD] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono-accent text-[#8B5CAD] uppercase">
                      {val.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#241428] mt-1">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#5C4A6E] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#8B5CAD]/20 flex items-center space-x-1.5 text-xs font-mono-accent text-[#8B5CAD]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Public commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-[#8B5CAD]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <TrevykLogo layout="vertical" size="xl" showTagline={true} />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono-accent text-[#8B5CAD] uppercase">
                WHAT WE BUILD
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
                Products for schools. Services for teams that need more.
              </h3>
              <p className="text-sm text-[#5C4A6E] leading-relaxed">
                Our flagship product is Kiduart School ERP — admissions, student records, attendance, exams, fees, parent communication, and more in one system. Alongside the product, Trevyk takes on B2B custom software, web/mobile apps, and cloud work when a school or business needs something beyond the product surface.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#F7F4FA] border border-[#8B5CAD]/20 text-xs text-[#5C4A6E]">
                  <strong className="text-[#8B5CAD] block mb-0.5">B2C / Product</strong>
                  Kiduart for schools, trusts, and multi-campus groups — see{' '}
                  <a href="https://kiduart.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[#8B5CAD]">
                    kiduart.com
                  </a>
                  .
                </div>
                <div className="p-3 rounded-xl bg-[#F7F4FA] border border-[#8B5CAD]/20 text-xs text-[#5C4A6E]">
                  <strong className="text-[#8B5CAD] block mb-0.5">B2B / Services</strong>
                  Custom software, integrations, and digital builds scoped to what you actually need.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenArchitectureModal}
                className="inline-flex items-center space-x-2 mt-2 text-xs font-mono-accent text-[#8B5CAD] hover:text-[#241428]"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Inspect modular architecture metaphor</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-[#F7F4FA] border border-[#8B5CAD]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-[#241428]">
              Ready to talk product or a custom build?
            </h4>
            <p className="text-xs text-[#5C4A6E]">
              Kiduart demos and Trevyk service requests — one contact path, honest timelines.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => soundEngine.playClick('hero')}
            className="px-7 py-3.5 rounded-full bg-[#8B5CAD] text-white font-heading font-semibold text-xs sm:text-sm shrink-0 hover:opacity-95 transition-opacity shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};
