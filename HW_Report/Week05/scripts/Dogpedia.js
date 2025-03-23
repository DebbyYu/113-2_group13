// ===============================
// 自動動畫功能：hover 模擬縮放兩次
// ===============================
let autoAnimateInterval; // 記錄計時器
const intervalTime = 10000; // 每隔10秒自動執行

// 啟動自動動畫
function startAutoAnimate() {
  autoAnimateInterval = setInterval(animateCards, intervalTime);
}

// 停止自動動畫
function stopAutoAnimate() {
  clearInterval(autoAnimateInterval);
}

// 執行動畫效果
function animateCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.add("hover-animate");

    setTimeout(() => {
      card.classList.remove("hover-animate");
    }, 1500); // 與 CSS 動畫時長一致
  });
}

// ===============================
// 卡牌 Hover 時 暫停 / 恢復動畫
// ===============================
const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  // 滑鼠移入 ➜ 停止動畫
  card.addEventListener("mouseenter", () => {
    stopAutoAnimate();
  });

  // 滑鼠移出 ➜ 等待10秒後重啟自動動畫
  card.addEventListener("mouseleave", () => {
    stopAutoAnimate(); // 避免多個定時器
    autoAnimateInterval = setInterval(animateCards, intervalTime);
  });
});

// 頁面一進來就啟動計時器
startAutoAnimate();
