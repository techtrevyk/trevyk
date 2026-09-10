import React, { useState } from "react";
import {
  GraduationCap,
  Bus,
  CreditCard,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  Send,
  Building2,
  Check,
  BookOpen,
  FileSpreadsheet,
  Briefcase,
  BarChart3,
  ShieldCheck,
  ExternalLink,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { SiteSettings } from "../types";
import { BrandGradientDivider } from "../components/BrandGradientBar";
import { soundEngine } from "../utils/audioEngine";
import { Link } from "react-router-dom";

interface KiduartPageProps {
  settings: SiteSettings;
}

/** Official product journey  aligned with kiduart.com homepage */
const SCHOOL_JOURNEY = [
  {
    step: "01",
    title: "Admissions",
    tagline: "Enquiry to registered student",
    desc: "The year starts with an enquiry, not a student. Enquiries, applications, interview evaluations and registration run as one pipeline.",
    highlights: [
      "Enquiry capture with source and follow-up owner",
      "Application review with documents attached",
      "Interview scheduling with recorded evaluation",
      "Registration that creates the student record",
    ],
    icon: Users,
    href: "https://kiduart.com",
  },
  {
    step: "02",
    title: "Student Records",
    tagline: "One profile the whole school reads",
    desc: "Admission, documents, class and section history, guardians and contacts sit on a single record that follows the student through every session.",
    highlights: [
      "Admission to alumni",
      "Documents attached",
      "Session-wise history",
    ],
    icon: GraduationCap,
    href: "https://kiduart.com",
  },
  {
    step: "03",
    title: "Classes & Timetable",
    tagline: "Sections, class teachers, periods",
    desc: "Sections, class teachers and periods stay structured so the rest of the school can schedule around a shared calendar.",
    highlights: [
      "Sections & class teachers",
      "Period structure",
      "Shared school calendar",
    ],
    icon: Calendar,
    href: "https://kiduart.com",
  },
  {
    step: "04",
    title: "Attendance & Leave",
    tagline: "Mark fast, inform parents same day",
    desc: "Teachers mark attendance on their own screen. Parents get the update, coordinators see patterns, and reports are ready when needed.",
    highlights: ["Same-day parent alert", "Pattern flags", "Ready reports"],
    icon: Clock,
    href: "https://kiduart.com",
  },
  {
    step: "05",
    title: "Exams & Results",
    tagline: "Schedule, marks, grades, report cards",
    desc: "Exams, marks entry, grading and report cards stay on one academic trail instead of scattered sheets.",
    highlights: ["Exam schedules", "Marks & grades", "Report cards"],
    icon: FileSpreadsheet,
    href: "https://kiduart.com",
  },
  {
    step: "06",
    title: "Fees & Finance",
    tagline: "Structure, collection, dues, receipts",
    desc: "Fee heads, concessions, instalments, online and counter payments, receipts and outstanding dues stay on one ledger.",
    highlights: ["Online + counter", "Auto receipts", "Live outstanding"],
    icon: CreditCard,
    href: "https://kiduart.com",
  },
  {
    step: "07",
    title: "Parent Communication",
    tagline: "Targeted notices with a record",
    desc: "Circulars, fee reminders and attendance alerts go from one place to the right class, section or parent group  with a delivery trail.",
    highlights: ["Targeted by class", "Delivery record", "Templates"],
    icon: Send,
    href: "https://kiduart.com",
  },
  {
    step: "08",
    title: "Transport",
    tagline: "Routes, drivers, vehicles, tracking",
    desc: "Routes, drivers and vehicles stay organised so transport is part of the same school record, not a separate spreadsheet.",
    highlights: [
      "Routes & vehicles",
      "Driver records",
      "Tracking where enabled",
    ],
    icon: Bus,
    href: "https://kiduart.com",
  },
  {
    step: "09",
    title: "Hostel & Campus",
    tagline: "Rooms, beds, mess, visitors",
    desc: "Boarding operations  rooms, beds, mess and visitors  connected to the student profile when your campus needs them.",
    highlights: ["Rooms & beds", "Mess", "Visitors"],
    icon: Building2,
    href: "https://kiduart.com",
  },
  {
    step: "10",
    title: "Library",
    tagline: "Catalog, circulation, fines",
    desc: "Catalog, issue/return and fines stay tied to student records instead of a disconnected register.",
    highlights: ["Catalog", "Circulation", "Fines"],
    icon: BookOpen,
    href: "https://kiduart.com",
  },
  {
    step: "11",
    title: "HR & Payroll",
    tagline: "Staff, leave, salary, appraisal",
    desc: "Staff records, leave and payroll workflows for the people who run the school every day.",
    highlights: ["Staff records", "Leave", "Salary & appraisal"],
    icon: Briefcase,
    href: "https://kiduart.com",
  },
  {
    step: "12",
    title: "Reports & Leadership",
    tagline: "Decisions from live records",
    desc: "Collection, attendance, academic and staff data feed views that are current  so leadership questions get answered from live records.",
    highlights: [
      "Live dashboards",
      "Exportable",
      "Multi-campus rollup where applicable",
    ],
    icon: BarChart3,
    href: "https://kiduart.com",
  },
];

const CHARTER = [
  {
    title: "We publish only what exists",
    body: "Every capability described maps to a screen that is already built. Anything still being made is labelled in development  not switched on, not billed.",
  },
  {
    title: "No borrowed credibility",
    body: "No stock photos posing as schools, no quotes nobody said, no ratings we wrote about ourselves.",
  },
  {
    title: "Your data leaves with you",
    body: "Student records, fee ledgers, attendance and academic data export in CSV, Excel or PDF whenever you ask. We do not sell school data or train models on student records.",
  },
  {
    title: "Nothing goes live on a guess",
    body: "We run attendance and one fee cycle in parallel with your current method first. If the numbers do not agree, the switch waits.",
  },
  {
    title: "Stories will be attributable",
    body: "When school stories appear, each will carry name, city, role, measured number, and written consent  same as on kiduart.com.",
  },
];

export const KiduartPage: React.FC<KiduartPageProps> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [demoRequested, setDemoRequested] = useState(false);
  const [demoForm, setDemoForm] = useState({
    institution: "",
    contactName: "",
    email: "",
    phone: "",
  });

  const active = SCHOOL_JOURNEY[activeStep];
  const ActiveIcon = active.icon;

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playClick("hero");
    setDemoRequested(true);
  };

  return (
    <div id="kiduart-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCT · BUILT BY TREVYK</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8F6FB] leading-tight">
              School ERP software for Indian schools admissions to parent
              updates
            </h1>

            <p className="mt-5 text-[#B9A6D1] text-base sm:text-lg leading-relaxed max-w-2xl">
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B4A87] font-semibold underline underline-offset-2"
              >
                Kiduart
              </a>{" "}
              is Trevyk’s cloud-based{" "}
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B4A87] font-semibold underline underline-offset-2"
              >
                school management system
              </a>{" "}
              that connects student records, online fee management, attendance,
              exams, report cards, transport, library, HR, and parent
              communication in one school ERP.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick("hero")}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 shadow-lg"
              >
                <span>Book a free demo on kiduart.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#kiduart-journey"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#B9A6D1] hover:text-[#F8F6FB] font-mono-accent text-xs"
              >
                <Layers className="w-3.5 h-3.5 text-[#6B4A87]" />
                <span>See the school-year journey</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#6B4A87]/25 bg-[#1E1024] p-7 sm:p-9 shadow-xl space-y-5">
              <div className="text-[10px] font-mono-accent uppercase tracking-widest text-[#6B4A87]">
                From kiduart.com
              </div>
              <h2 className="font-heading font-bold text-xl text-[#F8F6FB]">
                Follow the path your school runs every day
              </h2>
              <p className="text-sm text-[#B9A6D1] leading-relaxed">
                Pick any step to see what that module does. Each piece hands off
                to the next, so information entered once keeps moving through
                the school year.
              </p>
              <ul className="space-y-2 text-xs text-[#B9A6D1]">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B4A87] shrink-0" />
                  Built for Indian school reality fee heads, boards, SMS parents
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B4A87] shrink-0" />
                  Role panels for teachers, accountants, trustees
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B4A87] shrink-0" />
                  <span>
                    Next AI phase (KIDUORBIT) is{" "}
                    <strong className="text-[#F8F6FB]">not launched yet</strong>{" "}
                    ERP baseline first
                  </span>
                </li>
              </ul>
              <a
                href="https://kiduart.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-accent text-[#6B4A87] underline underline-offset-2"
              >
                Read the Kiduart story <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* Journey */}
        <div id="kiduart-journey" className="mt-16">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>SCHOOL OPERATIONS JOURNEY · 12 STEPS</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB]">
              Modules that follow a real school year
            </h2>
            <p className="mt-3 text-sm text-[#B9A6D1] leading-relaxed">
              Content below mirrors the live product map on{" "}
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B4A87] font-semibold underline underline-offset-2"
              >
                kiduart.com
              </a>
              . Open any step for a short description, then continue on the
              product site for deep module pages.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {SCHOOL_JOURNEY.map((item, idx) => (
              <button
                key={item.step}
                type="button"
                onClick={() => {
                  soundEngine.playClick("soft");
                  setActiveStep(idx);
                }}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono-accent border transition-all ${
                  activeStep === idx
                    ? "bg-[#6B4A87] text-white border-[#6B4A87]"
                    : "bg-[#1E1024] text-[#B9A6D1] border-[#6B4A87]/25 hover:border-[#6B4A87]/50"
                }`}
              >
                {item.step} {item.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-[#1E1024] border border-[#6B4A87]/25 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#2A1830] border border-[#6B4A87]/30 flex items-center justify-center text-[#6B4A87]">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-accent text-[#6B4A87] uppercase">
                    Step {active.step} / 12 · Live module in the product
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#F8F6FB]">
                    {active.title}
                  </h3>
                  <p className="text-xs text-[#B9A6D1]">{active.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-[#B9A6D1] leading-relaxed">
                {active.desc}
              </p>
              <ul className="space-y-2">
                {active.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-[#B9A6D1]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6B4A87] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6B4A87] text-white text-xs font-heading font-semibold"
                >
                  Open on kiduart.com <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {activeStep < SCHOOL_JOURNEY.length - 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((s) =>
                        Math.min(s + 1, SCHOOL_JOURNEY.length - 1),
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2A1830] border border-[#6B4A87]/25 text-[#B9A6D1] text-xs font-mono-accent"
                  >
                    Next: {SCHOOL_JOURNEY[activeStep + 1].title}{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#2A1830] border border-[#6B4A87]/20">
              <div className="text-[10px] font-mono-accent uppercase tracking-wider text-[#6B4A87] mb-3">
                One system vs scattered tools
              </div>
              <p className="text-sm text-[#B9A6D1] leading-relaxed mb-4">
                When records, fees, attendance and communication share one
                system, the same school day stops bouncing between spreadsheets
                and WhatsApp.
              </p>
              <a
                href="https://kiduart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-accent text-[#6B4A87] underline underline-offset-2"
              >
                Compare the full “one Kiduart system” view on kiduart.com →
              </a>
            </div>
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* Charter */}
        <div id="kiduart-charter" className="mt-16">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E1024] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>FOUNDING-SCHOOL CHARTER</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB]">
              Proof before polish
            </h2>
            <p className="mt-3 text-sm text-[#B9A6D1] leading-relaxed">
              The same honest commitments published on{" "}
              <a
                href="https://kiduart.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B4A87] font-semibold underline underline-offset-2"
              >
                kiduart.com/about
              </a>
              . Trevyk lists them here because Kiduart is our flagship product
              not a marketing slide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHARTER.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-[#1E1024] border border-[#6B4A87]/25"
              >
                <h3 className="font-heading font-bold text-sm text-[#F8F6FB] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B9A6D1] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* Demo */}
        <div
          id="kiduart-demo-section"
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#1E1024] border border-[#6B4A87]/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono-accent text-[#6B4A87] uppercase tracking-widest block">
                LIVE DEMO
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8F6FB]">
                Ready to see it for your school?
              </h2>
              <p className="text-sm text-[#B9A6D1] leading-relaxed">
                Prefer the official product flow? Book directly on Kiduart. Or
                leave a note here and the Trevyk / Kiduart team will follow up
                within one business day.
              </p>
              <ul className="space-y-2 text-xs text-[#B9A6D1]">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B4A87]" /> 30-minute
                  walkthrough around school hours
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B4A87]" /> Run on
                  your fee heads, classes and staff roles
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B4A87]" /> No card,
                  no lock-in to see the product
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://kiduart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B4A87] text-white text-xs font-heading font-semibold"
                >
                  Request demo on kiduart.com{" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:support@kiduart.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A1830] border border-[#6B4A87]/25 text-[#B9A6D1] text-xs font-mono-accent"
                >
                  support@kiduart.com
                </a>
                <a
                  href="tel:+919217534128"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A1830] border border-[#6B4A87]/25 text-[#B9A6D1] text-xs font-mono-accent"
                >
                  +91 92175 34128
                </a>
              </div>
              <p className="text-[11px] text-[#B9A6D1] flex items-center gap-1.5 pt-2">
                <HeartHandshake className="w-3.5 h-3.5 text-[#6B4A87]" />
                Noida, Uttar Pradesh demos and support with the team that ships
                the product.
              </p>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#2A1830] border border-[#6B4A87]/25">
              {demoRequested ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#341C3C] text-[#6B4A87] mx-auto flex items-center justify-center border border-[#6B4A87]/30">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#F8F6FB]">
                    Request noted
                  </h3>
                  <p className="text-xs text-[#B9A6D1]">
                    Thank you
                    {demoForm.contactName ? `, ${demoForm.contactName}` : ""}.
                    We will reply within one business day. You can also book
                    instantly on{" "}
                    <a
                      href="https://kiduart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6B4A87] underline"
                    >
                      kiduart.com
                    </a>
                    .
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block mt-2 text-xs font-mono-accent text-[#6B4A87] underline"
                  >
                    Or use the main contact form →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-3.5">
                  <div className="text-xs font-mono-accent text-[#6B4A87] uppercase font-bold">
                    Request a Kiduart walkthrough
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-accent text-[#B9A6D1] mb-1">
                      School / trust name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your school name"
                      value={demoForm.institution}
                      onChange={(e) =>
                        setDemoForm({
                          ...demoForm,
                          institution: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-[#1E1024] border border-[#6B4A87]/40 text-[#F8F6FB] placeholder-[#B9A6D1]/45 text-xs focus:outline-none focus:border-[#6B4A87]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-mono-accent text-[#B9A6D1] mb-1">
                        Your name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Principal / admin"
                        value={demoForm.contactName}
                        onChange={(e) =>
                          setDemoForm({
                            ...demoForm,
                            contactName: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-[#1E1024] border border-[#6B4A87]/40 text-[#F8F6FB] placeholder-[#B9A6D1]/45 text-xs focus:outline-none focus:border-[#6B4A87]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-accent text-[#B9A6D1] mb-1">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@school.edu"
                        value={demoForm.email}
                        onChange={(e) =>
                          setDemoForm({ ...demoForm, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-[#1E1024] border border-[#6B4A87]/40 text-[#F8F6FB] placeholder-[#B9A6D1]/45 text-xs focus:outline-none focus:border-[#6B4A87]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-accent text-[#B9A6D1] mb-1">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 …"
                      value={demoForm.phone}
                      onChange={(e) =>
                        setDemoForm({ ...demoForm, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-[#1E1024] border border-[#6B4A87]/40 text-[#F8F6FB] placeholder-[#B9A6D1]/45 text-xs focus:outline-none focus:border-[#6B4A87]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#6B4A87] text-white font-heading font-semibold text-xs hover:opacity-95"
                  >
                    Send request
                  </button>
                  <p className="text-[10px] text-[#B9A6D1] text-center">
                    For the fastest path, use{" "}
                    <a
                      href="https://kiduart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-[#6B4A87]"
                    >
                      kiduart.com
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
