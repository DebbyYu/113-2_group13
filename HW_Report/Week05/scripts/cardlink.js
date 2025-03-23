// 選取所有 .card 元素
const cards = document.querySelectorAll('.card');
    
cards.forEach(card => {
  const inner = card.querySelector('.card-inner');
  const link = card.getAttribute('data-link');

  // 滑鼠進入，翻轉卡片
  card.addEventListener('mouseenter', () => {
    inner.style.transform = 'rotateY(180deg)';
  });

  // 滑鼠離開，恢復正面
  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateY(0deg)';
  });

  // 點擊跳轉
  card.addEventListener('click', () => {
    window.location.href = link;
  });
});