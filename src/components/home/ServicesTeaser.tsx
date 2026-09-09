import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Cloud, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Terminal,
  Zap
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface ServicesTeaserProps {
  settings: SiteSettings;
}

export const ServicesTeaser: React.FC<ServicesTeaserProps> = ({ settings }) => {
  const previewServices = [
    {
      id: 'custom-software',
      title: 'Distributed Software Architecture',
      desc: 'Fault-tolerant microservices, event-driven backends, and low-latency API layers.',
      tag: '01 / ARCHITECTURE',
      icon: Layers,
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Engineering & DevOps',
      desc: 'Kubernetes orchestration, multi-region failover, and automated CI/CD pipelines.',
      tag: '02 / CLOUD & K8S',
      icon: Cloud,
    },
    {
      id: 'security-compliance',
      title: 'Zero-Trust Security & Data Lakes',
      desc: 'Cryptographic identity verification, role-based governance, and ClickHouse analytics.',
      tag: '03 / DATA & SECURITY',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="services-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F7F4FA]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading, Hook, and Link */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>01 // ENTERPRISE SERVICES</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            High-Performance IT Engineering
          </h2>

          <p className="mt-4 text-[#5C4A6E] text-sm sm:text-base leading-relaxed">
            We architect, deploy, and operate custom software systems built for heavy transaction volume, zero vendor lock-in, and continuous 99.99% uptime.
          </p>

          <div className="mt-8">
            <Link
              to="/services"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/50 text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:border-[#E8A9C2] hover:bg-[#FFFFFF] transition-all group shadow-sm"
            >
              <span>Explore All 6 Enterprise Services</span>
              <ArrowRight className="w-4 h-4 text-[#E8A9C2] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: 3 Compact Cards + High-Tech Graphic Asset */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {previewServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.id}
                  to="/services"
                  onClick={() => soundEngine.playClick('soft')}
                  className="p-5 rounded-2xl bg-[#FFFFFF]/80 border border-[#6B4A87]/30 hover:border-[#E8A9C2]/60 hover:bg-[#FFFFFF] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2] mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono-accent text-[#5C4A6E] block mb-1">
                      {svc.tag}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-[#241428] group-hover:text-[#E8A9C2] transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5C4A6E]/80 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-[#6B4A87]/20 flex items-center text-[11px] font-mono-accent text-[#6B4A87] group-hover:translate-x-0.5 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Real Cloud Datacenter Image Asset with Subtle Overlay */}
          <div className="relative rounded-2xl overflow-hidden border border-[#6B4A87]/30 h-32 sm:h-36 group">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
              alt="Trevyk Enterprise Cloud Infrastructure & Datacenter"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono-accent text-[#6B4A87] uppercase tracking-wider block">
                  Infrastructure Telemetry
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#241428]">
                  Multi-Region High-Availability Infrastructure
                </span>
                <p className="text-[11px] text-[#5C4A6E] mt-0.5 hidden sm:block">
                  Sub-millisecond routing with automated failover across distributed availability zones.
                </p>
              </div>

              <div className="hidden sm:flex flex-col items-end text-right font-mono-accent text-xs">
                <span className="text-[#6B4A87] font-bold">Kiduart</span>
                <span className="text-[10px] text-[#5C4A6E]">LIVE PRODUCT</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
