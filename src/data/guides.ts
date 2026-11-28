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
    title: "Custom websites that bring enquiries—not just a brochure",
    description:
      "How Trevyk scopes a website around your business growth: clear offer, search-ready pages, enquiry path, and a starter plan you can afford.",
    keywords:
      "custom website development, website that gets enquiries, small business website growth, startup website SEO",
    kicker: "Websites",
    image: "/images/growth-website.jpg",
    alt: "Painting of a founder reviewing a website on a laptop",
    caption: "The first page has to explain the offer before it tries to impress.",
    related: ["website-development-noida", "seo", "remote-software-ai-team"],
    paragraphs: [
      "Your website is not a digital visiting card. It is where a stranger decides whether to call, message, or leave. If the page never names what you sell, the visit dies—whether you run a clinic, a coaching centre, a realty desk, or a startup.",
      "We build custom sites around growth: what you do, who it is for, proof or process, and one clear enquiry path. Keywords sit in the title and first paragraph the same way a human would say them. Starter plans exist so you can be found before you can afford a giant retainer.",
      "When local Noida / NCR search is the job, use the dedicated local guide. When you need the wider growth stack—SEO, campaigns, software, AI—start from what-we-do or contact.",
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
      "Scoped AI agents that call your tools, follow role rules, and escalate to humans—for startups and product teams worldwide, not vapour demos.",
    keywords:
      "custom AI agent development, business AI agents, LLM workflow automation, Gemini agents, human-in-the-loop AI, hire AI agent developers",
    kicker: "AI agents",
    image: "/images/ai-agents-workflow.jpg",
    alt: "Painterly diagram of an AI agent workflow with tool steps and an approval checkpoint",
    caption: "Intake → tools → human gate → action. Chat alone is not an agent.",
    related: [
      "ai-agent-vs-chatbot",
      "rag-knowledge-assistants",
      "remote-software-ai-team",
      "seo",
    ],
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
      "RAG development, private knowledge assistant, enterprise document AI, LLM retrieval, grounded answers, remote RAG team",
    kicker: "RAG",
    image: "/images/ai-rag-knowledge.jpg",
    alt: "Painterly illustration of documents being retrieved into a grounded answer with citation marks",
    caption: "Retrieve first. Generate second. Cite the passage you used.",
    related: ["rag-vs-fine-tuning", "ai-agents", "seo", "web-applications"],
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
      "Production GenAI apps on LLM APIs: orchestration, embeddings, tool calling, evals, and cost control for product teams worldwide—not slide-deck demos.",
    keywords:
      "generative AI development, LLM application development, LangChain LangGraph developers, OpenAI Gemini API integration, embedding vector search, remote GenAI team",
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
  {
    slug: "website-development-noida",
    title: "Website development company in Noida — custom sites that get found",
    description:
      "Custom website development in Noida and Delhi NCR: SEO-ready pages, starter plans, and a clear enquiry path for local businesses and startups.",
    keywords:
      "website development company Noida, custom website development Noida, web design Noida, affordable website Delhi NCR, SEO website Noida",
    kicker: "Noida",
    image: "/images/growth-website.jpg",
    alt: "Painting of a founder reviewing a website on a laptop",
    caption: "Local search needs a local page—not a vague national slogan.",
    related: ["custom-websites", "seo", "ai-agents", "web-applications"],
    paragraphs: [
      "If you searched “website development company Noida” or “custom website Delhi NCR,” you need a partner who will name the city, the offer, and the next step—not a template with a logo swap.",
      "Trevyk Technologies is based in Noida. We build custom websites for shops, clinics, coaching centres, schools, and startups across Noida, Greater Noida, Ghaziabad, and the wider NCR. Starter plans are scoped so an early budget still gets crawlable pages, mobile layout, and one clear enquiry form.",
      "The same practice builds web apps, SEO, campaigns, and AI systems (agents, RAG, GenAI) when a brochure site is not enough. This page is for local website intent; deeper service guides live under /work.",
    ],
    points: [
      "Noida / NCR-focused copy and contact path",
      "On-page SEO for local commercial queries",
      "Starter plan option before a large retainer",
      "Handover you can edit without calling for every sentence",
    ],
    sections: [
      {
        heading: "Who this Noida page is for",
        paragraphs: [
          "Local service businesses that need to appear for city + service searches and convert the visit into a call or form.",
          "Startups that want a first credible site before a full product build.",
          "Schools and institutions that need a public site beside Kiduart operations (product demos stay on kiduart.com).",
        ],
      },
      {
        heading: "What we ship on a starter website",
        paragraphs: [
          "A small set of pages with real headings: what you do, who it is for, proof or process, and contact. Keywords appear in the title, first paragraph, and internal links—the same story a crawler and a human read.",
          "Mobile-readable layout, enquiry form, WhatsApp path, and basic analytics so you can see whether local searches become conversations.",
          "We do not invent client counts or star ratings. If you need SEO depth after launch, the SEO guide explains the next pages to write.",
        ],
      },
      {
        heading: "Noida vs “pan-India agency” noise",
        paragraphs: [
          "Large directory lists for Noida web companies are crowded. We compete on clear scope, honest claims, and software you keep—not on inflated project counters.",
          "If your need is AI agents or RAG, start at the AI hub. If your need is a local site that ranks for the service you sell, start here and contact us with the business type and budget band.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only work with Noida clients?",
        answer:
          "No. We are based in Noida and serve clients remotely across India and beyond. This page targets people searching with Noida / NCR intent.",
      },
      {
        question: "How fast can a starter site launch?",
        answer:
          "Depends on content readiness and scope. We write milestones before build so you see what is in the first release versus what waits.",
      },
      {
        question: "Can you also do SEO after the site launches?",
        answer:
          "Yes. We map keywords to pages and expand topical depth. See the SEO guide—we do not sell ranking guarantees on a calendar.",
      },
      {
        question: "Where do I enquire?",
        answer:
          "Use the contact form or WhatsApp. Name the business, city, and budget band. We reply within one business day: contact@trevyk.com.",
      },
    ],
  },
  {
    slug: "ai-agent-vs-chatbot",
    title: "AI agent vs chatbot — which one do you actually need?",
    description:
      "Honest comparison: when a chatbot is enough, when you need a tool-calling AI agent, and how Trevyk scopes each without vapour demos.",
    keywords:
      "AI agent vs chatbot, custom AI agent development, chatbot vs agent India, LLM workflow automation",
    kicker: "Compare",
    image: "/images/ai-agents-workflow.jpg",
    alt: "Painterly diagram of an AI agent workflow with tool steps and an approval checkpoint",
    caption: "Chat answers. Agents act—with tools and gates.",
    related: [
      "ai-agents",
      "generative-ai-llm-apps",
      "rag-knowledge-assistants",
      "seo",
    ],
    paragraphs: [
      "Buyers often say “we need an AI agent” when they mean a FAQ chatbot—or the reverse. The difference is tools and authority: a chatbot talks; an agent can call APIs, draft then wait for approval, and log what it did.",
      "Trevyk ships both patterns when they fit. We start with the workflow, not the buzzword. If the job is answering from a small FAQ, a grounded assistant may be enough. If the job is triage tickets, look up CRM state, and propose a write with a human gate, you need an agent.",
      "This page is a decision aid. Detailed build notes live on the AI agents and GenAI guides.",
    ],
    points: [
      "Clear definitions without marketing fog",
      "Decision checklist for ops and founders",
      "When to add RAG under either pattern",
      "Links to the right Trevyk build guide",
    ],
    sections: [
      {
        heading: "Chatbot (assistant) — talk and retrieve",
        paragraphs: [
          "Best for: FAQs, handbook Q&A, draft replies that a human still sends, and internal copilots over approved documents.",
          "Usually combines an LLM with optional RAG. It should refuse when context is thin. It should not silently change money, identity, or exam records.",
          "See: RAG knowledge assistants and Generative AI / LLM apps.",
        ],
      },
      {
        heading: "AI agent — decide, call tools, escalate",
        paragraphs: [
          "Best for: multi-step workflows with tools (CRM, helpdesk, calendars, forms) and explicit human checkpoints on irreversible actions.",
          "Needs tool schemas, least privilege, eval sets, traces, and a kill switch. Multi-agent setups wait until one path is stable.",
          "See: Custom AI agent development.",
        ],
      },
      {
        heading: "Quick chooser",
        paragraphs: [
          "Choose a chatbot/assistant if success = correct answers from your docs with citations.",
          "Choose an agent if success = a completed workflow step (create ticket, schedule, draft + approve) with an audit log.",
          "Choose neither (use forms + humans) if the risk of a wrong automatic action is higher than the hours you save—until policy and evals are ready.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is every LLM product an agent?",
        answer:
          "No. Many products are chat UIs over a model or RAG index. Agents add tool calling and multi-step control.",
      },
      {
        question: "Can we start with a chatbot and upgrade?",
        answer:
          "Yes. Many projects begin with grounded Q&A, then add one tool-backed workflow once the corpus and evals are solid.",
      },
      {
        question: "Do you sell agent demos without integrations?",
        answer:
          "We prototype narrowly, but production value comes from your tools and permissions. Slide-deck-only agents are out of scope.",
      },
    ],
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs fine-tuning — which fits your private knowledge?",
    description:
      "When retrieval-augmented generation beats fine-tuning for business documents, and when fine-tuning is worth the cost and risk.",
    keywords:
      "RAG vs fine-tuning, private knowledge assistant, when to fine-tune LLM, enterprise RAG India",
    kicker: "Compare",
    image: "/images/ai-rag-knowledge.jpg",
    alt: "Painterly illustration of documents being retrieved into a grounded answer with citation marks",
    caption: "Most SMB knowledge problems need retrieval first.",
    related: [
      "rag-knowledge-assistants",
      "generative-ai-llm-apps",
      "ai-agents",
      "ml-data-systems",
    ],
    paragraphs: [
      "Private PDFs and policies change weekly. Fine-tuning bakes yesterday’s text into weights; RAG retrieves today’s passages and asks the model to answer with citations.",
      "Trevyk defaults to RAG for company knowledge assistants. Fine-tuning is a separate, explicit decision after prompting and retrieval are tried—and only when you have a clear metric that RAG cannot hit.",
      "Use this page to brief stakeholders. Build depth is on the RAG and GenAI guides.",
    ],
    points: [
      "BLUF recommendation for most SMB corpora",
      "Cost, freshness, and permission trade-offs",
      "When fine-tuning still makes sense",
      "How agents use RAG as a tool",
    ],
    sections: [
      {
        heading: "Choose RAG when…",
        paragraphs: [
          "Answers must cite a specific policy, manual, or ticket, and documents update often.",
          "Different roles must see different corpora (ACLs travel with retrieval).",
          "You need refusals when nothing relevant is found—instead of confident invention.",
        ],
      },
      {
        heading: "Consider fine-tuning when…",
        paragraphs: [
          "You need a stable style or format the base model mishandles even with good prompts and examples.",
          "You have a large, carefully labelled dataset and a team that can evaluate regressions after every train.",
          "You accept that private facts still usually need retrieval—fine-tuning is not a substitute for permissions and freshness.",
        ],
      },
      {
        heading: "Trevyk default path",
        paragraphs: [
          "Inventory sources → chunk + embed → role filters → cited answers → golden question eval → refresh pipeline.",
          "Only then discuss fine-tuning or heavier training. Agents may call the RAG tool as one step in a wider workflow.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will RAG train on our private data?",
        answer:
          "We design for retrieval and API-based generation. Training or fine-tuning on private corpora is a separate decision—not the default.",
      },
      {
        question: "Can we combine RAG and fine-tuning?",
        answer:
          "Sometimes. Many teams fine-tune for format and still retrieve for facts. We only combine when evals justify the cost.",
      },
      {
        question: "Where should I start?",
        answer:
          "Start with the RAG guide if answers must come from your documents. Start with GenAI apps if you need a product UI around generation. Contact us with corpus size and the decisions the system must never take alone.",
      },
    ],
  },
  {
    slug: "remote-software-ai-team",
    title: "Remote growth partner — software, SEO, and AI for your business",
    description:
      "Work with Trevyk from anywhere: grow enquiries, run clearer systems, and use AI agents, RAG, and GenAI when they fit. HQ Noida; India and worldwide remote delivery.",
    keywords:
      "hire remote software developers, remote AI development team, business growth technology partner, outsource AI agent development, remote RAG developers",
    kicker: "Remote",
    image: "/images/ai-agents-workflow.jpg",
    alt: "Painterly diagram of connected AI and software workflows spanning regions",
    caption: "Timezone-aware delivery. HQ in Noida—not a single-city lock-in.",
    related: [
      "ai-agents",
      "rag-knowledge-assistants",
      "generative-ai-llm-apps",
      "custom-websites",
    ],
    paragraphs: [
      "You do not need a partner who only sells “a website.” You need someone who understands growth: how people find you, enquire, and stay—then picks modern tools that fit. Trevyk’s HQ is in Noida. We work across North and South India and remotely worldwide on overlapping hours.",
      "That can mean a site and SEO path, a small web app, campaigns, or practical AI—agents, RAG, GenAI—when repeat work or buried knowledge is the bottleneck. Starter plans keep the first release real.",
      "Noida local website search still has its own page. This page is for founders and ops leads who want a growth partner, not geography theatre.",
    ],
    points: [
      "Remote-friendly discovery, demos, and handoff",
      "One workflow or one site in v1—honest scope",
      "Source ownership on custom engineering",
      "Reply within one business day (working days)",
    ],
    sections: [
      {
        heading: "Who this is for",
        paragraphs: [
          "Startups and SMBs that need a website, web app, or AI system without hiring a full in-house team yet.",
          "Product and ops leads outside NCR who still want a named engineering practice—not a marketplace bid war.",
          "International teams that want IST-overlapping hours, clear English scopes, and no invented “global office” claims.",
        ],
      },
      {
        heading: "How remote delivery works",
        paragraphs: [
          "Kickoff on video. Scope written before build. Incremental demos. Production credentials only after an evaluation set on AI work.",
          "We keep HQ facts honest: Noida address entity for trust and local SEO; service area is India + remote worldwide.",
          "WhatsApp and email remain the fast paths: contact@trevyk.com · +91 88106 64797.",
        ],
      },
      {
        heading: "What we will not claim",
        paragraphs: [
          "We do not invent client countries, office cities, or headcount. If a city page exists (Noida websites), it is for search intent—not a claim that we only work there.",
          "Kiduart school ERP remains an India school product brand on kiduart.com; custom AI and websites for other markets sit on trevyk.in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only take Noida clients?",
        answer:
          "No. Noida is our headquarters. We work remotely with clients across India and internationally when timezone and scope fit.",
      },
      {
        question: "What time zone do you work in?",
        answer:
          "Primary hours are India Standard Time (IST), with overlap windows for Europe and parts of the US by arrangement. We write milestones so async progress is clear.",
      },
      {
        question: "Can you build AI agents or RAG for a non-India company?",
        answer:
          "Yes, when the corpus, tools, and compliance expectations are clear. We scope permissions, evals, and human gates the same way regardless of country.",
      },
      {
        question: "Where do I start?",
        answer:
          "Use the contact form with your city/timezone, the problem, and budget band. Or open the AI agents / RAG / GenAI guides if you already know the pattern.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
