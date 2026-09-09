import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Cloud,
  GraduationCap,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface ServicesTeaserProps {
  settings: SiteSettings;
}

export const ServicesTeaser: React.FC<ServicesTeaserProps> = () => {
  const previewServices = [
    {
      id: 'kiduart',
      title: 'Kiduart School ERP',
      desc: 'Our flagship product for Indian schools — admissions to fees and parent updates.',
      tag: '01 / PRODUCT',
      icon: GraduationCap,
      href: '/kiduart',
    },
    {
      id: 'custom-software',
      title: 'Custom software (B2B)',
      desc: 'Scoped backends, integrations, and tools when you need more than SaaS.',
      tag: '02 / SERVICES',
      icon: Briefcase,
      href: '/services',
    },
    {
      id: 'cloud-apps',
      title: 'Cloud, web & mobile',
      desc: 'Apps and hosting setups that stay deployable for staff and customers.',
      tag: '03 / BUILD',
      icon: Cloud,
      href: '/services',
    },
  ];

  return (
    <section
      id="services-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F7F4FA]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>01 // PRODUCTS &amp; SERVICES</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            B2B services. B2C products. One parent company.
          </h2>

          <p className="mt-4 text-[#5C4A6E] text-sm sm:text-base leading-relaxed">
            Trevyk ships Kiduart for schools and takes on custom IT work for organisations that need a tailored build. No invented uptime badges — just clear lanes for product and services.
          </p>

          <div className="mt-8">
            <Link
              to="/services"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#8B5CAD] text-white font-heading text-xs sm:text-sm font-semibold hover:bg-[#A078C8] transition-all group shadow-[0_10px_28px_rgba(139,92,173,0.28)]"
            >
              <span>See all services</span>
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
                  onClick={() => soundEngine.playClick('soft')}
                  className="relative overflow-hidden p-5 pl-6 rounded-2xl bg-[#F7F4FA] border-2 border-[#8B5CAD]/40 hover:border-[#8B5CAD] hover:bg-[#EDE8F3] transition-all flex flex-col justify-between group shadow-[0_8px_22px_rgba(139,92,173,0.10)]"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8B5CAD] to-[#E8A9C2]" aria-hidden />
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#8B5CAD]/15 border border-[#8B5CAD]/45 flex items-center justify-center text-[#8B5CAD] mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono-accent text-[#8B5CAD] font-semibold block mb-1">
                      {svc.tag}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-[#241428] group-hover:text-[#8B5CAD] transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5C4A6E] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#8B5CAD]/20 flex items-center text-[11px] font-mono-accent text-[#8B5CAD] group-hover:translate-x-0.5 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="rounded-2xl border border-[#8B5CAD]/25 bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono-accent text-[#8B5CAD] uppercase tracking-wider block">
                Flagship product
              </span>
              <span className="font-heading font-bold text-base text-[#241428]">
                Kiduart School ERP
              </span>
              <p className="text-[11px] text-[#5C4A6E] mt-1 max-w-md">
                Cloud school management for Indian schools — see the live product site for modules and demos.
              </p>
            </div>
            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#8B5CAD] text-white text-xs font-heading font-semibold hover:opacity-95 shrink-0"
            >
              Visit kiduart.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
