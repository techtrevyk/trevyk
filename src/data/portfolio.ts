/**
 * Audit-approved portfolio scope only (P0).
 * Do not add projects, ROI, testimonials, or client counts here.
 */
export type PortfolioStatus = "live" | "under-development" | "client";

export type PortfolioProject = {
  id: string;
  name: string;
  status: PortfolioStatus;
  statusLabel: string;
  classification: string;
  problem: string;
  solution: string;
  features: string[];
  visualSrc: string;
  visualAlt: string;
  /** Honest note when imagery is not a production screenshot */
  visualNote?: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

export const PORTFOLIO_INTRO = {
  eyebrow: "Our work",
  title: "Three projects. Clear status.",
  lead: "Only work we can stand behindlive product, work in progress, and a shipped client site. Transparent status on every card.",
} as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "kiduart",
    name: "KIDUART  Kids’ Smart Aura",
    status: "live",
    statusLabel: "Live product",
    classification: "Proprietary school ERP",
    problem:
      "Schools juggle admissions, fees, attendance, exams, and parent updates across spreadsheets and chat threads.",
    solution:
      "One cloud ERP for the Indian school yearroles that match real staff, modules that follow the calendar, demos on kiduart.com.",
    features: [
      "Admissions & student records",
      "Fees & receipts",
      "Manual attendance",
      "Exams & reports",
      "Parent communication",
    ],
    visualSrc: "/images/our-products/kiduart-card-visual.jpg",
    visualAlt: "Kiduart school ERP product visual",
    primaryCta: {
      label: "Book a Kiduart demo",
      href: "https://kiduart.com",
      external: true,
    },
    secondaryCta: {
      label: "Product overview",
      href: "/our-products",
    },
  },
  {
    id: "sports-academy",
    name: "Sports Academy Management Software",
    status: "under-development",
    statusLabel: "Under development",
    classification: "Product in build",
    problem:
      "Academies need one place for batches, memberships, schedules, and coach workflowswithout bolting three tools together.",
    solution:
      "A management product for sports academies: enrolment, batch planning, attendance for sessions, and staff viewsshipping in stages.",
    features: [
      "Batch & membership workflows (in build)",
      "Session scheduling",
      "Coach / staff views",
      "Enquiry → enrolment path",
    ],
    visualSrc: "/images/our-products/card-custom-software.jpg",
    visualAlt: "Sports academy product direction preview",
    visualNote:
      "Preview imagery for product directionnot a live academy screenshot. Status: under development.",
    primaryCta: {
      label: "Ask about this build",
      href: "/contact",
    },
  },
  {
    id: "agl-creatives",
    name: "AGL Creatives",
    status: "client",
    statusLabel: "Client project",
    classification: "Client website",
    problem:
      "A packaging and print brand needed a clear public site for formats, capabilities, quotes, and contactwithout a cluttered brochure maze.",
    solution:
      "A focused marketing site: product formats, print capabilities, quote and contact flows in one journey.",
    features: [
      "Design · print · pack story",
      "Product catalogue pages",
      "Quote & contact paths",
    ],
    visualSrc: "/images/our-products/card-web-development.jpg",
    visualAlt: "AGL Creatives website preview",
    primaryCta: {
      label: "Visit AGL Creatives",
      href: "https://www.aglcreatives.in/",
      external: true,
    },
    secondaryCta: {
      label: "Discuss a similar site",
      href: "/contact",
    },
  },
];
