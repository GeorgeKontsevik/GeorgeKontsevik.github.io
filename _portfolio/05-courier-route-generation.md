---
title: "Courier route generation"
collection: "portfolio"
permalink: "/project/courier-route-generation/"
excerpt: "Accelerated the generation of courier routes by up to 80 times while maintaining controlled accuracy by clustering the road graph and reducing the search area for the shortest path. NetworkX, python-Louvain, contraction hierarchies, TSP; published in EPJ Data Science."
image: "/images/publications/ride-clustering.png"
image_alt: "RIDE graph clustering and centroid graph construction"
---

Accelerated the generation of courier routes by up to 80 times while maintaining controlled accuracy by clustering the road graph and reducing the search area for the shortest path. NetworkX, python-Louvain, contraction hierarchies, TSP; published in EPJ Data Science.

Work completed at the ITMO Institute of Design and Urban Studies, September 2021–August 2026.

### RIDE

The associated **RIDE** library implements hierarchical graph search: partition the network into communities, build a centroid graph, then use it to restrict route searches to relevant parts of the original network.

<a href="/images/publications/ride-pathfinding.png"><img src="/images/publications/ride-pathfinding.png" alt="RIDE route search using a centroid graph and an extracted subgraph"></a>

*Route-search scheme from the RIDE repository.*

[GitHub repository](https://github.com/sb-ai-lab/Ride) · [Research paper](https://doi.org/10.1140/epjds/s13688-025-00542-0) · [Method and evaluation](/publication/assessing-the-complexity-of-a-path-search-optimization-method-based-on-clustering-for-a-transport-graph/)
