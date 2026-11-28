# Trevyk 60-day growth playbook

**Owner agent role:** SEO + AEO/GEO/AIO/SXO + digital marketing  
**Site:** https://www.trevyk.in (GSC: `sc-domain:trevyk.in` · GA4: Trevyk Technologies / `G-CH828R29RV`)  
**Started:** 2026-11-25 · **Horizon:** ~60 days (through ~2027-01-24)  
**Rule:** Update this file every session (Done / Next / Blockers).

---

## North star

| Metric | Baseline (2026-11-25) | Day 30 target | Day 60 target |
|--------|----------------------|---------------|---------------|
| GSC impressions / 28d | ~5–20 (near zero) | 300+ | 1,500+ |
| GSC clicks / 28d | ~0–3 | 25+ | 100+ |
| GA4 active users / 28d | ~2–10 / week | 80+ | 250+ |
| External referring domains (GSC Links) | **0** | 8+ | 20+ |
| Key events (`generate_lead`) / 28d | 0 | 5+ | 15+ |

Organic will not “jump overnight.” Day-60 targets assume deploy + content + link acquisition executed weekly.

---

## Diagnosis (locked)

1. Domain age ~82 days (registered 2026-09-04).
2. **0 external backlinks** — primary authority blocker.
3. Brand / scrape queries only (~58 impressions / 3 months). No commercial SERP presence.
4. Thin crawlable hubs (home/tech/about/products ~80–120 words in SEO shell).
5. Indexing OK; live sitemap **23** URLs. GSC external links still **0** (kiduart/LinkedIn often lag days–weeks in Links report).
6. Fake global testimonials removed (2026-11-25). GA late-load fixed (≤1.5s).

---

## Glossary we implement (honest, not acronym packages)

| Acronym | What we ship on-site |
|---------|----------------------|
| **SEO** | Intent pages, clusters, crawlability, internal links, topical depth |
| **AEO** | Direct answers, FAQ + FAQPage JSON-LD, BLUF first paragraphs |
| **GEO** | Original scoped insights, citations to real process, brand consistency for generative engines |
| **AIO** | Clear entities (Trevyk, Kiduart, Noida), consistent NAP, machine-readable `llms.txt` / schema |
| **SXO / AXO** | Page experience, clarity, mobile usability, navigation, CWV hygiene |
| **LLMO** | `llms.txt` + `llms-full.txt`, structured offers AI crawlers can quote |

We do **not** sell “GEO packages” that promise AI Overview citations.

---

## Keyword clusters (priority order)

### Cluster A — AI demand (highest 2026 India demand)

- custom AI agent development India / Noida
- RAG knowledge assistant / private document AI
- LangChain / LangGraph agent development
- LLM API integration / generative AI app development
- vector embeddings / semantic search for business
- AI workflow automation SMB

### Cluster B — Web & software (core offer)

- custom website development Noida
- web application development for startups
- affordable website design for small business India

### Cluster C — Growth

- SEO for small business Noida
- digital marketing starter budget

### Cluster D — Product bridge

- Kiduart school ERP (product → kiduart.com; services → trevyk.in)

---

## Phases

### Phase 0 — Measurement & trust (DONE 2026-11-25)

- [x] GSC + GA4 live audit
- [x] Remove fabricated testimonials
- [x] Fix GA delayed load
- [x] Create this playbook + Cursor rule
- [x] **You:** Deploy measurement/trust fixes to Vercel
- [x] **You:** LinkedIn website → `https://www.trevyk.in` + location Noida (verified 2026-11-27)
- [ ] **You:** Google Business Profile — **deferred** (no permanent address yet)
- [x] **You:** LinkedIn Post A + kiduart.com → trevyk.in (verified 2026-11-27)

### Phase 1 — AI-search readiness + money pages (DONE — deploy live)

- [x] Expand `llms.txt` + add `llms-full.txt`; reference in `robots.txt`
- [x] New guides: `/work/generative-ai-llm-apps` + `/work/ml-data-systems`
- [x] Expand SEO guide for AEO/GEO/AIO/SXO (honest) + FAQ/schema copy
- [x] Expand thin prerender PAGE_COPY (home, AI, technology, who-we-are, our-products, process, contact, what-we-do)
- [x] Update AI hub + what-we-do + footer + home hero for GenAI/ML demand
- [x] Sitemap (20 URLs) + prerender NAV for new guides
- [x] **You:** Deploy Phase 1 to Vercel
- [ ] **You:** GA4 Admin → Events → mark `generate_lead` as Key event
- [x] GSC → Sitemaps resubmit (`https://www.trevyk.in/sitemap.xml` Success)
- [x] After Phase 2 deploy: URL Inspection + Request indexing on Noida + comparison guides; `/who-we-are` already indexed (re-requested)
- [x] GSC Generative AI features: **21 impressions / 3m** (home + legacy `/about`, `/kiduart`). Prefer www canonicals after deploy.

### Phase 2 — Topical depth & architecture (Days 8–21) — DONE (live)

