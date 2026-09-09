import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Unlock, 
  CreditCard, 
  Users, 
  CheckCircle2, 
  Award, 
  Lock, 
  Server, 
  Zap, 
  FileCheck, 
  Globe2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { CountUpNumber } from './CountUpNumber';
import { AmbientParticles } from './AmbientParticles';
import { SiteSettings } from '../types';

interface StatsTrustSectionProps {
  settings: SiteSettings;
  scrollProgress: number;
  onOpenArchitectureModal?: () => void;
}

export const StatsTrustSection: React.FC<StatsTrustSectionProps> = ({
  settings,
  scrollProgress,
  onOpenArchitectureModal,
}) => {
  const [activeTrustTab, setActiveTrustTab] = useState<'all' | 'compliance' | 'stack' | 'institutions'>('all');

  // Key Pillar Stat Blocks (wow #18)
  const pillarStats = [
    {
      id: 'zero-hidden',
      number: 0,
      prefix: '$',
      suffix: '',
      unitLabel: 'Hidden Licensing Charges',
      title: 'Zero Hidden Charges',
      tagline: '100% transparent cloud billing with zero surprise invoices.',
      description:
        'We never bill for basic software updates, bug fixes, or user scaling tiers. You get predictable, straightforward subscription terms with zero onboarding friction.',
      icon: CreditCard,
      color: '#E8A9C2',
      badge: 'Zero Upfront Friction',
    },
    {
      id: 'no-lockin',
      number: 100,
      prefix: '',
      suffix: '%',
      unitLabel: 'Data Sovereignty & Portability',
      title: 'No Vendor Lock-In',
      tagline: 'Your institutional data belongs completely to you.',
      description:
        'Standardized PostgreSQL schemas, automated hourly exports, and open REST/gRPC endpoints ensure you can audit or migrate your student and enterprise data at any moment.',
      icon: Unlock,
      color: '#B9A6D1',
      badge: 'Open Data Standards',
    },
    {
      id: 'clear-terms',
      number: 99.99,
      prefix: '',
      suffix: '%',
      decimals: 2,
      unitLabel: 'Guaranteed Cloud SLA Uptime',
      title: 'Clear Terms & 24/7 SLA',
      tagline: 'Strict 15-minute emergency SRE response window.',
      description:
        'Every contract includes clear, legally binding reliability metrics, dedicated enterprise Slack channels, and continuous multi-region failover protection.',
      icon: ShieldCheck,
      color: '#6B4A87',
      badge: 'Contractual Assurance',
    },
    {
      id: 'concurrency-scale',
      number: 850,
      prefix: '',
      suffix: 'K+',
      unitLabel: 'Daily Active Users Handled',
      title: 'Built for High Concurrency',
      tagline: 'Sub-50ms query latency during peak morning turnstile ingress.',
      description:
        'From simultaneous 8:00 AM parent attendance check-ins to million-dollar term fee surges, our distributed micro-services scale dynamically without degradation.',
      icon: Users,
      color: '#E8A9C2',
      badge: 'Engineered for Load',
    },
  ];

  // Marquee item sets (wow #20)
  const marqueeRow1 = [
    { label: 'SOC 2 Type II Certified', category: 'compliance', icon: ShieldCheck, accent: '#E8A9C2' },
    { label: 'ISO 27001 Security Standard', category: 'compliance', icon: Lock, accent: '#B9A6D1' },
    { label: 'CBSE & ICSE Board Compliant', category: 'institutions', icon: Award, accent: '#E8A9C2' },
    { label: 'IB World School Ready', category: 'institutions', icon: Globe2, accent: '#B9A6D1' },
    { label: 'AWS Advanced Tier Architecture', category: 'stack', icon: Server, accent: '#E8A9C2' },
    { label: 'Apache Kafka Event Streams', category: 'stack', icon: Zap, accent: '#B9A6D1' },
    { label: 'DPDP & GDPR Privacy Shield', category: 'compliance', icon: FileCheck, accent: '#E8A9C2' },
    { label: 'ClickHouse Real-Time OLAP', category: 'stack', icon: Server, accent: '#B9A6D1' },
  ];

  const marqueeRow2 = [
    { label: '450+ Campus Deployments', category: 'institutions', icon: Award, accent: '#B9A6D1' },
    { label: 'Kubernetes Multi-Tenant Mesh', category: 'stack', icon: Server, accent: '#E8A9C2' },
    { label: 'Sub-50ms gRPC Micro-Engines', category: 'stack', icon: Zap, accent: '#B9A6D1' },
    { label: 'Stripe & UPI Instant Reconciliation', category: 'compliance', icon: CreditCard, accent: '#E8A9C2' },
    { label: 'Zero-Downtime Blue/Green Deploy', category: 'stack', icon: Server, accent: '#B9A6D1' },
    { label: 'Automated Daily Offsite Backups', category: 'compliance', icon: Lock, accent: '#E8A9C2' },
    { label: 'Multi-Branch EdTech Groups', category: 'institutions', icon: Globe2, accent: '#B9A6D1' },
    { label: '24/7 Dedicated SRE Squads', category: 'compliance', icon: ShieldCheck, accent: '#E8A9C2' },
  ];

  return (
    <section
      id="trust"
      className="relative w-full py-28 sm:py-36 bg-[#F7F4FA] text-[#241428] overflow-hidden"
    >
      {/* Ambient Floating Particles Background (wow #23) */}
      <AmbientParticles
        count={settings.reducedMotion ? 0 : 35}
        reducedMotion={settings.reducedMotion}
        colorScheme="brand"
      />

      {/* Atmospheric Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#6B4A87]/25 via-[#FFFFFF]/40 to-transparent blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-[#E8A9C2]/10 via-[#6B4A87]/15 to-transparent blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#241428 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8A9C2]/40 text-[#6B4A87] font-mono-accent text-xs mb-4 shadow-[0_4px_20px_rgba(232,169,194,0.12)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNCOMPROMISING CREDIBILITY & TRUST</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] tracking-tight leading-[1.1]">
            Transparent Terms.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9C2] via-[#B9A6D1] to-[#241428]">
              Provable Engineering Scale.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#5C4A6E]/80 leading-relaxed max-w-2xl mx-auto font-sans">
            We operate with radical transparency. No hidden onboarding fees, no proprietary data traps, and no ambiguous service levels — just resilient software backed by mathematically verifiable guarantees.
          </p>
        </div>

        {/* 4 Pillar Stat Blocks (wow #18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20">
          {pillarStats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.id}
                id={`trust-stat-card-${stat.id}`}
                className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF]/85 border border-[#6B4A87]/40 shadow-[0_15px_35px_rgba(107,74,135,0.12)] flex flex-col justify-between transition-all duration-300 hover:border-[#E8A9C2]/60 hover:bg-[#EDE8F3] relative group overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-80"
                  style={{
                    background: `linear-gradient(90deg, ${stat.color}, transparent)`,
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${stat.color}18`,
                        borderColor: `${stat.color}45`,
                        color: stat.color,
                      }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono-accent uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F7F4FA] border border-[#6B4A87]/40 text-[#5C4A6E]">
                      {stat.badge}
                    </span>
                  </div>

                  {/* Big Count-Up Number */}
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-[#241428] tracking-tight">
                    <CountUpNumber
                      end={stat.number}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>

                  <div className="text-xs font-mono-accent text-[#6B4A87] mt-1 font-semibold">
                    {stat.unitLabel}
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#241428] mt-4">
                    {stat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4A6E]/75 mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#6B4A87]/30 flex items-center text-[11px] font-mono-accent text-[#5C4A6E] group-hover:text-[#E8A9C2] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{stat.tagline}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Infinite Trust & Tech Marquee (wow #20) */}
      <div className="w-full relative mt-6 py-6 bg-[#FFFFFF]/70 border-y border-[#6B4A87]/30 overflow-hidden">
        {/* Subtle Edge Blur Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#F7F4FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#F7F4FA] to-transparent z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <span className="text-[11px] font-mono-accent uppercase tracking-widest text-[#5C4A6E]/80">
            COMPLIANCE STANDARDS • INFRASTRUCTURE PARTNERS • ACCREDITED ECOSYSTEMS
          </span>
        </div>

        {/* Lane 1: Leftward Infinite Stream */}
        <div className="flex overflow-hidden py-2 select-none group">
          <motion.div
            className="flex items-center space-x-4 sm:space-x-6 shrink-0"
            animate={{
              x: settings.reducedMotion ? 0 : ['0%', '-50%'],
            }}
            transition={{
              duration: settings.reducedMotion ? 0 : 35,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeRow1, ...marqueeRow1].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`m1-${idx}`}
                  className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-[#F7F4FA]/90 border border-[#6B4A87]/40 shadow-sm hover:border-[#E8A9C2]/60 hover:bg-[#EDE8F3] transition-all cursor-default whitespace-nowrap"
                >
                  <IconComp className="w-4 h-4" style={{ color: item.accent }} />
                  <span className="text-xs font-mono-accent text-[#241428] font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Lane 2: Rightward Infinite Stream */}
        <div className="flex overflow-hidden py-2 select-none group mt-1">
          <motion.div
            className="flex items-center space-x-4 sm:space-x-6 shrink-0"
            animate={{
              x: settings.reducedMotion ? 0 : ['-50%', '0%'],
            }}
            transition={{
              duration: settings.reducedMotion ? 0 : 38,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeRow2, ...marqueeRow2].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={`m2-${idx}`}
                  className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-[#F7F4FA]/90 border border-[#6B4A87]/40 shadow-sm hover:border-[#B9A6D1]/60 hover:bg-[#EDE8F3] transition-all cursor-default whitespace-nowrap"
                >
                  <IconComp className="w-4 h-4" style={{ color: item.accent }} />
                  <span className="text-xs font-mono-accent text-[#241428] font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
