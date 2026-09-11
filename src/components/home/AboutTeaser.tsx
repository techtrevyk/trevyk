import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, MapPin } from "lucide-react";
import { SiteSettings } from "../../types";
import { TrevykLogo } from "../TrevykLogo";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";
import { GapAccent } from "../GapAccent";

interface AboutTeaserProps {
  settings: SiteSettings;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ settings }) => {
  const principles = [
    "Architecture before features",
    "Measurable delivery stages",
    "Claims that match shipped reality",
  ];

  return (
    <section
      id="about-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative rounded-3xl border border-[#B9A6D1]/40 bg-[#1E1024]/95 shadow-[0_24px_60px_rgba(0,0,0,0.38)] overflow-hidden px-5 sm:px-10 py-12 sm:py-16">
        <div
          className="pointer-events-none absolute left-6 top-4 font-heading text-[8rem] leading-none text-[#6B4A87]/20 select-none"
          aria-hidden
        >
          “
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal
            className="lg:col-span-5 relative"
            reducedMotion={settings.reducedMotion}
          >
            <div className="rounded-2xl border border-[#B9A6D1]/40 bg-[#2A1830] p-8 sm:p-10 flex flex-col items-center text-center gap-5 shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
              <TrevykLogo
                layout="horizontal"
                size="lg"
                theme="dark"
                showTagline={true}
              />
              <p className="text-sm text-[#B9A6D1] max-w-md leading-relaxed">
                A technology company that ships product platforms and custom
                systems with the same engineering discipline — based in Noida,
                built for teams that expect craft.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono-accent text-[#E8A9C2]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters · Noida, India</span>
              </div>
              <GapAccent
                variant="pulse"
                reducedMotion={settings.reducedMotion}
                caption="Company signal"
                className="mt-2"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-7 flex flex-col items-start"
            variant="right"
            delay={0.08}
            reducedMotion={settings.reducedMotion}
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
              <span className="font-semibold text-[#F8F6FB]/50">05</span>
              <span>ABOUT TREVYK</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
              Turning vision into progress — with product discipline.
            </h2>

            <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
              Trevyk Technologies designs and delivers digital products and
              engineered platforms. Kiduart is our flagship school ERP; custom
              engagements apply the same modular architecture for institutions
              that need a tailored operating system.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/35">
                <GraduationCap className="w-4 h-4 text-[#E8A9C2] mb-2" />
                <div className="text-sm text-[#F8F6FB] font-heading font-semibold">
                  Product line
                </div>
                <div className="text-xs text-[#B9A6D1] mt-1 leading-relaxed">
                  Kiduart School ERP — admissions through campus operations.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/35">
                <Briefcase className="w-4 h-4 text-[#E8A9C2] mb-2" />
                <div className="text-sm text-[#F8F6FB] font-heading font-semibold">
                  Engineering practice
                </div>
                <div className="text-xs text-[#B9A6D1] mt-1 leading-relaxed">
                  Custom software, integrations, and cloud delivery with clear
                  ownership.
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 w-full">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-xs font-mono-accent text-[#E7E1F0]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A9C2]" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/about"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 hover:border-[#E8A9C2] text-[#F8F6FB] font-heading text-xs sm:text-sm font-semibold hover:bg-[#24132B] transition-all group"
              >
                <span>Read our story</span>
                <ArrowRight className="w-4 h-4 text-[#E8A9C2] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
