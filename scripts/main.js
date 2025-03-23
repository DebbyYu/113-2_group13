document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('.card');
    var overlay = document.getElementById('overlay');
    var expandedTitle = document.getElementById('expanded-title');
    var closeButton = document.querySelector('.close-btn');
    
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabContents = document.querySelectorAll('.tab-content');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            var title = card.querySelector('.card h2').textContent;
            var descriptions = card.querySelector('.description').querySelectorAll('p');

            // 設置標題
            expandedTitle.textContent = title;

            // 將不同的內容放入各區塊
            document.getElementById('profile-content').innerHTML = descriptions[0].innerHTML;
            document.getElementById('interest-content').innerHTML = descriptions[1].innerHTML;
            document.getElementById('traits-content').innerHTML = descriptions[2].innerHTML;
            document.getElementById('care-content').innerHTML = descriptions[3].innerHTML;

            // 顯示彈出視窗
            overlay.classList.add('show');
        });
    });

    // 🔹 處理按鈕切換內容
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按鈕的 active 狀態
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 添加 active 到點擊的按鈕
            this.classList.add('active');

            // 隱藏所有內容
            tabContents.forEach(content => content.style.display = 'none');
            // 顯示對應的內容
            var selectedTab = this.getAttribute('data-tab');
            document.getElementById(selectedTab + "-content").style.display = "block";
        });
    });

    // 關閉彈出視窗
    closeButton.addEventListener("click", function() {
        overlay.classList.remove('show');
    });

    // 點擊遮罩時關閉
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.classList.remove('show');
        }
    });
});
