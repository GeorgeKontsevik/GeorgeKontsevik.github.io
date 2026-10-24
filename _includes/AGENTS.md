# Shared Jekyll components

These Liquid includes affect many pages. Trace callers before changing markup and keep parameters backward-compatible.

- `section-card.html`: cards sourced from `_data/section_cards.yml`.
- `archive-single.html`: archive cards for projects and publications.
- `entry-image.html`: image or video rendering. With no media, render no block or placeholder; cards must not reserve an empty media column.

Do not put content that belongs to one project or publication in a shared include.

