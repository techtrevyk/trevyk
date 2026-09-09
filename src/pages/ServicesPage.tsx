import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Lock
} from 'lucide-react';
import { SiteSettings, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard3D } from '../components/services/ServiceCard3D';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { MagneticButton } from '../components/MagneticButton';
import { BrandGradientDivider } from '../components/BrandGradientBar';
import { soundEngine } from '../utils/audioEngine';
import { Link } from 'react-router-dom';

interface ServicesPageProps {
  settings: SiteSettings;
  onOpenArchitectureModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  settings,
  onOpenArchitectureModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'custom-software', label: 'Custom Software' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
    { id: 'ai-ml', label: 'AI/ML & Automation' },
    { id: 'erp-crm', label: 'ERP & CRM (Kiduart)' },
    { id: 'ui-ux', label: 'UI/UX & 3D' },
    { id: 'it-consulting', label: 'IT Consulting' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  const handleToggleExpandInline = (serviceId: string) => {
    setExpandedCardId((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <div id="services-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRODUCTS &amp; IT SERVICES</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
            What Trevyk offers — product and services
          </h1>

          <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed">
            Kiduart School ERP is our flagship product for schools. Alongside it we take on B2B custom software, web/mobile, cloud, design, advisory, and practical security — scoped to what you need, without invented SLA badges.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="mt-10 flex flex-wrap gap-2 pb-4 border-b border-[#8B5CAD]/25">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundEngine.playClick('soft');
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono-accent transition-all ${
                  isSelected
                    ? 'bg-[#8B5CAD] text-white font-bold shadow-[0_8px_20px_rgba(139,92,173,0.28)]'
                    : 'bg-white text-[#5C4A6E] hover:text-[#8B5CAD] border border-[#8B5CAD]/35 hover:border-[#8B5CAD] hover:bg-[#EDE8F3]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Brand engagement strip */}
        <div className="mt-10 rounded-2xl overflow-hidden border-2 border-[#8B5CAD]/45 bg-gradient-to-r from-[#EDE8F3] via-white to-[#F7F4FA] p-6 sm:p-8 shadow-[0_12px_32px_rgba(139,92,173,0.12)] relative">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8B5CAD] to-[#E8A9C2]" aria-hidden />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pl-2">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono-accent text-[#8B5CAD] uppercase tracking-widest font-semibold">
                HOW WE ENGAGE
              </span>
              <h2 className="font-heading font-bold text-lg sm:text-2xl text-[#241428] mt-1">
                Source ownership, clear scope, honest handoff
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4A6E] mt-1.5">
                Custom work includes source you own. Product work points to{' '}
                <a href="https://kiduart.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5CAD] font-semibold underline underline-offset-2">
                  kiduart.com
                </a>
                . No invented SLA theatre.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#8B5CAD] text-white text-xs font-heading font-semibold shrink-0 shadow-[0_8px_22px_rgba(139,92,173,0.28)] hover:bg-[#A078C8] transition-colors"
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
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#FFFFFF] via-[#F7F4FA] to-[#FFFFFF] border border-[#8B5CAD]/40 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono-accent text-[#8B5CAD] uppercase tracking-widest block mb-2">
                TAILORED ENGAGEMENT
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
                Engagement shapes that stay honest
              </h2>
              <p className="mt-3 text-sm text-[#5C4A6E] leading-relaxed">
                Product demos for Kiduart, scoped custom builds, or advisory — pick the lane that matches the problem. We reply within one business day.
              </p>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#8B5CAD]/30">
                  <div className="font-heading font-bold text-sm text-[#241428]">Kiduart product</div>
                  <div className="text-xs text-[#5C4A6E] mt-0.5">School ERP demos via kiduart.com.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#8B5CAD]/30">
                  <div className="font-heading font-bold text-sm text-[#241428]">Scoped builds</div>
                  <div className="text-xs text-[#5C4A6E] mt-0.5">Milestone delivery with clear handoff.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#8B5CAD]/30">
                  <div className="font-heading font-bold text-sm text-[#241428]">Advisory</div>
                  <div className="text-xs text-[#5C4A6E] mt-0.5">Architecture &amp; build-vs-buy reviews.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <Link
                to="/contact"
                onClick={() => soundEngine.playClick('hero')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CAD] to-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg group"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => {
                  soundEngine.playClick('soft');
                  onOpenArchitectureModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#FFFFFF] border border-[#8B5CAD]/50 text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2] text-xs font-mono-accent transition-colors"
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
