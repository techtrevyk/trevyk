import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { getHealthPayload, handleChat, listChatRoles } from "./server/lib/chat";
import { handleContact } from "./server/lib/contact";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json(getHealthPayload());
});

app.post("/api/contact", async (req, res) => {
  const result = await handleContact((req.body || {}) as Record<string, unknown>);
  if (result.ok === false) {
    return res.status(result.status).json({ error: result.error });
  }
  return res.json({ ok: true });
});

app.get("/api/chat/roles", (_req, res) => {
  res.json({ roles: listChatRoles() });
});

app.post("/api/chat", async (req, res) => {
  const result = await handleChat(req.body || {});
  if (result.ok === false) {
    return res.status(result.status).json({ error: result.error });
  }
  return res.json({
    role: result.role,
    content: result.content,
    modelUsed: result.modelUsed,
    roleId: result.roleId,
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api")) return next();
      res.sendFile(path.join(distPath, "index.html"), (err) => {
        if (err) next(err);
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Trevyk server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
