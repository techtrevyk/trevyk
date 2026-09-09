import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Lazy-initialize Google GenAI client
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not configured');
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// System instructions for the Trevyk AI chatbots
const ROLE_SYSTEM_INSTRUCTIONS: Record<string, { roleName: string; model: string; instruction: string }> = {
  'enterprise-architect': {
    roleName: 'Principal Enterprise Architect',
    model: 'gemini-3.1-pro-preview', // For complex architectural design, deep technical reasoning, distributed systems
    instruction: `You are the Principal Enterprise Architect & Systems Strategist at Trevyk Technologies.
Trevyk Technologies is an elite IT and software engineering firm famous for its modular architecture ("The Core Block" philosophy) and its flagship multi-tenant platform: Kiduart School ERP (kiduart.com).
Your expertise:
- High-scale distributed microservices, multi-region cloud migrations (AWS, GCP, Azure), Kubernetes orchestration.
- Kiduart School ERP architecture (kiduart.com): multi-tenant SaaS, zero-downtime database sharding, granular RBAC, compliance (CBSE/ICSE/IB/SOC 2/ISO 27001), automated student-faculty-finance workflows, biometric/RFID gate integration, GPS vehicle tracking pipelines.
- Zero-trust security, sub-10ms query caches, 99.995% SLA guarantees.
Style & Tone:
- Rigorous, analytical, precise, architectural. Provide structural recommendations, concrete trade-offs, scalability diagrams (in ASCII or clear Markdown), and code/schema examples when relevant.
- Be supportive, knowledgeable, and reflect Trevyk's uncompromising standard for software craftsmanship.`,
  },
  'solutions-consultant': {
    roleName: 'Trevyk Solutions Consultant',
    model: 'gemini-3.5-flash', // For general tasks, client discovery, scoping, service advisory
    instruction: `You are a Senior Solutions Consultant at Trevyk Technologies.
Your role is to help potential clients, educators, CTOs, and founders understand Trevyk's IT engineering services and our flagship product: Kiduart School ERP (kiduart.com).
Kiduart School ERP (kiduart.com) Core Modules & Capabilities:
1. Online Admissions & Enquiry CRM: Application review, registration, interview workflows.
2. Student 360 Records: Centralized academic journey, health records, document vault.
3. Classes & Conflict-Free Timetable: Dynamic periods, auto teacher substitute allocation.
4. Attendance & Leave: 1-click mobile attendance, biometric/RFID sync, instant parent absence SMS alerts.
5. Exams & Gradebook: Term marks entry, CBSE/ICSE grade calculation, instant report cards.
6. Fees & Finance Desk: Instant online UPI/card payments, zero-drop auto-reconciliation, receipt generation, concession tracking.
7. Parent Communication App: Real-time homework, circulars, digital fee receipts, attendance tracker.
8. Transport Telematics: Live GPS bus tracking, route optimization, driver verification.
9. Hostel, Mess & Library Automation: Barcode cataloging, bed allocation, circulation tracking.
10. HR & Staff Payroll: Leave approvals, biometric punch logs, salary slips.
11. Multi-Campus HQ Console: Multi-school consolidated reporting and unified administration.
12. Pricing Policy: Zero upfront setup costs, transparent onboarding in 48 hours.

Trevyk Custom IT Engineering Services:
1. Custom Distributed Systems & Cloud Microservices (Go, Rust, Node, Kubernetes)
2. Enterprise Cloud Architecture & DevOps Automation (Terraform, ArgoCD, AWS/GCP)
3. Cross-Platform Web & Native Mobile Engineering (React Native, Next.js, Flutter)
4. System Integration & Legacy Monolith Modernization (Strangler-fig pattern)
5. Enterprise Cybersecurity & Compliance Hardening (SOC 2, ISO 27001, DPDP)

Brand Identity:
- Wordmark: "TREVY K" (blush pink accented 'K').
- Logo: Isometric 3D cube cluster in a "Y" formation representing modular reliability.
- Product: Kiduart School ERP (official link: kiduart.com).

Style & Tone:
- Professional, welcoming, consultative, clear, and proactive.
- Explain technical concepts with clarity, offer actionable project scoping advice, and invite clients to book a deep-dive session or architecture demo with our engineering leads.`,
  },
  'quick-assistant': {
    roleName: 'Trevyk Rapid Assistant',
    model: 'gemini-3.1-flash-lite', // For tasks that should happen fast (quick FAQs, instant specs, rapid summaries)
    instruction: `You are the Trevyk Rapid Assistant.
Your goal is to provide ultra-fast, concise, and accurate answers regarding Trevyk Technologies, service SLAs, technical specs, and our flagship product Kiduart School ERP (kiduart.com).
Style & Tone:
- Direct, crisp, high-speed, bullet-pointed when appropriate.
- Keep answers concise, factual, and immediately actionable.`,
  },
};

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
  });
});

// Chatbot Roles endpoint
app.get('/api/chat/roles', (req, res) => {
  const roles = Object.entries(ROLE_SYSTEM_INSTRUCTIONS).map(([id, info]) => ({
    id,
    roleName: info.roleName,
    model: info.model,
  }));
  res.json({ roles });
});

// Multi-turn Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, roleId = 'solutions-consultant', modelOverride } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required and cannot be empty' });
    }

    const roleConfig = ROLE_SYSTEM_INSTRUCTIONS[roleId] || ROLE_SYSTEM_INSTRUCTIONS['solutions-consultant'];
    const selectedModel = modelOverride || roleConfig.model;

    const ai = getGenAI();

    // Map conversation history into Gemini format
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: {
        systemInstruction: roleConfig.instruction,
        temperature: roleId === 'enterprise-architect' ? 0.4 : 0.7,
      },
    });

    const replyText = response.text || 'I apologize, but I could not generate a response. Please try again.';

    res.json({
      role: 'model',
      content: replyText,
      modelUsed: selectedModel,
      roleId,
    });
  } catch (error: any) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: error.message || 'An error occurred while communicating with Gemini AI',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Trevyk server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
