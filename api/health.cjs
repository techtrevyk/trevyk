var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server/entries/health.ts
var health_exports = {};
__export(health_exports, {
  default: () => handler
});
module.exports = __toCommonJS(health_exports);

// server/lib/common.ts
function getSmtpPass() {
  return (process.env.SMTP_PASS || "").replace(/\s+/g, "");
}
function isSmtpConfigured() {
  return Boolean(process.env.SMTP_USER && getSmtpPass());
}

// server/lib/health.ts
function describeGeminiKeyIssue(apiKey) {
  if (!apiKey?.trim()) {
    return "GEMINI_API_KEY is missing on the server.";
  }
  if (apiKey.trim().length < 20) {
    return "GEMINI_API_KEY looks too short to be valid.";
  }
  return null;
}
function getHealthPayload() {
  const keyIssue = describeGeminiKeyIssue(process.env.GEMINI_API_KEY);
  return {
    status: "ok",
    runtime: "cjs-bundle",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    geminiKeyLooksValid: !keyIssue,
    geminiKeyIssue: keyIssue,
    smtpConfigured: isSmtpConfigured()
  };
}

// server/entries/health.ts
function handler(_req, res) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json(getHealthPayload());
}
