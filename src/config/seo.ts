import { getGuide } from "../data/guides";
import { absoluteUrl, SITE_NAME, SITE_ROUTES, SITE_URL } from "./site";

export interface RouteSeo {
  title: string;
  description: string;
  /** Short crumb label for UI + BreadcrumbList */
  crumb: string;
  keywords?: string;
}

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: "Technology Built Around Your Business | Trevyk",
    description:
      "Trevyk builds software, websites, AI, and digital growth around how your business works—so you can operate and grow with clarity. Remote-ready. HQ Noida.",
    crumb: "Home",
    keywords:
      "custom software development, AI agents RAG GenAI, digital growth, business websites SEO, remote software team, Trevyk Technologies",
  },
  "/what-we-do": {
    title: "End-to-End Business Growth Solutions | Trevyk",
    description:
      "From being found online to converting enquiries and running day-to-day work—websites, SEO, campaigns, software, and AI. Built around your business, not a generic service menu.",
    crumb: "What we do",
    keywords:
      "business growth solutions, digital growth for SMBs, AI agents for business, SEO and websites, custom software for growth",
  },
  "/ai": {
    title: "AI That Helps Your Business Move Faster | Trevyk",
    description:
      "Agents, RAG knowledge assistants, GenAI/LLM apps, and ML—used to cut repeat work, answer from your docs, and support growth. Honest scope; no vapour demos.",
    crumb: "AI",
    keywords:
      "AI for business growth, custom AI agents, RAG assistants, generative AI apps, business automation AI, Trevyk AI",
  },
  "/portfolio": {
    title: "Our Work — Kiduart, Sports Academy, AGL Creatives | Trevyk",
    description:
      "Three verified projects: Kiduart school ERP (live), Sports Academy management software (under development), and AGL Creatives (client site). Clear status—no padded case studies.",
    crumb: "Our work",
    keywords:
      "Trevyk portfolio, Kiduart school ERP, sports academy software, AGL Creatives website, custom software portfolio",
  },
  "/technology": {
    title: "Technology & Architecture | TREVYK Technologies",
    description:
      "How Trevyk designs websites, web apps, AI services, and school systems that stay maintainable: modular architecture, LLM/RAG integration patterns, documented handoff, and security we ship.",
    crumb: "Technology",
    keywords:
      "software architecture, AI engineering stack, RAG architecture, modular systems, Trevyk",
  },
  "/our-products": {
    title: "Kiduart School ERP | TREVYK Technologies",
    description:
      "Kiduart is Trevyk’s school ERP for the Indian school year  admissions to parent updates. Explore modules, then book a demo on kiduart.com.",
    crumb: "Our products",
    keywords: "Kiduart, school ERP, school management system, Indian schools",
  },
  "/process": {
    title: "How We Deliver | TREVYK Technologies",
    description:
      "A five-stage path for a website, web app, SEO plan, or campaign: listen, agree the plan, build in slices, launch, then support.",
    crumb: "Process",
    keywords: "software delivery process, scoped builds, Trevyk engineering",
  },
  "/who-we-are": {
    title: "Who We Are | Trevyk Technologies",
    description:
      "We exist to help real businesses grow with modern technology—presence, enquiries, software, and AI. HQ in Noida; clients across India and worldwide. Honest claims only.",
    crumb: "Who we are",
    keywords:
      "Who we are Trevyk, business growth partner, Turning Vision Into Progress, Kiduart",
  },
  "/contact": {
    title: "Contact Trevyk — Let's Grow Your Business",
    description:
      "Tell us your business, city or timezone, and where growth is stuck. Website, SEO, software, or AI—we reply within one business day.",
    crumb: "Contact",
    keywords: "contact Trevyk, business growth enquiry, AI for business, Kiduart demo",
  },
  "/sitemap": {
    title: "Site map | Trevyk Technologies",
    description:
      "Every public Trevyk page: portfolio, services, AI solutions, technology, process, about, Kiduart, contact, and guides for websites, software, SEO, AI, campaigns, social media, and video.",
    crumb: "Site map",
    keywords: "Trevyk sitemap, website services, SEO, custom software, AI agents",
  },
};

