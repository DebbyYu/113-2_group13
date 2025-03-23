// 讀取 localStorage 來確保深色模式可沿用
function loadTheme() {
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (darkModeEnabled) {
        document.body.classList.add("dark-mode");
        document.getElementById('theme-toggle').checked = true;
    }
}

// 切換深色模式
document.getElementById('theme-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // 記錄深色模式
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // 記錄淺色模式
    }
});

// 頁面載入時應用已儲存的主題設定
loadTheme();