import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Bus, 
  CreditCard, 
  Calendar, 
  Smartphone, 
  FileSpreadsheet, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  BarChart3,
  Clock,
  Send,
  Building2,
  Check,
  Brain,
  AlertTriangle,
  HeartPulse,
  Receipt,
  FileCheck2,
  Laptop,
  Layers,
  Network
} from 'lucide-react';
import { SiteSettings } from '../types';
import { BrandGradientDivider } from '../components/BrandGradientBar';
import { soundEngine } from '../utils/audioEngine';
import { Link } from 'react-router-dom';

interface KiduartPageProps {
  settings: SiteSettings;
}

export const KiduartPage: React.FC<KiduartPageProps> = ({ settings }) => {
  const [activePersona, setActivePersona] = useState<'principal' | 'parent' | 'accountant'>('principal');
  const [selectedModuleTab, setSelectedModuleTab] = useState<number>(0);
  const [demoRequested, setDemoRequested] = useState(false);
  const [demoForm, setDemoForm] = useState({
    institution: '',
    contactName: '',
    email: '',
    phone: '',
    studentCount: '500-1500',
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick('hero');
    setDemoRequested(true);
  };

  // Complete 12 Core Kiduart ERP Modules
  const kiduart12Modules = [
    {
      id: 'admissions-crm',
      title: 'Admissions & CRM Funnel',
      category: 'Student Lifecycle',
      icon: Users,
      desc: 'End-to-end digital prospect registration, entrance assessment scoring, document validation, and automated seat allocation.',
      badge: 'Zero Paper Admissions',
      highlights: ['Online application portal', 'Automated enquiry scoring', 'Seat reservation locks', 'Merit list generator'],
    },
    {
      id: 'student-records',
      title: 'Student Information System (SIS)',
      category: 'Academics',
      icon: GraduationCap,
      desc: 'Holistic student profiles including academic transcripts, health history, disciplinary logs, and national student IDs.',
      badge: 'Unified Dossier',
      highlights: ['Digital cumulative records', 'Custom field builder', 'Family tree linking', 'Emergency medical flags'],
    },
    {
      id: 'biometric-attendance',
      title: 'Biometric & RFID Attendance',
      category: 'Operations',
      icon: Clock,
      desc: 'Seamless integration with campus facial recognition, biometric finger readers, and RFID turnstiles with instant parent alerts.',
      badge: 'Real-Time Sync',
      highlights: ['Facial recognition gateway', 'Instant WhatsApp absent alert', 'Staff biometric duty logs', 'Leave approval workflows'],
    },
    {
      id: 'fees-finance',
      title: 'Fees & Institutional Finance',
      category: 'Finance',
      icon: CreditCard,
      desc: 'Automated quarterly fee billing, concession matrices, multi-channel payment gateways, and real-time ledger accounting.',
      badge: 'Zero Fee Reconciliation',
      highlights: ['Live Razorpay/Stripe gateways', 'Auto GST tax invoices', 'Installment fee schedules', 'WhatsApp pay links'],
    },
    {
      id: 'communication-hub',
      title: 'Omnichannel Communication Hub',
      category: 'Engagement',
      icon: Send,
      desc: 'Targeted broadcast announcements via WhatsApp Business API, SMS, push notifications, and verified email newsletters.',
      badge: 'Instant Broadcast',
      highlights: ['Official WhatsApp templates', 'Grade-specific broadcasts', 'Read receipts telemetry', 'Two-way teacher chat'],
    },
    {
      id: 'transport-gps',
      title: 'Smart Fleet & Live Bus GPS',
      category: 'Safety & Fleet',
      icon: Bus,
      desc: 'Sub-second real-time GPS fleet tracking with geofenced stop approach alerts for parents and driver speed monitoring.',
      badge: 'Sub-Second GPS',
      highlights: ['Geofence arrival alerts', 'Driver speed alarms', 'Dynamic route optimizer', 'Parent tracking app'],
    },
    {
      id: 'hostel-management',
      title: 'Hostel & Residential Boarding',
      category: 'Residential',
      icon: Building2,
      desc: 'Room allocation, warden night check-in logs, biometric out-pass approvals, and student dietary preferences.',
      badge: 'Campus Boarding',
      highlights: ['Room & bed allocation', 'Digital out-pass approvals', 'Warden night roll-call', 'Mess billing integration'],
    },
    {
      id: 'library-automation',
      title: 'Digital Library & Barcoding',
      category: 'Academics',
      icon: FileSpreadsheet,
      desc: 'Complete OPAC cataloging, barcode/RFID book issue & returns, overdue fine calculation, and digital e-book repository.',
      badge: 'OPAC Catalog',
      highlights: ['Barcode / RFID book scan', 'Overdue fine ledger', 'E-book PDF repository', 'Book reservation queue'],
    },
    {
      id: 'hr-payroll',
      title: 'Staff HR & Automated Payroll',
      category: 'Staff & HR',
      icon: FileCheck2,
      desc: 'Teacher biometric attendance, automated salary slip generation with PF/ESI deductions, and performance appraisal tracking.',
      badge: 'Statutory Payroll',
      highlights: ['One-click pay slip generator', 'PF / ESI statutory deductions', 'Teacher substitute planner', 'Leave balance ledger'],
    },
    {
      id: 'reports-analytics',
      title: 'CBSE/ICSE Reports & Analytics',
      category: 'Academics',
      icon: BarChart3,
      desc: 'Configurable grading rubrics, automated GPA/CGPA computation, and one-click printable report cards compliant with board norms.',
      badge: 'Board Compliant',
      highlights: ['CBSE / ICSE / IB rubrics', 'One-click PDF report cards', 'Class performance heatmaps', 'Subject mastery metrics'],
    },
    {
      id: 'security-rbac',
      title: 'Security & Granular RBAC',
      category: 'Security',
      icon: ShieldCheck,
      desc: 'Role-based access control (Trustees, Principals, Accountants, Teachers, Parents) with 2FA and immutable audit logging.',
      badge: 'Zero-Trust RBAC',
      highlights: ['256-bit data encryption', 'Granular field permissions', 'Immutable audit trails', 'Two-Factor Authentication'],
    },
    {
      id: 'multicampus-hq',
      title: 'Multi-Campus HQ Controller',
      category: 'Enterprise',
      icon: Network,
      desc: 'Consolidated executive dashboard aggregating student metrics, revenue collections, and staffing across all trust branches.',
      badge: 'Multi-Tenant HQ',
      highlights: ['Consolidated revenue audit', 'Cross-branch comparisons', 'Centralized curriculum sync', 'Single sign-on (SSO)'],
    },
  ];

  return (
    <div id="kiduart-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION & VALUE PROPOSITION                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8A9C2]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCT // KIDUART SCHOOL ERP</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
              The Intelligent Campus Operating System
            </h1>

            <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed max-w-2xl">
              Kiduart (<a href="https://kiduart.com" target="_blank" rel="noopener noreferrer" className="text-[#E8A9C2] hover:underline font-mono-accent">kiduart.com</a>) is Trevyk’s flagship school ERP platform. It unifies 12 essential campus operational domains into a modern, high-availability cloud architecture with real-time financial reconciliation and early-warning AI telemetry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kiduart-demo-section"
                onClick={() => soundEngine.playClick('hero')}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg"
              >
                <span>Schedule Campus Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#kiduart-ai-signals"
                onClick={() => soundEngine.playClick('soft')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#5C4A6E] hover:text-[#241428] font-mono-accent text-xs transition-colors"
              >
                <Brain className="w-3.5 h-3.5 text-[#E8A9C2]" />
                <span>Explore AI Signal Layer</span>
              </a>
            </div>
          </div>

          {/* Real Product UI Mockup Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#6B4A87]/40 bg-[#FFFFFF] p-2 shadow-2xl relative group">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Kiduart School ERP Live Interactive Telemetry Dashboard Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-left-top opacity-75 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Telemetry Metric Overlays */}
                <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#6B4A87]/50 shadow-lg">
                  <div className="text-[10px] font-mono-accent text-[#5C4A6E]">DAILY FEE VELOCITY (₹)</div>
                  <div className="text-lg font-heading font-bold text-emerald-400">₹ 8.42 Lakhs</div>
                  <div className="text-[9px] text-emerald-400">100% Auto-Reconciled</div>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#6B4A87]/50 shadow-lg">
                  <div className="text-[10px] font-mono-accent text-[#6B4A87]">CAMPUS HEALTH INDEX</div>
                  <div className="text-lg font-heading font-bold text-[#241428]">98.4 / 100</div>
                  <div className="text-[9px] text-[#5C4A6E]">Zero Critical Anomalies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 2. THE 12-MODULE ENTERPRISE WALKTHROUGH                                  */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>MODULAR ARCHITECTURE // 12 DOMAINS</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428]">
              Everything Your Institution Needs in One Unified Stack
            </h2>
            <p className="mt-3 text-sm text-[#5C4A6E] leading-relaxed">
              Replace fragmented spreadsheets and disjointed third-party software with Kiduart’s cohesive, single-source-of-truth platform.
            </p>
          </div>

          {/* 12-Module Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kiduart12Modules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.id}
                  className="p-6 rounded-2xl bg-[#FFFFFF]/90 border border-[#6B4A87]/35 hover:border-[#E8A9C2]/60 hover:bg-[#F5F1F8] transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono-accent px-2.5 py-0.5 rounded-full bg-[#F7F4FA] text-[#5C4A6E] border border-[#6B4A87]/30">
                        {module.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#241428] group-hover:text-[#E8A9C2] transition-colors">
                      {module.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#5C4A6E]/80 leading-relaxed">
                      {module.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#6B4A87]/20 space-y-1">
                    {module.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-1.5 text-[11px] font-mono-accent text-[#5C4A6E]">
                        <CheckCircle2 className="w-3 h-3 text-[#E8A9C2] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 3. THE AI SIGNAL LAYER (WHAT MAKES KIDUART DIFFERENT)                     */}
        {/* ========================================================================= */}
        <div id="kiduart-ai-signals" className="mt-16 rounded-3xl bg-gradient-to-br from-[#FFFFFF] via-[#F7F4FA] to-[#FFFFFF] border border-[#6B4A87]/40 p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8A9C2]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <Brain className="w-3.5 h-3.5" />
              <span>THE KIDUART DIFFERENTIATOR // AI SIGNAL LAYER</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428]">
              Predictive AI Signals: Transforming Data into Actionable Early Warnings
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#5C4A6E] leading-relaxed">
              Traditional ERPs are passive ledgers that only tell you what happened in the past. Kiduart features an active AI signal engine that continuously scans campus telemetry to detect dropout risks, cashflow bottlenecks, and institutional health anomalies before they escalate.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Signal 1: Attendance Dropout Risk Signal */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2]">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#241428]">Attendance & Dropout Risk Signal</h3>
                <p className="text-xs text-[#5C4A6E] mt-1.5 leading-relaxed">
                  Correlates subtle attendance dips, bus tap absences, and assignment submission delays to flag at-risk students 30 days before potential withdrawal.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#6B4A87]/30 text-[11px] font-mono-accent text-amber-300">
                • Proactive Counselor Alert Pipeline
              </div>
            </div>

            {/* Signal 2: Fee Default & Cashflow Risk Signal */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-emerald-400">
                <Receipt className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#241428]">Fee Default & Revenue Forecast</h3>
                <p className="text-xs text-[#5C4A6E] mt-1.5 leading-relaxed">
                  Evaluates historic payment behavior to predict quarter-end fee shortfalls in Indian Rupees (₹), automatically triggering staggered WhatsApp reminder schedules.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#6B4A87]/30 text-[11px] font-mono-accent text-emerald-400">
                • 94.2% On-Time Collection Rate
              </div>
            </div>

            {/* Signal 3: Composite School Health Score */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2]">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#241428]">Composite Campus Health Score</h3>
                <p className="text-xs text-[#5C4A6E] mt-1.5 leading-relaxed">
                  A continuous 0-100 index weighted across faculty workload, bus route punctuality, syllabus completion rates, and parent sentiment telemetry.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#6B4A87]/30 text-[11px] font-mono-accent text-[#6B4A87]">
                • Real-Time Executive HQ Overview
              </div>
            </div>

          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 4. LIVE INTEGRATIONS & HARDWARE PROTOCOLS                                 */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
              Turnkey Payment, Biometric & Communication Integrations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C4A6E]">
              Plug-and-play integrations with industry-standard payment gateways, IoT hardware, and messaging providers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center">
              <div className="font-mono-accent font-bold text-base text-[#241428]">Razorpay & Stripe</div>
              <div className="text-[11px] text-[#5C4A6E] mt-1">UPI, Cards, NetBanking (₹)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center">
              <div className="font-mono-accent font-bold text-base text-[#241428]">WhatsApp Business API</div>
              <div className="text-[11px] text-[#5C4A6E] mt-1">Direct official notifications</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center">
              <div className="font-mono-accent font-bold text-base text-[#241428]">eSSL / ZKTeco Biometrics</div>
              <div className="text-[11px] text-[#5C4A6E] mt-1">RFID & facial turnstiles</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center">
              <div className="font-mono-accent font-bold text-base text-[#241428]">AIS 140 GPS Devices</div>
              <div className="text-[11px] text-[#5C4A6E] mt-1">Government compliant fleet tracking</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. HONEST TRANSPARENCY & PILOT ENROLLMENT (NO FAKE TESTIMONIALS)           */}
        {/* ========================================================================= */}
        <div className="mt-16 p-6 rounded-2xl bg-[#FFFFFF]/60 border border-[#6B4A87]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-[#E8A9C2] shrink-0" />
            <div>
              <div className="font-heading font-semibold text-sm text-[#241428]">
                Direct Architectural Transparency
              </div>
              <div className="text-xs text-[#5C4A6E]">
                We don’t publish fabricated quotes or mock client logos. Instead, we invite school trustees and principals to test Kiduart on a live demo campus instance with their own real-world syllabus constraints.
              </div>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* 6. BOOK A CAMPUS DEMO (FORM & LINK TO /CONTACT)                          */}
        {/* ========================================================================= */}
        <div id="kiduart-demo-section" className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono-accent text-[#6B4A87] uppercase tracking-widest block">
                CAMPUS ONBOARDING PROGRAM
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
                Experience Kiduart Live on Your Institutional Hardware
              </h2>
              <p className="text-sm text-[#5C4A6E] leading-relaxed">
                Schedule a dedicated 45-minute architectural walkthrough with our product team. We will configure a live sandbox reflecting your school’s fee slabs, timetable rules, and bus routes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#5C4A6E]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free 14-day full campus trial sandbox</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% automated Excel / Tally data import</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>On-site staff & teacher training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated WhatsApp campus support desk</span>
                </div>
              </div>
            </div>

            {/* Interactive Demo Request Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/50 shadow-xl">
              {demoRequested ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#241428]">Demo Invitation Dispatched</h3>
                  <p className="text-xs text-[#5C4A6E]">
                    Thank you, {demoForm.contactName || 'Principal'}. A Kiduart institutional specialist will contact you shortly with sandbox credentials.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block mt-4 text-xs font-mono-accent text-[#6B4A87] underline"
                  >
                    Need immediate assistance? Visit our main contact page →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-3.5">
                  <div className="text-xs font-mono-accent text-[#6B4A87] uppercase font-bold">
                    REQUEST LIVE CAMPUS DEMO
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-mono-accent text-[#5C4A6E] mb-1">Institution Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Cambridge International Academy"
                      value={demoForm.institution}
                      onChange={(e) => setDemoForm({ ...demoForm, institution: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] text-xs focus:outline-none focus:border-[#E8A9C2]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-mono-accent text-[#5C4A6E] mb-1">Contact Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Principal / Trustee"
                        value={demoForm.contactName}
                        onChange={(e) => setDemoForm({ ...demoForm, contactName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] text-xs focus:outline-none focus:border-[#E8A9C2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-accent text-[#5C4A6E] mb-1">Official Email</label>
                      <input
                        required
                        type="email"
                        placeholder="admin@school.edu"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] text-xs focus:outline-none focus:border-[#E8A9C2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-mono-accent text-[#5C4A6E] mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] text-xs focus:outline-none focus:border-[#E8A9C2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-accent text-[#5C4A6E] mb-1">Student Strength</label>
                      <select
                        value={demoForm.studentCount}
                        onChange={(e) => setDemoForm({ ...demoForm, studentCount: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] text-xs focus:outline-none focus:border-[#E8A9C2]"
                      >
                        <option value="under-500">&lt; 500 Students</option>
                        <option value="500-1500">500 – 1,500 Students</option>
                        <option value="1500-3500">1,500 – 3,500 Students</option>
                        <option value="3500+">3,500+ (Multi-Branch Trust)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading font-semibold text-xs shadow-lg hover:opacity-95 transition-opacity"
                  >
                    Request Guided Campus Walkthrough
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
