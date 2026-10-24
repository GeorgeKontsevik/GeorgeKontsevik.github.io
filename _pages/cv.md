---
title: "CV"
permalink: /cv/
layout: single
author_profile: true
image_slot: true
image: ""
image_alt: ""
---

[Download the PDF CV](/files/George_Kontsevik_Resume.pdf)

## Education

**ITMO University** · St. Petersburg, Russia

- **Doctoral Studies, Management in Organizational Systems**, 2023–2026. Research: Systems modeling, transport networks, and spatial data science.
- **Master’s Degree, Applied Computer Science**, 2021–2023.

## Experience

### Applied Scientist — Urban Analytics Lab, ITMO University

St. Petersburg, Russia · September 2024–August 2026

- Developed graph-based methods for efficient courier routing, using road-network clustering to reduce the shortest-path search space while managing route-quality trade-offs.
- Analyzed **32 spatial networks and 200 GB of spatiotemporal data** to prioritize transport network development and logistics hub locations, integrating infrastructure and climate factors.
- Improved transport route optimization by **20%** on passenger and operator cost metrics; assessed robustness to changes in road-network structure.
- Developed graph neural network and spatial-statistical methods to impute building floor counts, residential status, and population from incomplete urban data.

### Data Scientist — Independent Contract Work

September 2023–August 2024

- Built a CatBoost model using settlement quality-of-life indicators and automated the selection of network node characteristics to support inbound-flow optimization.
- Improved building-level population estimation to a mean absolute percentage error (MAPE) below **15%** by imputing missing building heights with decision trees and spatial autocorrelation; estimated floor counts within one floor.
- Developed **H3-based home-location inference** from transaction categories and time-of-day patterns; analyzed outliers and mapped location scores.
- Implemented a PyTorch encoder for **32-dimensional spatial embeddings** from OpenStreetMap point-of-interest features, using distance-aware self-supervised learning.

### Product Analyst — TatraDev

Paris, France · September 2022–August 2023

- Built retail revenue forecasting models, compared shared and store-format-specific approaches, and identified revenue drivers to inform expansion scenarios across location, format, assortment, and opening hours.
- Developed **three sales forecasting scenarios across 12 product categories** using historical time series and linear regression; automated the supporting ETL pipeline in Databricks.
- Built an **LLM-assisted research pipeline for 103 consumer interviews**, structuring 19 assessment fields to analyze chatbot-assisted purchase journeys, recommendation adoption, and reported outcomes.
- Analyzed behavioral cohorts and product hypotheses; created interactive Sankey and association visualizations to communicate customer journey patterns.

### GIS Developer — Freelance

September 2021–August 2022

- Developed an open-data workflow for urban block delineation, generating **30% more block polygons** than official sources and accelerating processing by **10x** through spatial-operation optimization.
- Built travel-time accessibility models incorporating planned development to assess demand on schools, clinics, and other public services and support facility planning.
- Used Python, GeoPandas, Shapely, PostGIS, QGIS, and FME for geographic information systems (GIS) analysis and workflow automation.

## Leadership & Activities

- **Technical and project leadership:** Led teams of 2–5 through project scoping, task allocation, technical delivery, and client handover; delivered projects with a combined value of **US$300,000**.
- **Teaching and knowledge transfer:** Designed and taught three cohorts of an English-language master’s course in spatial analysis and modeling, covering raw-data processing through analytical methods.
- **Research:** Authored or co-authored **12 scientific publications**, including work in EPJ Data Science and Applied Network Science. Co-authored a pathfinding study evaluated on **750+ real-world city graphs** and synthetic networks.
- **International representation:** Presented the lab’s research at the AI for Urban Planning Workshop at AAAI 2026, a top-tier international AI conference.

[Publication list](/publications/) · [Google Scholar](https://scholar.google.com/citations?user=S--bTg8AAAAJ&hl=en)

## Skills & Interests

**Data Science:** Python, SQL, pandas, NumPy, SciPy, scikit-learn, CatBoost, Optuna, PyTorch; feature engineering, cross-validation, hyperparameter optimization, time series forecasting, statistical analysis.

**GIS & Optimization:** PostgreSQL/PostGIS, GeoPandas, Shapely, QGIS, FME, PySAL, H3, OSMnx, NetworkX; spatial SQL, spatial statistics, graph neural networks (GNNs), routing optimization.

**Data Engineering & Development:** Databricks, DuckDB, ETL pipelines, FastAPI, REST APIs, Docker, Git, Linux; workflow automation, large language model (LLM) APIs.
