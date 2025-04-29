// Darkmode for header
function loadTheme() {
    const darkMode = localStorage.getItem("darkMode");
    const isDarkMode = darkMode === "enabled";
    document.getElementById("theme-toggle").checked = isDarkMode;
  
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  
  document.getElementById("theme-toggle").addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
  
  loadTheme();