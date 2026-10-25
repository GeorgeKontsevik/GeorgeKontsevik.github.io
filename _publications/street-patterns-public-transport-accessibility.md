---
title: "Street Patterns, Public Transport Routes, and Service Accessibility"
collection: publications
category: unfinished
publication_year: 2026
permalink: /publication/street-patterns-public-transport-accessibility/
excerpt: "Research with Yana Zorina combining street-pattern and travel-mode analysis with morphology-aware bus route generation in Bergen and Freiburg, examining connectivity, route overlap, and demand coverage."
image: "/images/publications/street-pattern-route-comparison.png"
image_alt: "Bergen comparison of current bus routes, a connectivity baseline, and trained routes over street-pattern areas; edge colours show route overlap"
---

Research in progress with **Yana Zorina**, under joint supervision by **George Kontsevik** and **Liubov Tupikina**.

How much can public transport planning improve accessibility within an inherited street network? This work investigates how street patterns relate to travel behaviour and how explicitly accounting for urban morphology changes the routes produced by a transport-network model.

## Street patterns and travel behaviour

The exploratory analysis combines street-network classification with census-tract travel-mode data and public transport graphs. It compares patterns such as regular, irregular, and broken grids, warped parallel streets, and loops and cul-de-sacs (“Loops & Lollipops”). The analysis examines differences in public transport and car use alongside stop counts, route counts, graph density, connectivity, and network length.

These comparisons describe associations between urban form and transport indicators; they do not establish a causal effect of street layout on mode choice.

## Route-generation experiments

Using the ConnectPT workflow, we compare existing bus routes with generated alternatives in **Bergen, Norway**, and **Freiburg im Breisgau, Germany**. Saved comparisons include sets of **17 routes in Bergen** and **33 routes in Freiburg**, using the same origin–destination (OD) demand matrix within each case.

The experiments vary the balance between connectivity, passenger and route travel time, street-pattern composition, and route overlap. Particular attention is given to Loops & Lollipops areas: whether routes enter them, how much route length they account for, and whether several routes repeatedly use the same edges. Further experiments evaluate and fine-tune the generator on real urban networks.

The evaluation tracks direct OD demand coverage, unserved demand, connectivity, route length, pattern coverage, route uniqueness, and shared-edge use. This makes it possible to inspect trade-offs that a single aggregate objective can conceal.

## Preliminary observations and limits

In one Freiburg comparison with 33 existing and 33 generated routes, the share of OD demand connected by a single route was **49.3% for the existing network and 52.0% for the generated network**. This is an exploratory comparison with equal route counts, not an equal-operating-cost comparison or a general improvement claim.

The Bergen runs show why morphology-aware generation needs several evaluation criteria: changing the objectives changes route placement and overlap, while trained routes can still concentrate on shared corridors. The saved experiments do not establish that adding a street-pattern penalty consistently improves accessibility.

**Direct OD coverage is a limited proxy:** it measures demand whose origin and destination lie on the same route. It does not by itself measure door-to-door access to services, including walking, waiting, timetables, and transfers. The broader research question is how street-network structure constrains the accessibility gains achievable through route planning.

## Research context

A related abstract, **“Computational Framework for Sustainable Transport Planning on Street Networks”**, was accepted for a poster presentation at NetSci 2026.
