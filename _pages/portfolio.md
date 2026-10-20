---
title: "Projects"
permalink: /portfolio/
layout: archive
author_profile: true
---

Selected projects, public tools and research materials.

{% include base_path %}
{% for post in site.portfolio %}
  {% unless post.category == 'unfinished' or post.category == 'pet' or post.client == 'NDA' %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% assign unfinished_projects = site.portfolio | where: "category", "unfinished" %}
{% if unfinished_projects.size > 0 %}
  <h2>Work in Progress</h2>
  {% for post in unfinished_projects %}
    {% unless post.client == 'NDA' %}
      {% include archive-single.html %}
    {% endunless %}
  {% endfor %}
{% endif %}

{% assign pet_projects = site.portfolio | where: "category", "pet" %}
{% if pet_projects.size > 0 %}
  <h2>Pet Projects</h2>
  {% for post in pet_projects %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% assign nda_projects = site.portfolio | where: "client", "NDA" %}
{% if nda_projects.size > 0 %}
  <h2>NDA Projects</h2>
  {% for post in nda_projects %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
