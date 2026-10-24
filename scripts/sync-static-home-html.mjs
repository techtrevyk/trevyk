/**
 * Injects hero copy from src/content/home.ts into index.html static shell markers.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "index.html");

const tmpTs = path.join(root, "scripts", ".static-home-export.mjs");
fs.writeFileSync(
  tmpTs,
  `
import { staticHomeHtml } from "../src/content/staticHomeHtml.ts";
console.log(JSON.stringify(staticHomeHtml));
`,
);

const json = execSync(`npx tsx ${JSON.stringify(tmpTs)}`, { cwd: root, encoding: "utf8" }).trim();
const data = JSON.parse(json);
fs.unlinkSync(tmpTs);

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");

let html = fs.readFileSync(indexPath, "utf8");
const block = `<!-- trevyk-static-home-start -->
    <div id="trevyk-static-home" class="trevyk-static-home">
      <div class="trevyk-static-home__media" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcset="/images/hero-office-poster-640.webp 640w, /images/hero-office-poster.webp 1920w"
            sizes="100vw"
          />
          <img
            id="trevyk-lcp-hero"
            src="/images/hero-office-poster-640.jpg"
            srcset="/images/hero-office-poster-640.jpg 640w, /images/hero-office-poster.jpg 1920w"
            sizes="100vw"
            alt=""
            width="640"
            height="360"
            decoding="async"
            fetchpriority="high"
          />
        </picture>
      </div>
      <div class="trevyk-static-home__gradient" aria-hidden="true"></div>
      <header class="trevyk-static-home__bar">
        <a href="/" class="trevyk-static-home__logo">
          <img
            src="/trevyk-logo-on-dark.png"
            alt="Trevyk Technologies"
            width="128"
            height="36"
            decoding="async"
            loading="eager"
            fetchpriority="low"
          />
        </a>
      </header>
      <div class="trevyk-static-home__content">
        <p class="trevyk-static-home__eyebrow">${esc(data.eyebrow)}</p>
        <h1 class="trevyk-static-home__title">${esc(data.title)}</h1>
        <p class="trevyk-static-home__subtitle">${esc(data.subtitle)}</p>
        <p class="trevyk-static-home__lead">${esc(data.lead)}</p>
        <div class="trevyk-static-home__actions">
          <a class="trevyk-static-home__btn trevyk-static-home__btn--primary" href="${esc(data.primaryCta.href)}">${esc(data.primaryCta.label)}</a>
          <a class="trevyk-static-home__btn trevyk-static-home__btn--secondary" href="${esc(data.secondaryCta.href)}">${esc(data.secondaryCta.label)}</a>
          <a class="trevyk-static-home__link" href="${esc(data.tertiaryCta.href)}">${esc(data.tertiaryCta.label)}</a>
        </div>
      </div>
    </div>
    <!-- trevyk-static-home-end -->`;

const re = /<!-- trevyk-static-home-start -->[\s\S]*?<!-- trevyk-static-home-end -->/;
if (!re.test(html)) {
  throw new Error("static home markers missing in index.html");
}
html = html.replace(re, block);
fs.writeFileSync(indexPath, html);
console.log("synced static home HTML from content/home.ts");
