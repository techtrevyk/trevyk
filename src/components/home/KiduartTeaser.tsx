import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  CreditCard,
  Users,
  Clock,
  Send,
  ExternalLink,
  CheckCircle2,
  School,
} from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";

interface KiduartTeaserProps {
  settings: SiteSettings;
}

export const KiduartTeaser: React.FC<KiduartTeaserProps> = ({ settings }) => {
  const features = [
    {
      title: "Admissions to student records",
      desc: "Enquiry to registration creates one profile the whole school can trust.",
      icon: Users,
    },
    {
      title: "Attendance & parent updates",
      desc: "Mark quickly, inform families the same day — with a clear trail.",
      icon: Clock,
    },
    {
      title: "Fees & finance ledger",
      desc: "Structure, collections, dues, and receipts in one place.",
      icon: CreditCard,
    },
    {
      title: "Parent communication",
      desc: "Targeted notices by class or group, with delivery visibility.",
      icon: Send,
    },
  ];

  return (
    <section
      id="kiduart-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#E7E1F0] text-[#241428] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(232,169,194,0.22),_transparent_55%)]" />
      <div
        className="pointer-events-none absolute -right-4 top-8 font-heading font-bold text-[9rem] sm:text-[12rem] leading-none text-[#6B4A87]/10 select-none"
        aria-hidden
      >
        03
      </div>

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between mb-12"
          reducedMotion={settings.reducedMotion}
        >
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6B4A87]/30 text-[#6B4A87] font-mono-accent text-xs mb-4 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCT · KIDUART</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#241428] leading-tight tracking-tight">
              Kiduart — the school operating system we ship.
            </h2>

            <p className="mt-4 text-[#5C4A6E] text-base sm:text-lg max-w-3xl leading-relaxed">
              Kiduart is Trevyk&apos;s flagship product: a cloud school ERP that
              connects admissions, academics, attendance, exams, fees,
              transport, library, HR, and parent communication into one daily
              operating rhythm for Indian campuses.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono-accent text-[#6B4A87]">
              <School className="w-3.5 h-3.5" />
              <span>Live product desk · kiduart.com</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <Link
              to="/kiduart"
              onClick={() => soundEngine.playClick("soft")}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:bg-[#5A3875] transition-all shadow-[0_10px_28px_rgba(107,74,135,0.28)] group"
            >
              <span>Explore Kiduart</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono-accent text-[#6B4A87] hover:text-[#241428] transition-colors px-2 py-1"
            >
              <span>Open kiduart.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={feature.title}
                  delay={0.06 * i}
                  reducedMotion={settings.reducedMotion}
                >
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#6B4A87]/20 shadow-[0_8px_24px_rgba(107,74,135,0.08)] hover:border-[#6B4A87]/40 transition-all flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-[#E7E1F0] border border-[#6B4A87]/20 text-[#6B4A87] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#241428]">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-[#5C4A6E] mt-1 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal
            className="lg:col-span-7"
            delay={0.12}
            reducedMotion={settings.reducedMotion}
          >
            <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-[#6B4A87]/20 shadow-[0_16px_40px_rgba(107,74,135,0.10)] p-6 sm:p-8 flex flex-col justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B4A87] via-[#B9A6D1] to-[#E8A9C2]" />
              <div>
                <div className="text-[10px] font-mono-accent uppercase tracking-widest text-[#6B4A87] mb-2 font-semibold">
                  Why schools choose it
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#241428]">
                  Built for daily campus work — not slide-deck theatre
                </h3>
                <p className="mt-3 text-sm text-[#5C4A6E] leading-relaxed">
                  Capabilities match what ships on the product site. Adoption,
                  integrations, and roadmap items are stated plainly — live
                  today, or clearly labeled as next.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#5C4A6E]">
                {[
                  "Full school operations journey on kiduart.com",
                  "Founding-school charter on kiduart.com/about",
                  "Demo desk: +91 92175 34128 · support@kiduart.com",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6B4A87] shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kiduart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B4A87] text-white text-xs font-heading font-semibold shadow-md"
                >
                  Book a free demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/process"
                  onClick={() => soundEngine.playClick("soft")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7E1F0] border border-[#6B4A87]/25 text-[#6B4A87] text-xs font-mono-accent font-semibold hover:bg-white transition-colors"
                >
                  How we implement →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
