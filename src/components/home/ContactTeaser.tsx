import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
} from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";

interface ContactTeaserProps {
  settings: SiteSettings;
  onOpenGeminiChat?: () => void;
}

export const ContactTeaser: React.FC<ContactTeaserProps> = ({
  settings,
  onOpenGeminiChat,
}) => {
  const tracks = [
    {
      title: "Product demo",
      desc: "See Kiduart on a real school journey.",
      icon: GraduationCap,
      href: "https://kiduart.com",
      external: true,
    },
    {
      title: "Engineering brief",
      desc: "Scope a custom system or integration.",
      icon: Briefcase,
      href: "/contact",
      external: false,
    },
    {
      title: "Architecture review",
      desc: "Walk the modular stack with our team.",
      icon: Layers,
      href: "/technology",
      external: false,
    },
  ];

  return (
    <section
      id="contact-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <ScrollReveal
        className="max-w-7xl mx-auto"
        reducedMotion={settings.reducedMotion}
      >
        <div className="rounded-3xl bg-[#1E1024]/95 border border-[#B9A6D1]/40 p-8 sm:p-12 relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6B4A87] via-[#E8A9C2] to-[#B9A6D1]" />
          <div className="absolute inset-y-8 left-0 w-[2px] bg-gradient-to-b from-[#E8A9C2]/60 to-transparent hidden sm:block" />
          <div className="absolute inset-y-8 right-0 w-[2px] bg-gradient-to-b from-[#B9A6D1]/50 to-transparent hidden sm:block" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] bg-gradient-to-r from-[#6B4A87]/25 via-[#E8A9C2]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-4">
                <span className="font-semibold text-[#F8F6FB]/50">06</span>
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F8F6FB] leading-tight">
                Tell us what you need to build next.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#B9A6D1] leading-relaxed">
                Product demos, architecture reviews, or a scoped engineering
                engagement — we reply within one business day with a clear next
                step.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  onClick={() => soundEngine.playClick("hero")}
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-[0_12px_30px_rgba(107,74,135,0.4)] group"
                >
                  <span>Contact Trevyk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {onOpenGeminiChat && (
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick("soft");
                      onOpenGeminiChat();
                    }}
                    className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-[#2A1830] border border-[#6B4A87]/50 text-[#B9A6D1] hover:text-[#F8F6FB] font-heading text-xs sm:text-sm font-medium transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-[#E8A9C2]" />
                    <span>Ask the assistant</span>
                  </button>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#6B4A87]/35 flex flex-col gap-2 text-xs font-mono-accent text-[#B9A6D1]">
                <span>
                  Email:{" "}
                  <a
                    href="mailto:contact@trevyk.com"
                    className="text-[#E8A9C2] hover:underline"
                  >
                    contact@trevyk.com
                  </a>
                </span>
                <span>
                  Product desk:{" "}
                  <a
                    href="tel:+919217534128"
                    className="text-[#E8A9C2] hover:underline"
                  >
                    +91 92175 34128
                  </a>
                </span>
                <span>Reply within 1 business day</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {tracks.map((track) => {
                const Icon = track.icon;
                const className =
                  "h-full p-5 rounded-2xl bg-[#2A1830]/90 border border-[#B9A6D1]/35 hover:border-[#E8A9C2]/60 transition-colors flex flex-col gap-3 group";
                const body = (
                  <>
                    <div className="w-9 h-9 rounded-xl bg-[#1E1024] border border-[#B9A6D1]/40 flex items-center justify-center text-[#E8A9C2]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm text-[#F8F6FB] group-hover:text-[#E8A9C2] transition-colors">
                        {track.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] text-[#B9A6D1] leading-relaxed">
                        {track.desc}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center text-[10px] font-mono-accent text-[#E8A9C2]">
                      Continue <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </>
                );

                if (track.external) {
                  return (
                    <a
                      key={track.title}
                      href={track.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {body}
                    </a>
                  );
                }

                return (
                  <Link
                    key={track.title}
                    to={track.href}
                    onClick={() => soundEngine.playClick("soft")}
                    className={className}
                  >
                    {body}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
