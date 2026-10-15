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

<h2>Unfinished (MVP)</h2>
{% for post in site.portfolio %}
  {% if post.category == 'unfinished' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
