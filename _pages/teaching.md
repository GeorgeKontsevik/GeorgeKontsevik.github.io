---
title: "Teaching"
permalink: /teaching/
layout: single
author_profile: true
---

## Courses

{% for item in site.data.section_cards.teaching %}
  {% include section-card.html item=item %}
{% endfor %}

### Teaching Assistantships

{% for item in site.data.section_cards.teaching_assistantships %}
  {% include section-card.html item=item %}
{% endfor %}

## Student Supervision

{% for item in site.data.section_cards.student_supervision %}
  {% include section-card.html item=item %}
{% endfor %}
