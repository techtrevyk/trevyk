import React from "react";
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
} from "lucide-react";
import { SiteSettings } from "../types";
import { TrevykLogo } from "../components/TrevykLogo";
import { BrandGradientDivider } from "../components/BrandGradientBar";
import { soundEngine } from "../utils/audioEngine";
import { Link } from "react-router-dom";

interface AboutPageProps {
  settings: SiteSettings;
  onOpenArchitectureModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenArchitectureModal,
}) => {
  const coreValues = [
    {
      title: "Publish only what exists",
      tagline: "Honest product & service claims",
      desc: "We describe capabilities that are built and shippable. Anything still in development is labelled clearly  not billed as live. Same charter our Kiduart product team holds publicly.",
      icon: ShieldCheck,
    },
    {
      title: "Support that stays close",
      tagline: "Same team for demos and rollout",
      desc: "Demos, onboarding, and support run with the people who ship the product. No invented 24/7 SLA theatre  we reply within one business day and stay accountable.",
      icon: HeartHandshake,
    },
    {
      title: "Partnership for progress",
      tagline: "Products and engineering",
      desc: "Trevyk builds platforms like Kiduart and delivers custom software when a product alone is not enough — for schools, organizations, and teams that need systems they can own.",
      icon: TrendingUp,
    },
  ];

  return (
    <div id="about-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>ABOUT TREVYK TECHNOLOGIES</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8F6FB] leading-tight">
              Turning Vision Into Progress.
            </h1>

            <p className="mt-5 text-[#B9A6D1] text-base sm:text-lg leading-relaxed max-w-2xl">
              Trevyk Technologies designs and delivers technology products and
              engineered solutions — including{" "}
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8A9C2] font-semibold underline underline-offset-2"
              >
                Kiduart
              </a>
              , our school ERP for Indian institutions, alongside custom
              software for organizations that need a tailored system. Based in
              Noida, Uttar Pradesh, we ship with an honesty standard: no
              invented adoption numbers, no borrowed credibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick("hero")}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#8558A5] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg"
              >
                <span>Talk to Trevyk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#B9A6D1] hover:text-[#F8F6FB] font-mono-accent text-xs transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#6B4A87]" />
                <span>Visit kiduart.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-[#6B4A87]/25 bg-[#1E1024] p-8 sm:p-10 shadow-xl flex flex-col items-center text-center space-y-6">
              <TrevykLogo layout="horizontal" size="lg" showTagline={true} />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#6B4A87]/20">
                  <div className="flex items-center gap-2 text-[#6B4A87] mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono-accent uppercase">
                      Base
                    </span>
                  </div>
                  <div className="text-sm font-heading font-semibold text-[#F8F6FB]">
                    Noida, UP, India
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#6B4A87]/20">
                  <div className="flex items-center gap-2 text-[#6B4A87] mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono-accent uppercase">
                      Focus
                    </span>
                  </div>
                  <div className="text-sm font-heading font-semibold text-[#F8F6FB]">
                    Products &amp; engineering
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#B9A6D1] leading-relaxed">
                Individual team profiles will be published when ready. Until
                then we keep this page honest brand, product, and how to reach
                us.
              </p>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB]">
              The same honesty we publish on Kiduart
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#B9A6D1] leading-relaxed">
              Company standards match the product charter — trust first, polish
              second.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-7 rounded-2xl bg-[#1E1024] border border-[#6B4A87]/35 space-y-4 hover:border-[#E8A9C2]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#2A1830] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono-accent text-[#6B4A87] uppercase">
                      {val.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F8F6FB] mt-1">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#B9A6D1] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#6B4A87]/20 flex items-center space-x-1.5 text-xs font-mono-accent text-[#6B4A87]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Public commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#1E1024] border border-[#6B4A87]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <TrevykLogo layout="vertical" size="xl" showTagline={true} />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono-accent text-[#6B4A87] uppercase">
                WHAT WE BUILD
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
                Products for schools. Services for teams that need more.
              </h3>
              <p className="text-sm text-[#B9A6D1] leading-relaxed">
                Our flagship product is Kiduart School ERP — admissions, student
                records, attendance, exams, fees, parent communication, and more
                in one system. Alongside the product, Trevyk delivers custom
                software, web/mobile apps, and cloud work when an institution or
                organization needs something beyond the product surface.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#2A1830] border border-[#6B4A87]/20 text-xs text-[#B9A6D1]">
                  <strong className="text-[#E8A9C2] block mb-0.5">
                    Product
                  </strong>
                  Kiduart for schools, trusts, and multi-campus groups — see{" "}
                  <a
                    href="https://kiduart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 text-[#E8A9C2]"
                  >
                    kiduart.com
                  </a>
                  .
                </div>
                <div className="p-3 rounded-xl bg-[#2A1830] border border-[#6B4A87]/20 text-xs text-[#B9A6D1]">
                  <strong className="text-[#E8A9C2] block mb-0.5">
                    Engineering
                  </strong>
                  Custom software, integrations, and digital builds scoped to
                  what you actually need.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenArchitectureModal}
                className="inline-flex items-center space-x-2 mt-2 text-xs font-mono-accent text-[#6B4A87] hover:text-[#F8F6FB]"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Inspect modular architecture metaphor</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-[#2A1830] border border-[#6B4A87]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-[#F8F6FB]">
              Ready to talk product or a custom build?
            </h4>
            <p className="text-xs text-[#B9A6D1]">
              Kiduart demos and Trevyk service requests one contact path, honest
              timelines.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => soundEngine.playClick("hero")}
            className="px-7 py-3.5 rounded-full bg-[#6B4A87] text-white font-heading font-semibold text-xs sm:text-sm shrink-0 hover:opacity-95 transition-opacity shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};
