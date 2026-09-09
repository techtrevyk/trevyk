import { ServiceItem } from '../types';

/**
 * Honest service catalogue for Trevyk — parent company of Kiduart.
 * Metrics describe intent/scope, not invented production stats.
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software-development',
    number: '01',
    title: 'Custom Software Development',
    tagline: 'Scoped backends and systems when a product alone is not enough.',
    description:
      'We design and build custom software for businesses and institutions — APIs, admin tools, workflows, and integrations. Scope starts from the problem you have today, not a slide deck of buzzwords.',
    category: 'custom-software',
    badge: 'B2B Core',
    tech: ['TypeScript', 'Node', 'Python', 'PostgreSQL', 'REST / GraphQL'],
    metrics: { label: 'Engagement style', value: 'Scoped builds' },
    color: '#8B5CAD',
    iconName: 'Code2',
    includes: [
      'Domain modelling and clear API contracts',
      'Web backends and internal tools',
      'Integrations with payments, SMS, and existing systems',
      'Automated tests where they protect real risk',
      'Source ownership handed to you — no lock-in by design',
    ],
    fitsFor:
      'Teams that need a tailored system — not another generic SaaS — with clear deliverables and ownership.',
    deliverables: [
      'Application source & docs',
      'API specification',
      'Deployment notes',
      'Handover walkthrough',
    ],
  },
  {
    id: 'web-mobile-app-development',
    number: '02',
    title: 'Web & Mobile App Development',
    tagline: 'Product UIs and apps for staff, parents, and customers.',
    description:
      'We build responsive web apps and cross-platform mobile experiences that match how people actually work — schools, businesses, and service teams included.',
    category: 'web-mobile',
    badge: 'Frontline Apps',
    tech: ['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind'],
    metrics: { label: 'Delivery', value: 'Web + mobile' },
    color: '#BEABD6',
    iconName: 'Smartphone',
    includes: [
      'Responsive web applications',
      'Cross-platform mobile apps where needed',
      'Role-based screens for different users',
      'Accessible, readable UI on light theme defaults',
      'Store / hosting release support',
    ],
    fitsFor:
      'Organizations that need a clear customer or staff-facing app alongside their operations software.',
    deliverables: [
      'Production web app',
      'Mobile builds (when in scope)',
      'Component patterns',
      'Release checklist',
    ],
  },
  {
    id: 'cloud-devops',
    number: '03',
    title: 'Cloud & DevOps',
    tagline: 'Reliable hosting, CI/CD, and environments you can operate.',
    description:
      'We set up cloud environments, pipelines, and monitoring so products like Kiduart — and your custom systems — stay deployable and observable without heroics.',
    category: 'cloud-devops',
    badge: 'Cloud',
    tech: ['AWS / GCP', 'Docker', 'CI/CD', 'Terraform (when needed)', 'Monitoring'],
    metrics: { label: 'Goal', value: 'Stable releases' },
    color: '#8B5CAD',
    iconName: 'Cloud',
    includes: [
      'Environment setup (dev / staging / production)',
      'CI/CD pipelines for safer releases',
      'Basic observability and alerting',
      'Infrastructure as code when the project warrants it',
      'Runbooks for common operations',
    ],
    fitsFor:
      'Teams tired of manual deploys, unclear environments, or fragile production setups.',
    deliverables: [
      'Environment map',
      'Pipeline configs',
      'Monitoring basics',
      'Ops notes',
    ],
  },
  {
    id: 'ai-ml-automation',
    number: '04',
    title: 'AI & Workflow Automation',
    tagline: 'Practical automation — only where data and process are ready.',
    description:
      'We add AI and automation where they save real staff time: document handling, assisted support, and internal copilots. We do not sell vapour “AI ERP” claims. Kiduart’s next intelligence layer is labelled separately when it ships.',
    category: 'ai-ml',
    badge: 'Automation',
    tech: ['Gemini API', 'Python', 'RAG patterns', 'Workflow tools'],
    metrics: { label: 'Approach', value: 'Use-case first' },
    color: '#E8A9C2',
    iconName: 'Brain',
    includes: [
      'Use-case discovery before model choice',
      'Private knowledge / RAG over your documents when appropriate',
      'Guardrails and role-aware access',
      'Clear labelling of what is live vs in development',
      'Cost and quality monitoring',
    ],
    fitsFor:
      'Teams with repetitive document or support work who want automation without sacrificing honesty about readiness.',
    deliverables: [
      'Scoped automation prototype or service',
      'Prompt / pipeline notes',
      'Access & safety rules',
      'Eval checklist',
    ],
  },
  {
    id: 'erp-crm-solutions',
    number: '05',
    title: 'Kiduart School ERP',
    tagline: 'Our flagship product — school operations in one system.',
    description:
      'Kiduart (kiduart.com) is Trevyk’s school management / ERP product for Indian schools: admissions, student records, attendance, exams, fees, parent communication, transport, and more. Built around real school roles — not a marketing feature matrix.',
    category: 'erp-crm',
    badge: 'Flagship Product',
    tech: ['Multi-tenant SaaS', 'PostgreSQL', 'Role panels', 'Payments', 'SMS / notices'],
    metrics: { label: 'Product site', value: 'kiduart.com' },
    color: '#C89B6C',
    iconName: 'GraduationCap',
    includes: [
      'Live product modules mapped on kiduart.com',
      'Admissions through fees, attendance, exams, and parent updates',
      'Role-based access for staff and leadership',
      'Data export so school records can leave with the school',
      'Demo and rollout with the product team',
    ],
    fitsFor:
      'K-12 schools, trusts, and multi-campus groups that want one system instead of spreadsheets and WhatsApp chains.',
    deliverables: [
      'Kiduart tenant / campus setup',
      'Role configuration',
      'Fee & class structure onboarding',
      'Staff walkthrough',
    ],
  },
  {
    id: 'ui-ux-design-systems',
    number: '06',
    title: 'UI/UX & Design Systems',
    tagline: 'Clear interfaces for operators — not decoration for decks.',
    description:
      'We design screens and design systems that staff can learn quickly: fees desks, teacher panels, parent apps, and B2B admin tools.',
    category: 'ui-ux',
    badge: 'Product Design',
    tech: ['Figma', 'Design tokens', 'Accessibility', 'React components'],
    metrics: { label: 'Standard', value: 'Readable UI' },
    color: '#E8A9C2',
    iconName: 'Palette',
    includes: [
      'User journeys for real roles (teacher, accountant, parent, admin)',
      'Wireframes and high-fidelity UI',
      'Component libraries aligned to engineering',
      'Light-theme contrast that stays readable',
      'Handoff that developers can ship',
    ],
    fitsFor:
      'Product and service teams who need interfaces that reduce training time and support tickets.',
    deliverables: [
      'Figma library',
      'Key flows',
      'Component notes',
      'Accessibility pass',
    ],
  },
  {
    id: 'it-consulting-managed-services',
    number: '07',
    title: 'IT Consulting & Advisory',
    tagline: 'Architecture reviews, roadmaps, and hands-on guidance.',
    description:
      'We help founders and IT leads decide what to build vs buy, review existing systems, and plan migrations — including paths onto Kiduart or custom stacks.',
    category: 'it-consulting',
    badge: 'Advisory',
    tech: ['Architecture review', 'Roadmapping', 'Vendor evaluation', 'Migration planning'],
    metrics: { label: 'Response', value: '1 business day' },
    color: '#5A3875',
    iconName: 'HeartHandshake',
    includes: [
      'Architecture and tech-debt reviews',
      'Build-vs-buy recommendations',
      'Kiduart fitness checks for school operations',
      'Migration and parallel-run planning',
      'Ongoing advisory retainers when useful',
    ],
    fitsFor:
      'Leaders who need a clear technical partner without inventing overnight “fractional CTO + 15-minute SLA” marketing.',
    deliverables: [
      'Written findings',
      'Recommended roadmap',
      'Risk list',
      'Next-step proposal',
    ],
  },
  {
    id: 'cybersecurity-data-protection',
    number: '08',
    title: 'Security & Data Protection',
    tagline: 'Practical controls for school and business data.',
    description:
      'We harden access, encryption, and audit trails for systems that hold student or customer records. We publish security practices we actually implement — not certificates we have not earned yet.',
    category: 'cybersecurity',
    badge: 'Trust',
    tech: ['RBAC', 'Encryption', 'Audit logs', 'Secure SDLC', 'DPDP-minded practices'],
    metrics: { label: 'Focus', value: 'Real controls' },
    color: '#E0D8EC',
    iconName: 'ShieldCheck',
    includes: [
      'Role-based access design',
      'Encryption in transit and at rest',
      'Audit logging for sensitive changes',
      'Secure development checklist',
      'Honest readiness notes for future audits',
    ],
    fitsFor:
      'Schools and businesses handling personal data who need controls that match Indian school / SME reality.',
    deliverables: [
      'Access model',
      'Hardening checklist',
      'Logging plan',
      'Remediation backlog',
    ],
  },
];

export const SERVICES = SERVICES_DATA;
