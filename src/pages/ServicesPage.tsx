import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Cloud,
  Database,
  ShieldCheck,
  Smartphone,
  Layers,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Zap,
  Clock,
  Gauge,
  Code2,
  Brain,
  Palette,
  HeartHandshake,
  Lock,
} from "lucide-react";
import { SiteSettings, ServiceItem } from "../types";
import { SERVICES_DATA } from "../data/services";
import { ServiceCard3D } from "../components/services/ServiceCard3D";
import { ServiceDetailModal } from "../components/ServiceDetailModal";
import { MagneticButton } from "../components/MagneticButton";
import { BrandGradientDivider } from "../components/BrandGradientBar";
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

  const categories = [
    { id: "all", label: "All Services (8)" },
    { id: "custom-software", label: "Custom Software" },
    { id: "web-mobile", label: "Web & Mobile" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "ai-ml", label: "AI/ML & Automation" },
    { id: "erp-crm", label: "ERP & CRM (Kiduart)" },
    { id: "ui-ux", label: "UI/UX & 3D" },
    { id: "it-consulting", label: "IT Consulting" },
    { id: "cybersecurity", label: "Cybersecurity" },
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
      className="w-full min-h-screen pt-28 sm:pt-36 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRODUCTS &amp; IT SERVICES</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8F6FB] leading-tight">
            What Trevyk offers product and services
          </h1>

          <p className="mt-5 text-[#B9A6D1] text-base sm:text-lg leading-relaxed">
            Kiduart School ERP is our flagship product for schools. Alongside it
            we deliver custom software, web and mobile, cloud, design, advisory,
            and practical security — scoped to what you need, without invented
            SLA badges.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="mt-10 flex flex-wrap gap-2 pb-4 border-b border-[#6B4A87]/25">
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
                    ? "bg-[#6B4A87] text-white font-bold shadow-[0_8px_20px_rgba(107,74,135,0.28)]"
                    : "bg-[#1E1024] text-[#B9A6D1] hover:text-[#6B4A87] border border-[#6B4A87]/35 hover:border-[#6B4A87] hover:bg-[#1E1024]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Brand engagement strip */}
        <div className="mt-10 rounded-2xl overflow-hidden border-2 border-[#6B4A87]/45 bg-gradient-to-r from-[#1E1024] via-white to-[#2A1830] p-6 sm:p-8 shadow-[0_12px_32px_rgba(107,74,135,0.12)] relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#6B4A87] to-[#E8A9C2]"
            aria-hidden
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pl-2">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono-accent text-[#6B4A87] uppercase tracking-widest font-semibold">
                HOW WE ENGAGE
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-2xl text-[#F8F6FB] mt-1">
                Source ownership, clear scope, honest handoff
              </h2>
              <p className="text-xs sm:text-sm text-[#B9A6D1] mt-1.5">
                Custom work includes source you own. Product work points to{" "}
                <a
                  href="https://kiduart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B4A87] font-semibold underline underline-offset-2"
                >
                  kiduart.com
                </a>
                . No invented SLA theatre.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#6B4A87] text-white text-xs font-heading font-semibold shrink-0 shadow-[0_8px_22px_rgba(107,74,135,0.28)] hover:bg-[#8558A5] transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>

        {/* 8-Card Services Grid with Damped 3D Tilt and Click-to-Expand */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard3D
              key={service.id}
              service={service}
              index={index}
              isSelected={activeModalService?.id === service.id}
              onSelect={(s) => setActiveModalService(s)}
              isExpandedInline={expandedCardId === service.id}
              onToggleExpandInline={() => handleToggleExpandInline(service.id)}
            />
          ))}
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* Engagement Models & Architecture Consultation Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#1E1024] via-[#2A1830] to-[#1E1024] border border-[#6B4A87]/40 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono-accent text-[#6B4A87] uppercase tracking-widest block mb-2">
                TAILORED ENGAGEMENT
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
                Engagement shapes that stay honest
              </h2>
              <p className="mt-3 text-sm text-[#B9A6D1] leading-relaxed">
                Product demos for Kiduart, scoped custom builds, or advisory
                pick the lane that matches the problem. We reply within one
                business day.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-[#1E1024] border border-[#6B4A87]/30">
                  <div className="font-heading font-bold text-sm text-[#F8F6FB]">
                    Kiduart product
                  </div>
                  <div className="text-xs text-[#B9A6D1] mt-0.5">
                    School ERP demos via kiduart.com.
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1E1024] border border-[#6B4A87]/30">
                  <div className="font-heading font-bold text-sm text-[#F8F6FB]">
                    Scoped builds
                  </div>
                  <div className="text-xs text-[#B9A6D1] mt-0.5">
                    Milestone delivery with clear handoff.
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1E1024] border border-[#6B4A87]/30">
                  <div className="font-heading font-bold text-sm text-[#F8F6FB]">
                    Advisory
                  </div>
                  <div className="text-xs text-[#B9A6D1] mt-0.5">
                    Architecture &amp; build-vs-buy reviews.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick("hero")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#F8F6FB] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg group"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => {
                  soundEngine.playClick("soft");
                  onOpenArchitectureModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#1E1024] border border-[#6B4A87]/50 text-[#B9A6D1] hover:text-[#F8F6FB] hover:border-[#E8A9C2] text-xs font-mono-accent transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E8A9C2]" />
                <span>Inspect 3D Core Architecture</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOpenArchitecture={onOpenArchitectureModal}
      />
    </div>
  );
};
