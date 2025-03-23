// 深色模式初始化
function loadTheme() {
    const darkMode = localStorage.getItem("darkMode");
    const isDarkMode = darkMode === "enabled";
    document.getElementById("theme-toggle").checked = isDarkMode;
  
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.getElementById('Logo').src='../images/dark_dog.png';
    } else {
      document.body.classList.remove("dark-mode");
      document.getElementById('Logo').src='../images/dog.png';
    }
  }
  
  document.getElementById("theme-toggle").addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      document.getElementById('Logo').src='../images/dark_dog.png';
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      document.getElementById('Logo').src='../images/dog.png';
      localStorage.setItem("darkMode", "disabled");
    }
  });
  
  loadTheme();