// 選取所有 .card 元素
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const inner = card.querySelector('.card-inner');
  const link = card.getAttribute('data-link');     // 例如 ./Dogpedia.html
  const breed = card.getAttribute('data-breed');   // 例如 Poodle、Shiba_Inu 等

  // 滑鼠進入，翻轉卡片
  card.addEventListener('mouseenter', () => {
    inner.style.transform = 'rotateY(180deg)';
  });

  // 滑鼠離開，恢復正面
  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateY(0deg)';
  });

  // 點擊跳轉到對應品種的 Dogpedia 頁面
  card.addEventListener('click', () => {
    // 附上網址參數 ?breed=品種名稱
    window.location.href = link + '?breed=' + encodeURIComponent(breed);
  });
});