- [x] Local landing: `/work/website-development-noida`
- [x] Comparison pages: `/work/ai-agent-vs-chatbot` + `/work/rag-vs-fine-tuning`
- [x] Internal link map: GrowthOffer → Noida; AI hub → compare guides; related links; footer; llms; sitemap 23 URLs
- [x] E-E-A-T practice block on who-we-are (Noida, Kiduart, contact — no invented founder name)
- [x] **You:** Deploy Phase 2 to Vercel (live verified: 23 sitemap URLs)
- [x] CWV check: GSC mobile “not enough data” (2026-11-27); PageSpeed API quota exhausted — re-check in Phase 4 when field data exists

### Phase 3 — Authority & distribution (Days 14–45) — COMPLETE (GBP deferred)

- [x] Sprint pack: `docs/growth/PHASE-3-BACKLINK-SPRINT.md`
- [x] Site LinkedIn footer/home + README → www.trevyk.in / company LinkedIn (**deploy these local changes** if not live yet)
- [x] Organization `sameAs` → Kiduart + LinkedIn (schema + prerender)
- [x] **You:** LinkedIn website + Noida location (verified public)
- [x] **You:** LinkedIn Post A live with `/work/ai-agent-vs-chatbot` link (verified)
- [x] **You:** kiduart.com “Built by Trevyk Technologies” → `https://www.trevyk.in` (verified)
- [ ] GBP — **deferred** until permanent/verifiable address
- [x] Publish kits ready: Dev.to draft, Kiduart↔Trevyk post, directory NAP pack under `docs/growth/publish/`
- [x] Weekly LinkedIn schedule: Post A done; B/C/D + boundary post copy in sprint/publish docs (owner posts weekly)
- [ ] **Ongoing (not blocking Phase 4):** submit 1–2 free directories from NAP pack; publish Dev.to draft when ready
- [ ] Optional later: Google Ads experiment (budget capped); Clutch after real reviews

### Phase 4 — Conversion & compounding (Days 30–60) — IN PROGRESS

- [x] Code: `generate_lead` on contact form + WhatsApp CTAs (`trackWhatsAppLead`) — **deploy required**
- [x] Case-study slot wired (`testimonialsSection.stories` + `#case-study-slot`); empty until written consent
- [x] Sitemap `lastmod` → 2026-11-27; GSC resubmit Success (**23** discovered pages)
- [x] Content calendar: `docs/growth/CONTENT-CALENDAR-Q1.md`
- [x] Conversion QA doc: `docs/growth/PHASE-4-CONVERSION-QA.md`
- [ ] **You:** Deploy Phase 4 code (WhatsApp lead + case-study slot + sitemap lastmod)
- [ ] **You:** After deploy — Realtime QA (WhatsApp click + one test contact); mark `generate_lead` as Key event
- [ ] Fill first case study only with written consent

---

## Backlink acquisition list (Phase 3)

| Source | Action | Status |
|--------|--------|--------|
| LinkedIn company page | Website + Noida + Post A | **done** (verified 2026-11-27) |
| Google Business Profile | Create/claim | **deferred** (no permanent address) |
| kiduart.com | Built by Trevyk → www.trevyk.in | **done** (verified live) |
| IndiaBiz / Justdial / Sulekha (honest NAP) | List with NAP pack | pack ready — submit when free |
| GitHub org README | Link to trevyk.in | done in repo (deploy/push when ready) |
| Startup India / MSME directories if eligible | Profile | optional later |
| Partner agencies / freelancers | Reciprocal only if real | optional later |
| IndieHackers / Dev.to articles | RAG/agent how-we-scope | draft ready in `docs/growth/publish/` |

---

## GSC / GA checklist (consoles)

### Search Console

1. Performance → 28d + 3m; tabs: Queries, Pages, Countries, Devices.
2. Performance → **Generative AI features** report (AI Overview visibility when available).
3. Indexing → Pages (watch Discovered-not-indexed).
4. Sitemaps → confirm Success after each content deploy.
5. Links → External must leave 0.
6. After deploy: URL Inspection → Request indexing for `/`, `/ai`, new guides.

### Analytics

1. Admin → Events → mark `generate_lead` as **Key event**.
2. Explore → Free form: Session source/medium × Landing page × Event count.
3. Realtime after each deploy (private window).
4. Annotations: “Phase 1 content deploy”, “Backlink batch 1”.
5. There is no native “GEO filter” — use landing-page + query proxies from GSC.

---

## Competitor / market notes (2026-11)

- Noida web agencies win on reviews, directories, years of links — we cannot out-authority them on “website company Noida” in 60 days without links + local pages.
- India hiring data shows **agentic AI / RAG / LangChain** demand surging — Trevyk should lead with AI agents + RAG + GenAI apps while keeping websites as the starter lane.
- Winning pattern: deep service guides + FAQ schema + clear entity + off-site mentions — not acronym spam.

---

## Session log

### 2026-11-25

