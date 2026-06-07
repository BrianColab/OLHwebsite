# OLH Website — Launch Checklist

Pre-launch items grouped by owner. Check each before go-live.

---

## CLIENT SIGN-OFF REQUIRED

- [ ] **CTA heading confirmed** — "Your health. Your community. Your time." is from the build brief, not the Word doc. Confirm or replace before launch. See `content/en/index.ts` (marked `[BRIEF]`).
- [ ] **Footer tagline confirmed** — "Ontario Legion Health — Care in Your Community" is from the build brief. Confirm or replace. See `content/en/index.ts` (marked `[BRIEF]`).
- [ ] **Copyright year confirmed** — Currently "© 2025 Ontario Legion Health." Verify year is correct at launch.
- [ ] **French version decision** — FR toggle is currently disabled with a "coming soon" banner. Confirm whether French copy will be provided before launch, or if the toggle should be hidden entirely.

---

## COPY / CONTENT

- [ ] **Full copy review against `OLH Website Copy.docx`** — Verify all body copy matches the source document exactly.
- [ ] **Contact drawer intro text** — "Contact details to be added." is a placeholder. Add real contact information or messaging before launch.
- [ ] **Contact form endpoint** — Form currently shows "Contact form endpoint to be added." Wire a real endpoint (Formspree, EmailJS, API route, or CRM). See `components/ContactDrawer.tsx` `handleSubmit()`.
- [ ] **French copy** — If launching with French, replace all `"TODO: French copy"` values in `content/fr/index.ts` with approved translations. Do not use machine translation.

---

## ASSETS

- [ ] **OLH logo** — Confirm `public/olh-logo.png` is the final approved logo at correct resolution (target: 320 × 92px or 2×).
- [ ] **Hero image** — Replace placeholder in `app/page.tsx` with final photography.
  - Place file at: `public/assets/olh/hero/` (recommended: `hero-main.jpg`, 800 × 600px, 4:3)
  - Update `<Image>` src in `app/page.tsx` hero section.
- [ ] **Step 01 image** — Replace placeholder in `components/StepCard.tsx`.
  - Place file at: `public/assets/olh/steps/step-01-app.jpg` (800 × 600px, 4:3)
- [ ] **Step 02 image** — Place at `public/assets/olh/steps/step-02-kiosk.jpg`
- [ ] **Step 03 image** — Place at `public/assets/olh/steps/step-03-results.jpg`
- [ ] **Partner logos** — Official logos for all 4 partners. Required: PNG or SVG on white/transparent background at ≥ 2× resolution.
  - Place files at: `public/assets/olh/partners/`
  - Suggested filenames: `rcl-ontario-command.png`, `sunnybrook.png`, `trycycle.png`, `pharmasmart.png`
  - Update each partner's `logo` field in `content/en/index.ts` (currently `null`).

---

## TECHNICAL

- [ ] **Run `npm run build`** — Must produce zero errors and zero TypeScript warnings.
- [ ] **Run `npm run lint`** — Must produce zero errors.
- [ ] **Environment / hosting** — Configure deployment target (Vercel, Netlify, S3/CloudFront, etc.). Project uses `output: "export"` in `next.config.ts` — compatible with any static host.
- [ ] **Domain / DNS** — Set up custom domain and SSL.
- [ ] **`robots.txt`** — Add `public/robots.txt` if search indexing should be restricted during soft launch.
- [ ] **`sitemap.xml`** — Generate and add for SEO.
- [ ] **Analytics** — Add analytics script (GA4, Plausible, etc.) to `app/layout.tsx` if required.
- [ ] **Open Graph / social meta** — Add `og:title`, `og:description`, `og:image` to `app/layout.tsx`.
- [ ] **Favicon** — Add `public/favicon.ico` and `public/apple-touch-icon.png`.

---

## ACCESSIBILITY

- [ ] **Screen reader smoke test** — Test key flows (nav, drawer open/close, form submit) with VoiceOver (Mac) or NVDA (Windows).
- [ ] **Keyboard-only navigation** — Tab through all pages, verify no focus traps outside the Contact drawer, all interactive elements reachable and labelled.
- [ ] **Colour contrast** — `#CF1F2A` red on white passes WCAG AA for large text. Verify body text (`#080808`, `#444444`) on all backgrounds.
- [ ] **Zoom to 200%** — Verify layout doesn't break at 200% browser zoom.

---

## MOBILE

- [ ] **iOS Safari** — Test on iPhone (Safari): nav, drawer, forms, tap targets.
- [ ] **Android Chrome** — Test on Android (Chrome): same flows.
- [ ] **Breakpoints** — Verify at 320px, 375px, 768px, 1024px, 1280px+.

---

## POST-LAUNCH

- [ ] Remove all `.gitkeep` files from `public/assets/olh/` after real assets are committed.
- [ ] Delete `LAUNCH_CHECKLIST.md` from the public repo or move to a private docs folder.
