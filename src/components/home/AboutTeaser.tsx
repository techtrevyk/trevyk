import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { SiteSettings } from "../../types";
import { TrevykLogo } from "../TrevykLogo";
import { soundEngine } from "../../utils/audioEngine";

interface AboutTeaserProps {
  settings: SiteSettings;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = () => {
  return (
    <section
      id="about-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#1E1024] rounded-3xl border border-[#B9A6D1]/40 my-8 shadow-[0_24px_60px_rgba(0,0,0,0.38)] overflow-hidden"
    >
      {/* Distinctive element: oversized quote mark */}
      <div
        className="pointer-events-none absolute left-6 top-4 font-heading text-[8rem] leading-none text-[#6B4A87]/20 select-none"
        aria-hidden
      >
        “
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl border border-[#B9A6D1]/40 bg-[#2A1830] p-8 sm:p-12 flex flex-col items-center text-center gap-5 shadow-[0_12px_32px_rgba(0,0,0,0.25)]">
            <TrevykLogo layout="horizontal" size="lg" theme="dark" showTagline={true} />
            <p className="text-sm text-[#B9A6D1] max-w-md leading-relaxed">
              We build software people can run every day — products with clear
              purpose, and custom work when the problem demands a tailored
              system.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-[10px] font-mono-accent uppercase tracking-wider text-[#E8A9C2]">
              <span className="px-2.5 py-1 rounded-full bg-[#1E1024] border border-[#B9A6D1]/30">
                Noida, India
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1E1024] border border-[#B9A6D1]/30">
                Product + engineering
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1E1024] border border-[#B9A6D1]/30">
                Honest claims
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
            <span className="font-semibold text-[#F8F6FB]/50">05</span>
            <span>ABOUT TREVYK</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
            A technology company with product discipline
          </h2>

          <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
            Trevyk Technologies turns vision into progress by shipping real
            software — our own platforms and client engagements alike. We do
            not invent metrics, borrow certifications, or oversell what is not
            ready.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 w-full">
            <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/35">
              <GraduationCap className="w-4 h-4 text-[#E8A9C2] mb-2" />
              <div className="text-xs text-[#F8F6FB] font-medium">
                Product line
              </div>
              <div className="text-[10px] text-[#B9A6D1] mt-0.5">
                Kiduart School ERP
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#2A1830] border border-[#B9A6D1]/35">
              <Briefcase className="w-4 h-4 text-[#E8A9C2] mb-2" />
              <div className="text-xs text-[#F8F6FB] font-medium">
                Services lane
              </div>
              <div className="text-[10px] text-[#B9A6D1] mt-0.5">
                Custom software &amp; integrations
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};
