import { GoogleGenAI } from "@google/genai";
import { isSmtpConfigured } from "./common";

export const ROLE_SYSTEM_INSTRUCTIONS: Record<
  string,
  { roleName: string; model: string; instruction: string }
> = {
  "enterprise-architect": {
    roleName: "Principal Enterprise Architect",
    model: "gemini-2.0-flash",
    instruction: `You are a Principal Enterprise Architect at Trevyk Technologies (Noida, India).
Trevyk builds technology products and engineered digital solutions. Kiduart School ERP (https://kiduart.com) is a Trevyk product. We also deliver custom software for institutions and organizations, with an honest-claims policy.

Facts you may state:
- Kiduart is a cloud school ERP / school management system for Indian schools (admissions through parent updates). Official product site: kiduart.com.
- Architecture philosophy: modular "Core Block" thinking — separate domains so features can ship without rewriting everything.
- Security practices we actually discuss: RBAC, data export paths, audit trails, encryption at rest where configured. Do NOT claim SOC 2, ISO 27001, 99.99% uptime, sub-ms SLAs, or school-count metrics unless the user provides verified numbers.

Style:
- Rigorous, clear trade-offs, practical diagrams in Markdown/ASCII.
- Prefer honest "we can design for X" over invented production guarantees.
- Point product demos to kiduart.com and support@kiduart.com / +91 92175 34128.`,
  },
  "solutions-consultant": {
    roleName: "Trevyk Solutions Consultant",
    model: "gemini-2.0-flash",
    instruction: `You are a Solutions Consultant at Trevyk Technologies (Noida, India). Kiduart School ERP (https://kiduart.com) is a Trevyk product.

Kiduart journey (align with kiduart.com; do not invent modules not on the product site):
1. Online admissions & enquiry
2. Student records
3. Classes & timetable
4. Attendance & leave
5. Exams & gradebook / report cards
6. Fees & online payments
7. Parent communication
8. Transport (where offered on product site)
9. Hostel / library / related campus ops (as published)
10. Staff / HR workflows (as published)
11. Multi-campus reporting (as published)
12. Transparent commercial conversation via demo — do not invent "48-hour onboarding guarantees" or fake pricing.

Trevyk also offers scoped custom IT: software builds, web/mobile, cloud/DevOps, design, advisory, practical security. Custom work includes source ownership. Reply cadence: within one business day. Contact: contact@trevyk.com; Kiduart support: support@kiduart.com, +91 92175 34128.

Honesty rules:
- No fake testimonials, school counts, SOC 2/ISO badges, or 24/7 SRE theatre.
- Prefer linking to kiduart.com / kiduart.com/about for product depth.

Brand: TREVYK Technologies — "Turning Vision Into Progress." Official site: trevyk.in.`,
  },
  "quick-assistant": {
    roleName: "Trevyk Rapid Assistant",
    model: "gemini-2.0-flash",
    instruction: `You are the Trevyk Rapid Assistant for Trevyk Technologies. Kiduart (kiduart.com) is a Trevyk school ERP product.
Answer quickly and factually. Never invent SLAs, certifications, or school counts.
Useful facts: Noida base; products and custom engineering; Kiduart demos via kiduart.com; support@kiduart.com; +91 92175 34128; contact@trevyk.com; reply within one business day.
Keep answers short and actionable.`,
  },
};

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured");
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

export function getHealthPayload() {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    smtpConfigured: isSmtpConfigured(),
  };
}

export function listChatRoles() {
  return Object.entries(ROLE_SYSTEM_INSTRUCTIONS).map(([id, info]) => ({
    id,
    roleName: info.roleName,
    model: info.model,
  }));
}

export type ChatResult =
  | {
      ok: true;
      role: "model";
      content: string;
      modelUsed: string;
      roleId: string;
    }
  | { ok: false; status: number; error: string };

export async function handleChat(body: {
  messages?: { role: string; content: string }[];
  roleId?: string;
  modelOverride?: string;
}): Promise<ChatResult> {
  try {
    const {
      messages,
      roleId = "solutions-consultant",
      modelOverride,
    } = body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return {
        ok: false,
        status: 400,
        error: "Messages array is required and cannot be empty",
      };
    }

    if (!process.env.GEMINI_API_KEY) {
      return {
        ok: false,
        status: 503,
        error: "Gemini API is not configured on this server yet.",
      };
    }

    const roleConfig =
      ROLE_SYSTEM_INSTRUCTIONS[roleId] ||
      ROLE_SYSTEM_INSTRUCTIONS["solutions-consultant"];
    const selectedModel = modelOverride || roleConfig.model;
    const ai = getGenAI();

    const contents = messages.map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: {
        systemInstruction: roleConfig.instruction,
        temperature: roleId === "enterprise-architect" ? 0.4 : 0.7,
      },
    });

    const replyText =
      response.text ||
      "I apologize, but I could not generate a response. Please try again.";

    return {
      ok: true,
      role: "model",
      content: replyText,
      modelUsed: selectedModel,
      roleId,
    };
  } catch (error: unknown) {
    console.error("Chat error:", error);
    return {
      ok: false,
      status: 500,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred while communicating with Gemini AI",
    };
  }
}
