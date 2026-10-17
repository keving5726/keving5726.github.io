---
layout: archive
title: Education
permalink: /education/
---

An overview of my academic background, featuring the universities that shaped my technical foundation in systems and engineering.

<section class="cards-container">
  {% for edu in site.data.education %}
    {% include education-card.html edu=edu %}
  {% endfor %}
</section>
