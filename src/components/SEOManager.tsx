import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteUrl,
  KIDUART_URL,
  SITE_NAME,
  SITE_ROUTES,
  SITE_URL,
} from "../config/site";

interface MetaConfig {
  title: string;
  description: string;
}

const ROUTE_META: Record<string, MetaConfig> = {
  "/": {
    title: "TREVYK Technologies | Turning Vision Into Progress",
    description:
      "Trevyk Technologies builds technology products and engineered digital solutions for institutions and organizations. Based in Noida, India.",
  },
  "/services": {
    title: "Products & IT Services | TREVYK Technologies",
    description:
      "From Kiduart School ERP to custom software, web and mobile, cloud, design, and advisory — scoped for real operational outcomes.",
  },
  "/technology": {
    title: "Technology & Architecture | TREVYK Technologies",
    description:
      "How Trevyk designs maintainable systems — capability atlas, modular architecture tiers, and security practices we actually ship.",
  },
  "/kiduart": {
    title: "Kiduart School ERP | TREVYK Technologies",
    description:
      "Kiduart is Trevyk’s school ERP for the Indian school year — admissions to parent updates. Explore modules, then book a demo on kiduart.com.",
  },
  "/process": {
    title: "How We Deliver | TREVYK Technologies",
    description:
      "A clear five-stage delivery process — listen, plan, build in slices, launch carefully, then support. No invented SLA theatre.",
  },
  "/about": {
    title: "About Trevyk Technologies",
    description:
      "Trevyk Technologies — Noida, India. A product and engineering company building software institutions and organizations can run on.",
  },
  "/contact": {
    title: "Contact Trevyk Technologies",
    description:
      "Contact Trevyk for Kiduart demos or custom engineering. Noida, India. We reply within one business day.",
  },
};

function upsertMeta(
  selector: string,
  attr: string,
  value: string,
  createAttrs?: Record<string, string>,
) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el && createAttrs) {
    el = document.createElement("meta");
    Object.entries(createAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  if (el) el.setAttribute(attr, value);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export const SEOManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = (SITE_ROUTES as readonly string[]).includes(pathname)
      ? pathname
      : "/";
    const meta = ROUTE_META[path] || ROUTE_META["/"];
    const url = absoluteUrl(path);
    const image = absoluteUrl("/trevyk-logo.png");

    document.title = meta.title;
    document.documentElement.lang = "en";

    upsertMeta(
      'meta[name="robots"]',
      "content",
      "index, follow, max-image-preview:large",
      { name: "robots" },
    );
    upsertMeta('meta[property="og:locale"]', "content", "en_IN", {
      property: "og:locale",
    });

    upsertMeta('meta[property="og:description"]', "content", meta.description, {
      property: "og:description",
    });
    upsertMeta('meta[property="og:type"]', "content", "website", {
      property: "og:type",
    });
    upsertMeta('meta[property="og:url"]', "content", url, {
      property: "og:url",
    });
    upsertMeta('meta[property="og:image"]', "content", image, {
      property: "og:image",
    });
    upsertMeta('meta[property="og:site_name"]', "content", SITE_NAME, {
      property: "og:site_name",
    });
    upsertMeta('meta[name="twitter:card"]', "content", "summary_large_image", {
      name: "twitter:card",
    });
    upsertMeta('meta[name="twitter:title"]', "content", meta.title, {
      name: "twitter:title",
    });
    upsertMeta(
      'meta[name="twitter:description"]',
      "content",
      meta.description,
      { name: "twitter:description" },
    );
    upsertMeta('meta[name="twitter:image"]', "content", image, {
      name: "twitter:image",
    });

    upsertLink("canonical", url);

    upsertJsonLd("ld-organization", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: image,
      description:
        "Trevyk Technologies builds technology products and engineered digital solutions for institutions and organizations. Based in Noida, India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [KIDUART_URL],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "contact@trevyk.com",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+91-92175-34128",
          email: "support@kiduart.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    });

    upsertJsonLd("ld-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: meta.description,
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    });

    if (path === "/kiduart") {
      upsertJsonLd("ld-software", {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Kiduart School ERP",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: KIDUART_URL,
        description:
          "Cloud school ERP and school management system for Indian schools  admissions, fees, attendance, exams, and parent communication.",
        offers: {
          "@type": "Offer",
          url: KIDUART_URL,
          availability: "https://schema.org/InStock",
        },
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        isRelatedTo: {
          "@type": "WebPage",
          url: absoluteUrl("/kiduart"),
          name: "Kiduart on TREVYK Technologies",
        },
      });
    } else {
      document.getElementById("ld-software")?.remove();
    }
  }, [pathname]);

  return null;
};
