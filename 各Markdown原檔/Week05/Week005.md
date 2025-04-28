# 狗狗圖鑑網站介紹 - W5作業回報

## 網站概述

這是一個充滿不同品種狗狗資訊的網頁，命名為「狗狗圖鑑」。網頁提供每隻狗狗的圖片與詳細介紹，讓使用者可以輕鬆了解各品種狗狗的家庭生活、身體特徵、社會行為與性格。

## 本週新增功能回報

- **點擊卡片跳轉至個體詳細介紹**
  - 滑鼠懸停時卡片會翻轉，顯示更詳細資訊。
  - 點擊卡片後，可以跳轉到該品種狗狗的個體詳細介紹頁面。
  - 使用 JavaScript 綁定 click 事件。

- **網詳細介紹頁面新增Sidebar**
  - 在個體介紹頁面新增側邊欄，列出所有品種狗狗的選單。
  - 當滑鼠移動到不同品種名稱時，該選項的底色改變並加粗字體，提升互動體驗。

- **滑動展開的 Sidebar**
  - 預設 Sidebar 僅顯示標題 狗狗品種
  - 點擊按鈕後，Sidebar 往下展開，顯示狗狗列表。
  - 按鈕置於 Sidebar 右上角，無論收合或展開都保持在該位置。

## 參考資料

- 使用 mouseenter 和 mouseleave 控制卡片翻轉 [MDN - Element: mouseenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
- sidebar按鈕設計:三條線（span）旋轉、隱藏中間線，變成叉叉 [CSS Tricks - Hamburger Menu](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/)
- 狗狗資訊 [American Kennel Club](https://www.akc.org/)

---

> 製作人員：林承嫻  
> 最後更新時間：2024/03/23
