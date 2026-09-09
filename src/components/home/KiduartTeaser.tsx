import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  CreditCard,
  Users,
  Clock,
  Send,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface KiduartTeaserProps {
  settings: SiteSettings;
}

export const KiduartTeaser: React.FC<KiduartTeaserProps> = () => {
  const features = [
    {
      title: 'Admissions → student records',
      desc: 'Enquiry to registration creates one profile the whole school reads.',
      icon: Users,
    },
    {
      title: 'Attendance & parent updates',
      desc: 'Mark fast, inform parents the same day — with a clear trail.',
      icon: Clock,
    },
    {
      title: 'Fees & finance ledger',
      desc: 'Structure, collection, dues and receipts in one place.',
      icon: CreditCard,
    },
    {
      title: 'Parent communication',
      desc: 'Targeted notices by class or group, with a delivery record.',
      icon: Send,
    },
  ];

  return (
    <section
      id="kiduart-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#E7E1F0] text-[#241428] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between mb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4C3E3] border border-[#8B5CAD]/30 text-[#8B5CAD] font-mono-accent text-xs mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-[#8B5CAD]" />
              <span>03 // FLAGSHIP PRODUCT · KIDUART</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#241428] leading-tight tracking-tight">
              School ERP for Indian schools — from Trevyk
            </h2>

            <p className="mt-4 text-[#5A3875] text-base sm:text-lg max-w-3xl leading-relaxed">
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B5CAD] font-semibold underline underline-offset-2"
              >
                Kiduart
              </a>{' '}
              is a cloud{' '}
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B5CAD] font-semibold underline underline-offset-2"
              >
                school management system
              </a>{' '}
              that connects admissions, records, attendance, exams, fees, transport, library, HR and parent communication — the same product journey published on kiduart.com.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <Link
              to="/kiduart"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#8B5CAD] text-white font-heading text-xs sm:text-sm font-semibold hover:bg-[#5A3875] transition-all shadow-md group"
            >
              <span>Explore on Trevyk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono-accent text-[#8B5CAD] hover:text-[#241428] transition-colors px-2 py-1"
            >
              <span>Visit kiduart.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#BEABD6]/50 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-xl bg-[#E7E1F0] text-[#8B5CAD] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#241428]">{feature.title}</h3>
                    <p className="text-xs text-[#5A3875] mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-[#8B5CAD]/25 shadow-xl p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <div className="text-[10px] font-mono-accent uppercase tracking-widest text-[#8B5CAD] mb-2">
                  Honest product note
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#241428]">
                  Built for daily school work — not slide-deck stats
                </h3>
                <p className="mt-3 text-sm text-[#5C4A6E] leading-relaxed">
                  No invented adoption numbers here. Capabilities match screens that ship on{' '}
                  <a href="https://kiduart.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5CAD] font-semibold underline underline-offset-2">
                    kiduart.com
                  </a>
                  . KIDUORBIT (AI on school data) is labelled as a next phase — not live yet.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[#5C4A6E]">
                {[
                  '12-step school operations journey on the product site',
                  'Founding-school charter on kiduart.com/about',
                  'Demo: +91 92175 34128 · support@kiduart.com',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CAD] shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kiduart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B5CAD] text-white text-xs font-heading font-semibold"
                >
                  Book a free demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://kiduart.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F4FA] border border-[#8B5CAD]/25 text-[#5C4A6E] text-xs font-mono-accent"
                >
                  About Kiduart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
