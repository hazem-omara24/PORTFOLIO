# Hazem Omara — Cybersecurity Portfolio

A static, dependency-free personal portfolio built with plain HTML, CSS and
JavaScript. No build step, no framework, no backend — it runs by opening a
file and deploys by pushing to GitHub Pages.

## Project structure

```
hazem-portfolio/
├── index.html        Page structure, sections, SEO meta tags
├── css/
│   └── styles.css    All styling (dark cybersecurity design system)
├── js/
│   ├── data.js        ← All editable content lives here
│   └── main.js         Renders data.js into the page, nav + scroll behavior
└── README.md
```

## Run it locally

You don't need Node, npm, or any build tool. Two options:

**Option A — just open it**
Double-click `index.html`, or open it in your browser directly.

**Option B — local server (recommended, avoids some browser file-URL quirks)**
```bash
cd hazem-portfolio
python3 -m http.server 8080
# then open http://localhost:8080
```

## How to edit content

Almost everything you'll want to change lives in **`js/data.js`**. You do
not need to touch the HTML or CSS for routine updates.

| To change...                     | Edit...                                   |
|-----------------------------------|--------------------------------------------|
| Name, role, university, LinkedIn  | `SITE` object in `js/data.js`              |
| GitHub link                       | `SITE.github` — set it once your profile exists (see below) |
| Skills                            | `SKILLS` array in `js/data.js`             |
| Projects & labs                   | `PROJECTS` array in `js/data.js`           |
| Certifications                    | `CERTIFICATIONS` array in `js/data.js`     |
| Technical write-ups                | `WRITEUPS` array in `js/data.js`           |
| About Me paragraphs                | `<div class="about-copy">` in `index.html` |
| Hero headline / subtext            | `.hero-copy` in `index.html`               |

### GitHub profile
`SITE.github` is already set to `https://github.com/hazem-omara24`, so the
GitHub link now appears in the contact panel and footer automatically.

To link a **specific project's repo** (separate from your profile link),
set that project's own `github` field in the `PROJECTS` array, e.g.:
```js
github: "https://github.com/hazem-omara24/mini-soc-lab",
```
Leave a project's `github` as `null` until that repo actually exists —
the card will show "GitHub — Coming Soon" instead of a broken or
misleading link.

### Updating a project's status
Each project in `PROJECTS` has a `status` field: `"planned"`,
`"in-progress"`, or `"completed"`. Change it as your work progresses —
the badge color and label update automatically.

### Confirming certifications
Each certification has `status: "unconfirmed"` until you set it to
`"completed"`, `"in-progress"`, or `"planned"`, plus an optional `date`.

## Deploying with GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio` or
   `your-username.github.io`).
2. Push this project to it:
   ```bash
   cd hazem-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will publish the site at:
   - `https://your-username.github.io/portfolio/` (repo named anything else), or
   - `https://your-username.github.io/` (if the repo is named
     `your-username.github.io`)
6. Every time you `git push` after that, the live site updates within a
   minute or two.

## After adding new content later

- New project → add an object to the `PROJECTS` array in `js/data.js`,
  commit, push. No other file needs to change.
- New write-up → add an object to `WRITEUPS`, and once you have a real
  article, set its `link` field to the article URL.
- New certification → add an object to `CERTIFICATIONS`.

## Placeholder content to replace when ready

- **Project GitHub links** — each project's own `github` field is `null`
  until that specific repo is published; add the repo URL there when ready.
- **Project statuses** — reflect them honestly as work progresses
  (`planned` → `in-progress` → `completed`).
- **Write-ups** — all three are placeholders marked "Coming Soon" until you
  publish real articles.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables scroll-reveal and pulse animation).
- Visible keyboard focus states throughout.
- Semantic HTML landmarks (`header`, `main`, `section`, `footer`).
- No external JS frameworks; total page weight is small and loads fast.
- Fonts loaded from Google Fonts (Sora, IBM Plex Sans, IBM Plex Mono) — the
  only external dependency.
