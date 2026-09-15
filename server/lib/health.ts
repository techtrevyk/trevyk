import { isSmtpConfigured } from "./common";

/** Generative Language API expects AI Studio keys (usually AIza…). */
export function describeGeminiKeyIssue(
  apiKey: string | undefined,
): string | null {
  if (!apiKey?.trim()) {
    return "GEMINI_API_KEY is missing. Add an AI Studio API key (usually starts with AIza) to .env and restart the server.";
  }
  const key = apiKey.trim();
  if (key.startsWith("AQ.")) {
    return "GEMINI_API_KEY looks like a Google Cloud / OAuth-style token (AQ.…), not an AI Studio API key. Create a key at https://aistudio.google.com/apikey (it usually starts with AIza) and replace GEMINI_API_KEY, then restart.";
  }
  if (!key.startsWith("AIza") && key.length < 20) {
    return "GEMINI_API_KEY format looks invalid. Use an AI Studio API key from https://aistudio.google.com/apikey";
  }
  return null;
}

export function getHealthPayload() {
  const keyIssue = describeGeminiKeyIssue(process.env.GEMINI_API_KEY);
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    geminiKeyLooksValid: !keyIssue,
    geminiKeyIssue: keyIssue,
    smtpConfigured: isSmtpConfigured(),
  };
}
