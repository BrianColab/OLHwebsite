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

1. Push the repo to GitHub (already done — https://github.com/BrianColab/OLHwebsite).
2. Create a new project in Railway at https://railway.app.
3. Choose **Deploy from GitHub repo** → select `BrianColab/OLHwebsite`.
4. Railway auto-detects Next.js via nixpacks. The `railway.json` in the repo makes the build and start commands explicit.
5. No environment variables are required for the current build.
6. Railway assigns a public URL automatically (e.g. `olhwebsite.up.railway.app`).

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

## Environment variables

No environment variables are required for the current build.

When the contact form endpoint is added, the following variable will be needed:

| Variable | Purpose | Status |
|----------|---------|--------|
| `CONTACT_ENDPOINT` or similar | Form submission target | **Pending — not wired yet** |

Add environment variables in Railway → Project → Variables.

---

## Known go-live blockers

1. **Contact form endpoint** — `components/ContactDrawer.tsx` `handleSubmit()` currently shows "Contact form endpoint to be added." A real endpoint (Formspree, EmailJS, API route, or CRM) must be wired before the form is functional in production.
2. **[BRIEF]-flagged copy** — Two strings in `content/en/index.ts` are marked `[BRIEF]` and need client sign-off before launch: the CTA heading and the footer tagline.
3. **Hero + step images** — `public/assets/olh/hero/` and `public/assets/olh/steps/` contain only `.gitkeep` placeholders. Final photography must be added and wired into `app/page.tsx` and `components/StepCard.tsx`.
4. **Custom domain** — Configure in Railway → Settings → Domains after the production URL is confirmed.
5. **French copy** — `content/fr/index.ts` contains placeholder copy. Launch with FR toggle disabled (current state) or supply approved translations before enabling.
