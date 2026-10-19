---
title: "Projects"
permalink: /portfolio/
layout: archive
author_profile: true
---

Selected projects, public tools and research materials.

{% include base_path %}
{% for post in site.portfolio %}
  {% unless post.category == 'unfinished' %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% assign unfinished_projects = site.portfolio | where: "category", "unfinished" %}
{% if unfinished_projects.size > 0 %}
  <h2>Work in Progress</h2>
  {% for post in unfinished_projects %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
