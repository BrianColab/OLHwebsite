# OLH Website — Deployment Notes

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Local production build

```bash
npm run build   # compiles to .next/
npm run start   # serves on http://localhost:3000
```

Both must pass without errors before any deployment.

---

## Railway deployment (from GitHub)

### First-time setup

1. Push the repo to GitHub (already done — https://github.com/BrianColab/OLHwebsite, branch: `master`).
2. Go to https://railway.app → **New Project** → **Deploy from GitHub repo**.
3. Select `BrianColab/OLHwebsite`.
4. Railway auto-detects Next.js via nixpacks. The `railway.json` in the repo makes the build and start commands explicit — no manual configuration needed.
5. No environment variables are required for the current build — skip that step.
6. Click **Deploy**. Railway will run `npm install` → `npm run build` → `npm run start`.
7. Railway assigns a public URL automatically (e.g. `olhwebsite.up.railway.app`). The URL appears in the project dashboard under **Deployments**.

### Build and start commands (set automatically via `railway.json`)

| Step | Command |
|------|---------|
| Build | `npm run build` |
| Start | `npm run start` |

### Port

Railway injects `PORT` as an environment variable. Next.js reads `PORT` automatically — no code changes needed.

### Node version

Specified in `package.json` `engines` field: `>=20`. Railway respects this via nixpacks.

---

## Post-deploy QA checklist

Run through these manually on the Railway staging URL after first deployment.

### Pages and navigation
- [ ] `/` — Home page loads, no 404
- [ ] `/how-it-works` — loads, no 404
- [ ] `/who-we-serve` — loads, no 404
- [ ] Header nav links work on all pages
- [ ] Footer nav links work on all pages
- [ ] Logo links back to `/`
- [ ] No console errors (check browser DevTools)
- [ ] No hydration errors

### EN/FR toggle
- [ ] EN is active by default on page load
- [ ] Click FR → all copy switches to French (nav, hero, page body, CTAs, footer)
- [ ] Click EN → switches back to English
- [ ] No `[FR]`, `TODO`, or placeholder strings visible in either language
- [ ] Contact drawer labels (heading, fields, submit button) switch language
- [ ] `<html lang>` attribute updates (check DevTools → Elements)

### Contact drawer
- [ ] Header "Contact Us" / "Nous joindre" opens drawer
- [ ] Footer "Contact Us" opens drawer
- [ ] Mobile menu contact button opens drawer (and closes the menu)
- [ ] Drawer slides in from the right
- [ ] Click overlay → closes drawer
- [ ] Press Escape → closes drawer
- [ ] Click × button → closes drawer
- [ ] Body scroll is locked while drawer is open
- [ ] Focus moves into drawer on open (to close button)
- [ ] Focus returns to trigger element on close
- [ ] All 4 form fields are usable
- [ ] Submit → shows placeholder message, no network POST

### App CTA
- [ ] Gradient background looks polished (dark-to-red)
- [ ] Phone mockup visible on desktop (hidden on mobile/tablet)
- [ ] iOS button (white pill) visible and accessible
- [ ] Android button (ghost pill) visible and accessible
- [ ] Clicking either button does NOT scroll page to top (preventDefault active)
- [ ] Both buttons readable in EN and FR

### Partner logos
- [ ] All 4 SVG logos render correctly (not broken, not distorted)
- [ ] Royal Canadian Legion — correct logo
- [ ] Sunnybrook — correct logo
- [ ] TryCycle — correct logo
- [ ] PharmaSmart — correct logo
- [ ] Logos fill card area and are not tiny

### Responsive (check with browser DevTools)
| Width | Items to verify |
|-------|----------------|
| 1440px | Full desktop layout, phone mockup in CTA visible |
| 1280px | Container max-width respected |
| 1024px | Desktop nav still showing, no wrapping |
| 768px | Mobile hamburger, 2-col cards |
| 430px | Single-col layout, drawer full-width, CTA stack |
| 390px | iPhone 15 size — common test target |
| 360px | Minimum supported width — check nav, drawer, cards |

---

## Environment variables

No environment variables are required for the current build.

When the contact form endpoint is added, the following variable will be needed:

| Variable | Purpose | Status |
|----------|---------|--------|
| `CONTACT_ENDPOINT` or similar | Form submission target | **Pending — not wired yet** |

Add environment variables in Railway → Project → Variables.

---

## Known go-live blockers

1. **Contact form endpoint** — `components/ContactDrawer.tsx` `handleSubmit()` currently shows a placeholder message. A real endpoint (Formspree, EmailJS, Next.js API route, or CRM) must be wired before the form is functional.
2. **[BRIEF]-flagged copy** — Two strings in `content/en/index.ts` need client sign-off: the CTA heading ("Your health. Your community. Your time.") and the footer tagline.
3. **French copy review** — `content/fr/index.ts` is a draft translation. Must be reviewed by client and a qualified Canadian French translator before FR toggle is publicly advertised.
4. **iOS App Store link** — Replace `href="#"` on the iOS button in `components/CTASection.tsx`.
5. **Android Google Play link** — Replace `href="#"` on the Android button in `components/CTASection.tsx`.
6. **Hero + step images** — `public/assets/olh/hero/` and `public/assets/olh/steps/` contain only `.gitkeep` placeholders. Photography must be added and wired into `app/page.tsx` and `components/StepCard.tsx`.
7. **Custom domain** — Configure in Railway → Settings → Domains after the production URL is confirmed.
