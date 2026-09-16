import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: {
    health: "server/entries/health.ts",
    contact: "server/entries/contact.ts",
    chat: "server/entries/chat.ts",
    "chat/roles": "server/entries/chat-roles.ts",
  },
  outdir: "api",
  outExtension: { ".js": ".cjs" },
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node20",
  sourcemap: false,
  legalComments: "none",
  logLevel: "info",
});
