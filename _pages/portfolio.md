---
title: "Projects"
permalink: /portfolio/
layout: archive
author_profile: true
---

The first ten entries describe my work at the ITMO Institute of Design and Urban Studies, as recorded in my CV. The remaining entries link to public tools and research materials.

{% include base_path %}
{% for post in site.portfolio %}
  {% unless post.category == 'unfinished' %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

<h2>Unfinished</h2>
{% for post in site.portfolio %}
  {% if post.category == 'unfinished' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