- Audited GSC/GA; wrote diagnosis canvas.
- Fixed testimonials + GA load delay.
- Created playbook + always-on Cursor rule.
- Phase 1 content: llms.txt / llms-full.txt, SEO AEO/GEO/SXO guide depth, new guides generative-ai-llm-apps + ml-data-systems, expanded prerender copy, sitemap 20 URLs, home/AI hub positioning for agents/RAG/GenAI/ML.
- GSC Generative AI features: 21 impressions / 3m. Top AI-surface URLs include `/`, legacy `/about` & `/kiduart` (redirects), `/technology`, `/work/ai-for-schools`. Prefer www + current paths after deploy.
- GA4 Events hub: only default key events listed (`purchase`, `qualify_lead`, `close_convert_lead`) with no stream data. `generate_lead` will appear under Recent events after first real contact submit — then star it as Key event.
- Phase 1 deployed by user. GSC sitemap re-submitted (Success, 20 discovered until Phase 2 deploy).
- Phase 2 coded: Noida landing, agent-vs-chatbot, RAG-vs-fine-tune; workPages + CTAs; sitemap 23 URLs; footer/llms/GrowthOffer/AI hub links; E-E-A-T practice section on who-we-are.
- Phase 2 deployed live (23 sitemap URLs). GSC sitemap re-submitted. URL Inspection: Noida live-test OK + indexing requested; agent-vs-chatbot + rag-vs-fine-tuning indexing requested; who-we-are already indexed (refresh requested).
- Phase 3 started: `PHASE-3-BACKLINK-SPRINT.md`; LinkedIn company still wrong website/location publicly — user must fix; site footer/README point to real LinkedIn + www.trevyk.in.

### 2026-11-27

- Verified LinkedIn: website `https://www.trevyk.in`, location Noida, Post A live (agent vs chatbot + hashtags).
- Verified kiduart.com homepage: “Built by Trevyk Technologies” → `https://www.trevyk.in`.
- GBP deferred by owner (no permanent address) — correct call; do not fake a storefront.
- GSC Links still **0 external** (expected lag); internal links 195. CWV: not enough mobile data yet.
- Phase 3 agent close-out: schema `sameAs` LinkedIn; publish kits (Dev.to, Kiduart boundary post, directory NAP); playbook marked Phase 3 complete except GBP/optional ongoing.
- Phase 3 deploy verified live (Organization sameAs includes LinkedIn).
- Phase 4 started: WhatsApp → `generate_lead`; case-study slot; sitemap lastmod 2026-11-27; GSC sitemap Success with **23** pages; content calendar + conversion QA docs. GA4 Recent events show traffic (`page_view`, `click`, `chat_open`) but not yet `generate_lead` — needs post-deploy QA click/submit.
- Re-audit GSC/GA: 28d **25 impr / 3 clicks**; countries India-heavy + tiny US/Sudan. Global positioning pass: hero/SEO/footer/E-E-A-T; fake Bengaluru NAP removed; new `/work/remote-software-ai-team`; schema `areaServed` Worldwide.

---

## Audit snapshot (2026-11-27)

| Source | Finding |
|--------|---------|
| GSC 28d | **25 impressions · 3 clicks · CTR 12% · avg pos 10.5** (up from ~0–5 impr baseline) |
| GSC countries | India 21 impr / 3 clicks; US 3 impr / 0; Sudan 1 impr / 0 |
| GSC Links | External still **0** in report (kiduart/LinkedIn lag) |
| GA4 | Events fire (`page_view`, `click`, `chat_open`); volume still very low; India-heavy is expected until global pages + links mature |
| Hard limits | Domain age ~3 months; almost no referring domains; commercial queries not ranking yet — **content alone cannot create global traffic overnight** |

### Positioning fix (this session)

- HQ Noida kept for NAP/local SEO; hero/meta/SEO copy reframed as **remote worldwide**.
- Removed misleading Bengaluru HQ / fake phone in unused CTA component.
- New money page: `/work/remote-software-ai-team` (sitemap 24 URLs after deploy).

### Narrative fix (owner brief — business growth first)

- Site story shifted from “we sell websites/services” → **we help your business grow** (enquiries, presence, systems, practical AI).
- Honest framing only: no profit / ranking guarantees.
- Human-writer pass on home, what-we-do, AI, who-we-are, contact, footer, prerender, llms, key guides.

---

### 2026-11-28

- Owner audit DOCX ingested → `docs/growth/CONTENT-PHASE-PLAN-AUDIT.md` (phased A–E).
- Phase A: home hero/GrowthOffer cleaned—**no industry dump**; audit-aligned CTAs; minimal impact copy.
- Phase B: `/portfolio` live with 3 projects (Kiduart / Sports Academy under development / AGL Creatives); nav + home CTA wired.
- Phase C: defensive-tone sweep (audit replacement table); what-we-do catalogue + Mobile/Partnerships; AI ready/feasibility/educational scope labels.
- Phase D: `/solutions` hub + 4 industry `/work/*` landings; Who-we-work-with strip on What we do only.

---

## Next actions (agent — do these in order)

1. **You:** Deploy Phases A–D.
2. **You:** Optional — Sports Academy screens; AGL permission reconfirm.
3. **You:** GA4 Realtime QA; mark `generate_lead` Key event (Phase E).
4. Phase E: contact conversion QA + GBP when address exists.
