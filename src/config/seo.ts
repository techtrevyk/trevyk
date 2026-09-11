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
    title: "TREVYK Technologies | Turning Vision Into Progress",
    description:
      "Trevyk Technologies builds technology products and engineered digital solutions for institutions and organizations. Based in Noida, India.",
    crumb: "Home",
    keywords:
      "Trevyk Technologies, Kiduart, school ERP, custom software, Noida",
  },
  "/services": {
    title: "Products & IT Services | TREVYK Technologies",
    description:
      "From Kiduart School ERP to custom software, web and mobile, cloud, design, and advisory  scoped for real operational outcomes.",
    crumb: "Services",
    keywords: "IT services, custom software, school ERP, cloud DevOps, Trevyk",
  },
  "/technology": {
    title: "Technology & Architecture | TREVYK Technologies",
    description:
      "How Trevyk designs maintainable systems  capability atlas, modular architecture tiers, and security practices we actually ship.",
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
      "A clear five-stage delivery process  listen, plan, build in slices, launch carefully, then support. No invented SLA theatre.",
    crumb: "Process",
    keywords: "software delivery process, scoped builds, Trevyk engineering",
  },
  "/about": {
    title: "About Trevyk Technologies",
    description:
      "Trevyk Technologies  Noida, India. A product and engineering company building software institutions and organizations can run on.",
    crumb: "About",
    keywords: "About Trevyk, Noida tech company, Turning Vision Into Progress",
  },
  "/contact": {
    title: "Contact Trevyk Technologies",
    description:
      "Contact Trevyk for Kiduart demos or custom engineering. Noida, India. We reply within one business day.",
    crumb: "Contact",
    keywords: "contact Trevyk, Kiduart demo, custom software enquiry",
  },
};

export function normalizeSeoPath(pathname: string): string {
  return (SITE_ROUTES as readonly string[]).includes(pathname) ? pathname : "/";
}

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalizeSeoPath(pathname);
  return ROUTE_SEO[path] || ROUTE_SEO["/"];
}

export function buildBreadcrumbItems(pathname: string) {
  const path = normalizeSeoPath(pathname);
  const items: { name: string; path: string }[] = [
    { name: ROUTE_SEO["/"].crumb, path: "/" },
  ];
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
