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
  MapPin,
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

const CORE_VALUES = [
  {
    title: "Publish only what exists",
    tagline: "Honest claims",
    desc: "We describe capabilities that are built and shippable. Anything still in development is labelled clearly — not billed as live. Same charter our Kiduart product team holds publicly.",
    icon: ShieldCheck,
  },
  {
    title: "Support that stays close",
    tagline: "Accountable team",
    desc: "Demos, onboarding, and support run with the people who ship the product. No invented 24/7 SLA theatre — we reply within one business day and stay accountable.",
    icon: HeartHandshake,
  },
  {
    title: "Partnership for progress",
    tagline: "Product + engineering",
    desc: "Trevyk builds platforms like Kiduart and delivers custom software when a product alone is not enough — for schools, organizations, and teams that need systems they can own.",
    icon: TrendingUp,
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenArchitectureModal,
}) => {
  return (
    <div
      id="about-page"
      className="relative w-full min-h-screen pt-28 sm:pt-36 pb-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 40% at 10% 12%, rgba(107,74,135,0.3), transparent 58%), radial-gradient(ellipse 40% 35% at 92% 18%, rgba(232,169,194,0.1), transparent 55%), linear-gradient(180deg, #1E1024 0%, #2A1830 40%, #2A1830 100%)",
          }}
        />
        <div className="absolute top-24 left-4 sm:left-8 w-8 h-8 border-l border-t border-[#E8A9C2]/30" />
        <div className="absolute top-24 right-4 sm:right-10 w-8 h-8 border-r border-t border-[#B9A6D1]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024]/95 border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-5">
              <Compass className="w-3.5 h-3.5" />
              <span>ABOUT TREVYK TECHNOLOGIES</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-[3.15rem] text-[#F8F6FB] leading-[1.12] tracking-tight">
              Turning Vision Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8F6FB] via-[#B9A6D1] to-[#E8A9C2]">
                Progress
              </span>
            </h1>

            <p className="mt-5 text-[#B9A6D1] text-base sm:text-lg leading-relaxed max-w-2xl">
              Trevyk Technologies designs and delivers technology products and
              engineered solutions — including{" "}
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8A9C2] font-semibold underline underline-offset-2 hover:text-[#F8F6FB]"
              >
                Kiduart
              </a>
              , our school ERP for Indian institutions, alongside custom
              software for organizations that need a tailored system. Based in
              Noida, we ship with an honesty standard: no invented adoption
              numbers, no borrowed credibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick("hero")}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#8558A5] text-[#F8F6FB] font-heading text-xs sm:text-sm font-semibold border border-[#E8A9C2]/25 shadow-[0_12px_28px_rgba(107,74,135,0.35)]"
              >
                <span>Talk to Trevyk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#1E1024] border border-[#B9A6D1]/40 text-[#B9A6D1] hover:text-[#F8F6FB] hover:border-[#E8A9C2] font-mono-accent text-xs"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#E8A9C2]" />
                <span>Visit kiduart.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-[#B9A6D1]/35 bg-[#1E1024]/95 p-8 sm:p-10 shadow-[0_24px_50px_rgba(0,0,0,0.35)] flex flex-col items-center text-center space-y-6 overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6B4A87] via-[#B9A6D1] to-[#E8A9C2]"
                aria-hidden
              />
              <TrevykLogo
                layout="horizontal"
                size="lg"
                theme="dark"
                showTagline={true}
              />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/25">
                  <div className="flex items-center gap-2 text-[#E8A9C2] mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono-accent uppercase">
                      Base
                    </span>
                  </div>
                  <div className="text-sm font-heading font-semibold text-[#F8F6FB]">
                    Noida, UP, India
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/25">
                  <div className="flex items-center gap-2 text-[#E8A9C2] mb-1">
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
                then we keep this page honest — brand, product, and how to
                reach us.
              </p>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-14" label="Principles" />

        <div className="mt-4">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB]">
              The same honesty we publish on Kiduart
            </h2>
            <p className="mt-3 text-sm text-[#B9A6D1] leading-relaxed">
              Company standards match the product charter — trust first, polish
              second.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="relative overflow-hidden p-6 pl-5 rounded-2xl bg-[#1E1024]/95 border border-[#B9A6D1]/30 hover:border-[#E8A9C2]/55 transition-colors flex flex-col justify-between"
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6B4A87] to-[#E8A9C2]"
                    aria-hidden
                  />
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/30 flex items-center justify-center text-[#E8A9C2] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono-accent text-[#E8A9C2] uppercase tracking-wider">
                      {val.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F8F6FB] mt-1">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#B9A6D1] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#B9A6D1]/20 flex items-center gap-1.5 text-xs font-mono-accent text-[#E8A9C2]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Public commitment</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandGradientDivider className="mt-16" label="Build" />

        <div className="mt-4 relative p-8 sm:p-12 rounded-3xl bg-[#1E1024]/95 border border-[#B9A6D1]/35 shadow-[0_24px_50px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <TrevykLogo
                layout="vertical"
                size="xl"
                theme="dark"
                showTagline={true}
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono-accent text-[#E8A9C2] uppercase tracking-widest">
                What we build
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
                Products for schools. Engineering for teams that need more.
              </h3>
              <p className="text-sm text-[#B9A6D1] leading-relaxed">
                Our flagship product is Kiduart School ERP — admissions through
                parent updates in one system. Alongside it, Trevyk delivers
                custom software, web/mobile apps, and cloud work when an
                institution needs something beyond the product surface.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/25 text-xs text-[#B9A6D1]">
                  <strong className="text-[#E8A9C2] block mb-0.5">
                    Product
                  </strong>
                  Kiduart for schools and trusts —{" "}
                  <a
                    href="https://kiduart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 text-[#E8A9C2]"
                  >
                    kiduart.com
                  </a>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/25 text-xs text-[#B9A6D1]">
                  <strong className="text-[#E8A9C2] block mb-0.5">
                    Engineering
                  </strong>
                  Custom software, integrations, and digital builds scoped to
                  what you need.
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={onOpenArchitectureModal}
                  className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#E8A9C2] hover:text-[#F8F6FB]"
                >
                  <Layers className="w-3.5 h-3.5" />
                  Inspect modular architecture
                </button>
                <Link
                  to="/technology"
                  onClick={() => soundEngine.playClick("soft")}
                  className="inline-flex items-center gap-2 text-xs font-mono-accent text-[#B9A6D1] hover:text-[#E8A9C2]"
                >
                  Engineering atlas →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-[#1E1024]/90 border border-[#B9A6D1]/30">
          <div className="flex items-start gap-3 text-center sm:text-left">
            <MapPin className="w-5 h-5 text-[#E8A9C2] shrink-0 mt-0.5 hidden sm:block" />
            <div>
              <h4 className="font-heading font-bold text-lg text-[#F8F6FB]">
                Ready to talk product or a custom build?
              </h4>
              <p className="text-xs text-[#B9A6D1] mt-1">
                Kiduart demos and Trevyk service requests — one contact path,
                honest timelines.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            onClick={() => soundEngine.playClick("hero")}
            className="px-7 py-3.5 rounded-full bg-[#6B4A87] text-[#F8F6FB] font-heading font-semibold text-xs sm:text-sm shrink-0 hover:bg-[#8558A5] border border-[#E8A9C2]/25 shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};
