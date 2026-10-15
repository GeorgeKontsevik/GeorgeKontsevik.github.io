---
title: "Assessing the complexity of a path search optimization method based on clustering for a transport graph"
authors: "Dmitrii Fedorov, Georgii Kontsevik, Roman Bashirov, Sergey Mityagin, Liubov Tupikina, Nikita Zakharenko, Semen Budennyy"
publication_year: 2025
venue: "EPJ Data Science"
category: "manuscripts"
publication_url: "https://doi.org/10.1140/epjds/s13688-025-00542-0"
citation: "Dmitrii Fedorov, Georgii Kontsevik, Roman Bashirov, Sergey Mityagin, Liubov Tupikina, Nikita Zakharenko, Semen Budennyy (2025). Assessing the complexity of a path search optimization method based on clustering for a transport graph. EPJ Data Science, 14, 32."
source_url: "https://api.crossref.org/works/10.1140/epjds/s13688-025-00542-0"
collection: "publications"
permalink: "/publication/assessing-the-complexity-of-a-path-search-optimization-method-based-on-clustering-for-a-transport-graph/"
image: "/images/publications/ride-clustering.png"
image_alt: "RIDE preprocessing: initial graph, detected communities and centroid graph"
---

Dmitrii Fedorov, Georgii Kontsevik, Roman Bashirov, Sergey Mityagin, Liubov Tupikina, Nikita Zakharenko, Semen Budennyy (2025). Assessing the complexity of a path search optimization method based on clustering for a transport graph. EPJ Data Science, 14, 32.

### Overview

**RIDE** is a Python library for hierarchical pathfinding on transport and other graph structures. The research examines how graph clustering can accelerate repeated route queries, and how graph size and density affect the balance between computation time and route accuracy.

### Method

The graph is partitioned into communities using Louvain clustering. A smaller centroid graph represents connections between these communities and can be reused across queries.

<a href="/images/publications/ride-clustering.png"><img src="/images/publications/ride-clustering.png" alt="Preprocessing: partition the original graph into communities and construct a centroid graph"></a>

*Graph preprocessing, from the [RIDE repository](https://github.com/sb-ai-lab/Ride/blob/main/images/clustering.png). Click to view full size.*

For a route query, a path through the centroid graph selects relevant communities. The search then runs on the corresponding subgraph of the original network, reducing the search area. This approximate approach trades some route accuracy for speed. The library also provides an exact A* configuration with higher memory requirements.

<a href="/images/publications/ride-pathfinding.png"><img src="/images/publications/ride-pathfinding.png" alt="Query processing: find a centroid route, extract the corresponding subgraph and search for a route within it"></a>

*Hierarchical route search, from the [RIDE repository](https://github.com/sb-ai-lab/Ride/blob/main/images/subgraph_path.png).*

### Evaluation

The paper evaluates the method on **more than 750 real-world city graphs** and synthetic networks. It analyses query acceleration, preprocessing complexity and deviations from optimal routes, alongside theoretical estimates of performance.

### Paper and code

[Read the open-access publication](https://doi.org/10.1140/epjds/s13688-025-00542-0) · [RIDE on GitHub](https://github.com/sb-ai-lab/Ride) · [Documentation](https://graph-topology-in-routing-problems.readthedocs.io/en/latest/)
