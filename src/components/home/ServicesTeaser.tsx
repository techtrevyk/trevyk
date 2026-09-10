import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Cloud } from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";

interface ServicesTeaserProps {
  settings: SiteSettings;
}

export const ServicesTeaser: React.FC<ServicesTeaserProps> = () => {
  const previewServices = [
    {
      id: "kiduart",
      title: "Kiduart School ERP",
      desc: "A complete school operations platform — admissions through fees, academics, and parent communication.",
      tag: "01 / PRODUCT",
      icon: GraduationCap,
      href: "/kiduart",
    },
    {
      id: "custom-software",
      title: "Custom software",
      desc: "Purpose-built systems, integrations, and internal tools when off-the-shelf is not enough.",
      tag: "02 / ENGINEERING",
      icon: Briefcase,
      href: "/services",
    },
    {
      id: "cloud-apps",
      title: "Web, mobile & cloud",
      desc: "Reliable applications and infrastructure designed for the people who use them every day.",
      tag: "03 / DELIVERY",
      icon: Cloud,
      href: "/services",
    },
  ];

  return (
    <section
      id="services-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Distinctive element: vertical index rail */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8A9C2]/40 to-transparent hidden lg:block" />
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="font-mono-accent text-[10px] tracking-[0.3em] text-[#E8A9C2]/70 -rotate-90 origin-center whitespace-nowrap">
          CAPABILITIES
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-4">
              <span className="font-semibold text-[#F8F6FB]/50">01</span>
              <span>PRODUCTS &amp; SERVICES</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
              What we build — and how we work with you
            </h2>

            <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
              From our school platform to custom engineering engagements, every
              engagement starts with a clear problem, a defined scope, and a
              delivery path your team can follow.
            </p>

            <div className="mt-8">
              <Link
                to="/services"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:bg-[#8558A5] transition-all group shadow-[0_10px_28px_rgba(107,74,135,0.32)]"
              >
                <span>View offerings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {previewServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.id}
                    to={svc.href}
                    onClick={() => soundEngine.playClick("soft")}
                    className="relative overflow-hidden p-5 pl-6 rounded-2xl bg-[#1E1024] border border-[#B9A6D1]/40 hover:border-[#E8A9C2]/65 hover:bg-[#24132B] transition-all flex flex-col justify-between group shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6B4A87] via-[#B9A6D1] to-[#E8A9C2]"
                      aria-hidden
                    />
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#6B4A87]/25 border border-[#B9A6D1]/45 flex items-center justify-center text-[#E8A9C2] mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono-accent text-[#E8A9C2] font-semibold block mb-1">
                        {svc.tag}
                      </span>
                      <h3 className="font-heading font-bold text-sm text-[#F8F6FB] group-hover:text-[#E8A9C2] transition-colors leading-snug">
                        {svc.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#B9A6D1] leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#6B4A87]/30 flex items-center text-[11px] font-mono-accent text-[#E8A9C2] group-hover:translate-x-0.5 transition-transform">
                      <span>Learn more</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="rounded-2xl border border-[#B9A6D1]/35 bg-gradient-to-r from-[#1E1024] to-[#24132B] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono-accent text-[#E8A9C2] uppercase tracking-wider block">
                  Featured product
                </span>
                <span className="font-heading font-bold text-base text-[#F8F6FB]">
                  Kiduart School ERP
                </span>
                <p className="text-[11px] text-[#B9A6D1] mt-1 max-w-md">
                  Our school management platform for Indian institutions — see
                  modules and demos on the product site.
                </p>
              </div>
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#6B4A87] text-white text-xs font-heading font-semibold hover:opacity-95 shrink-0"
              >
                Visit kiduart.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
