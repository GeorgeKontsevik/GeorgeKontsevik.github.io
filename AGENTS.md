# Agent Guide — George Kontsevik’s website

## Read this first

This is the source for the live personal website: <https://georgekontsevik.github.io/>. It is a Jekyll Academic Pages site deployed by GitHub Pages when `main` changes. Make the smallest complete change; preserve existing personal content and the site’s dark visual style.

## Fast navigation

| Need | Start here |
| --- | --- |
| Site identity, collections, URLs, category labels | `_config.yml`, `_data/authors.yml`, `_data/navigation.yml` |
| Shared cards for teaching and talks | `_data/section_cards.yml` |
| Top-level page order and grouping | `_pages/` |
| A project, publication, or work in progress | `_portfolio/`, `_publications/` |
| Card and item presentation | `_includes/section-card.html`, `_includes/archive-single.html`, `_includes/entry-image.html` |
| Page layouts | `_layouts/` |
| Styling | `assets/css/main.scss`, then `_sass/layout/` |
| Images and downloadable CVs | `images/`, `files/` |
| Deployment | `.github/workflows/jekyll.yml` |

Each working directory has a short local `AGENTS.md`; read it before changing files there. Do not add instructions to generated assets, vendored Sass, fonts, or third-party JavaScript.

## Rules for content changes

- Keep public-facing copy in English unless the user explicitly requests another language.
- Preserve front matter keys, permalinks, and collection names. Use `category: unfinished` for a work-in-progress item; it is displayed separately on Projects and Publications pages.
- Use site-relative paths for local assets, for example `/images/projects/example.png`.
- Add `image_alt` to new content that has an image. The shared fallback shows `NDA` when `client: NDA`; otherwise it says `Image pending`.
- Talks and teaching cards live in `_data/section_cards.yml`. Talks require a four-digit `year`; `_pages/talks.md` groups and sorts them by it.
- Do not add LinkedIn feed-post links. The author profile link is allowed.

## Safe workflow

1. Identify the rendering page and data source using the table above.
2. Change the source content or smallest shared component; do not edit generated `_site/` output.
3. Run `bundle exec jekyll build` when the local bundle is available. A successful GitHub Actions deployment is the release check.
4. Inspect `git diff`, commit a focused change, push `main`, and confirm the Pages workflow succeeds.
