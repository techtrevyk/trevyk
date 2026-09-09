import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

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
      <div className="rounded-3xl bg-gradient-to-br from-white via-[#F7F4FA] to-white border border-[#8B5CAD]/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#8B5CAD]/15 via-[#E8A9C2]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // GET IN TOUCH</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#241428] leading-tight">
            Product demo or a custom build — start here
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#5C4A6E] leading-relaxed">
            Ask about Kiduart for your school, or tell us what custom software you need. We reply within one business day — no sales theatre.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick('hero')}
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#8B5CAD] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg group"
            >
              <span>Contact Trevyk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white border border-[#8B5CAD]/50 text-[#5C4A6E] hover:text-[#241428] hover:border-[#8B5CAD] font-heading text-xs sm:text-sm font-medium transition-all"
            >
              <span>Or go to kiduart.com</span>
            </a>

            {onOpenGeminiChat && (
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick('soft');
                  onOpenGeminiChat();
                }}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#5C4A6E] hover:text-[#241428] font-heading text-xs sm:text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#8B5CAD]" />
                <span>Ask the assistant</span>
              </button>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-[#8B5CAD]/25 flex flex-wrap justify-center items-center gap-6 text-xs font-mono-accent text-[#5C4A6E]">
            <span>
              Email:{' '}
              <a href="mailto:contact@trevyk.com" className="text-[#8B5CAD] hover:underline">
                contact@trevyk.com
              </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              Product desk:{' '}
              <a href="tel:+919217534128" className="text-[#8B5CAD] hover:underline">
                +91 92175 34128
              </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Reply: within 1 business day</span>
          </div>
        </div>
      </div>
    </section>
  );
};
