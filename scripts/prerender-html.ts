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
  { href: "/work/remote-software-ai-team", label: "Remote software & AI team" },
  { href: "/work/website-development-noida", label: "Website development Noida" },
  { href: "/work/ai-agent-vs-chatbot", label: "AI agent vs chatbot" },
  { href: "/work/rag-vs-fine-tuning", label: "RAG vs fine-tuning" },
  { href: "/work/ai-for-schools", label: "AI for schools" },
  { href: "/portfolio", label: "Our work" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work/interior-architecture", label: "Interior & architecture" },
  { href: "/work/beauty-wellness", label: "Beauty & wellness" },
  { href: "/work/manufacturing-industrial", label: "Manufacturing & industrial" },
  { href: "/work/marketing-agencies", label: "Marketing agencies" },
  { href: "/technology", label: "Technology" },
  { href: "/process", label: "Process" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/our-products", label: "Our products" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Site map" },
];

const PAGE_COPY: Record<string, { h1: string; paragraphs: string[] }> = {
  "/": {
    h1: "Technology built around your business — Trevyk Technologies",
    paragraphs: [
      "Turning Vision Into Progress. Software, websites, AI, and digital growth tailored to how you operate—so your business can grow with clarity.",
      "Trevyk (HQ Noida) works across India and remotely worldwide. We start from your business problem, then choose the right mix: presence, enquiries, systems, and practical AI when it helps.",
      "Explore /portfolio for verified work, discuss a project at /contact, or see Kiduart on kiduart.com.",
    ],
  },
  "/what-we-do": {
    h1: "End-to-end ways we help your business grow",
    paragraphs: [
      "Presence and SEO so buyers find you. Paths that turn visits into conversations. Software and mobile apps for how the team works. Campaigns when you need reach. AI agents, RAG, and GenAI when repeat work or buried knowledge is the bottleneck. Partnerships for agencies. Kiduart remains the school ERP product lane.",
      "Each guide below is a deep cut you can hand to a founder or ops lead. The story is the same: your business first, tools second.",
      "From this catalogue, see /portfolio, then /contact—so a search for AI agents or local websites still lands on a form with context.",
    ],
  },
  "/ai": {
    h1: "AI that helps your business move faster",
    paragraphs: [
      "Trevyk uses practical AI for growth and operations: custom agents, RAG over your documents, GenAI/LLM apps, and light ML beside tools you already run. Ready-to-scope offers are labelled separately from feasibility-led ML and educational compare guides. HQ in Noida; remote-first worldwide. Kiduart stays on kiduart.com.",
      "Problems we solve: repeat support and ops work, answers trapped in files, apps that must stay on budget, and actions that need a human gate on money, identity, or student records.",
      "Path: discover the workflow; prototype with an eval set; harden permissions and logging; operate with cost and quality checks.",
      "Start with /work/ai-agents, /work/rag-knowledge-assistants, /work/generative-ai-llm-apps, /work/ml-data-systems, /work/remote-software-ai-team, or /work/ai-for-schools. SEO notes live on /work/seo.",
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
    h1: "Who we are — growth partners with modern tech",
    paragraphs: [
      "Trevyk Technologies helps real businesses grow. HQ in Noida, India; clients across India and remotely worldwide. Websites, software, SEO, campaigns, and practical AI—plus Kiduart for schools.",
      "Verified milestones: Kiduart live on kiduart.com; three portfolio projects with clear status; remote-first delivery; practical AI with ready vs educational labels. Client stories appear only with written consent.",
      "Turning Vision Into Progress means a clear problem, a measurable next release, and systems that fit real workflows. contact@trevyk.com · WhatsApp +91 88106 64797.",
    ],
  },
  "/portfolio": {
    h1: "Our work — three verified projects",
    paragraphs: [
      "Trevyk publishes only three portfolio projects with clear status: Kiduart school ERP (live product), Sports Academy Management Software (under development), and AGL Creatives (client website).",
      "Kiduart: admissions, fees, manual attendance, exams, parent communication—demos on kiduart.com. Sports Academy: batch, membership, and coach workflows shipping in stages—not production adoption. AGL Creatives: packaging and print brand site at aglcreatives.in.",
      "Transparent status on every card. Discuss a project at /contact — contact@trevyk.com",
    ],
  },
  "/solutions": {
    h1: "Industry solutions — interior, beauty, manufacturing, agencies",
    paragraphs: [
      "Trevyk publishes four industry paths so buyers get a sharper brief without dumping sectors on the homepage: interior & architecture, beauty & wellness, manufacturing & industrial, and marketing & technology agencies.",
      "Each path links to a dedicated /work guide covering websites, software, growth, or white-label partnership. Discuss any sector at /contact — contact@trevyk.com",
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
    h1: "Tell us where growth is stuck. We reply in one business day",
    paragraphs: [
      "Whether you need more enquiries, cleaner systems, Kiduart for a school, or practical AI beside your work—name the business, city or timezone, and budget band. We reply within one business day.",
      "Email contact@trevyk.com. WhatsApp +91 88106 64797. HQ Noida; remote-friendly worldwide. Prefer the form so context lands with the request.",
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
    "/portfolio": "/images/work/portfolio-hero.jpg",
    "/solutions": "/images/work/portfolio-hero.jpg",
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
          address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          sameAs: [
            KIDUART_URL,
            "https://www.linkedin.com/company/trevyk-technologies",
          ],
          areaServed: [
            { "@type": "Country", name: "India" },
            { "@type": "Place", name: "Worldwide" },
          ],
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
