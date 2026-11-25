export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  kicker: string;
  image: string;
  alt: string;
  caption: string;
  related: string[];
  paragraphs: string[];
  points: string[];
  /** Deeper H2 sections for service guides (agents, RAG, etc.). */
  sections?: GuideSection[];
  /** Optional Q&A for humans and answer-style discovery; keep facts honest. */
  faqs?: GuideFaq[];
}

export const GUIDES: Guide[] = [
  {
    slug: "custom-websites",
    title: "Custom website development for startups and local businesses",
    description:
      "How Trevyk scopes an affordable custom website: pages, keywords, enquiry forms, and a starter plan sized to an early budget.",
    keywords: "custom website development, affordable website design Noida, startup website",
    kicker: "Websites",
    image: "/images/growth-website.jpg",
    alt: "Painting of a founder reviewing a website on a laptop",
    caption: "The first page has to explain the offer before it tries to impress.",
    related: ["web-applications", "seo"],
    paragraphs: [
      "A startup website is not a brochure with a contact number at the bottom. It is the page a stranger lands on after searching for the service you sell. If that page talks about “solutions” and never names the work, the visit ends.",
      "Trevyk builds custom websites for shops, clinics, coaching centres, schools, and software startups. The structure is simple on purpose: what you do, who it is for, how a project starts, and a form that asks for the business type and budget. Starter plans exist so an early-stage company does not have to wait for a large retainer before it can be found.",
      "We write the headings around real searches: custom website development, web design for small business, and local service queries in your city. The same words appear in the title, the first paragraph, and the internal links, so a crawler and a human read the same page.",
    ],
    points: [
      "Responsive pages that stay readable on a phone",
      "One clear enquiry path, not five competing buttons",
      "On-page SEO written into the copy, not bolted on later",
      "A handover you can edit without calling us for every sentence",
    ],
  },
  {
    slug: "web-applications",
    title: "Web application and custom software development",
    description:
      "When a website is not enough: web apps, portals, and custom software your team owns, scoped for the work you repeat every week.",
    keywords: "web application development, custom software development, startup web app",
    kicker: "Software",
    image: "/images/studio-technology.jpg",
    alt: "Painting of stacked blocks suggesting a software system",
    caption: "A web app should match the work, not a feature list from another industry.",
    related: ["custom-websites", "digital-marketing"],
    paragraphs: [
      "Plenty of businesses outgrow a website and start running on spreadsheets, WhatsApp groups, and a shared password. That is the moment for a web application: bookings, a customer portal, a staff dashboard, or a small tool that only your team needs.",
      "Trevyk designs custom software when a rented product cannot follow your process. You keep the source. We name what is in the first release and what waits. A school might need Kiduart. A clinic, a studio, or a product company might need a scoped web app instead. We say which, before we build.",
      "Internal links on this site point from the service catalogue to this page, then to contact, so a visitor who arrived for “custom software Noida” can move to the exact conversation without hunting the menu.",
    ],
    points: [
      "Role-based screens for staff and customers",
      "Written scope before the first screen",
      "Source ownership, not a locked portal",
      "A launch checklist your team can run",
    ],
  },
  {
    slug: "seo",
    title: "SEO for businesses that need enquiries, not vanity traffic",
    description:
      "Keyword maps, service pages, FAQs, and internal links so classic search and AI-answer surfaces can send people who already want a website, an app, an agent, or a campaign.",
    keywords:
      "SEO services for small business, AEO GEO AIO SXO Noida, keyword research, on-page SEO India, answer engine optimization",
    kicker: "Search",
    image: "/images/growth-content.jpg",
    alt: "Painting of a notebook, camera, and phone for content work",
    caption: "Search works when the page says the same thing the customer typed.",
    related: [
      "custom-websites",
      "digital-marketing",
      "ai-agents",
      "generative-ai-llm-apps",
    ],
    paragraphs: [
      "SEO starts with the words a buyer types when they are ready to talk, not with a list of synonyms stuffed into a footer. For Trevyk those words include custom website development Noida, web application, custom software, AI agents, RAG assistants, SEO, social media management, and video for small business.",
      "We map one primary keyword to one page, then connect the pages into topic clusters. A homepage introduces the practice. A service page holds the offer. A guide page like this one goes deeper so Google—and answer engines—have something specific to crawl. Internal links use the phrase a person would search, not “click here”.",
      "We do not promise first-page rankings on a calendar. We do publish crawlable pages, a sitemap, llms.txt for AI crawlers, and a plan for the next page to write. That is how a young company becomes findable without inventing traffic numbers.",
    ],
    points: [
      "Search intent + keyword clusters by service and city",
      "Titles, H1s, and BLUF openings that match the query",
      "FAQ sections with structured answers (AEO)",
      "Internal links and topical depth across AI + web offers",
      "Search Console and Analytics so you see real queries—not vanity",
    ],
    sections: [
      {
        heading: "SEO — classic discovery",
        paragraphs: [
          "Crawlability, indexable HTML, canonicals, sitemap, and on-page alignment still decide whether you appear for money keywords. Thin pages lose to agencies with years of links; depth and clarity are how a new domain starts.",
          "We prioritise commercial intent (hire / build / automate) over informational fluff, then measure impressions and clicks in Search Console—not imaginary ranks.",
        ],
      },
      {
        heading: "AEO — answer engine readiness",
        paragraphs: [
          "Answer engines reward direct responses: a clear first paragraph (BLUF), FAQ blocks humans can read, and the same facts in schema where appropriate.",
          "Every service guide should answer “what is it, who is it for, what do we deliver, what we will not claim.” That is AEO without selling a fake product name.",
        ],
      },
      {
        heading: "GEO & AIO — generative and overview surfaces",
        paragraphs: [
          "Generative engines and AI Overviews pull from consistent entities, original scoped insights, and pages other sites mention. Fabricated testimonials hurt trust; honest process copy and real NAP help.",
          "We keep Organization/WebPage JSON-LD, llms.txt, and one story across LinkedIn, the site, and Kiduart. We do not promise citations or Share-of-Model scores.",
        ],
      },
      {
        heading: "SXO — search experience",
        paragraphs: [
          "Search experience means the click was worth it: fast first paint, readable mobile layout, obvious next step to contact, and navigation that does not hide the offer.",
          "If someone arrives from an AI summary or a classic blue link, the page must confirm the same facts within seconds—or the session dies and rankings follow.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you sell separate AEO, GEO, or AIO packages?",
        answer:
          "No. We improve crawlable structure, useful answers, entities, and page experience. Those practices support classic SEO and AI-answer surfaces. We do not sell acronym packages or promise citations.",
      },
      {
        question: "What is SXO here?",
        answer:
          "Search experience optimization: clarity, mobile usability, speed hygiene, and a navigation flow that turns a search visit into an enquiry—not a bounce.",
      },
      {
        question: "What do you measure after SEO work?",
        answer:
          "Search Console coverage, queries, impressions, clicks, and whether the right pages are indexed. In Analytics we watch landing pages and generate_lead events. We do not invent ranking timelines.",
      },
      {
        question: "Will this get us into Google AI Overviews?",
        answer:
          "Nobody can guarantee Overview citations. Clear answers, consistent facts, and authoritative mentions improve the odds; we will not sell guarantees.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital marketing and campaigns for growing businesses",
    description:
      "Campaigns, landing pages, and offers sized for starter budgets. The goal is a conversation, not a pile of impressions.",
    keywords: "digital marketing for startups, Google ads, social campaigns, landing pages",
    kicker: "Campaigns",
    image: "/images/growth-business.jpg",
    alt: "Painting of a small storefront and climbing vine",
    caption: "A campaign only works if the page behind the ad tells the same story.",
    related: ["seo", "social-media"],
    paragraphs: [
      "A campaign that sends people to a vague homepage wastes the budget. We start with one offer: a website starter plan, a school demo, a web app discovery, or a monthly social calendar. The ad, the landing page, and the form all name that offer.",
      "Digital marketing at Trevyk covers search ads, social campaigns, and the page they land on. We fit the plan to the business. A clinic does not get a software-startup script. A coaching centre does not get a school-ERP ad. You tell us the customer. We write toward that person.",
      "Starter budgets are welcome. We would rather run a small campaign you can read than a large one nobody on your team understands. Each week we say what to keep and what to stop.",
    ],
    points: [
      "One offer per campaign",
      "Landing page that matches the ad",
      "Budget ranges for early-stage businesses",
      "A short note on what the numbers mean",
    ],
  },
  {
    slug: "social-media",
    title: "Social media management that keeps the page alive",
    description:
      "Content calendars, captions, and page handling so a business looks present between client work.",
    keywords: "social media management, Instagram for small business, content calendar",
    kicker: "Social",
    image: "/images/growth-content.jpg",
    alt: "Painting suggesting social and content work on a desk",
    caption: "A quiet page is a closed shop, even if the website is finished.",
    related: ["video-scripts", "digital-marketing"],
    paragraphs: [
      "Most owners know they should post. The page still goes quiet because nobody owns the calendar. Social media management at Trevyk is that ownership: profile, bio, weekly posts, and a reply habit.",
      "We write in the voice of the business. A school, a clinic, and a software studio should not sound like the same agency template. Scripts and captions come from the offer on the website so the page and the feed agree.",
      "This is not follower theatre. The measure is whether a stranger can tell what you sell and how to reach you. That same path is linked from the feed to the website, and from the website back to contact.",
    ],
    points: [
      "Profile and bio written for the offer",
      "A 30-day calendar",
      "Captions in English or Hindi",
      "A simple rule for comments and DMs",
    ],
  },
  {
    slug: "video-scripts",
    title: "Video and scripts for websites, reels, and explainers",
    description:
      "Short scripts and service videos that say what you sell before the viewer has to guess.",
    keywords: "explainer video, reel scripts, small business video, Hindi English scripts",
    kicker: "Video",
    image: "/images/studio-process.jpg",
    alt: "Painting of a path, used here as a picture of a story moving forward",
    caption: "A 40-second script beats a long film nobody finishes.",
    related: ["social-media", "custom-websites"],
    paragraphs: [
      "Video is useful when it does one job: show the offer. A founder explaining who the work is for, a walkthrough of a school demo, or a reel that names the starter website plan. We write the script first, then the shot list a small team can film.",
      "Scripts can be English, Hindi, or both. Captions matter because most people watch without sound. The same lines can live on the website, so the video and the page do not contradict each other.",
      "We do not pretend to be a film studio. We write, plan, and edit notes for reels and website embeds that a growing business can publish this month.",
    ],
    points: [
      "Script before cameras",
      "Shot list a small team can follow",
      "Captions for silent viewing",
      "A place on the website for the finished film",
    ],
  },
  {
    slug: "ai-agents",
    title: "Custom AI agent development for business workflows",
    description:
      "Scoped AI agents that call your tools, follow role rules, and escalate to humans—built for SMBs and product teams in India, not vapour demos.",
    keywords:
      "custom AI agent development India, business AI agents, LLM workflow automation, Gemini agents, human-in-the-loop AI",
    kicker: "AI agents",
    image: "/images/ai-agents-workflow.jpg",
    alt: "Painterly diagram of an AI agent workflow with tool steps and an approval checkpoint",
    caption: "Intake → tools → human gate → action. Chat alone is not an agent.",
    related: ["rag-knowledge-assistants", "web-applications", "seo"],
    paragraphs: [
      "Businesses hire partners for AI agents when staff repeat the same lookups, ticket replies, booking steps, or document handoffs. The buyer is usually an operations lead, founder, or IT owner who wants hours back—not a research paper.",
      "Trevyk builds custom agents that combine a language model with approved tools (APIs, search, forms, messaging). We start with one workflow: intake, retrieval or classification, proposed action, human review where risk is high, then an audit log. Multi-agent orchestration comes only after the first path is stable.",
      "Cost depends on integrations, languages, traffic, evaluation depth, and whether write actions are allowed. We quote from your scope. You keep the source for custom work. We do not invent school counts or claim an agent is live inside Kiduart ERP unless that product surface has shipped.",
    ],
    points: [
      "One primary workflow before multi-agent theatre",
      "Precise tool definitions and least-privilege access",
      "Human escalation and approval checkpoints",
      "Eval set, traces, and cost monitoring notes",
    ],
    sections: [
      {
        heading: "Agent types we actually scope",
        paragraphs: [
          "Support triage agents classify and draft replies, then hand off to a person when confidence is low or policy requires it.",
          "Operations agents look up order, ticket, or CRM state through your APIs and prepare the next step—never inventing a record that is not returned by a tool.",
          "Document and intake agents extract fields, validate them against rules, and open a case for staff confirmation on sensitive writes.",
          "Internal copilots help employees search approved knowledge; they are not unsupervised spenders, buyers, or exam graders.",
        ],
      },
      {
        heading: "Workflow and architecture",
        paragraphs: [
          "A practical agent loop is: understand the request, decide which tool (if any) to call, execute with structured inputs, check the result, answer or act, and log the path. Predictable steps belong in deterministic code; the model should not reinvent them every time.",
          "Enterprise guidance from providers such as Google Cloud emphasises loading only task-specific tools rather than stuffing every API into context, wrapping external APIs so the model sees only relevant fields, and governing tool calls with identity, policy, and audit.",
          "We write role instructions, tool schemas, refusal rules, and iteration limits before the first demo. That documentation becomes part of the handoff.",
        ],
      },
      {
        heading: "Tool calling, integrations, and memory",
        paragraphs: [
          "Approved integrations are listed in the scope: CRM, helpdesk, ERP read endpoints, WhatsApp or web widgets, calendars, and internal search. Write actions stay behind permissions and usually behind confirmation.",
          "Short-term conversation memory is fine for a session. Long-term memory of customer facts belongs in your systems of record—not in an opaque model cache—so access controls stay enforceable.",
          "When several tools must run together, we prefer one composed tool or a callback chain so behaviour stays deterministic instead of hoping the model invents the sequence.",
        ],
      },
      {
        heading: "Human-in-the-loop, reliability, and security",
        paragraphs: [
          "Human approval sits on money moves, identity changes, exam or fee updates, legal language, and any action your policy marks as irreversible.",
          "Reliability work includes an evaluation set of real questions, simulated tool failures, grounding checks where RAG is involved, and traces you can review after an incident.",
          "Security basics: least-privilege service accounts, secrets outside the prompt, PII redaction where needed, rate limits, and a clear kill switch. Failure handling returns a safe message and opens a human queue—never a silent wrong write.",
        ],
      },
      {
        heading: "Implementation phases and what you receive",
        paragraphs: [
          "Discovery maps the workflow, data sources, roles, and decisions a human must keep. Prototype proves the path on a narrow corpus or sandbox API. Hardening adds evals, logging, and production credentials. Operate covers monitoring, cost alerts, and a change process for prompts and tools.",
          "Typical deliverables: scoped agent service or module, tool wrappers, prompt and policy notes, eval checklist, runbook, and source ownership for custom code.",
          "Voice agents are optional and only proposed when the channel and latency requirements are real—not as a default upsell.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a custom AI agent in this context?",
        answer:
          "Software that uses a language model plus tools (APIs, search, forms) to complete a defined business workflow, with logging and a path to a human when confidence is low or policy requires review.",
      },
      {
        question: "Do you only use Gemini?",
        answer:
          "The public Trevyk site assistant uses Gemini today. Custom projects can integrate other model providers when the engagement requires it; we choose based on cost, privacy, latency, and quality for the workflow.",
      },
      {
        question: "Can an agent update our ERP or CRM?",
        answer:
          "Yes when you authorize scoped API access and accept audit logging. Sensitive writes usually require confirmation or human review.",
      },
      {
        question: "How do you measure success?",
        answer:
          "Against an agreed evaluation set: task completion, safe refusals, grounding where documents are required, escalation rate, latency, and token cost—not vanity chat volume.",
      },
    ],
  },
  {
    slug: "rag-knowledge-assistants",
    title: "RAG and private knowledge assistants",
    description:
      "Retrieval-augmented generation over your documents and systems so answers cite your sources instead of inventing them.",
    keywords:
      "RAG development India, private knowledge assistant, enterprise document AI, LLM retrieval, grounded answers",
    kicker: "RAG",
    image: "/images/ai-rag-knowledge.jpg",
    alt: "Painterly illustration of documents being retrieved into a grounded answer with citation marks",
    caption: "Retrieve first. Generate second. Cite the passage you used.",
    related: ["ai-agents", "seo", "web-applications"],
    paragraphs: [
      "RAG is the pattern teams ask for when answers must come from their own PDFs, policies, product manuals, or ticket history—not from a model’s training memory alone.",
      "Trevyk designs ingestion, chunking, embeddings, retrieval filters, and answer prompts so the model must show which passage it used. Role-aware access matters: different roles should not see the same corpus.",
      "A useful first project is narrow. Wide “chat with the whole company drive” projects fail when permissions and freshness are ignored. Training or fine-tuning on private corpora is a separate, explicit decision—not a default.",
    ],
    points: [
      "Corpus selection and permission model",
      "Chunking, retrieval, and optional reranking checks",
      "Cited answers and refusal when context is thin",
      "Refresh path when documents change",
    ],
    sections: [
      {
        heading: "Ingestion, chunking, and embeddings",
        paragraphs: [
          "We inventory sources (drives, CMS, ticketing exports, manuals), clean formats, and attach metadata such as department, language, and sensitivity.",
          "Chunking follows document structure where possible so retrieval returns coherent passages. Embeddings index those chunks for semantic search; exact filters (product line, date, role) sit beside vectors so retrieval stays precise.",
          "Reference architectures from cloud providers describe event-driven refresh so new or updated documents enter the store without waiting for a monthly rebuild. Freshness is a product requirement, not an afterthought.",
        ],
      },
      {
        heading: "Retrieval, grounded answers, and citations",
        paragraphs: [
          "At query time the system retrieves candidate passages, optionally reranks them, and asks the model to answer only from that context. If context is insufficient, the assistant should say so or escalate—not guess.",
          "Agentic RAG patterns (query rewriting, multi-hop search, sufficient-context checks) help on complex questions; we use them when a single retrieval pass is not enough, not as decoration.",
          "Visible citations—document title, section, or link—let a reviewer verify the answer. That is how private knowledge assistants earn trust inside a company.",
        ],
      },
      {
        heading: "Permissions, isolation, and failure handling",
        paragraphs: [
          "Document ACLs must travel with retrieval. A finance clerk and an admissions officer should never share an unfiltered index.",
          "Data residency and provider settings are chosen with you. Secrets and raw uploads stay out of client-side code.",
          "When retrieval returns nothing, the UX refuses cleanly, offers a human path, and logs the miss so you can improve the corpus.",
        ],
      },
      {
        heading: "Evaluation, deployment, and deliverables",
        paragraphs: [
          "We build a golden question set from real staff queries: accuracy, citation presence, refusal correctness, latency, and cost per answer.",
          "Deployment may be a secured web assistant, an internal chat surface, or a tool behind an agent. Integrations stay on approved APIs.",
          "You leave with: indexed corpus design, retrieval pipeline notes, assistant UI or API, eval report, refresh runbook, and source for custom components.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does RAG mean here?",
        answer:
          "Retrieval-Augmented Generation: the system searches your approved documents first, then asks the model to answer using those passages, reducing reliance on the model’s training memory alone.",
      },
      {
        question: "Will this train on our private data?",
        answer:
          "We design for retrieval and API-based generation with your configured providers. Training or fine-tuning on private corpora is a separate, explicit decision—not a default.",
      },
      {
        question: "How is this different from a public chatbot?",
        answer:
          "Answers are constrained to your corpus and roles. Without retrieval hits, the system should refuse or escalate instead of inventing policy.",
      },
      {
        question: "What drives cost?",
        answer:
          "Corpus size and refresh frequency, embedding and inference usage, languages, integrations, and how deep evaluation and monitoring need to be. We estimate from your scope rather than quoting a fixed brochure price.",
      },
    ],
  },
  {
    slug: "ai-for-schools",
    title: "School operations AI — Trevyk custom work beside Kiduart",
    description:
      "How Trevyk scopes custom AI beside school systems, and when to use Kiduart (kiduart.com) for the school ERP product itself—without claiming live student-data agents that are not shipped.",
    keywords:
      "school operations AI, education workflow automation, Kiduart ERP, custom AI for schools India",
    kicker: "Education AI",
    image: "/images/ai-schools-operations.jpg",
    alt: "Painterly campus and ledger scene suggesting role-aware school operations assistance",
    caption: "Product demos live on kiduart.com. Custom AI beside the ERP is scoped here.",
    related: ["ai-agents", "rag-knowledge-assistants", "custom-websites"],
    paragraphs: [
      "Trevyk is the technology and services company. Kiduart is the school ERP product brand. If you need the ERP itself—admissions, fees, attendance, exams, parent updates—start at kiduart.com for product detail and demos.",
      "This page explains custom AI work Trevyk can scope around school operations: staff policy assistants, enquiry triage, notice drafting, and permissioned workflows. It is not a substitute for the Kiduart product site, and it does not claim a live inside-ERP agent over student records unless that surface has shipped and is labelled as live.",
      "School data is sensitive. Credible near-term projects stay role-aware, authenticated, and human-supervised on irreversible actions.",
    ],
    points: [
      "Kiduart product → kiduart.com",
      "Custom AI workflows → contact Trevyk",
      "Role-aware access before model choice",
      "No unsupervised writes to exam or fee records",
    ],
    sections: [
      {
        heading: "Where Kiduart ends and custom AI begins",
        paragraphs: [
          "Kiduart (kiduart.com) is Trevyk’s cloud school management / ERP product for Indian schools. Book product demos and explore modules there.",
          "Custom AI on Trevyk covers assistants and automations that sit beside your systems: handbook Q&A for staff, admissions enquiry triage, bilingual draft help for circulars, or reporting helpers on approved exports.",
          "A deeper agent that reads live student marks or fees inside Kiduart is only described as live when implementation confirms it. Until then it remains a scoped future engagement—not a marketing claim.",
        ],
      },
      {
        heading: "Practical use cases we will discuss",
        paragraphs: [
          "Staff knowledge assistants over policies and handbooks (RAG with role filters).",
          "Enquiry triage that drafts replies for office review before parents see them.",
          "Operational drafts in English and Hindi that a principal still approves.",
          "Not in default scope: anonymous public chat over a child’s marks, unsupervised fee changes, or exam grade writes.",
        ],
      },
      {
        heading: "If you are choosing where to go next",
        paragraphs: [
          "Need the school ERP product? Open kiduart.com or the Kiduart overview on this site, then book a demo.",
          "Need a custom AI workflow beside an existing ERP (Kiduart or another)? Contact Trevyk with the role, the data source, and the decision the assistant must never take alone.",
          "We recommend keeping detailed school-product AI roadmaps on the Kiduart site as features ship, so Trevyk stays focused on broader business and enterprise AI services.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should school AI content live on Kiduart instead?",
        answer:
          "Product-specific AI features should be documented on kiduart.com when they ship. This Trevyk page stays as a bridge for custom services and honest positioning. We will not delete or redirect this URL without an explicit decision.",
      },
      {
        question: "Does Kiduart already include a full AI ERP layer?",
        answer:
          "Kiduart is a live school ERP product. Deeper intelligence features are labelled separately when they ship. Do not assume every AI idea here is inside the current Kiduart UI.",
      },
      {
        question: "Can parents chat with school AI about a child’s marks?",
        answer:
          "Only if the school authorizes identity, role checks, and data scope. We design for authenticated, permissioned access—not anonymous public chat over student records.",
      },
    ],
  },
  {
    slug: "generative-ai-llm-apps",
    title: "Generative AI and LLM application development",
    description:
      "Production GenAI apps on LLM APIs: orchestration, embeddings, tool calling, evals, and cost control for Indian SMBs—not slide-deck demos.",
    keywords:
      "generative AI development India, LLM application development, LangChain LangGraph developers, OpenAI Gemini API integration, embedding vector search",
    kicker: "Generative AI",
    image: "/images/ai-hub-systems.jpg",
    alt: "Painterly diagram of connected AI systems and workflow nodes",
    caption: "API → orchestration → eval → monitor. A chat widget is not a product.",
    related: ["ai-agents", "rag-knowledge-assistants", "ml-data-systems", "seo"],
    paragraphs: [
      "Buyers asking for generative AI usually need a working application: draft replies, summarise tickets, extract fields, or power an internal assistant—wired to their tools and budgets.",
      "Trevyk builds LLM applications on provider APIs (for example Gemini, OpenAI, or others you require). We choose models for latency, privacy, and cost—not brand slogans. Orchestration may use LangChain/LangGraph-style patterns or lean custom code when that is clearer to operate.",
      "Embeddings and vector search sit beside RAG projects when your corpus must ground answers. Agents are a separate guide when the system must call tools and take actions. We quote from scope: integrations, traffic, evaluation depth, and write-action risk.",
    ],
    points: [
      "LLM API integration with secrets kept off the client",
      "Orchestration you can debug (graphs or explicit steps)",
      "Embeddings / vector search when retrieval is required",
      "Eval sets, tracing, and token-cost alerts",
    ],
    sections: [
      {
        heading: "What we build with generative AI",
        paragraphs: [
          "Customer or staff copilots that draft, classify, or summarise inside a defined UI.",
          "Document pipelines that extract structured fields and open a human review queue.",
          "Internal tools that combine LLM steps with deterministic code for invoices, tickets, or CRM updates—writes stay permissioned.",
          "Not in default scope: unsupervised legal advice, medical diagnosis, or anonymous access to student records.",
        ],
      },
      {
        heading: "LLM APIs, orchestration, and LangChain-style stacks",
        paragraphs: [
          "We start with the workflow and acceptance tests, then pick the stack. LangChain, LangGraph, or similar libraries help when tool routing and memory are complex; a thin TypeScript or Python service is better when the path is short.",
          "Prompt and policy notes live in the repo. Temperature, tool lists, and iteration limits are versioned so a change can be rolled back.",
          "Multi-agent theatre waits until a single path is reliable. Fan-out and parallel tools are earned, not marketed first.",
        ],
      },
      {
        heading: "Embeddings, vectors, and grounding",
        paragraphs: [
          "When answers must come from your files, we design chunking, embeddings, and retrieval filters—see the RAG guide for depth.",
          "Vector stores are infrastructure: refresh, ACLs, and evaluation matter more than which logo is on the database.",
          "If retrieval misses, the app should refuse or escalate. Hallucinated policy is a product failure.",
        ],
      },
      {
        heading: "Delivery and what you own",
        paragraphs: [
          "Discovery → prototype on a narrow corpus or sandbox → harden evals and logging → operate with cost and quality monitors.",
          "You keep custom source, runbooks, and the evaluation set. Model provider accounts can be yours or jointly managed—stated in the scope.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only use one model vendor?",
        answer:
          "No. The public site assistant uses Gemini today. Client projects pick providers based on cost, data residency, latency, and quality for the task.",
      },
      {
        question: "Is LangChain required?",
        answer:
          "No. We use LangChain/LangGraph-style orchestration when it reduces risk; otherwise we ship a smaller custom pipeline that your team can run.",
      },
      {
        question: "How is this different from an AI agent?",
        answer:
          "Generative AI apps focus on generation and retrieval inside a product UI. Agents add tool calling and multi-step actions—covered on the AI agents guide when that is the real need.",
      },
      {
        question: "Can you fine-tune a model on our data?",
        answer:
          "Fine-tuning is a separate, explicit decision after retrieval and prompting are tried. Most SMB projects get further with RAG and good evals first.",
      },
    ],
  },
  {
    slug: "ml-data-systems",
    title: "ML and data systems for operational decisions",
    description:
      "Problem framing, features from your operations data, and practical classification or regression-style models—shipped as systems your team can run, not black-box hype.",
    keywords:
      "machine learning development India, classification regression models, ML workflow SMB, feature engineering business data, predictive analytics Noida",
    kicker: "ML & data",
    image: "/images/ai-rag-knowledge.jpg",
    alt: "Painterly illustration of documents and data flowing into a decision system",
    caption: "Frame the decision first. Then choose the model family.",
    related: [
      "generative-ai-llm-apps",
      "rag-knowledge-assistants",
      "web-applications",
      "ai-agents",
    ],
    paragraphs: [
      "Not every “AI” project needs a large language model. Many businesses need forecasts, lead scoring, churn flags, or document classification from tabular and operational data they already collect.",
      "Trevyk scopes ML and data systems the same way we scope software: name the decision, the labels you trust, the features you can refresh, and how a wrong prediction is handled. Tree-based models, linear baselines, and simple neural nets are tools—not a brand pitch.",
      "Deep learning and generative AI appear only when the problem warrants them. We will say when a dashboard and a rule beat a model—and when an LLM assistant is the wrong fit.",
    ],
    points: [
      "Problem framing and success metrics before model choice",
      "Feature pipelines you can retrain or refresh",
      "Classification / regression / ranking as the decision requires",
      "Monitoring for drift, not a one-off notebook handoff",
    ],
    sections: [
      {
        heading: "Problem framing and labels",
        paragraphs: [
          "We write the business question in one sentence, define positive/negative cases, and agree what “good enough” means (precision, recall, dollar cost of errors).",
          "If labels are noisy or missing, we fix the data process before training. Models cannot invent ground truth.",
        ],
      },
      {
        heading: "Features, training, and model families",
        paragraphs: [
          "Features come from systems you operate: CRM, ERP exports, web events, support tickets. Leakage checks stay in the plan.",
          "We often start with strong baselines (logistic regression, gradient-boosted trees) before deep learning. Complexity is earned by lift on a holdout set.",
          "Generative and embedding models connect here when unstructured text must become features—or when the product is an LLM app (see the GenAI guide).",
        ],
      },
      {
        heading: "Deployment and ownership",
        paragraphs: [
          "A useful ML system includes a scoring API or batch job, logging, a retraining or refresh path, and a human override when stakes are high.",
          "You own the data contracts and, for custom work, the source. We document assumptions so the next engineer is not guessing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need deep learning?",
        answer:
          "Only if simpler models fail the agreed metrics. Many SMB problems are solved with clear features and tree-based or linear models.",
      },
      {
        question: "How does this relate to RAG or agents?",
        answer:
          "RAG and agents use LLMs for language workflows. ML systems here target scored decisions on structured (and sometimes text) data. Projects can combine both when the scope says so.",
      },
      {
        question: "What do you need from us to start?",
        answer:
          "A decision to improve, historical examples with outcomes, and access to the systems that produce features—plus a person who owns the labels.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