export const NOT_FOUND_SEO: RouteSeo = {
  title: "Page not found | Trevyk Technologies",
  description:
    "That URL is not a public page on trevyk.in. Open the site map or return home.",
  crumb: "Not found",
};

export function isIndexablePath(pathname: string): boolean {
  if ((SITE_ROUTES as readonly string[]).includes(pathname)) return true;
  if (pathname.startsWith("/work/")) {
    return Boolean(getGuide(pathname.replace("/work/", "")));
  }
  return false;
}

export function normalizeSeoPath(pathname: string): string {
  if (isIndexablePath(pathname)) return pathname;
  return "/404";
}

export function getRouteSeo(pathname: string): RouteSeo {
  const normalizedPath =
    pathname === "/about"
      ? "/who-we-are"
      : pathname === "/services"
        ? "/what-we-do"
        : pathname === "/kiduart"
          ? "/our-products"
          : pathname;
  const path = normalizeSeoPath(normalizedPath);
  if (path.startsWith("/work/")) {
    const guide = getGuide(path.replace("/work/", ""));
    if (guide) {
      return {
        title: `${guide.title} | Trevyk`,
        description: guide.description,
        crumb: guide.kicker,
        keywords: guide.keywords,
      };
    }
  }
  if (path === "/404") return NOT_FOUND_SEO;
  return ROUTE_SEO[path] || NOT_FOUND_SEO;
}

/** Shared social / OG image path so prerender HTML and client SEO stay aligned. */
const ROUTE_SOCIAL_IMAGES: Record<string, string> = {
  "/ai": "/images/ai-hub-systems.jpg",
  "/what-we-do": "/images/what-we-do/hero-backdrop.jpg",
  "/contact": "/images/contact/hero-backdrop.jpg",
  "/technology": "/images/technology/hero-backdrop.jpg",
  "/process": "/images/studio-process.jpg",
  "/who-we-are": "/images/studio-about.jpg",
  "/our-products": "/images/studio-kiduart.jpg",
  "/portfolio": "/images/work/portfolio-hero.jpg",
};

export function getSocialImagePath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  if (path.startsWith("/work/")) {
    const guide = getGuide(path.replace("/work/", ""));
    if (guide?.image) return guide.image;
  }
  return ROUTE_SOCIAL_IMAGES[path] || "/trevyk-logo-on-dark.png";
}

export function getSocialImageAlt(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  if (path.startsWith("/work/")) {
    const guide = getGuide(path.replace("/work/", ""));
    if (guide?.alt) return guide.alt;
  }
  if (path === "/ai") {
    return "Painterly diagram of connected AI systems and workflow nodes";
  }
  if (ROUTE_SOCIAL_IMAGES[path]) {
    return `${SITE_NAME} — ${getRouteSeo(path).crumb}`;
  }
  return `${SITE_NAME} logo`;
}

export function buildBreadcrumbItems(pathname: string) {
  const path = normalizeSeoPath(pathname);
  const items: { name: string; path: string }[] = [
    { name: ROUTE_SEO["/"].crumb, path: "/" },
  ];
  if (path === "/404" || !isIndexablePath(pathname)) {
    items.push({ name: NOT_FOUND_SEO.crumb, path: pathname });
    return items;
  }
  if (path.startsWith("/work/")) {
    items.push({ name: "Guides", path: "/sitemap" });
  }
  if (path !== "/") {
    items.push({ name: getRouteSeo(path).crumb, path });
  }
  return items;
}

export function breadcrumbJsonLd(pathname: string) {
  const items = buildBreadcrumbItems(pathname);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage `mainEntity` — keep JSON-LD aligned with visible FAQ copy. */
export function faqPageMainEntity(
  faqs: readonly { question: string; answer: string }[],
) {
  return faqs.map((faq) => ({
    "@type": "Question" as const,
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: faq.answer,
    },
  }));
}

export function webPageJsonLd(pathname: string) {
  const path = normalizeSeoPath(pathname);
  const seo = getRouteSeo(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "en-IN",
  };
}
