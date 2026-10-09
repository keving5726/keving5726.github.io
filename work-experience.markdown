---
layout: archive
title: Work Experience
permalink: /work-experience/
---

Here is an overview of my professional journey, starting as a Systems Administrator managing core infrastructure and evolving into a DevOps & Cloud Engineer focused on automation, CI/CD, and AWS cloud architecture.

<section class="linkedin-experience">
  {% for job in site.data.work-experience %}
    {% include experience-card.html job=job %}
  {% endfor %}
</section>
