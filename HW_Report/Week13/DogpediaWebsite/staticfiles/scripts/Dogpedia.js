// 將事件掛載寫成函數
function setupCardEvents() {
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

          // 顯示預設 tab
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.style.display = 'none');
          document.querySelector('[data-tab="profile"]').classList.add('active');
          document.getElementById('profile-content').style.display = 'block';

          overlay.classList.add('show');
      });
  });

  // tab 切換
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

  // 卡片自動動畫
  let autoAnimateInterval;
  const intervalTime = 10000;

  function animateCards() {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
          card.classList.add("hover-animate");
          setTimeout(() => {
              card.classList.remove("hover-animate");
          }, 1600);
      });
  }
  function startAutoAnimate() {
      autoAnimateInterval = setInterval(animateCards, intervalTime);
  }
  function stopAutoAnimate() {
      clearInterval(autoAnimateInterval);
  }
  cards.forEach((card) => {
      card.addEventListener("mouseenter", stopAutoAnimate);
      card.addEventListener("mouseleave", () => {
          stopAutoAnimate();
          startAutoAnimate();
      });
  });
  startAutoAnimate();
}

// 讓 Dogpedia_data.js 產生卡片後呼叫 setupCardEvents
window.setupCardEvents = setupCardEvents;
