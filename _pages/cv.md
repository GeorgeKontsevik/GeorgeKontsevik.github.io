---
title: "CV"
permalink: /cv/
layout: single
author_profile: true
---

[Download the PDF CV](/files/George_Kontsevik_Resume.pdf)

## Experience

**Data Analyst / Data Scientist — ITMO Institute of Design and Urban Studies**

St. Petersburg, Russia · September 2021–August 2026

R&D laboratory for developing IT solutions for the urban environment; executive partner of Sber, OTS Lab, MLA+, and Urbanica.

- Developed a model for forecasting revenue and selecting a retail chain scaling strategy: compared unified and separate models for different store formats, identified key drivers, and formulated an approach to ranking “location × format × product assortment × operating hours” scenarios.

- Developed three sales forecasting scenarios across 12 product categories based on time series and linear regression applied to historical data with controlled error, which enabled the automation of the ETL data processing pipeline. Databricks, Scikit-learn.

- Improved the efficiency of transportation route optimization by 20% based on key passenger and operator cost metrics, ensuring the method’s resilience to changes in the road network structure through spatiotemporal analysis of the UDS graph.

- Identified priorities for transportation network development and logistics hub placement to improve service accessibility and logistics efficiency based on the analysis of 32 spatial graphs, taking into account transportation infrastructure and climatic factors. SciPy, PySAL, GeoPandas, Scikit-learn, PostgreSQL (PostGIS); 200 GB of spatiotemporal data.

- Accelerated the generation of courier routes by up to 80 times while maintaining controlled accuracy by clustering the road graph and reducing the search area for the shortest path. NetworkX, python-Louvain, contraction hierarchies, TSP; published in EPJ Data Science.

- Increased the granularity of territorial analysis by developing a method for dividing areas into blocks using open data; increased the number of block polygons by 30% compared to official sources and accelerated processing speed by a factor of 10 by optimizing spatial operations.

- Automated the selection of network node characteristics to maximize incoming traffic by training a CatBoost model on quality-of-life parameters for settlements. CatBoost, Optuna, h3, Docker, FastAPI, PostgreSQL (PostGIS).

- Improved the method for estimating the population of each building in the city by reconstructing missing data on building heights with an accuracy of one floor and an error of less than 15% using a decision tree and spatial autocorrelation. Scikit-learn, PySAL, OSMnx, Jenkspy.

- Assessed changes in the load on social infrastructure by developing a method to calculate the N-minute accessibility of areas, taking into account future development; applied this approach to the planning of clinics, schools, and other social facilities.

- Reconstructed missing building parameters in cities (number of stories, residential vs. non-residential, number of residents), with an error margin of less than 15%, using SOTA models, graph neural networks (GNNs), and spatial statistics (Moran’s I).

## Education

- **Doctoral Program: Management in Organizational Systems**, ITMO University, 2023–2026.
- **Master's Program: Applied Informatics**, ITMO University, 2021–2023.

## Teaching and research

- Developed and taught three cohorts of a master's-level course on spatial analysis in English for urban planning students; taught raw data processing, spatial analysis, and modeling from the ground up.
- Participant in international scientific conferences, including AAAI’26 AI for Urban Planning Workshop.

[Publication list](/publications/) · [Google Scholar](https://scholar.google.com/citations?user=S--bTg8AAAAJ&hl=en)

## Skills

Python, SQL, Git, GeoPandas, Shapely, OSMnx, NetworkX, PySAL, PostGIS, Linux.
