---
title: "Service network node characteristics"
collection: "portfolio"
permalink: "/project/service-network-node-characteristics/"
excerpt: "Planter is a spatial planning tool for exploring industrial facility locations and regional labour flows. It identifies nearby cities within a travel-time radius, incorporates workforce requirements, and explores how changes in urban quality of life and salaries affect predicted migration and regional flows."
image: "/images/projects/planter-regional-flows.png"
image_alt: "Planter map showing the regional flow network between cities"
---

**Planter** is a spatial planning tool for exploring industrial facility locations and regional labour flows. Starting from a proposed factory location, a travel-time radius, an industry, and staffing requirements by occupation, it identifies nearby cities and examines their characteristics.

For a selected city, the tool uses a CatBoost model and Optuna to explore changes in urban quality-of-life indicators and salaries that maximize predicted incoming migration. The workflow visualizes changes in city characteristics and flows between nearby settlements, alongside the flow network across the region.

**Tools:** CatBoost, Optuna, H3, Docker, FastAPI, PostgreSQL (PostGIS).

[View Planter on GitHub](https://github.com/GeorgeKontsevik/planter)

Work completed at the ITMO Institute of Design and Urban Studies, September 2021–August 2026.
