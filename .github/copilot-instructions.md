## Purpose

This repository is a minimal, static GitHub Pages site. Keep edits small, HTML-first, and avoid introducing heavy build tooling unless explicitly requested.

## Big picture

- Single-page static site: primary content lives in [index.html](index.html).
- Styling is expected under `css/` (index references `css/style.css`).
- No build scripts, package manifests, or tests are present—assume direct file edits and git pushes for updates.

## Key files to inspect

- Site entry: [index.html](index.html) — update hero, links, and content here.
- Project notes: [README.md](README.md) — very short; expand if adding project-level instructions.

## Conventions & patterns (project-specific)

- Keep markup plain and accessible: use semantic tags (`section`, `h1`, `p`, `a`).
- Use relative paths for assets (e.g., `css/style.css`, `img/…`, `js/…`).
- Add new pages at repo root (e.g., `about.html`) and link from `index.html` — no router or SPA framework.
- Prefer adding small, self-contained CSS files under `css/` rather than a JS-based tooling layer.

## Developer workflow (how to make and publish changes)

- Edit files locally, commit, and push to the default branch used by GitHub Pages (commonly `main` or `master`).
- No build step: GitHub Pages will serve static files directly.
- Example quick edit: change hero headline in [index.html](index.html), commit, push.

## Examples for common tasks

- Update hero text: edit the `h1` and `p` in [index.html](index.html).
- Add CSS: create `css/style.css` and reference it from the head section of [index.html](index.html).
- Add an image: put file under `img/` and use `<img src="img/name.jpg" alt="…">` with relative path.

## What the agent should avoid

- Do not introduce Node/NPM, build pipelines, or bundlers unless the maintainer asks.
- Avoid creating complex tooling, tests, or frameworks that don't match the repo's minimal static nature.

## Helpful heuristics for edits

- Keep changes focused — small diffs are preferred.
- If adding behavior that needs JS, add a simple `js/` file and keep it dependency-free.
- When adding new files, update `index.html` with explicit links so the site remains navigable.

If any section is unclear or you want guidance for adding a specific feature (e.g., a contact form or blog pages), tell me which feature and I'll update these instructions with concrete code examples.
