import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitMerge, 
  Search, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  RefreshCw,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Check,
  Server,
  Activity,
  Workflow
} from 'lucide-react';
import { SiteSettings } from '../types';
import { BrandGradientDivider } from '../components/BrandGradientBar';
import { soundEngine } from '../utils/audioEngine';
import { Link } from 'react-router-dom';

interface ProcessPageProps {
  settings: SiteSettings;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ settings }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const engineeringSteps = [
    {
      number: '01',
      title: 'Architecture Discovery & Threat Modeling',
      shortName: 'Discovery & Threat Modeling',
      timeline: 'Week 1 – 2',
      tagline: 'Establishing mathematical domain boundaries and zero-trust threat vectors before writing code.',
      details: [
        'Domain-driven schema mapping and distributed bounded contexts',
        'P99 latency budget definition and maximum concurrency throughput target',
        'STRIDE threat modeling and zero-trust authentication architecture',
        'Interactive system wireframes, schema DDL, and API OpenAPI 3.1 contracts',
      ],
      output: 'Architecture Technical Specification Document (TSD) + Signed OpenAPI Spec',
      icon: Search,
    },
    {
      number: '02',
      title: 'Distributed System Blueprint & Sharding',
      shortName: 'Blueprint & Sharding',
      timeline: 'Week 3 – 4',
      tagline: 'Isolating data pipelines, database indexing models, and microservice boundaries.',
      details: [
        'Database sharding and read-replica topology design (PostgreSQL/Cloud SQL)',
        'Event stream choreography with Apache Kafka / RabbitMQ message brokers',
        'High-speed Redis cache invalidation strategies and lock managers',
        'Infrastructure-as-Code (Terraform) blueprint for automated cluster provisioning',
      ],
      output: 'Terraform IaC Repo + Isolated Database Micro-Benchmark Sandbox',
      icon: Layers,
    },
    {
      number: '03',
      title: 'High-Velocity Iterative Engineering',
      shortName: 'Sprint Engineering',
      timeline: 'Week 5 – 10',
      tagline: 'Decoupled sprint execution with strict static typing and end-to-end automated pipelines.',
      details: [
        'Strict end-to-end TypeScript type safety across frontend and microservices',
        'Automated CI pipeline with unit, integration, and contract test gates (>85% coverage)',
        'Containerized microservices orchestrated via Kubernetes / Cloud Run',
        'Bi-weekly staging environment demo releases with stakeholder access',
      ],
      output: 'Feature-complete system running on production-identical staging clusters',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Zero-Downtime Blue/Green Deployment',
      shortName: 'Zero-Downtime Release',
      timeline: 'Week 11 – 12',
      tagline: 'Canary traffic shifting and automated database migration dry-runs.',
      details: [
        'Zero-downtime Blue/Green routing with automated rollback triggers',
        'Multi-AZ active-active failover testing and database split-brain recovery simulation',
        'OWASP Top 10 penetration testing and external vulnerability assessment',
        'Privacy checklist aligned to school data handling (roles, export, encryption)',
      ],
      output: 'Verified Zero-Downtime Deployment Report + Cryptographic Audit Certificate',
      icon: Rocket,
    },
    {
      number: '05',
      title: 'Continuous Observability & Autonomous SRE',
      shortName: 'Continuous Observability',
      timeline: 'Week 13+ (Ongoing)',
      tagline: 'Real-time distributed telemetry, SLA guarantees, and autonomous self-healing nodes.',
      details: [
        'Sub-millisecond Prometheus, Grafana & OpenTelemetry distributed tracing',
        'Predictive anomaly detection alerting on error budget burn rates',
        '24/7 dedicated SRE on-call rotation with 15-minute guaranteed MTTR',
        'Automated node recycling and horizontal pod autoscaling (HPA)',
      ],
      output: 'Live 99.99% SLA Warranty + Real-time Grafana Telemetry Dashboard Access',
      icon: Activity,
    },
  ];

  return (
    <div id="process-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HEADER HERO                                                            */}
        {/* ========================================================================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <GitMerge className="w-3.5 h-3.5" />
            <span>ENGINEERING PROCESS // 5-STAGE METHODOLOGY</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
            Deterministic Engineering from Day Zero to Scale
          </h1>

          <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed">
            We replace speculative development timelines with deterministic engineering milestones, mathematically verified schema models, and continuous automated telemetry.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. SVG CONNECTED 5-STEP JOURNEY MAP                                       */}
        {/* ========================================================================= */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/40 shadow-2xl relative overflow-hidden">
          
          {/* Visual SVG Line-Draw Step Navigator */}
          <div className="hidden lg:block mb-10 pb-8 border-b border-[#6B4A87]/30 relative">
            
            {/* SVG Connecting Line with Brand Gradient */}
            <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 -z-0 pointer-events-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="stepConnectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F7F4FA" />
                  <stop offset="25%" stopColor="#6B4A87" />
                  <stop offset="75%" stopColor="#B9A6D1" />
                  <stop offset="100%" stopColor="#E8A9C2" />
                </linearGradient>
              </defs>
              <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="url(#stepConnectorGrad)" strokeWidth="3" strokeDasharray="4 4" opacity="0.6" />
            </svg>

            {/* Step Selection Nodes */}
            <div className="grid grid-cols-5 gap-2 relative z-10">
              {engineeringSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => {
                      soundEngine.playClick('soft');
                      setActiveStep(idx);
                    }}
                    className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-[#F7F4FA] border-2 border-[#E8A9C2] shadow-[0_0_20px_rgba(232,169,194,0.2)]'
                        : 'bg-[#FFFFFF] border border-[#6B4A87]/30 hover:border-[#6B4A87]'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono-accent font-bold text-xs mb-2 ${
                      isActive ? 'bg-[#E8A9C2] text-[#241428]' : 'bg-[#F7F4FA] text-[#5C4A6E]'
                    }`}>
                      {step.number}
                    </span>
                    <span className="text-[11px] font-heading font-semibold text-[#241428] line-clamp-1">
                      {step.shortName}
                    </span>
                    <span className="text-[10px] font-mono-accent text-[#5C4A6E] mt-0.5">
                      {step.timeline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="space-y-8">
            {engineeringSteps.map((step, index) => {
              const isActive = activeStep === index;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-[#F5F1F8] border-[#E8A9C2]/60 p-6 sm:p-8 shadow-xl'
                      : 'bg-[#FFFFFF]/40 border-[#6B4A87]/20 p-5 cursor-pointer hover:border-[#6B4A87]/60'
                  }`}
                  onClick={() => {
                    if (!isActive) {
                      soundEngine.playClick('soft');
                      setActiveStep(index);
                    }
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono-accent font-bold text-lg ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] shadow-md' 
                          : 'bg-[#F7F4FA] text-[#5C4A6E] border border-[#6B4A87]/40'
                      }`}>
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono-accent text-[#6B4A87]">STAGE {step.number}</span>
                          <span className="text-xs font-mono-accent text-[#5C4A6E]">({step.timeline})</span>
                        </div>
                        <h2 className="font-heading font-bold text-lg sm:text-2xl text-[#241428] mt-0.5">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <span className="text-xs font-mono-accent px-3 py-1 rounded-full bg-[#F7F4FA] text-[#E8A9C2] border border-[#6B4A87]/40 self-start sm:self-center shrink-0">
                      {step.timeline}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#5C4A6E] leading-relaxed">
                    {step.tagline}
                  </p>

                  {/* Expanded Step Deep-Dive Details */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-[#6B4A87]/30 space-y-6"
                    >
                      <div>
                        <div className="text-xs font-mono-accent text-[#6B4A87] uppercase mb-3">
                          CORE ENGINEERING ACTIVITIES & DELIVERABLES:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#FFFFFF]/80 border border-[#6B4A87]/30 text-xs sm:text-sm text-[#5C4A6E]">
                              <CheckCircle2 className="w-4 h-4 text-[#E8A9C2] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center space-x-2">
                          <FileCode className="w-4 h-4 text-[#E8A9C2]" />
                          <span className="text-xs font-mono-accent text-[#5C4A6E] uppercase">
                            FORMAL STAGE ARTIFACT:
                          </span>
                        </div>
                        <span className="text-xs font-mono-accent text-emerald-400 font-medium">
                          {step.output}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 3. ENGINEERING RIGOR & ZERO-COMPROMISE STANDARDS                          */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
              Engineering Discipline Built into Every Pull Request
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C4A6E]">
              How we guarantee enterprise stability without sacrificing delivery speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2]">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#241428]">Automated Test Harness</h3>
              <p className="text-xs text-[#5C4A6E] leading-relaxed">
                Every commit triggers static analysis, dependency vulnerability checks, and integration suites across containerized test clusters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#241428]">Zero-Downtime Blue/Green</h3>
              <p className="text-xs text-[#5C4A6E] leading-relaxed">
                Production deployments run alongside the live version. Traffic shifts incrementally with sub-second rollback triggers if error spikes occur.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2]">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#241428]">Direct Architect Collaboration</h3>
              <p className="text-xs text-[#5C4A6E] leading-relaxed">
                You collaborate directly with principal systems engineers and technical leads over dedicated Slack/Teams channels, not account managers.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. PROCESS CTA                                                            */}
        {/* ========================================================================= */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#F7F4FA] via-[#FFFFFF] to-[#F7F4FA] border border-[#6B4A87]/40 text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
            Ready to Begin Architecture Discovery for Your System?
          </h2>
          <p className="text-xs sm:text-sm text-[#5C4A6E] max-w-xl mx-auto leading-relaxed">
            Schedule a 45-minute technical discovery session. We will evaluate your system requirements, concurrency needs, and provide a clear engineering blueprint.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick('hero')}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg"
            >
              <span>Schedule Technical Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
