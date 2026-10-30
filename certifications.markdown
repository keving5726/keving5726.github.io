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

### Amazon Web Services (AWS)

<section class="cards-container">
  {% for cert in site.data.certifications.aws %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### Microsoft

<section class="cards-container">
  {% for cert in site.data.certifications.microsoft %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### Docker, Inc

<section class="cards-container">
  {% for cert in site.data.certifications.docker %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### PagerDuty

<section class="cards-container">
  {% for cert in site.data.certifications.pagerduty %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### Datacamp

<section class="cards-container">
  {% for cert in site.data.certifications.datacamp_professional %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

### GitHub

<section class="cards-container">
  {% for cert in site.data.certifications.github %}
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

### Datacamp

<section class="cards-container">
  {% for cert in site.data.certifications.datacamp_completion %}
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

#### Kubernetes

<section class="cards-container">
  {% assign kubernetes_courses = site.data.certifications.linkedin | where: "subcategory", "Kubernetes" %}
  {% for cert in kubernetes_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### DevOps

<section class="cards-container">
  {% assign devops_courses = site.data.certifications.linkedin | where: "subcategory", "DevOps" %}
  {% for cert in devops_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### Terraform

<section class="cards-container">
  {% assign terraform_courses = site.data.certifications.linkedin | where: "subcategory", "Terraform" %}
  {% for cert in terraform_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### Ansible

<section class="cards-container">
  {% assign ansible_courses = site.data.certifications.linkedin | where: "subcategory", "Ansible" %}
  {% for cert in ansible_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### Docker

<section class="cards-container">
  {% assign docker_courses = site.data.certifications.linkedin | where: "subcategory", "Docker" %}
  {% for cert in docker_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### GitHub

<section class="cards-container">
  {% assign github_courses = site.data.certifications.linkedin | where: "subcategory", "GitHub" %}
  {% for cert in github_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### Cisco

<section class="cards-container">
  {% assign cisco_courses = site.data.certifications.linkedin | where: "subcategory", "Cisco" %}
  {% for cert in cisco_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>

#### Linux

<section class="cards-container">
  {% assign linux_courses = site.data.certifications.linkedin | where: "subcategory", "Linux" %}
  {% for cert in linux_courses %}
    {% include certification-card.html cert=cert %}
  {% endfor %}
</section>
