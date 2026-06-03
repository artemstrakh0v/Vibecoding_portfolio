# AGENTS.md — Artem Strakhov Portfolio

This file gives AI agents and humans the context needed to work on and deploy this project correctly.

---

## Project summary

Personal portfolio website for **Artem Strakhov**.

**Primary goals:**

1. Educate visitors on who Artem Strakhov is and what he has done
2. Get visitors to subscribe to a weekly newsletter

**Design intent:** A sharp digital business card — clean, bold, typography-driven, minimal, premium, spacious. Not corporate SaaS, not startup landing page, not crypto/gamer aesthetic.

**Hosting target:** Cloudflare Pages (static export). Do not assume Vercel unless the user asks to switch.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Deployment | Cloudflare Pages via static export (`out/`) |

---

## Hard constraints — do NOT add

- CMS
- Database
- Authentication
- Unnecessary APIs or backend systems
- Redux or global state libraries
- Framer Motion or complex animations
- Dark mode / theme switching
- Blog functionality
- Admin dashboards
- Filtering or search on projects
- Carousels, sliders, autoplay

Keep the architecture **simple, clean, fast, and minimal**. Avoid unnecessary abstractions.

---

## Design system

### Colors (only these)

- **White** — background
- **Black** — text and borders
- **Accent red** — `#e60026` (violent red, used sparingly)

Use red only for: buttons, hover states, highlights, key accents.

Defined in `src/app/globals.css` as `--color-accent`.

### Typography

Fonts loaded in `src/app/layout.tsx` from Fontshare:

- **Khand** (700) — headlines only → class `font-headline`
- **Switzer** (400) — body and UI text

Use oversized headings, strong spacing, bold hierarchy, clean alignment.

### Layout principles

- Lots of white space
- Strong typography over decoration
- Minimal UI, subtle hovers only
- Mobile responsive, excellent desktop layout
- Semantic, accessible HTML

---

## Site structure

Exactly **3 pages**:

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Hero, positioning, featured projects, newsletter |
| `/about` | `src/app/about/page.tsx` | Bio, career, highlights, philosophy |
| `/projects` | `src/app/projects/page.tsx` | Project cards grid |

Shared layout: `src/app/layout.tsx` (Header + Footer wrap all pages).

---

## Folder structure

```
├── public/                      # Static assets (images, etc.)
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── globals.css          # Tailwind + theme tokens
│   │   ├── layout.tsx           # Root layout, fonts, Header, Footer
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NewsletterForm.tsx   # Mock submit — no provider wired yet
│   │   ├── ProjectCard.tsx
│   │   └── SectionHeading.tsx
│   └── lib/
│       └── projects.ts          # Placeholder project data
├── next.config.ts               # output: "export" for static build
├── wrangler.toml                # Cloudflare Pages output dir: out
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── AGENTS.md                    # This file
```

---

## Key files to edit

| What to change | Where |
|----------------|-------|
| Home page copy | `src/app/page.tsx` |
| About page copy | `src/app/about/page.tsx` |
| Projects page copy | `src/app/projects/page.tsx` |
| Project list | `src/lib/projects.ts` |
| Newsletter form logic | `src/components/NewsletterForm.tsx` |
| Navigation | `src/components/Header.tsx` |
| Footer / social links | `src/components/Footer.tsx` |
| Accent color / fonts | `src/app/globals.css` |
| Static export config | `next.config.ts` |
| Cloudflare output dir | `wrangler.toml` |

---

## Placeholder content rules

- Use temporary placeholder copy everywhere until the owner replaces it
- Do **not** invent fake accomplishments, real companies, or fake metrics
- Simple generic placeholders are enough

