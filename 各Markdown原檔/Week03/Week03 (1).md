# 狗狗圖鑑網站介紹

## 網站概述

這是一個充滿不同品種狗狗資訊的網頁，命名為「狗狗圖鑑」。網頁提供每隻狗狗的圖片與詳細介紹，讓使用者可以輕鬆了解各品種狗狗的家庭生活、身體特徵、社會行為與性格。

## 功能特色

- **狗狗卡片展示**（[CSS Tricks - Flip Card Effect](https://css-tricks.com/snippets/css/flip-card/)）
  - 採用卡片形式，每張卡片展示一隻狗狗的圖片與介紹。
  - 滑鼠懸停時卡片會翻轉，顯示更詳細資訊。
  - 使用 `perspective` 和 `transform` 創造 3D 翻轉效果。

- **網格布局**（[MDN Web Docs - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)）
  - 使用 `CSS Grid` 排列卡片，支援 `auto-fit` 與 `minmax`，可隨螢幕尺寸自動調整顯示欄數。
  - 最大寬度設定為 `900px`，確保在各種設備上都有良好體驗。

- **CSS Grid 佈局**（[CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)）：有效實現不同欄位排版。
- **CSS3 轉換與動畫**（[MDN Web Docs - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)）：`transform-style: preserve-3d` 與 `rotateY(180deg)` 組合，實現卡片翻轉效果。
- **色彩搭配**（[MDN Web Docs - CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)）：應用漸層與陰影。

## 參考資料

### CSS 版型設計

- [MDN Web Docs - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Web Docs - CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

### 動畫與互動效果

- [MDN Web Docs - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS Tricks - Flip Card Effect](https://css-tricks.com/snippets/css/flip-card/)

### 網頁布局

- [MDN Web Docs - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [W3Schools - CSS Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

### 狗狗資訊

- [American Kennel Club](https://www.akc.org/)

---

> 製作人員：林承嫻  
> 最後更新時間：2024/03/09
