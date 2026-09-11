import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  School,
} from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";
import { WowAccent } from "../WowAccent";

interface KiduartTeaserProps {
  settings: SiteSettings;
}

const JOURNEY = [
  {
    title: "Admissions",
    desc: "Enquiry to registered student in one pipeline.",
  },
  { title: "Student records", desc: "One profile the whole campus reads." },
  { title: "Attendance", desc: "Mark fast  parents informed the same day." },
  { title: "Fees & finance", desc: "Structure, collections, dues, receipts." },
  { title: "Parents", desc: "Targeted notices with delivery visibility." },
  { title: "Exams", desc: "Schedules, marks, grades, report cards." },
];

export const KiduartTeaser: React.FC<KiduartTeaserProps> = ({ settings }) => {
  const [step, setStep] = useState(0);
  const active = JOURNEY[step];

  return (
    <section
      id="kiduart-teaser"
      className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#E7E1F0] text-[#241428] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10"
          reducedMotion={settings.reducedMotion}
        >
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6B4A87]/30 text-[#6B4A87] font-mono-accent text-xs mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCT · KIDUART</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#241428] leading-tight">
              Kiduart the school operating system we ship.
            </h2>
            <p className="mt-4 text-[#5C4A6E] text-base sm:text-lg max-w-3xl leading-relaxed">
              Scrub the campus year each step lights the campus graph.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono-accent text-[#6B4A87]">
              <School className="w-3.5 h-3.5" />
              <span>Live product desk · kiduart.com</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
            <Link
              to="/kiduart"
              onClick={() => soundEngine.playClick("soft")}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold group"
            >
              <span>Explore Kiduart</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <ScrollReveal
            className="lg:col-span-5"
            reducedMotion={settings.reducedMotion}
          >
            <div className="h-full rounded-2xl bg-white/90 border border-[#6B4A87]/20 p-5 sm:p-6">
              <div className="flex items-center justify-between text-[10px] font-mono-accent text-[#6B4A87] mb-3">
                <span>SCHOOL-YEAR SCRUBBER</span>
                <span>
                  {String(step + 1).padStart(2, "0")} / {JOURNEY.length}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={JOURNEY.length - 1}
                value={step}
                aria-label="Scrub school-year journey"
                onChange={(e) => {
                  setStep(Number(e.target.value));
                  soundEngine.playHover();
                }}
                className="w-full h-2 appearance-none rounded-full cursor-pointer bg-[#E7E1F0] border border-[#6B4A87]/25
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6B4A87]"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                {JOURNEY.map((j, i) => (
                  <button
                    key={j.title}
                    type="button"
                    onClick={() => {
                      setStep(i);
                      soundEngine.playClick("soft");
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono-accent border ${
                      i === step
                        ? "bg-[#6B4A87] text-white border-[#6B4A87]"
                        : "bg-white text-[#6B4A87] border-[#6B4A87]/25"
                    }`}
                  >
                    {j.title}
                  </button>
                ))}
              </div>
              <h3 className="mt-5 font-heading font-bold text-lg text-[#241428]">
                {active.title}
              </h3>
              <p className="mt-2 text-sm text-[#5C4A6E]">{active.desc}</p>
              <ul className="mt-4 space-y-2 text-xs text-[#5C4A6E]">
                {[
                  "Full journey on kiduart.com",
                  "Demo desk: +91 92175 34128",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6B4A87] shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-7 flex flex-col gap-4"
            reducedMotion={settings.reducedMotion}
          >
            <WowAccent
              kind="campus"
              step={step}
              reducedMotion={settings.reducedMotion}
              className="w-full max-w-md mx-auto"
              caption="Campus graph"
            />
            <div className="flex flex-wrap gap-3">
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B4A87] text-white text-xs font-heading font-semibold"
              >
                Book a free demo <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/process"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#6B4A87]/25 text-[#6B4A87] text-xs font-mono-accent font-semibold"
              >
                How we implement →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
