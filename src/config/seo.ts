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
    title: "Custom Website, Software & Growth | Trevyk Technologies",
    description:
      "Trevyk builds custom websites, web applications, and custom software for startups and local businesses in Noida, plus SEO, digital marketing, social media, video, and scripts. Starter plans. Reply in one business day.",
    crumb: "Home",
    keywords:
      "custom website development, web application development, custom software Noida, affordable website design, SEO services, digital marketing for startups, social media management, business growth, Trevyk Technologies",
  },
  "/services": {
    title: "Website, Software, SEO & Marketing Services | Trevyk",
    description:
      "Custom websites, web apps, custom software, SEO, campaigns, social media management, and video for growing businesses. Starter plans. Noida, India.",
    crumb: "Services",
    keywords:
      "website development services, web application development, custom software, SEO company Noida, digital marketing, social media management, video scripts",
  },
  "/technology": {
    title: "Technology & Architecture | TREVYK Technologies",
    description:
      "How Trevyk designs websites, web apps, and school systems that stay maintainable: modular architecture, documented handoff, and security practices we actually ship.",
    crumb: "Technology",
    keywords:
      "software architecture, modular systems, engineering stack, Trevyk",
  },
  "/kiduart": {
    title: "Kiduart School ERP | TREVYK Technologies",
    description:
      "Kiduart is Trevyk’s school ERP for the Indian school year  admissions to parent updates. Explore modules, then book a demo on kiduart.com.",
    crumb: "Kiduart",
    keywords: "Kiduart, school ERP, school management system, Indian schools",
  },
  "/process": {
    title: "How We Deliver | TREVYK Technologies",
    description:
      "A five-stage path for a website, web app, SEO plan, or campaign: listen, agree the plan, build in slices, launch, then support.",
    crumb: "Process",
    keywords: "software delivery process, scoped builds, Trevyk engineering",
  },
  "/about": {
    title: "About Trevyk Technologies",
    description:
      "Trevyk Technologies, Noida. Custom websites, software, SEO, and campaigns for growing businesses, plus Kiduart for schools. Honest claims, no invented client counts.",
    crumb: "About",
    keywords: "About Trevyk, Noida tech company, Turning Vision Into Progress",
  },
  "/contact": {
    title: "Contact Trevyk Technologies",
    description:
      "Contact Trevyk for Kiduart demos or custom engineering. Noida, India. We reply within one business day.",
    crumb: "Contact",
    keywords: "contact Trevyk, Kiduart demo, custom software enquiry, starter website plan",
  },
  "/sitemap": {
    title: "Site map | Trevyk Technologies",
    description:
      "Every public Trevyk page: services, technology, process, about, Kiduart, contact, and guides for websites, software, SEO, campaigns, social media, and video.",
    crumb: "Site map",
    keywords: "Trevyk sitemap, website services, SEO, custom software",
  },
};

export function normalizeSeoPath(pathname: string): string {
  if (pathname === "/sitemap" || pathname.startsWith("/work/")) return pathname;
  return (SITE_ROUTES as readonly string[]).includes(pathname) ? pathname : "/";
}

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalizeSeoPath(pathname);
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
  return ROUTE_SEO[path] || ROUTE_SEO["/"];
}

export function buildBreadcrumbItems(pathname: string) {
  const path = normalizeSeoPath(pathname);
  const items: { name: string; path: string }[] = [
    { name: ROUTE_SEO["/"].crumb, path: "/" },
  ];
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
