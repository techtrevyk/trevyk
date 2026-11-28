# Phase E / Phase 4 Conversion QA (GA4 + contact)

**Property:** GA4 `G-CH828R29RV` · Site: https://www.trevyk.in  
**Canonical contact:** contact@trevyk.com · WhatsApp +91 88106 64797 · HQ Noida (remote-first)

## Events wired in code (2026-11-28)

| Action                              | Event                              | Params                                      |
| ----------------------------------- | ---------------------------------- | ------------------------------------------- |
| Contact form success                | `generate_lead`                    | `method=contact_form`, `lane=<need>`        |
| AI discuss form success             | `generate_lead`                    | `method=contact_form`, `lane=services`      |
| WhatsApp floating button            | `generate_lead` + outbound `click` | `method=whatsapp`, `lane=whatsapp_floating` |
| Contact WhatsApp card / success CTA | `generate_lead` + outbound `click` | `method=whatsapp`, `lane=contact_*`         |
| Contact mailto links                | `generate_lead`                    | `method=email`, `lane=contact_*`            |

`trackEvent` now calls `initAnalytics()` so leads fire even if page_view ran late.

## Contact form upgrades (shipped)

- Need options: website/app, Kiduart, AI, SEO/growth, partnership, other
- City / timezone field (folded into scope payload)
- Success state: WhatsApp + portfolio next steps
- NAP email aligned to **contact@trevyk.com** (removed stale info@trevyktechnologies.com)

## Owner QA (after deploy)

1. Open GA4 → **Reports → Realtime** (incognito optional).
2. Click floating **WhatsApp** once → expect `generate_lead` (`method=whatsapp`).
3. Contact page: submit a **labelled test** enquiry (your email; subject/body note “QA test”).
4. Confirm `generate_lead` with `method=contact_form`.
5. Optional: click mailto contact@trevyk.com → `method=email`.
6. Admin → **Events** → when `generate_lead` appears under Recent → mark as **Key event**.
7. Annotation: “Phase E conversion QA”.

## GBP

**Deferred** until a permanent/verifiable address exists. Do not invent a storefront.

## Case-study consent (before filling `stories`)

Keep written approval that allows naming organisation, city, role, and outcome on trevyk.in. Then add one object to `testimonialsSection.stories` in `src/content/home.ts` with `consentOnFile: true`.
