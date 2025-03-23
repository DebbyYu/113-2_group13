# Week03 Report

## html課內相關

1. 基本文件結構，使用 html、head、body 等標籤建立網頁基本架構。
2. 區塊元素與語意標籤 header、nav、section，符合語意化設計，結構清晰。
3. 清單與導覽設計 ul 與 li 建立導覽列（tabs），提供切換功能。
4. 圖片與文字內容 img 標籤放入圖片展示寵物照片，h2、p 標籤介紹寵物資訊。

## css課內相關

1. 基本樣式設計 color、background-color、font-size、font-weight 設定字型與色彩。
2. Box Model : margin、padding、border 應用於 .card、.tabs、.theme-switch 等元素。
3. 排版與定位 display: grid 和 display: flex 應用於 .container 與 .card，對應講義中的 display 屬性。
4. 互動效果 .tabs li:hover 與 .card:hover 達成滑鼠懸停互動效果。

## 額外程式技術

1. 深色模式（Dark Mode）
   1. 使用 .dark-mode class 控制不同主題色彩。
   2. 搭配 localStorage 保存使用者選擇，讓網頁重整後依然記得主題設定。
   ref:https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   ref:https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

2. Grid Layout 卡片排版
   1. display: grid 建立 2x3 卡片區域，讓寵物卡片排列整齊。
   2. 使用 grid-template-columns 讓每列最多呈現三張卡片，並透過 gap 控制間距。
   ref:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
   ref:https://css-tricks.com/snippets/css/complete-guide-grid/

3. 使用 Google Fonts 提升字體設計
   1. 引入 Poppins 和 Noto Sans TC，支援中英文字體混排，提升整體視覺效果。

4. localStorage + URLSearchParams 整合動態細節顯示
   1. 根據 index.html 中點擊卡片時傳遞的網址參數，details.html 自動加載不同寵物資訊。
   2. 使用 URLSearchParams 動態取得 query string。
   ref:https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams