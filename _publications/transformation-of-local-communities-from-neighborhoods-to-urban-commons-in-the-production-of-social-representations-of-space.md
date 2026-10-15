---
title: "Transformation of Local Communities from Neighborhoods to Urban Commons in the Production of Social Representations of Space"
authors: "Aleksandr Antonov, Galina Gornova, Georgii Kontsevik, Leonid Turkov, Vladimir Vorona, Sergey Mityagin"
publication_year: 2024
venue: "Computational Science and Its Applications – ICCSA 2024"
category: "conferences"
publication_url: "https://doi.org/10.1007/978-3-031-64608-9_30"
citation: "Aleksandr Antonov, Galina Gornova, Georgii Kontsevik, Leonid Turkov, Vladimir Vorona, Sergey Mityagin (2024). Transformation of Local Communities from Neighborhoods to Urban Commons in the Production of Social Representations of Space. Computational Science and Its Applications – ICCSA 2024, 436-447."
source_url: "https://api.crossref.org/works/10.1007/978-3-031-64608-9_30"
collection: "publications"
permalink: "/publication/transformation-of-local-communities-from-neighborhoods-to-urban-commons-in-the-production-of-social-representations-of-space/"
image: "/images/publications/urban-commons-soika-scheme.png"
image_alt: "SOIKA workflow from social-media text and OpenStreetMap data to a spatial-semantic graph"
---

Aleksandr Antonov, Galina Gornova, Georgii Kontsevik, Leonid Turkov, Vladimir Vorona, Sergey Mityagin (2024). Transformation of Local Communities from Neighborhoods to Urban Commons in the Production of Social Representations of Space. Computational Science and Its Applications – ICCSA 2024, 436-447.

### Overview

The study explores how digital communication shapes hyperlocal and translocal urban identities. It combines topic modelling, place-name and keyword extraction, and spatial knowledge graphs to identify connections between territories and hotspots of community activity. The semantic content of these connections supports the study of how residents collectively represent urban space.

### Method and implementation

**SOIKA** is the accompanying Python library for enriching digital city models with information extracted from residents’ textual digital footprints. Its workflow collects social-media text, extracts and geocodes mentions of urban places, and links the text to a spatial model built with OpenStreetMap data. Keywords and semantic relationships are then used to construct a spatial-semantic graph. The library also provides text and emotion classification, topic modelling and regional activity analysis.

<a href="/images/publications/urban-commons-soika-scheme.png"><img src="/images/publications/urban-commons-soika-scheme.png" alt="SOIKA processing scheme: text collection, place extraction, geocoding, semantic links and spatial-semantic graph construction"></a>

*Processing scheme from the [SOIKA repository](https://github.com/Sandrro/SOIKA/blob/master/images/scheme.png), with original Russian labels. Click to view full size.*

### Graph example

<a href="/images/publications/urban-commons-soika-graph.png"><img src="/images/publications/urban-commons-soika-graph.png" alt="Example SOIKA spatial-semantic hypergraph connecting urban place names and concepts extracted from text"></a>

*Example spatial-semantic hypergraph from the [repository README](https://github.com/Sandrro/SOIKA). Place names and extracted terms are shown in their original language.*

### Paper and code

**Address extraction model:** [flair-ner-addresses-extractor on Hugging Face](https://huggingface.co/Geor111y/flair-ner-addresses-extractor) extracts addresses from Russian-language texts.

[Read the publication](https://doi.org/10.1007/978-3-031-64608-9_30) · [SOIKA on GitHub](https://github.com/Sandrro/SOIKA) · [Documentation](https://soika.readthedocs.io/ru/latest/)
