'use strict';

const element1 = (
    <div class="Header">
        <div class='logo'>
            <img src='../images/dog.png' alt='Logo' id='Logo' />
            <span>狗來坐坐</span>
        </div>
        <div class='Lead_line'>
            <nav>
                <a href='homepage.html'>首頁</a> 
                <a href='aboutus.html'>關於我們</a>
                <a href='dog_species.html'>狗狗圖鑑</a> 
                <a href='Petaurus.html'>蜜袋鼯專區</a>
            </nav>
            <div class='theme-switch'>
                <label class='theme-label' for='theme-toggle'>深色模式</label>
                <input type='checkbox' id='theme-toggle' />
                <label for='theme-toggle' class='slider'></label>
            </div>
        </div>
    </div>
);

ReactDOM.render(
  element1,
  document.getElementById('root')
);

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