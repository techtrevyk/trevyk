export interface GuideFaq {
  question: string;
  answer: string;
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
      "Keyword maps, service pages, and internal links so search can send people who already want a website, an app, or a campaign.",
    keywords: "SEO services for small business, keyword research, on-page SEO Noida",
    kicker: "Search",
    image: "/images/growth-content.jpg",
    alt: "Painting of a notebook, camera, and phone for content work",
    caption: "Search works when the page says the same thing the customer typed.",
    related: ["custom-websites", "digital-marketing", "ai-agents"],
    paragraphs: [
      "SEO starts with the words a buyer types when they are ready to talk, not with a list of synonyms stuffed into a footer. For Trevyk those words include custom website, web application, custom software, SEO, social media management, and video for small business.",
      "We map one primary keyword to one page, then connect the pages. A homepage introduces the practice. A service page holds the offer. A guide page like this one goes deeper so Google has something specific to crawl. Internal links use the phrase a person would search, not “click here”.",
      "We do not promise first-page rankings on a calendar. We do publish crawlable pages, a sitemap, and a plan for the next page to write. That is how a young company becomes findable without inventing traffic numbers.",
      "You will also hear AEO, GEO, AIO, and similar labels. In practice they describe overlapping work: clear answers, crawlable pages, accurate facts, and brand consistency so traditional search and generative answers can both use your site. We treat that as an extension of honest SEO and content structure—not a separate product that guarantees AI citations.",
    ],
    points: [
      "Keyword map by service and city",
      "Titles and headings that match the search",
      "Internal links between related offers",
      "Search Console set up so you can see real queries",
      "Clear answers and facts that travel outside the page",
    ],
    faqs: [
      {
        question: "Do you sell separate AEO or GEO packages?",
        answer:
          "No. We improve crawlable structure, useful answers, and consistent service descriptions. Those practices support both classic SEO and AI-answer surfaces. We do not sell acronym packages or promise citations.",
      },
      {
        question: "What do you measure after SEO work?",
        answer:
          "Search Console coverage, queries, and whether the right pages are indexed and reachable. We do not invent ranking timelines.",
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
      "custom AI agent development India, business AI agents, LLM workflow automation, Gemini agents",
    kicker: "AI agents",
    image: "/images/studio-technology.jpg",
    alt: "Painting of stacked blocks suggesting a modular software system",
    caption: "An agent is useful when it owns a workflow, not when it only chats.",
    related: ["rag-knowledge-assistants", "ai-for-schools", "web-applications"],
    paragraphs: [
      "Businesses hire partners for AI agents when staff repeat the same lookups, ticket replies, booking steps, or document handoffs. The buyer is usually an operations lead, founder, or IT owner who wants hours back—not a research paper.",
      "Trevyk builds custom agents on top of models such as Google Gemini, with tool calls into your APIs, WhatsApp or web channels when needed, and clear handoff to a human. We start with one workflow: intake, retrieval, action, audit log. Multi-agent orchestration comes only after the first path is stable.",
      "India’s agency market already prices starter agents and RAG builds for SMBs; published vendor ranges often start near mid–five figures INR for a narrow workflow and rise with integrations. We quote from your scope, not a generic brochure. You keep the source for custom work.",
      "What we will not do: invent school counts, claim an agent is “live inside Kiduart ERP” unless that product surface is actually shipped, or promise unsupervised autonomy over money, exams, or student records.",
    ],
    points: [
      "One primary workflow before multi-agent theatre",
      "Tool access and role rules written down",
      "Human escalation path",
      "Eval checklist and cost monitoring notes",
    ],
    faqs: [
      {
        question: "What is a custom AI agent in this context?",
        answer:
          "Software that uses a language model plus tools (APIs, search, forms) to complete a defined business workflow, with logging and a path to a human when confidence is low.",
      },
      {
        question: "Do you only use Gemini?",
        answer:
          "The public Trevyk site assistant uses Gemini today. Custom projects can integrate other model providers when the engagement requires it; we choose based on cost, privacy, and quality for the workflow.",
      },
      {
        question: "Can an agent update our ERP or CRM?",
        answer:
          "Yes when you authorize scoped API access and accept audit logging. Write actions stay behind permissions and usually behind a confirmation or human review for sensitive changes.",
      },
    ],
  },
  {
    slug: "rag-knowledge-assistants",
    title: "RAG and private knowledge assistants",
    description:
      "Retrieval-augmented generation over your documents and systems so answers cite your sources instead of inventing them.",
    keywords:
      "RAG development India, private knowledge assistant, enterprise document AI, LLM retrieval",
    kicker: "RAG",
    image: "/images/growth-content.jpg",
    alt: "Painting of a notebook and desk for content and knowledge work",
    caption: "Retrieval first. Generation second. Hallucinations get caught in between.",
    related: ["ai-agents", "ai-for-schools", "seo"],
    paragraphs: [
      "RAG is the pattern teams ask for when they need answers grounded in their own PDFs, policies, product manuals, or ticket history. Market research for India points to strong interest in retrieval-augmented systems for search, support, and internal copilots—alongside concerns about data readiness and governance.",
      "Trevyk designs chunking, embeddings, retrieval filters, and answer prompts so the model must show which passage it used. Role-aware access matters: a finance clerk and a school principal should not see the same corpus.",
      "A useful first project is narrow: one policy handbook, one product FAQ set, or one support playbook. Wide “chat with the whole company drive” projects fail when permissions and freshness are ignored.",
      "We document evaluation questions, refusal behaviour, and what happens when retrieval finds nothing. That is more valuable than a flashy demo that cannot be audited.",
    ],
    points: [
      "Corpus selection and permission model",
      "Chunking and retrieval quality checks",
      "Cited answers and refusal rules",
      "Refresh path when documents change",
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
    ],
  },
  {
    slug: "ai-for-schools",
    title: "AI for schools and education operations",
    description:
      "Practical AI around school operations: assistants for staff questions, document help, and honest integration paths with products like Kiduart—without student-data theatre.",
    keywords:
      "AI for schools India, school ERP AI assistant, education workflow automation, Kiduart AI",
    kicker: "Education AI",
    image: "/images/studio-kiduart.jpg",
    alt: "Painting suggesting a school campus and structured system",
    caption: "School AI starts with roles and permissions, not a public chatbot.",
    related: ["ai-agents", "rag-knowledge-assistants", "custom-websites"],
    paragraphs: [
      "Schools ask for AI when principals and office staff spend hours answering the same timetable, fee, and policy questions—or when they want help drafting notices in English and Hindi. The risk is higher than a retail FAQ: student and fee data are sensitive.",
      "Kiduart (kiduart.com) is Trevyk’s school ERP product for Indian schools: admissions, records, attendance, exams, fees, and parent communication. The public Trevyk website already runs a Gemini-powered assistant with role prompts for architecture and solutions questions. A deeper school-data agent that reads live ERP records is only described here when it is authorized, scoped, and labelled as live—not as marketing fiction.",
      "Credible near-term work includes: policy and handbook assistants for staff, enquiry triage for admissions teams, draft generation for circulars, and reporting helpers that sit on approved exports—not open internet chatbots with student PII.",
      "If you need a demo of Kiduart itself, book through kiduart.com. If you need a custom AI workflow beside the ERP, contact Trevyk with the role, the data source, and the decision the assistant must never take alone.",
    ],
    points: [
      "Role-aware access before model choice",
      "Clear live vs prototype labelling",
      "No unsupervised writes to exam or fee records",
      "Path to kiduart.com for product demos",
    ],
    faqs: [
      {
        question: "Does Kiduart already include a full AI ERP layer?",
        answer:
          "Kiduart is a live school ERP product. Deeper intelligence features are labelled separately when they ship. Do not assume every AI idea on this page is inside the current Kiduart product UI.",
      },
      {
        question: "Can parents chat with school AI about a child’s marks?",
        answer:
          "Only if the school authorizes identity, role checks, and data scope. We design for authenticated, permissioned access—not anonymous public chat over student records.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((guide) => guide.slug === slug);
}
