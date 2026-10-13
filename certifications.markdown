---
layout: single
title: Certifications
permalink: /certifications/
toc: true
toc_label: My certifications
toc_icon: award
toc_sticky: true
---

Here you will find an overview of my professional credentials, featuring official industry-recognized certifications across multiple technical domains and specialized training, alongside my ongoing learning path to stay sharp in modern technologies.

## Professional Certificates

Verified credentials obtained through rigorous proctored examinations.

### Microsoft

<section class="cards-container">
  {% for cert in site.data.certifications.microsoft %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### Amazon Web Services (AWS)

<section class="cards-container">
  {% for cert in site.data.certifications.aws %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### Docker, Inc

<section class="cards-container">
  {% for cert in site.data.certifications.docker %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

## Certificates of Completion

Certificates of completion for specialized courses and continuous learning platforms.

### Udemy

<section class="cards-container">
  {% for cert in site.data.certifications.udemy %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### Tutorials Dojo

<section class="cards-container">
  {% for cert in site.data.certifications.tutorialsdojo %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### LinkedIn Learning

#### Cloud Computing

<section class="cards-container">
  {% assign cloud_courses = site.data.certifications.linkedin | where: "subcategory", "Cloud Computing" %}
  {% for cert in cloud_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>
