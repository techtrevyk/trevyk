import React, { useState } from "react";
import {
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SiteSettings, ServiceItem } from "../types";
import { SERVICES_DATA } from "../data/services";
import { ServiceCard3D } from "../components/services/ServiceCard3D";
import { ServiceDetailModal } from "../components/ServiceDetailModal";
import { PageAtmosphere } from "../components/PageAtmosphere";
import { SectionBridge } from "../components/SectionBridge";
import { GapAccent } from "../components/GapAccent";
import { ScrollReveal } from "../components/ScrollReveal";
import { soundEngine } from "../utils/audioEngine";
import { Link } from "react-router-dom";

interface ServicesPageProps {
  settings: SiteSettings;
  onOpenArchitectureModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  settings,
  onOpenArchitectureModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalService, setActiveModalService] =
    useState<ServiceItem | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [spotlightId, setSpotlightId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "custom-software", label: "Custom Software" },
    { id: "web-mobile", label: "Web & Mobile" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "ai-ml", label: "AI & Automation" },
    { id: "erp-crm", label: "Kiduart ERP" },
    { id: "ui-ux", label: "UI/UX" },
    { id: "it-consulting", label: "Advisory" },
    { id: "cybersecurity", label: "Security" },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedCategory === "all") return true;
    return service.category === selectedCategory;
  });

  const handleToggleExpandInline = (serviceId: string) => {
    setExpandedCardId((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <div
      id="services-page"
      className="relative w-full min-h-screen pt-28 sm:pt-36 pb-28 overflow-hidden"
    >
      <PageAtmosphere
        variant="services"
        lightBand={{ top: "42%", height: "18%" }}
        bands={[
          { top: "18%", height: "12%", tone: "ink" },
          { top: "72%", height: "14%", tone: "pink" },
        ]}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left content, right breathing room for persistent 3D */}
        <ScrollReveal reducedMotion={settings.reducedMotion}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024]/95 border border-[#B9A6D1]/40 text-[#E8A9C2] font-mono-accent text-xs mb-5">
                <Cpu className="w-3.5 h-3.5" />
                <span>PRODUCTS &amp; SERVICES</span>
              </div>

              <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-[3.25rem] text-[#F8F6FB] leading-[1.12] tracking-tight">
                Capabilities shaped for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8F6FB] via-[#B9A6D1] to-[#E8A9C2]">
                  real operations
                </span>
              </h1>

              <p className="mt-5 text-[#B9A6D1] text-base sm:text-lg leading-relaxed max-w-2xl">
                From Kiduart School ERP to custom platforms, cloud, design, and
                advisory — each engagement starts with a clear problem and a
                delivery path your team can follow.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-5 pb-1">
              <GapAccent
                variant="orbit"
                reducedMotion={settings.reducedMotion}
                caption="Live catalogue mesh"
              />
              <div className="text-right">
                <div className="font-mono-accent text-[10px] tracking-[0.25em] uppercase text-[#E8A9C2]/80">
                  Catalogue
                </div>
                <div className="font-heading font-bold text-4xl text-[#F8F6FB] mt-1">
                  {SERVICES_DATA.length}
                </div>
                <div className="text-xs text-[#B9A6D1] mt-0.5">
                  offerings · scoped honestly
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap gap-2 pb-5 border-b border-[#B9A6D1]/25">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundEngine.playClick("soft");
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono-accent transition-all ${
                  isSelected
                    ? "bg-[#6B4A87] text-[#F8F6FB] font-semibold shadow-[0_8px_22px_rgba(107,74,135,0.35)] border border-[#E8A9C2]/40"
                    : "bg-[#1E1024]/90 text-[#B9A6D1] border border-[#B9A6D1]/30 hover:text-[#F8F6FB] hover:border-[#E8A9C2]/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <SectionBridge
          className="mt-12"
          label="Catalogue"
          reducedMotion={settings.reducedMotion}
        />

        {/* Engagement strip — dark coordinated, no white mid-band */}
        <ScrollReveal
          className="mt-2 relative rounded-2xl overflow-hidden border border-[#B9A6D1]/35 surface-lilac-mist p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          reducedMotion={settings.reducedMotion}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              background:
                "linear-gradient(105deg, rgba(107,74,135,0.35) 0%, transparent 45%, rgba(232,169,194,0.12) 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6B4A87] via-[#B9A6D1] to-[#E8A9C2]"
            aria-hidden
          />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pl-2">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono-accent text-[#E8A9C2] uppercase tracking-widest font-semibold">
                How we engage
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-2xl text-[#F8F6FB] mt-1.5">
                Source ownership. Clear scope. Honest handoff.
              </h2>
              <p className="text-sm text-[#B9A6D1] mt-2 leading-relaxed">
                Custom work includes source you own. Product conversations point
                to{" "}
                <a
                  href="https://kiduart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8A9C2] font-semibold underline underline-offset-2 hover:text-[#F8F6FB]"
                >
                  kiduart.com
                </a>
                . No invented SLA theatre.
              </p>
            </div>
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick("soft")}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#6B4A87] text-[#F8F6FB] text-xs font-heading font-semibold shrink-0 shadow-[0_8px_22px_rgba(107,74,135,0.35)] hover:bg-[#8558A5] border border-[#E8A9C2]/25 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </ScrollReveal>

        <SectionBridge
          className="mt-10"
          label="Offerings"
          tone="lilac"
          reducedMotion={settings.reducedMotion}
        />

        {/* Services grid — spotlight dims siblings on hover */}
        <div
          className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          onMouseLeave={() => setSpotlightId(null)}
        >
          {filteredServices.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={Math.min(index * 0.05, 0.25)}
              reducedMotion={settings.reducedMotion}
              className={`transition-opacity duration-300 ${
                spotlightId && spotlightId !== service.id
                  ? "opacity-40"
                  : "opacity-100"
              }`}
            >
              <div
                onMouseEnter={() => setSpotlightId(service.id)}
                onFocus={() => setSpotlightId(service.id)}
              >
                <ServiceCard3D
                  service={service}
                  index={index}
                  isSelected={activeModalService?.id === service.id}
                  onSelect={(s) => setActiveModalService(s)}
                  isExpandedInline={expandedCardId === service.id}
                  onToggleExpandInline={() => handleToggleExpandInline(service.id)}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <SectionBridge
          className="mt-10"
          label="Engage"
          tone="pink"
          reducedMotion={settings.reducedMotion}
        />

        {/* Bottom CTA — same color system, clearer hierarchy */}
        <ScrollReveal
          className="relative rounded-3xl border border-[#B9A6D1]/35 surface-pink-wash p-8 sm:p-12 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          reducedMotion={settings.reducedMotion}
        >
          <div
            className="absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(232,169,194,0.35), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-mono-accent text-[#E8A9C2] uppercase tracking-widest block mb-2">
                Next step
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
                Pick the lane that matches the problem
              </h2>
              <p className="mt-3 text-sm text-[#B9A6D1] leading-relaxed max-w-xl">
                Product demos for Kiduart, scoped custom builds, or advisory —
                we reply within one business day.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    title: "Kiduart product",
                    desc: "School ERP demos via kiduart.com",
                  },
                  {
                    title: "Scoped builds",
                    desc: "Milestone delivery with clear handoff",
                  },
                  {
                    title: "Advisory",
                    desc: "Architecture & build-vs-buy reviews",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-[#2A1830]/90 border border-[#B9A6D1]/25"
                  >
                    <div className="font-heading font-bold text-sm text-[#F8F6FB]">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#B9A6D1] mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
              <div className="hidden lg:block w-full">
                <GapAccent
                  variant="modules"
                  reducedMotion={settings.reducedMotion}
                  caption="Engagement stack"
                />
              </div>
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick("hero")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#8558A5] text-[#F8F6FB] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-[0_12px_28px_rgba(107,74,135,0.4)] group border border-[#E8A9C2]/25"
              >
                <span>Request a proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick("soft");
                  onOpenArchitectureModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#2A1830] border border-[#B9A6D1]/40 text-[#B9A6D1] hover:text-[#F8F6FB] hover:border-[#E8A9C2] text-xs font-mono-accent transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E8A9C2]" />
                <span>Inspect architecture</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOpenArchitecture={onOpenArchitectureModal}
      />
    </div>
  );
};
