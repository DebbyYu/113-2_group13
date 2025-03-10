# Week03 Report

## html課內相關

1. 基本文件結構，使用 html、head、body 等標籤建立網頁基本架構。
2. 區塊元素與語意標籤 header、nav、section，符合語意化設計，結構清晰。
3. 清單與導覽設計 ul 與 li 建立導覽列（tabs），提供切換功能。
4. 圖片與文字內容 img 標籤放入圖片展示寵物照片，h2、p 標籤介紹寵物資訊。

## css課內相關

1. 基本樣式設計 color、background-color、font-size、font-weight 設定字型與色彩。
2. Box Model : margin、padding、border。
3. 排版與定位 display: grid 和 display: flex 應用於 .container 與 .card，對應講義中的 display 屬性。
4. 互動效果 :hover達成滑鼠懸停互動效果。

## 額外程式技術

1. Grid Layout 卡片排版
   1. display: grid 建立 2x3 卡片區域，讓寵物卡片排列整齊。
   2. 使用 grid-template-columns 讓每列最多呈現三張卡片，並透過 gap 控制間距。
   [ref:](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
   [ref:](https://css-tricks.com/snippets/css/complete-guide-grid/)

2. 固定Header，利用`position:fixed`讓網站導覽列固定在頁面頂部，即使滾動網頁也不會移動。

3. 深色模式（Dark Mode）
   1. 使用 .dark-mode class 控制不同主題色彩。
   2. 搭配 localStorage 保存使用者選擇，讓網頁重整後依然記得主題設定。
   [ref:](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
   [ref:](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)

## 組員分工

- 余岱芸：HTML + CSS 設計 25%
- 林承嫻：HTML + CSS 設計 25%
- 林冠廷：HTML + CSS + Javascript 設計 25%
- 鄭皓中：整合網頁及Report 25%

## 參考資料

- [w3schools](https://www.w3schools.com/)
- [YouTube 教學影片](https://www.youtube.com/watch?v=fa214Ct6t9w&t=2233s)
