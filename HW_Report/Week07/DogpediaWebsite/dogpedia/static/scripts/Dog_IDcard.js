document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const expandedTitle = document.getElementById("expanded-title");
    const closeButton = document.querySelector(".close-btn");

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // ✅ 改用事件委派（監聽整個 card-grid）
    const grid = document.getElementById("card-grid");

    grid.addEventListener("click", function (event) {
        const card = event.target.closest(".card");
        if (!card) return;

        const title = card.querySelector("h2").textContent;
        const descriptions = card.querySelector(".description").querySelectorAll("p");

        // 設置標題
        expandedTitle.textContent = title;

        // 設置內容
        document.getElementById("profile-content").innerHTML = descriptions[0].innerHTML;
        document.getElementById("interest-content").innerHTML = descriptions[1].innerHTML;
        document.getElementById("traits-content").innerHTML = descriptions[2].innerHTML;
        document.getElementById("care-content").innerHTML = descriptions[3].innerHTML;

        // 預設顯示狗勾資料 tab
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => (content.style.display = "none"));

        document.querySelector('[data-tab="profile"]').classList.add("active");
        document.getElementById("profile-content").style.display = "block";

        overlay.classList.add("show");
    });

    // 切換 tab 內容
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            tabContents.forEach(content => (content.style.display = "none"));
            const selectedTab = this.getAttribute("data-tab");
            document.getElementById(selectedTab + "-content").style.display = "block";
        });
    });

    // 關閉視窗
    closeButton.addEventListener("click", function () {
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("show");
        }
    });
});
