import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteSettings } from "../types";
import { ViewportSection } from "../components/ViewportSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { soundEngine } from "../utils/audioEngine";
import { Link } from "react-router-dom";
import { whoWeAreHeroBackdrop } from "../config/media";
import { OurPurposeSection } from "../components/about/OurPurposeSection";
import { HowWeThinkWorkSection } from "../components/about/HowWeThinkWorkSection";
import { WhatDefinesTrevykSection } from "../components/about/WhatDefinesTrevykSection";
import { EeAtPracticeSection } from "../components/about/EeAtPracticeSection";
import { VerifiedMilestonesSection } from "../components/about/VerifiedMilestonesSection";
import { OurCommitmentsSection } from "../components/about/OurCommitmentsSection";
import { LetsBuildTogetherSection } from "../components/about/LetsBuildTogetherSection";

interface AboutPageProps {
  settings: SiteSettings;
  onOpenArchitectureModal: () => void;
}

const COMPANY_INTRO_IMAGE = "/companyIntro.png";

const INTRO_OFFERINGS = [
  {
    title: "Grow how you get found",
    desc: "Presence, SEO, and campaigns that bring enquiries",
  },
  {
    title: "Run the business better",
    desc: "Websites, apps, and software—including Kiduart for schools",
  },
  {
    title: "Use modern AI where it helps",
    desc: "Agents, RAG, GenAI—scoped to real workflows",
  },
] as const;

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  onOpenArchitectureModal,
}) => {
  return (
    <div id="who-we-are-page" className="relative w-full overflow-hidden">
      {/* 1 — Who we are */}
      <section
        id="who-we-are"
        aria-labelledby="who-we-are-heading"
        className="trevyk-viewport-section trevyk-viewport-section--center relative w-full"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${COMPANY_INTRO_IMAGE})` }}
          />
          <div
            className="absolute inset-0 z-1"
            style={{
              backgroundColor: `rgba(${whoWeAreHeroBackdrop.washRgb}, ${whoWeAreHeroBackdrop.washOpacity})`,
            }}
          />
          <div
            className="absolute inset-0 z-[2]"
            style={{
              background: whoWeAreHeroBackdrop.vignetteLayers.join(", "),
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-3.5 sm:px-6 lg:px-8">
          <ScrollReveal reducedMotion={settings.reducedMotion}>
            <div className="text-left w-full lg:max-w-[58%]">
              <p className="font-mono-accent text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E8A9C2] mb-4">
                01 / Who we are
              </p>

              <h1
                id="who-we-are-heading"
                className="font-heading font-bold text-2xl sm:text-4xl lg:text-[2.65rem] text-[#F8F6FB] leading-[1.15] tracking-tight max-w-xl"
              >
                We help businesses grow with technology that earns its keep.
              </h1>

              <div
                className="mt-6 mb-6 h-px max-w-xl bg-gradient-to-r from-[#B9A6D1]/50 to-transparent"
                aria-hidden
              />

              <p className="font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#B9A6D1]/90 mb-3">
                Introduction
              </p>
              <p className="text-sm sm:text-base text-[#E7E1F0] leading-relaxed max-w-lg">
                TREVYK Technologies partners with businesses that want clearer
                growth paths. We lead with your problem—then use websites,
                software, SEO, campaigns, and practical AI to move it forward.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  onClick={() => soundEngine.playClick("hero")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] text-[#1E1024] font-heading text-xs sm:text-sm font-semibold shadow-[0_8px_24px_rgba(232,169,194,0.35)] hover:brightness-105"
                >
                  Discuss a Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => soundEngine.playClick("soft")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-[#E8A9C2]/55 text-[#E8A9C2] font-heading text-xs sm:text-sm font-semibold hover:bg-[#E8A9C2]/10"
                >
                  Explore our work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                {INTRO_OFFERINGS.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-[#B9A6D1]/35 bg-[#1E1024]/95 p-4 flex flex-col gap-2"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#E8A9C2] shrink-0"
                      aria-hidden
                    />
                    <p className="font-heading text-sm font-semibold text-[#F8F6FB] leading-snug">
                      {item.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#B9A6D1] leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OurPurposeSection />

      <HowWeThinkWorkSection />

      <WhatDefinesTrevykSection />

      <EeAtPracticeSection />

      <VerifiedMilestonesSection />

      <OurCommitmentsSection />

      <LetsBuildTogetherSection />
    </div>
  );
};
