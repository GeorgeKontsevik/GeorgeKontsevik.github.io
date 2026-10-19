# Top-level pages

These files choose URLs, layouts, section order, and which content is rendered. Keep their front matter permalinks stable.

- `portfolio.md`: renders regular projects, then `category: unfinished` projects under **Work in Progress**.
- `publications.md`: sorts publications newest-first and groups them by `_config.yml` category labels.
- `talks.md`: groups `_data/section_cards.yml` talk cards by `year`, newest first.
- `teaching.md`: renders teaching, assistantship, and supervision card lists.

Change records in their collection or YAML source before changing these loops.

