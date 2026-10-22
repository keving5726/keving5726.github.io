---
layout: single
title: Skills
permalink: /skills/
toc: true
toc_label: My skills
toc_icon: award
toc_sticky: true
---

Here you will find an overview of my professional credentials, featuring official industry-recognized certifications across multiple technical domains and specialized training, alongside my ongoing learning path to stay sharp in modern technologies.

## Technical Skills

{% for tech_skill in site.data.skills.technical %}
### {{ tech_skill.category }}
  {% include skill-table.html skill=tech_skill %}
{% endfor %}

## Soft Skills

{% include skill-table.html skill=site.data.skills.soft %}

## Languages

{% include skill-table.html skill=site.data.skills.languages %}
