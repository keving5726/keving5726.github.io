---
layout: archive
title: Work Experience
permalink: /work-experience/
---

Here is an overview of my professional journey, starting as a Systems Administrator managing core infrastructure and evolving into a DevOps & Cloud Engineer focused on automation, CI/CD, and AWS cloud architecture.

<section class="linkedin-experience">
  {% for job in site.data.work-experience %}
    <article class="experience-card">
      <div class="company-logo-container">
        {% if job.logo %}
          <img src="{{ job.logo | relative_url }}" alt="{{ job.organization }} logo" class="company-logo" />
        {% else %}
          <div class="company-logo-placeholder">
            <span>{{ job.organization | slice: 0, 1 }}</span>
          </div>
        {% endif %}
      </div>
      <div class="experience-content">
        <h3 class="job-title">{{ job.job-title }}</h3>
        <div class="organization-info">
          <span class="organization-name">{{ job.organization }}</span>
          <span class="bullet-separator">•</span>
          <span class="employment-type">{{ job.employment-type }}</span>
        </div>
        <div class="time-info">
          <span class="job-dates">
            {{ job.start-month }} {{ job.start-year }} – 
            {% if job.current or job.end-year == nil or job.end-year == "" %}
              Present
            {% else %}
              {{ job.end-month }} {{ job.end-year }}
            {% endif %}
          </span>
        </div>
        <div class="location-info">
          <span class="job-location">{{ job.location }}</span>
          {% if job.location %}
            {% if job.location-type %}
              ({{ job.location-type }})
            {% endif %}
          {% endif %}
        </div>
        <ul class="job-highlights">
          {% for item in job.highlights %}
            <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </div>
    </article>
  {% endfor %}
</section>
