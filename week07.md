# Week07

## 前端

### 程式碼更動

1. **將「Dogpedia_data」改寫成獨立的 `.js` 檔案**：
   - 將資料與邏輯分開，讓 JavaScript 變數可以直接管理並動態生成卡片。

### 優點

1. **資料與邏輯合而為一**：
   - 透過將資料整合進 `.js` 檔案，可以直接使用 JavaScript 變數，讓卡片可以「自動產生」。

2. **未來新增個體非常容易**：
   - 只要在 `dogData` 和 `dogInfo` 中新增鍵值，就會自動出現新卡片。

3. **方便管理圖片路徑、描述、分類資訊等結構化資料**：
   - 在 `.js` 中集中管理圖片、描述和分類資訊，能夠提升維護與擴展的效率。

### 問題與解決

1. **問題1：點擊寵物個體無法開啟細項小窗**：
   - 原因：使用 JavaScript 動態產生卡片（在 `Dogpedia_data.js` 中透過 `document.createElement("div")` 建立 `.card`），但在 `Dog_IDcard.js` 中， `DOMContentLoaded` 的時機過早，這時候動態生成的元素還沒有在 DOM 中，無法綁定事件。

   - 解決方法：使用事件委派（event delegation）來綁定 `.card` 的點擊事件，這樣可以確保即便是動態生成的卡片也能綁定事件。

2. **問題2：Sidebar 無法成功跳轉品種**：
   - 原因：在 `onclick` 事件處理中， `"` 與 `'` 的配對不正確，導致 JavaScript 語法無效。

   - 解決方法：修正語法錯誤，保證 `onclick` 事件能夠正確執行。

3. **問題3：每隔十秒卡片自動浮動特效消失**：
   - 原因：卡片改為由 `Dogpedia_data.js` 動態生成，`startAutoAnimate()` 初始化沒有放在 `DOMContentLoaded` 內，導致動畫掛載邏輯在 DOM 元素還未加載時就執行。

   - 解決方法：確保在 DOM 加載完後再執行動畫掛載邏輯。

## 後端

### Django

1. **完成 `models.py` 中對狗狗品種與個體資料的模型定義**：
   - 更新了 `DogBreed` 和 `DogProfile` 等模型來支持品種及個別狗狗資料的儲存與展示。

2. **完成 `urls.py` 中的路由設定，包含品種頁面、品種卡片頁面以及個別狗狗資料頁面**：
   - 設定了路由來處理 `/dogspecies/`、`/dogpedia/<breed>/`、`/dog/<individual>/` 等 URL。

3. **完成 `views.py` 中的視圖函式**：
   - `dog_species_view`: 顯示所有活躍的狗狗品種。
   - `dogpedia_view`: 根據品種篩選並顯示該品種的所有活躍狗狗個體。
   - `petaurus_view`: 顯示蜜袋鼯角色資料。

4. **完成後端資料的整合與處理**：
   - 根據需求將品種資料與狗狗資料整理進 Django 的模型中，並透過視圖函式渲染到前端。

### 測試與優化

1. **進行了新建路由測試如 `/dogspecies/` 和 `/dogpedia/<breed>/`**

2. **後端資料測試與調整**