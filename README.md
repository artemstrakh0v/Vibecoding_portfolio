# Artem Strakhov — Portfolio

A minimal personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Static-first, typography-driven, and optimized for Cloudflare Pages deployment.

## Folder structure

```
├── public/                 # Static assets (add images here later)
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── projects/       # Projects page
│   │   ├── globals.css     # Tailwind + theme tokens
│   │   ├── layout.tsx      # Root layout (fonts, header, footer)
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NewsletterForm.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SectionHeading.tsx
│   └── lib/
│       └── projects.ts     # Placeholder project data
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later (20+ recommended)
- npm (comes with Node.js)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Static export to `out/`  |
| `npm run preview` | Preview the static build locally |
| `npm run lint` | Run ESLint               |

## Customization

- **Copy**: Edit text directly in `src/app/page.tsx`, `src/app/about/page.tsx`, and `src/app/projects/page.tsx`.
- **Projects**: Update placeholder entries in `src/lib/projects.ts`.
- **Newsletter**: Replace the mock handler in `src/components/NewsletterForm.tsx` with your provider (e.g. Buttondown, ConvertKit, Resend).
- **Social links**: Update URLs in `src/components/Footer.tsx`.
- **Accent color**: Change `--color-accent` in `src/app/globals.css` (default: `#e60026`).

## Deploy to Cloudflare Pages

This site builds as a **static export** (`out/` folder) — ideal for Cloudflare Pages. No Workers adapter or database required.

### Option A — Connect Git (recommended)

1. Push this project to GitHub, GitLab, or Bitbucket.

2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.

3. Select your repository and use these build settings:

   | Setting | Value |
   | -------- | ----- |
   | **Framework preset** | None |
   | **Build command** | `npm run build` |
   | **Build output directory** | `out` |
   | **Node.js version** | 20 (or 22) — set under **Environment variables** → `NODE_VERSION` = `20` if needed |

4. Click **Save and Deploy**. Your site will be live at `https://<project-name>.pages.dev`.

5. Optional: add a custom domain under **Custom domains**.

No environment variables are required for the current setup.

### Option B — Deploy from your computer (Wrangler CLI)

1. Install Wrangler globally (once):

   ```bash
   npm install -g wrangler
   ```

2. Log in:

   ```bash
   wrangler login
   ```

3. Build and deploy:

   ```bash
   npm run build
   wrangler pages deploy out --project-name=artem-strakhov-portfolio
   ```

   On first deploy, Wrangler may ask you to create the Pages project — confirm when prompted.

The included `wrangler.toml` points at the `out` directory for Pages.

### Preview the production build locally

```bash
npm run build
npm run preview
```

Then open the URL shown in the terminal (usually port 3000).

## Design notes

- **Fonts**: Khand (headlines) and Switzer (body) via [Fontshare](https://www.fontshare.com/).
- **Colors**: White, black, and a single accent red — used sparingly on CTAs and hovers.
- **Pages**: Home, About, Projects only — no CMS, database, or auth.

## License

Private portfolio project — all rights reserved.
