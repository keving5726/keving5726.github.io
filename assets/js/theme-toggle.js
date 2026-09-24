document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const lightTheme = document.getElementById("theme-css");
  const darkTheme = document.getElementById("theme-dark-css");
  
  const moonIcon = toggleButton.querySelector(".fa-moon");
  const sunIcon = toggleButton.querySelector(".fa-sun");

  function updateIcons(theme) {
    if (theme === "dark") {
      moonIcon.style.display = "none";
      sunIcon.style.display = "inline-block";
    } else {
      moonIcon.style.display = "inline-block";
      sunIcon.style.display = "none";
    }
  }

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    updateIcons("dark");
  } else {
    updateIcons("light");
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", function (e) {
      e.preventDefault();

      if (lightTheme.disabled) {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
        localStorage.setItem("theme", "light");
        updateIcons("light");
      } else {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
        localStorage.setItem("theme", "dark");
        updateIcons("dark");
      }
    });
  }
});
