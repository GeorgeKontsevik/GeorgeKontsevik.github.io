---
title: "Talks and conference participation"
permalink: /talks/
layout: single
author_profile: true
---

{% assign talks_by_year = site.data.section_cards.talks | group_by: "year" | sort: "name" | reverse %}
{% for year in talks_by_year %}
<h2>{{ year.name }}</h2>
{% for item in year.items %}
  {% include section-card.html item=item %}
{% endfor %}
{% endfor %}

## News

{% for item in site.data.section_cards.news %}
  {% include section-card.html item=item %}
{% endfor %}
