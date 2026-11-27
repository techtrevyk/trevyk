# Phase 4 — Conversion QA (GA4 + contact)

**Property:** GA4 `G-CH828R29RV` · Site: https://www.trevyk.in

## Events wired in code

| Action | Event | Params |
|--------|--------|--------|
| Contact form success | `generate_lead` | `method=contact_form`, `lane=<form type>` |
| AI discuss form success | `generate_lead` | `method=contact_form`, `lane=services` |
| WhatsApp floating button | `generate_lead` + outbound `click` | `method=whatsapp`, `lane=whatsapp_floating` |
| Contact “Call or WhatsApp” card | `generate_lead` + outbound `click` | `method=whatsapp`, `lane=contact_whatsapp_card` |

## Owner QA (after Phase 4 deploy)

1. Open GA4 → **Reports → Realtime** (private/incognito window optional).
2. On site: click floating **WhatsApp** once → Realtime me `generate_lead` dikhna chahiye (`method=whatsapp`).
3. Contact page: submit a **real test** enquiry (use your email; reply ignore / note “QA test”).
4. Confirm `generate_lead` with `method=contact_form`.
5. Admin → **Events** → when `generate_lead` appears under Recent → mark as **Key event**.
6. Annotation (Admin or custom note): “Phase 4 conversion QA”.

## Case-study consent (before filling `stories`)

Keep a written email/WhatsApp approval that allows naming organisation, city, role, and outcome on trevyk.in. Then add one object to `testimonialsSection.stories` in `src/content/home.ts` with `consentOnFile: true`.
