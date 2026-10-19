# Shared Jekyll components

These Liquid includes affect many pages. Trace callers before changing markup and keep parameters backward-compatible.

- `section-card.html`: cards sourced from `_data/section_cards.yml`.
- `archive-single.html`: archive cards for projects and publications.
- `entry-image.html`: image or placeholder rendering. The `client: NDA` fallback intentionally displays `NDA`.

Do not put content that belongs to one project or publication in a shared include.

