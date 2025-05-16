document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll('.card');
  var overlay = document.getElementById('overlay');
  var expandedTitle = document.getElementById('expanded-title');
  var closeButton = document.querySelector('.close-btn');

  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabContents = document.querySelectorAll('.tab-content');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var title = card.querySelector('.card h2').textContent;
      var descriptions = card.querySelector('.description').querySelectorAll('p');

      expandedTitle.textContent = title;

      document.getElementById('profile-content').innerHTML = descriptions[0].innerHTML;
      document.getElementById('interest-content').innerHTML = descriptions[1].innerHTML;
      document.getElementById('traits-content').innerHTML = descriptions[2].innerHTML;
      document.getElementById('care-content').innerHTML = descriptions[3].innerHTML;

      // ✅ 顯示預設 tab：狗勾資料
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.style.display = 'none');

      document.querySelector('[data-tab="profile"]').classList.add('active');
      document.getElementById('profile-content').style.display = 'block';

      // 顯示彈出視窗
      overlay.classList.add('show');
    });
  });

  // 🔹 處理按鈕切換內容
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      tabContents.forEach(content => content.style.display = 'none');
      var selectedTab = this.getAttribute('data-tab');
      document.getElementById(selectedTab + "-content").style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.classList.remove('show');
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.classList.remove('show');
    }
  });
});
let autoAnimateInterval;
const intervalTime = 10000;

function startAutoAnimate() {
  autoAnimateInterval = setInterval(animateCards, intervalTime);
}

function stopAutoAnimate() {
  clearInterval(autoAnimateInterval);
}

function animateCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.add("hover-animate");
    setTimeout(() => {
      card.classList.remove("hover-animate");
    }, 1600);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", stopAutoAnimate);
    card.addEventListener("mouseleave", () => {
      stopAutoAnimate();
      startAutoAnimate();
    });
  });

  startAutoAnimate(); // ✅ 初始啟動
});
