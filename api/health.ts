import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getHealthPayload } from "../server/lib/health";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json(getHealthPayload());
}
