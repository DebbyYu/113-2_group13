# Week07

## 前端部份

### 程式碼更動

把「Dogpedia_data」改寫成獨立的 .js 檔案

### 優點

資料與邏輯合而為一：可直接使用 JavaScript 變數、動態生成卡片，讓卡片可以「自動產生」。
未來新增個體非常容易：只要在 dogData 和 dogInfo 中新增鍵值，就會自動出現新卡片。
方便管理圖片路徑、描述、分類資訊等結構化資料。

### 問題及解決方案

1. 點擊寵物個體無法開啟細項小窗

    使用的是 JavaScript 動態產生卡片（在 Dogpedia_data.js 中 document.createElement("div") 建立 .card）
    但在 Dog_IDcard.js 中用 DOMContentLoaded 的初始時機選取 .card，那時候這些元素尚未出現在 DOM 中，所以無法綁定事件。

    解決方法：用事件委派（event delegation）來綁定 .card 的點擊事件

2. Sidebar無法成功跳轉品種

    原本的錯誤原因是 ' 與 " 沒有正確搭配，導致 onclick 的 JavaScript 語法無效。

    解決方法：修正語法錯誤

3. 每隔十秒卡片自動浮動特效消失

    把卡片改為由 Dogpedia_data.js 動態生成
    但是自動動畫那段 startAutoAnimate() 初始化沒有寫在 DOMContentLoaded

    解決方法：等卡片生成完再執行動畫掛載邏輯

## 後端

### Django

將dog_species、Dogpedia卡牌資訊寫入App的models.py內容
完成views.py初稿，等待urls.py，templates合併
