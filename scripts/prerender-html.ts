/**
 * Writes one HTML file per public URL after `vite build`.
 * Googlebot's first fetch does not wait for the React app, and every route
 * was previously the homepage document with a homepage canonical. That made
 * the other sitemap URLs duplicates, so Search Console left them at
 * "Discovered - currently not indexed".
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GUIDES } from "../src/data/guides";
import { SERVICES_DATA } from "../src/data/services";
import {
  breadcrumbJsonLd,
  faqPageMainEntity,
  getRouteSeo,
  isIndexablePath,
  webPageJsonLd,
} from "../src/config/seo";
import { AI_HUB_FAQS } from "../src/data/aiHub";
import {
  absoluteUrl,
  CANONICAL_SITE_URL,
  KIDUART_URL,
  SITE_NAME,
  SITE_ROUTES,
  SITE_TAGLINE,
  SITE_URL,
} from "../src/config/site";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");

const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/ai", label: "AI solutions" },
  { href: "/work/custom-websites", label: "Custom websites" },
  { href: "/work/web-applications", label: "Web applications" },
  { href: "/work/seo", label: "SEO" },
  { href: "/work/digital-marketing", label: "Digital marketing" },
  { href: "/work/social-media", label: "Social media" },
  { href: "/work/video-scripts", label: "Video and scripts" },
  { href: "/work/ai-agents", label: "AI agents" },
  { href: "/work/rag-knowledge-assistants", label: "RAG assistants" },
  { href: "/work/generative-ai-llm-apps", label: "Generative AI & LLMs" },
  { href: "/work/ml-data-systems", label: "ML & data systems" },
  { href: "/work/ai-for-schools", label: "AI for schools" },
  { href: "/technology", label: "Technology" },
  { href: "/process", label: "Process" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/our-products", label: "Our products" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Site map" },
];

const PAGE_COPY: Record<string, { h1: string; paragraphs: string[] }> = {
  "/": {
    h1: "Custom websites, software, AI, and growth from Trevyk Technologies",
    paragraphs: [
      "Product, websites, AI systems, and growth work for businesses that want to be found and then keep the software.",
      "Trevyk Technologies in Noida builds custom websites, web applications, and custom software for startups, shops, clinics, schools, and service businesses. The same practice scopes AI agents, RAG knowledge assistants, generative AI / LLM apps, and practical ML workflows—plus SEO, digital marketing, social media, video, and scripts. Starter plans fit an early budget.",
      "Demand in 2026 clusters around agents, retrieval, and LLM apps as much as brochure sites. We lead with honest scope: one workflow, evals, and human gates—not invented client counts.",
      "Kiduart is the school ERP on kiduart.com. A new website, web app, AI project, or campaign starts at the contact page. Email contact@trevyk.com.",
    ],
  },
  "/what-we-do": {
    h1: "Custom websites, software, AI, and growth services",
    paragraphs: [
      "Websites, web applications, custom software, AI agents, RAG, generative AI apps, ML data systems, SEO, digital marketing, social media, video, and scripts for startups and local businesses. Starter plans are priced with early budgets in mind. Kiduart School ERP stays the product lane.",
      "Each offer below is something Trevyk can scope and deliver. Guides go deeper on the services searchers and answer engines should find: custom websites, web apps, SEO (including AEO/GEO-ready structure), AI agents, RAG, GenAI/LLM apps, and ML systems.",
      "Internal links move from this catalogue to /work guides, then to /contact, so a buyer who searched “AI agent development India” or “website development Noida” can reach a form without hunting the menu.",
    ],
  },
  "/ai": {
    h1: "AI that owns a workflow—not a slide deck",
    paragraphs: [
      "Trevyk builds practical AI for Indian SMBs, startups, and organisations: custom agents, RAG assistants, generative AI / LLM applications, ML scoring systems, and automation beside systems you already run. Kiduart remains the school ERP product brand on kiduart.com.",
      "Problems we solve: repeat support and ops work, answers trapped in documents, LLM apps that must stay on budget, and integrations that need a human gate—not unsupervised autonomy over money or student records.",
      "Discovery to deployment: Discover the workflow and roles; Prototype a narrow path with an eval set; Harden permissions, logging, and production credentials; Operate with monitoring, cost alerts, and controlled prompt changes.",
      "Security, evaluation, and monitoring: least-privilege tool access, audit logs, human approval on irreversible actions, evaluation sets for grounding and safe refusals, and monitoring for latency, token spend, and retrieval misses.",
      "Questions buyers ask: What AI services does Trevyk offer? Custom agents, RAG, GenAI/LLM apps, ML systems, and workflow automation—school ERP product needs belong primarily on kiduart.com. Do you sell separate AEO or GEO packages? No—we improve crawlable structure and clear answers as part of honest SEO. How is cost determined? Integrations, corpus size, languages, traffic, evaluation depth, and write-action risk; we quote from scope.",
      "Start with /work/ai-agents, /work/rag-knowledge-assistants, /work/generative-ai-llm-apps, /work/ml-data-systems, or the school bridge page /work/ai-for-schools. SEO and AI-answer notes live on /work/seo—not as separate acronym products.",
    ],
  },
  "/technology": {
    h1: "How we design systems that stay maintainable",
    paragraphs: [
      "A practical map of Trevyk’s engineering approach: the tools we reach for on websites and web apps, the modular architecture behind products like Kiduart, and how AI services (agents, RAG, LLM APIs, embeddings) plug in without becoming an unmaintainable tangle.",
      "Websites, web apps, school systems, and AI pipelines are documented at handoff so the next change does not depend on one person remembering the structure. Security controls we actually ship—least privilege, secrets outside prompts, audit logs—sit beside performance hygiene for search experience.",
      "Stack choices follow the problem: React and TypeScript for product UI, Node or Python for APIs and ML/LLM services, Postgres and object storage for systems of record, vector stores only when retrieval is required. We prefer boring reliability over fashion.",
    ],
  },
  "/process": {
    h1: "Delivery that stays clear from day one",
    paragraphs: [
      "The same practical path whether you adopt Kiduart or commission a website, a web app, an AI agent, a RAG assistant, SEO, or a campaign: listen, plan, build in slices, launch carefully, then support.",
      "Scope is written before the first screen or the first prompt. You can see what is in the first release, what waits, and which decisions stay human-approved. AI projects include an evaluation set before production credentials.",
      "Five stages: discovery and scope; solution agreement; incremental build with demos; controlled release; operate and evolve. That rhythm is how we keep starter budgets honest.",
    ],
  },
  "/who-we-are": {
    h1: "Who we are — Turning Vision Into Progress",
    paragraphs: [
      "Trevyk Technologies is a Noida practice for Kiduart, custom websites, web applications, software, AI systems (agents, RAG, GenAI, ML), SEO, campaigns, social pages, and video.",
      "Our purpose, how we think and work, what defines us, and the commitments we publish — honest claims, no invented client counts or borrowed geography. Client stories appear only with written consent.",
      "Turning Vision Into Progress is the standard we use on every engagement: clear problem, measurable delivery, systems that fit real workflows. Contact: contact@trevyk.com · Noida, India.",
    ],
  },
  "/our-products": {
    h1: "School ERP built for the Indian school year",
    paragraphs: [
      "Kiduart is Trevyk’s cloud school management platform: admissions, fees, attendance, exams, and parent updates for Indian schools. A school that also needs a public website, campaign, or custom AI beside operations can ask Trevyk for that separately.",
      "Demos are booked on kiduart.com. This page is the product overview on trevyk.in—modules, ownership, and how the product relates to custom engineering.",
      "Custom AI over live student marks or fees inside Kiduart is only described as live when that surface has shipped. Until then, school AI services are scoped on /work/ai-for-schools without overclaiming.",
    ],
  },
  "/contact": {
    h1: "Tell us what you need. We reply in one business day",
    paragraphs: [
      "Kiduart demos for schools, or a starter plan for a website, web app, AI agent, RAG assistant, GenAI/LLM app, ML system, SEO, social page, or video. Name the business, the city, and the budget band—we reply within one business day.",
      "Email contact@trevyk.com. WhatsApp +91 88106 64797. Noida, India. Prefer the form on this page so the request lands with context.",
    ],
  },
  "/sitemap": {
    h1: "Site map",
    paragraphs: [
      "Every public page on trevyk.in, linked so a visitor and a crawler can move from the offer to the detail. Search engines also read the XML file at /sitemap.xml.",
    ],
  },
  "/404": {
    h1: "Page not found",
    paragraphs: [
      "That URL is not a public page on trevyk.in. Use the site map or go back to the homepage.",
    ],
  },
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceOnce(html: string, pattern: RegExp, value: string, label: string): string {
  let hits = 0;
  const next = html.replace(pattern, (_match, open: string, close: string) => {
    hits += 1;
    return `${open}${escapeHtml(value)}${close}`;
  });
  if (hits !== 1) {
    throw new Error(`${label} matched ${hits} times`);
  }
  return next;
}

function routes(): string[] {
  const guideRoutes = GUIDES.map((guide) => `/work/${guide.slug}`);
  return [...SITE_ROUTES, ...guideRoutes];
}

function outputFiles(route: string): string[] {
  if (route === "/") return [path.join(dist, "index.html")];
  const relative = route.slice(1);
  return [
    path.join(dist, relative, "index.html"),
    path.join(dist, `${relative}.html`),
  ];
}

function linkList(links: { href: string; label: string }[]): string {
  return `<ul>${links
    .map(
      (link) =>
        `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`,
    )
    .join("")}</ul>`;
}

function textList(items: string[]): string {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function bodyFor(route: string): string {
  const guide = route.startsWith("/work/")
    ? GUIDES.find((item) => route === `/work/${item.slug}`)
    : undefined;

  if (route.startsWith("/work/") && !guide) {
    throw new Error(`Missing guide for ${route}`);
  }

  const copy = guide
    ? {
        h1: guide.title,
        paragraphs: [guide.description, ...guide.paragraphs],
      }
    : PAGE_COPY[route];

  if (!copy) throw new Error(`Missing static copy for ${route}`);

  const sectionsBlock =
    guide?.sections && guide.sections.length > 0
      ? guide.sections
          .map(
            (section) =>
              `<h2>${escapeHtml(section.heading)}</h2>${section.paragraphs
                .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
                .join("")}`,
          )
          .join("")
      : "";

  const faqBlockFrom = (faqs: readonly { question: string; answer: string }[]) =>
    `<h2>Questions buyers ask</h2>${faqs
      .map(
        (faq) =>
          `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`,
      )
      .join("")}`;

  const faqBlock =
    guide?.faqs && guide.faqs.length > 0
      ? faqBlockFrom(guide.faqs)
      : route === "/ai"
        ? faqBlockFrom(AI_HUB_FAQS)
        : "";

  const extra = guide
    ? `${sectionsBlock}<h2>What you leave with</h2>${textList(guide.points)}${faqBlock}<p><a href="/contact">Start this conversation</a></p><p><a href="/ai">AI solutions hub</a></p>`
    : "";

  const serviceList =
    route === "/what-we-do"
      ? `<h2>Catalogue</h2>${textList(
          SERVICES_DATA.map((service) => `${service.title}. ${service.tagline}`),
        )}<p><a href="/contact">Ask for a starter plan</a></p>`
      : "";

  const related = guide
    ? guide.related.map((slug) => {
        const item = GUIDES.find((guideItem) => guideItem.slug === slug);
        return {
          href: `/work/${slug}`,
          label: item?.title || slug,
        };
      })
    : [];

  // Class trevyk-seo-shell is visually clipped by critical CSS in index.html
  // so users never see this plain-text shell; crawlers still get the HTML.
  return `<!-- trevyk-static-start -->
      <article class="trevyk-seo-shell">
        <nav aria-label="Site">${NAV.map(
          (link) =>
            `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a> `,
        ).join("")}</nav>
        <h1>${escapeHtml(copy.h1)}</h1>
        ${copy.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n        ")}
        ${extra}
        ${serviceList}
        ${faqBlock && !guide ? faqBlock : ""}
        ${related.length ? `<h2>Related</h2>${linkList(related)}` : ""}
        <p><a href="${escapeHtml(KIDUART_URL)}">Kiduart</a> · <a href="mailto:contact@trevyk.com">contact@trevyk.com</a></p>
      </article>
      <!-- trevyk-static-end -->`;
}

function jsonScript(id: string, data: unknown): string {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return `<script type="application/ld+json" id="${id}">${json}</script>`;
}

function render(template: string, route: string): string {
  const seo = getRouteSeo(route);
  const url = absoluteUrl(route);
  const guide = GUIDES.find((item) => route === `/work/${item.slug}`);
  const routeImages: Record<string, string> = {
    "/ai": "/images/ai-hub-systems.jpg",
    "/our-products": "/images/studio-kiduart.jpg",
  };
  const image = absoluteUrl(
    guide?.image || routeImages[route] || "/trevyk-logo-on-dark.png",
  );

  let html = template;
  html = replaceOnce(html, /(<title>)[^<]*(<\/title>)/, seo.title, "title");
  html = replaceOnce(
    html,
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    seo.description,
    "description",
  );
  html = replaceOnce(
    html,
    /(<meta\s+name="keywords"\s+content=")[^"]*(")/,
    seo.keywords || SITE_NAME,
    "keywords",
  );
  html = replaceOnce(
    html,
    /(<meta\s+name="robots"\s+content=")[^"]*(")/,
    isIndexablePath(route)
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, follow",
    "robots",
  );
  html = replaceOnce(
    html,
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    url,
    "canonical",
  );
  html = replaceOnce(
    html,
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    seo.title,
    "og:title",
  );
  html = replaceOnce(
    html,
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    seo.description,
    "og:description",
  );
  html = replaceOnce(
    html,
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    url,
    "og:url",
  );
  html = replaceOnce(
    html,
    /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
    image,
    "og:image",
  );
  html = replaceOnce(
    html,
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
    seo.title,
    "twitter:title",
  );
  html = replaceOnce(
    html,
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
    seo.description,
    "twitter:description",
  );
  html = replaceOnce(
    html,
    /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
    image,
    "twitter:image",
  );

  const faqSource =
    guide?.faqs && guide.faqs.length > 0
      ? guide.faqs
      : route === "/ai"
        ? AI_HUB_FAQS
        : null;

  const faqLd = faqSource?.length
    ? jsonScript("ld-faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqPageMainEntity(faqSource),
      })
    : "";

  const structured = isIndexablePath(route)
    ? [
        jsonScript("ld-organization", {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          alternateName: "Trevyk",
          slogan: SITE_TAGLINE,
          url: SITE_URL,
          logo: absoluteUrl("/trevyk-logo.png"),
          email: "contact@trevyk.com",
          description: getRouteSeo("/").description,
        }),
        jsonScript("ld-website", {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        }),
        jsonScript("ld-webpage", webPageJsonLd(route)),
        jsonScript("ld-breadcrumbs", breadcrumbJsonLd(route)),
        faqLd,
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  if (structured) {
    if (!html.includes("</head>")) throw new Error("Template is missing </head>");
    html = html.replace("</head>", `    ${structured}\n  </head>`);
  }

  const start = html.indexOf("<!-- trevyk-static-start -->");
  const end = html.indexOf("<!-- trevyk-static-end -->");
  if (start < 0 || end < 0 || end < start) {
    throw new Error("Static markers missing from built index.html");
  }
  const endClose = end + "<!-- trevyk-static-end -->".length;
  html = `${html.slice(0, start)}${bodyFor(route)}${html.slice(endClose)}`;

  const canonicals = [...html.matchAll(/rel="canonical" href="([^"]+)"/g)].map(
    (match) => match[1],
  );
  if (canonicals.length !== 1 || canonicals[0] !== url) {
    throw new Error(`Canonical mismatch for ${route}: ${canonicals.join(", ")}`);
  }
  return html;
}

function assertSiteUrlForPrerender() {
  // Defense in depth: apex must never ship in prerendered canonicals.
  // normalizeSiteUrl already maps apex → www; this fails loudly if that regresses.
  const host = new URL(SITE_URL).hostname.toLowerCase();
  if (host === "trevyk.in") {
    throw new Error(
      `Refusing to prerender with apex SITE_URL=${SITE_URL}. ` +
        `Set VITE_SITE_URL=${CANONICAL_SITE_URL} (apex redirects to www).`,
    );
  }
  console.log(`prerender SITE_URL=${SITE_URL}`);
}

function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Build index.html not found at ${templatePath}. Run vite build first.`);
  }
  assertSiteUrlForPrerender();
  const template = fs.readFileSync(templatePath, "utf8");
  const all = [...routes(), "/404"];
  for (const route of all) {
    const files = route === "/404" ? [path.join(dist, "404.html")] : outputFiles(route);
    const html = render(template, route);
    for (const file of files) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
      console.log(`prerender ${route} -> ${path.relative(root, file)}`);
    }
  }
  console.log(`prerendered ${all.length} routes`);
}

main();
