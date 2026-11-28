/**
 * Industry solutions hub — Phase D.
 * Detail lives on /work/* money pages; hub never dumps industries onto home.
 */
export type IndustrySolution = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  outcomes: string[];
  href: string;
};

export const SOLUTIONS_HUB = {
  eyebrow: "Solutions by industry",
  title: "Built around how your sector works",
  lead: "Four focused paths—websites, software, growth, and partnerships. Pick your industry for a clear starting brief, then discuss scope.",
} as const;

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    slug: "interior-architecture",
    name: "Interior & Architecture",
    shortName: "Interior",
    blurb:
      "Portfolio sites, quotation flows, project tracking, and client portals for studios that sell space and design.",
    outcomes: ["Portfolio websites", "Quotations", "Project portals"],
    href: "/work/interior-architecture",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    shortName: "Beauty",
    blurb:
      "Booking, client CRM habits, and a digital presence that turns browsers into appointments.",
    outcomes: ["Booking paths", "CRM & follow-up", "Local presence"],
    href: "/work/beauty-wellness",
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    shortName: "Manufacturing",
    blurb:
      "ERP-style modules, inventory, HRMS-adjacent workflows, and integrations that match the floor—not a generic template.",
    outcomes: ["Ops modules", "Inventory & HRMS", "Automation"],
    href: "/work/manufacturing-industrial",
  },
  {
    slug: "marketing-agencies",
    name: "Marketing & Technology Agencies",
    shortName: "Agencies",
    blurb:
      "White-label development, outsourcing, and a technical partnership you can put in front of your clients.",
    outcomes: ["White-label build", "Outsourcing", "Partnerships"],
    href: "/work/marketing-agencies",
  },
];
