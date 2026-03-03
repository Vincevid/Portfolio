# Portfolio Website

A personal portfolio website built with Astro 5, showcasing projects, experience, and design work. Features a dark-themed design with custom typography and a content-collection-driven architecture.

## Stack

- **[Astro 5](https://astro.build/)** — Static site generation with file-based routing
- **[MDX](https://mdxjs.com/)** — Markdown + component authoring for project and experience content
- **TypeScript** — Type-safe content schemas and component props
- **CSS** — Custom design tokens, CSS Grid, Flexbox, scroll snap

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── OrbitalHero.astro
│   ├── Navigation.astro
│   ├── ExperienceTimeline.astro
│   ├── ExperienceEntry.astro
│   ├── Summary.astro
│   └── TableOfContents.astro
├── content/             # Content collections (Zod-validated)
│   ├── config.ts
│   ├── experience/
│   │   └── experience.mdx
│   └── projects/
│       ├── figma.mdx
│       └── stitch-out.mdx
├── layouts/
│   ├── Layout.astro           # Base layout
│   └── PortfolioLayout.astro  # Sidebar + content layout
├── pages/
│   ├── index.astro            # Home
│   ├── contact.astro
│   ├── resume.astro
│   ├── 404.astro
│   └── projects/
│       ├── index.astro        # Projects listing
│       └── [slug].astro       # Dynamic project detail pages
└── styles/
    └── global.css             # Design tokens and base styles
```

## Features

- **Content collections** — Projects and experience entries are authored in MDX with strongly typed frontmatter (title, description, tags, role, company, technologies, downloads, etc.)
- **Dynamic project pages** — `/projects/[slug]` routes are generated from content at build time
- **Responsive layout** — Mobile-first with desktop scroll snap and sticky sidebar navigation
- **Resume page** — Renders an embedded PDF with a download link
- **Design tokens** — Brand colors (`#41C442` green on `#222222` dark), spacing scale, and typography (Clash Display + Satoshi) defined as CSS custom properties

## Commands

All commands are run from the root of the project:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Start local dev server at `localhost:4321`   |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview production build locally             |
