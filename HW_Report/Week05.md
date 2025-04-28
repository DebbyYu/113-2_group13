# Week05 Report

## 課內範圍

✅ HTML + CSS

- DOM 結構設計 ➜ header、aside、section 等結構劃分

- 深色模式切換按鈕 ➜ 使用input、label來自訂Toggle-switch

- 基本 CSS 語法（選擇器、屬性、值）

- RWD 響應式設計（Media Query） ➜ @media 調整欄位數量

- Flex & Grid 佈局 ➜ display: flex;、display: grid;

- CSS 動畫 ➜ @keyframes 撰寫動畫

- `display: flex; justify-content: space-around;` 讓按鈕均勻排列。

✅ JavaScript

- DOM 操作 ➜ document.getElementById、document.querySelectorAll

- 事件處理 ➜ addEventListener("mouseenter")、"mouseleave"

- 條件判斷與邏輯控制 ➜ if (this.checked)

- 每過 10 秒卡牌自動抖動 ➜ 時間管理與自動排成動畫

## 課外範圍

✅ HTML + CSS

- 深色模式按鈕設計結合 CSS 動畫

- 固定 header + 左右側欄 RWD 複雜佈局 ➜ 課程中沒提及 Grid 的高階運用

- 主題切換 .dark-mode 與深色配色邏輯 ➜ 沒有在老師課程文件中出現完整「主題切換」機制

- 動畫 hoverEffect 模擬雙重縮放動畫 ➜ hoverEffect 動畫，屬於動畫優化（課堂沒涉及兩段動畫聯動邏輯）

- CSS 動畫與 JavaScript 動態控制（hover-animate class）結合 ➜ 課程提到 addEventListener，但沒有提及這種「動態 class 切換 + CSS 動畫」

✅ JavaScript

- localStorage 深色模式持久化 ➜ 上課內容沒講 localStorage（進階應用）

- 自動動畫定時器與停止邏輯 ➜ setInterval + clearInterval 控制自動動畫 ➜ 課堂沒有結合 UI 元件與動畫自動化

- 結合 CSS + JS 做卡片 hover 效果的主動觸發 ➜ 課堂沒有介紹「hover-animate class 動態添加」模式

- 使用React將重複Header可以直接被引用

## 組員分工(第13組)

- 余岱芸：Dogpedia.html 彈出式卡片視窗設計 25%
- 林承嫻：Dogpedia.html 的 Sidebar + dog_species.html & CSS & Javascript 設計 25%
- 林冠廷：Dogpedia.html Sidebar 以外部分 + 同頁dark-mode & CSS & Javascript 設計 25%
- 鄭皓中：整合、優化各HTML + 整理Report 25%

## 參考資料

- 使用 mouseenter 和 mouseleave 控制卡片翻轉 [MDN - Element: mouseenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
- sidebar按鈕設計:三條線（span）旋轉、隱藏中間線，變成叉叉 [CSS Tricks - Hamburger Menu](https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/)
- 狗狗資訊 [American Kennel Club](https://www.akc.org/)
- MDN Web Docs - localStorage
- MDN Web Docs - CSS Animations
- MDN Web Docs - setInterval()
- MDN Web Docs - Element.classList
- MDN Web Docs - CSS Grid Layout
- MDN Web Docs - prefers-color-scheme Media Feature
- CSS-Tricks - Dark Mode in CSS
- HTML轉換Javascript工具[https://tool.chinaz.com/tools/html_js.aspx](https://tool.chinaz.com/tools/html_js.aspx)
