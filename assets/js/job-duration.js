document.addEventListener('DOMContentLoaded', () => {
  calculateExperienceDurations();
});

function calculateExperienceDurations() {
  const dateElements = document.querySelectorAll('.job-dates');

  dateElements.forEach(element => {
    const startMonth = element.getAttribute('data-start-month');
    const startYear = element.getAttribute('data-start-year');
    const endMonth = element.getAttribute('data-end-month');
    const endYear = element.getAttribute('data-end-year');

    if (!startMonth || !startYear) return;

    const startDate = new Date(`${startMonth} 1, ${startYear}`);
    let endDate;

    if (endMonth === 'present' || endYear === 'present') {
      endDate = new Date();
    } else {
      endDate = new Date(`${endMonth} 1, ${endYear}`);
    }

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return;

    const yearDifference = endDate.getFullYear() - startDate.getFullYear();
    const monthDifference = endDate.getMonth() - startDate.getMonth();
    let totalMonths = (yearDifference * 12) + monthDifference + 1;

    if (totalMonths <= 0) return;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let durationText = '';

    if (years > 0) {
      const yearWord = years === 1 ? 'año' : 'años';
      durationText += `${years} ${yearWord}`;
    }

    if (months > 0) {
      if (years > 0) durationText += ' ';
      const monthWord = months === 1 ? 'mes' : 'meses';
      durationText += `${months} ${monthWord}`;
    }

    const durationContainer = element.nextElementSibling;
    if (durationContainer && durationContainer.classList.contains('job-duration')) {
      durationContainer.textContent = ` • ${durationText}`;
    }
  });
}
