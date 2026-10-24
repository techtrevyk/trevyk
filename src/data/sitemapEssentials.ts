import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cpu,
  GitMerge,
  Home,
  LayoutGrid,
  Mail,
  Package,
  Users,
} from "lucide-react";

export type SitemapEssentialPage = {
  path: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const SITEMAP_ESSENTIALS: SitemapEssentialPage[] = [
  {
    path: "/",
    label: "Home",
    description: "Websites, software, and growth in one introduction.",
    icon: Home,
  },
  {
    path: "/what-we-do",
    label: "What we do",
    description: "The full catalogue, including starter plans.",
    icon: LayoutGrid,
  },
  {
    path: "/ai",
    label: "AI solutions",
    description: "Agents, RAG, and practical automation—honest about what is live.",
    icon: Brain,
  },
  {
    path: "/technology",
    label: "Technology",
    description: "How systems are designed and kept maintainable.",
    icon: Cpu,
  },
  {
    path: "/process",
    label: "Process",
    description: "Listen, plan, build, launch, support.",
    icon: GitMerge,
  },
  {
    path: "/who-we-are",
    label: "Who we are",
    description: "Purpose, commitments, and how to reach us.",
    icon: Users,
  },
  {
    path: "/our-products",
    label: "Our products",
    description: "School ERP and product highlights.",
    icon: Package,
  },
  {
    path: "/contact",
    label: "Contact",
    description: "Tell us the business and the budget.",
    icon: Mail,
  },
];
