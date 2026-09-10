import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";

interface ContactTeaserProps {
  settings: SiteSettings;
  onOpenGeminiChat?: () => void;
}

export const ContactTeaser: React.FC<ContactTeaserProps> = ({
  onOpenGeminiChat,
}) => {
  return (
    <section
      id="contact-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="rounded-3xl bg-[#1E1024] border border-[#B9A6D1]/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
        {/* Distinctive element: dual accent edge */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6B4A87] via-[#E8A9C2] to-[#B9A6D1]" />
        <div className="absolute inset-y-8 left-0 w-[2px] bg-gradient-to-b from-[#E8A9C2]/60 to-transparent hidden sm:block" />
        <div className="absolute inset-y-8 right-0 w-[2px] bg-gradient-to-b from-[#B9A6D1]/50 to-transparent hidden sm:block" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] bg-gradient-to-r from-[#6B4A87]/25 via-[#E8A9C2]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-4">
            <span className="font-semibold text-[#F8F6FB]/50">06</span>
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#F8F6FB] leading-tight">
            Tell us what you need to build next
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#B9A6D1] leading-relaxed">
            Product demos, architecture reviews, or a scoped engineering
            engagement — we reply within one business day with a clear next
            step.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick("hero")}
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-[0_12px_30px_rgba(107,74,135,0.4)] group"
            >
              <span>Contact Trevyk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E7E1F0] hover:text-[#F8F6FB] hover:border-[#E8A9C2] font-heading text-xs sm:text-sm font-medium transition-all"
            >
              <span>Kiduart product site</span>
            </a>

            {onOpenGeminiChat && (
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick("soft");
                  onOpenGeminiChat();
                }}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#2A1830] border border-[#6B4A87]/50 text-[#B9A6D1] hover:text-[#F8F6FB] font-heading text-xs sm:text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#E8A9C2]" />
                <span>Ask the assistant</span>
              </button>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-[#6B4A87]/35 flex flex-wrap justify-center items-center gap-6 text-xs font-mono-accent text-[#B9A6D1]">
            <span>
              Email:{" "}
              <a
                href="mailto:contact@trevyk.com"
                className="text-[#E8A9C2] hover:underline"
              >
                contact@trevyk.com
              </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              Product desk:{" "}
              <a
                href="tel:+919217534128"
                className="text-[#E8A9C2] hover:underline"
              >
                +91 92175 34128
              </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Reply within 1 business day</span>
          </div>
        </div>
      </div>
    </section>
  );
};
