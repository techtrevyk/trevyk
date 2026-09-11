import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  Layers3,
  Workflow,
} from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";
import { MagneticCard } from "../MagneticCard";
import { WowAccent } from "../WowAccent";

interface ServicesTeaserProps {
  settings: SiteSettings;
}

export const ServicesTeaser: React.FC<ServicesTeaserProps> = ({ settings }) => {
  const [focus, setFocus] = useState<number | null>(null);

  const lanes = [
    {
      id: "platforms",
      title: "Product platforms",
      desc: "Domain products with clear ownership  starting with Kiduart School ERP for Indian institutions.",
      tag: "01 / PRODUCT",
      icon: GraduationCap,
      href: "/kiduart",
      outcome: "Ship a ready product lane",
    },
    {
      id: "engineering",
      title: "Enterprise engineering",
      desc: "Purpose-built systems, integrations, and internal tools when catalogs and SaaS fall short.",
      tag: "02 / ENGINEERING",
      icon: Building2,
      href: "/services",
      outcome: "Scope a custom engagement",
    },
    {
      id: "experiences",
      title: "Web, mobile & cloud",
      desc: "Reliable applications and infrastructure designed for the people who operate them daily.",
      tag: "03 / DELIVERY",
      icon: Layers3,
      href: "/services",
      outcome: "Plan a delivery track",
    },
  ];

  return (
    <section
      id="services-teaser"
      className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <ScrollReveal
            className="lg:col-span-5 flex flex-col items-start"
            reducedMotion={settings.reducedMotion}
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-4">
              <span className="font-semibold text-[#F8F6FB]/50">01</span>
              <span>PRODUCTS &amp; SERVICES</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
              Two lanes. One engineering standard.
            </h2>

            <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
              Trevyk runs a product practice and a custom engineering practice
              under the same architecture discipline.
            </p>

            <ul className="mt-6 space-y-2.5 w-full">
              {[
                "Clear problem framing before build",
                "Defined scope and delivery checkpoints",
                "Ownership you retain after launch",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E7E1F0]"
                >
                  <Workflow className="w-3.5 h-3.5 text-[#E8A9C2] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <WowAccent
              kind="lattice"
              focus={focus}
              reducedMotion={settings.reducedMotion}
              className="mt-8 w-full max-w-xs"
              caption="Capability lattice"
            />

            <div className="mt-6">
              <Link
                to="/services"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:bg-[#8558A5] transition-all group"
              >
                <span>View full offerings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 space-y-4">
            {lanes.map((lane, i) => {
              const Icon = lane.icon;
              const active = focus === i;
              return (
                <ScrollReveal
                  key={lane.id}
                  delay={0.06 * i}
                  reducedMotion={settings.reducedMotion}
                >
                  <MagneticCard
                    reducedMotion={settings.reducedMotion}
                    className="block"
                  >
                    <Link
                      to={lane.href}
                      onClick={() => soundEngine.playClick("soft")}
                      onMouseEnter={() => {
                        soundEngine.playHover();
                        setFocus(i);
                      }}
                      onMouseLeave={() => setFocus(null)}
                      className={`relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-4 p-5 pl-6 rounded-2xl bg-[#1E1024]/90 border transition-colors group ${
                        active
                          ? "border-[#E8A9C2]/75"
                          : "border-[#B9A6D1]/40 hover:border-[#E8A9C2]/65"
                      }`}
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6B4A87] via-[#B9A6D1] to-[#E8A9C2]"
                        aria-hidden
                      />
                      <div className="w-11 h-11 rounded-xl bg-[#6B4A87]/25 border border-[#B9A6D1]/45 flex items-center justify-center text-[#E8A9C2] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono-accent text-[#E8A9C2] font-semibold block mb-1">
                          {lane.tag}
                        </span>
                        <h3 className="font-heading font-bold text-base text-[#F8F6FB] group-hover:text-[#E8A9C2] transition-colors">
                          {lane.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-[#B9A6D1] leading-relaxed">
                          {lane.desc}
                        </p>
                      </div>
                      <span className="inline-flex items-center text-[11px] font-mono-accent text-[#E8A9C2] shrink-0">
                        Open <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </Link>
                  </MagneticCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
