import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Mail, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface ContactTeaserProps {
  settings: SiteSettings;
  onOpenGeminiChat?: () => void;
}

export const ContactTeaser: React.FC<ContactTeaserProps> = ({
  settings,
  onOpenGeminiChat,
}) => {
  return (
    <section
      id="contact-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="rounded-3xl bg-gradient-to-br from-[#FFFFFF] via-[#F7F4FA] to-[#FFFFFF] border border-[#6B4A87]/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#6B4A87]/20 via-[#E8A9C2]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // INITIATE DIALOGUE</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#241428] leading-tight">
            Ready to Build With Resilient Architecture?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#5C4A6E] leading-relaxed">
            Whether you need custom cloud engineering or a live demonstration of our Kiduart School ERP platform, our senior technical team is ready to assist.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick('hero')}
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg group"
            >
              <span>Schedule Architecture Blueprint Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {onOpenGeminiChat && (
              <button
                onClick={() => {
                  soundEngine.playClick('soft');
                  onOpenGeminiChat();
                }}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/50 text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2] font-heading text-xs sm:text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#E8A9C2]" />
                <span>Ask Trevyk AI Assistant</span>
              </button>
            )}
          </div>

          {/* Direct Contact Email */}
          <div className="mt-8 pt-6 border-t border-[#6B4A87]/25 flex flex-wrap justify-center items-center gap-6 text-xs font-mono-accent text-[#5C4A6E]">
            <span>Direct: <a href="mailto:contact@trevyk.com" className="text-[#E8A9C2] hover:underline">contact@trevyk.com</a></span>
            <span className="hidden sm:inline">•</span>
            <span>Response Time: <span className="text-[#241428]">&lt; 4 Hours</span></span>
            <span className="hidden sm:inline">•</span>
            <span>Zero Sales Pressure Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