---

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18+ (20+ recommended)
- npm (bundled with Node.js)
- [Git](https://git-scm.com/download/win) (for deployment via GitHub)

### Commands

```powershell
cd "C:\Users\user\Desktop\Vibecoding_portfolio"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Press `Ctrl+C` in the terminal to stop.

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Static export → writes files to `out/` |
| `npm run preview` | Preview the static `out/` build locally |
| `npm run lint` | Run ESLint |

### Preview production build locally

```powershell
npm run build
npm run preview
```

Open the URL shown in the terminal.

---

## Deployment — Cloudflare Pages

This site uses **Next.js static export** (`output: "export"` in `next.config.ts`). The build outputs plain HTML/CSS/JS into the `out/` folder. Cloudflare Pages serves that folder.

**Critical build settings on Cloudflare:**

| Setting | Value |
|---------|-------|
| Framework preset | **None** (not Next.js) |
| Build command | `npm run build` |
| Build output directory | **`out`** |
| Production branch | `main` |
| Node version (optional env var) | `NODE_VERSION` = `20` |

Do **not** use `.next` as the output directory.

---

## Beginner guide — full walkthrough

### Part 1: Put the code on GitHub

Cloudflare Pages works best when it pulls code from GitHub.

#### 1. Install Git (if needed)

1. Go to https://git-scm.com/download/win
2. Download and install (keep defaults)
3. Restart the computer or close and reopen the terminal/IDE

#### 2. Create a GitHub account

1. Go to https://github.com/signup
2. Sign up (free)

#### 3. Create a new empty repo on GitHub

1. Log in to GitHub
2. Top right: click **+** → **New repository**
3. **Repository name:** e.g. `portfolio`
4. Leave it **Public**
5. **Do NOT** check “Add a README” (this project already has files)
6. Click **Create repository**
7. Keep that page open — it shows setup commands

#### 4. Upload the project from the PC

Open PowerShell or Cursor terminal and run one command at a time:

```powershell
cd "C:\Users\user\Desktop\Vibecoding_portfolio"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
```

On the GitHub repo page, copy the `git remote add origin` line (with your username) and run it:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

GitHub will open a browser login window. Approve it. Refresh the repo — all project files should appear.

---

### Part 2: Deploy on Cloudflare

#### 1. Create a Cloudflare account

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up (free)
3. Verify email if prompted

#### 2. Open Pages

1. Cloudflare dashboard → left sidebar **Workers & Pages**
2. Click **Create** (or **Create application**)
3. Tab **Pages**
4. Click **Connect to Git**

#### 3. Connect GitHub

1. Click **Connect GitHub**
2. Authorize / Install when prompted
3. Choose all repos or only this repo
4. Finish authorization

#### 4. Select the repo

1. Find the repo (e.g. `portfolio`)
2. Click **Begin setup** or **Select project**

#### 5. Build settings — use exactly these

| Field | Value |
|-------|-------|
| Project name | e.g. `artem-portfolio` (becomes part of the URL) |
| Production branch | `main` |
| Framework preset | **None** |
| Build command | `npm run build` |
| Build output directory | `out` |

Optional environment variable:

- Name: `NODE_VERSION`
- Value: `20`

#### 6. Deploy

1. Click **Save and Deploy**
2. Wait 2–5 minutes for the build log
3. On success, open the link: `https://<project-name>.pages.dev`

#### 7. Custom domain (optional)

Cloudflare dashboard → your Pages project → **Custom domains** → follow the prompts.

---

### Part 3: Update the live site later

After editing files locally:

```powershell
cd "C:\Users\user\Desktop\Vibecoding_portfolio"
git add .
git commit -m "Describe your change"
git push
```

Cloudflare rebuilds automatically. Refresh the `.pages.dev` URL after 1–2 minutes.

---

## Alternative deploy — Wrangler CLI

For manual deploys without Git integration:

```powershell
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy out --project-name=artem-strakhov-portfolio
```

`wrangler.toml` in the repo root already sets `pages_build_output_dir = "out"`.

---

## Troubleshooting

### Cloudflare build failed

1. Open the failed deploy in Cloudflare → read the error at the bottom of the log
2. Most common fixes:
   - **Build output directory** must be `out` (not `.next`)
   - **Framework preset** must be **None**
   - Add env var `NODE_VERSION` = `20` if Node version errors appear

### `git` or `npm` not recognized

- Install Node.js LTS: https://nodejs.org
- Install Git: https://git-scm.com/download/win
- Close and reopen the terminal

### GitHub push keeps asking for password

- Use the browser login popup when `git push` runs
- Do not type a GitHub password in the terminal

### Local dev works but Cloudflare shows old content

- Confirm `git push` succeeded
- Check Cloudflare deploy log for the latest commit
- Hard-refresh the browser (`Ctrl+Shift+R`)

### Newsletter form

The form in `NewsletterForm.tsx` is a **mock handler** only. It validates email format and shows success/error UI. Connect a real provider (Buttondown, ConvertKit, Resend, etc.) when ready — no backend exists yet.

---

## Agent guidelines when making changes

1. **Minimize scope** — smallest correct diff; don’t refactor unrelated code
2. **Match existing style** — same Tailwind patterns, component structure, naming
3. **Preserve simplicity** — no new libraries unless explicitly requested
4. **Keep static export working** — don’t add features that require a Node server (API routes, SSR, ISR) without updating deployment strategy
5. **Preserve design system** — white/black/red only; Khand + Switzer; lots of spacing
6. **Placeholder content only** — no invented credentials or companies
7. **Test build** — run `npm run build` after significant changes; output must land in `out/`

---

## Quick checklist (deploy)

- [ ] Code pushed to GitHub (`git push`)
- [ ] Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
- [ ] Repo selected
- [ ] Framework: **None** | Build: `npm run build` | Output: **`out`**
- [ ] **Save and Deploy**
- [ ] Live at `https://<project-name>.pages.dev`
