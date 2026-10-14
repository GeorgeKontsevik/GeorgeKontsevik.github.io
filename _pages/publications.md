---
title: "Publications"
permalink: /publications/
layout: archive
author_profile: true
---

[Google Scholar profile](https://scholar.google.com/citations?user=S--bTg8AAAAJ&hl=en)

{% include base_path %}
{% assign publications = site.publications | sort: "publication_year" | reverse %}
{% for category in site.publication_category %}
  <h2>{{ category[1].title }}</h2>
  {% for post in publications %}
    {% if post.category == category[0] %}
      {% include archive-single.html %}
    {% endif %}
  {% endfor %}
{% endfor %}
