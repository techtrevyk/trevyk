import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, MapPin } from "lucide-react";
import { SiteSettings } from "../../types";
import { TrevykLogo } from "../TrevykLogo";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";
import { WowAccent } from "../WowAccent";

interface AboutTeaserProps {
  settings: SiteSettings;
}

const PRINCIPLES = [
  "Architecture before features",
  "Measurable delivery stages",
  "Claims that match shipped reality",
];

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ settings }) => {
  const [principle, setPrinciple] = useState<number | null>(null);

  return (
    <section
      id="about-teaser"
      className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative rounded-3xl border border-[#B9A6D1]/40 bg-[#1E1024]/95 overflow-hidden px-5 sm:px-10 py-10 sm:py-14">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <ScrollReveal
            className="lg:col-span-5"
            reducedMotion={settings.reducedMotion}
          >
            <div className="rounded-2xl border border-[#B9A6D1]/40 bg-[#2A1830] p-6 sm:p-8 flex flex-col items-center text-center gap-4">
              <TrevykLogo
                layout="horizontal"
                size="lg"
                theme="dark"
                showTagline
              />
              <p className="text-sm text-[#B9A6D1] max-w-md leading-relaxed">
                A technology company that ships product platforms and custom
                systems with the same engineering discipline based in Noida.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono-accent text-[#E8A9C2]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters · Noida, India</span>
              </div>
              <WowAccent
                kind="brand"
                focus={principle}
                reducedMotion={settings.reducedMotion}
                className="w-full max-w-[200px]"
                caption="Brand mark"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-7 flex flex-col items-start"
            variant="right"
            reducedMotion={settings.reducedMotion}
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
              <span className="font-semibold text-[#F8F6FB]/50">05</span>
              <span>ABOUT TREVYK</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
              Turning vision into progress with product discipline.
            </h2>
            <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
              Kiduart is our flagship school ERP; custom engagements apply the
              same modular architecture.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/35">
                <GraduationCap className="w-4 h-4 text-[#E8A9C2] mb-2" />
                <div className="text-sm text-[#F8F6FB] font-heading font-semibold">
                  Product line
                </div>
                <div className="text-xs text-[#B9A6D1] mt-1">
                  Kiduart School ERP
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/35">
                <Briefcase className="w-4 h-4 text-[#E8A9C2] mb-2" />
                <div className="text-sm text-[#F8F6FB] font-heading font-semibold">
                  Engineering practice
                </div>
                <div className="text-xs text-[#B9A6D1] mt-1">
                  Custom software &amp; integrations
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-2 w-full">
              {PRINCIPLES.map((p, i) => {
                const on = principle === i;
                return (
                  <li key={p}>
                    <button
                      type="button"
                      onClick={() => {
                        setPrinciple(on ? null : i);
                        soundEngine.playClick("soft");
                      }}
                      className={`w-full flex items-center gap-2 text-left text-xs font-mono-accent px-3 py-2 rounded-lg border transition-colors ${
                        on
                          ? "text-[#F8F6FB] border-[#E8A9C2]/60 bg-[#2A1830]"
                          : "text-[#E7E1F0] border-transparent hover:border-[#B9A6D1]/35"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A9C2]" />
                      {p}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8">
              <Link
                to="/about"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#F8F6FB] font-heading text-xs sm:text-sm font-semibold group"
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
