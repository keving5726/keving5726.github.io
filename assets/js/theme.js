document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const lightTheme = document.getElementById("theme-css");
  const darkTheme = document.getElementById("theme-dark-css");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (lightTheme.disabled) {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
        localStorage.setItem("theme", "light");
      } else {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
        localStorage.setItem("theme", "dark");
      }
    });
  }
});
