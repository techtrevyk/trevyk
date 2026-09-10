import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleContact } from "../server/lib/contact";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const body =
    typeof req.body === "string"
      ? (JSON.parse(req.body) as Record<string, unknown>)
      : ((req.body || {}) as Record<string, unknown>);

  const result = await handleContact(body);
  if (result.ok === false) {
    return res.status(result.status).json({ error: result.error });
  }
  return res.status(200).json({ ok: true });
}
