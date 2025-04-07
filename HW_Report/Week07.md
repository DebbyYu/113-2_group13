# Week07

## 前端部份

### 程式碼更動

把Dogpedia_data改寫成獨立的 `.js` 檔案

### 優點

資料與邏輯合而為一：可直接使用 JavaScript 變數、動態生成卡片，讓卡片可以「自動產生」。
未來新增個體非常容易：只要在 dogData 和 dogInfo 中新增鍵值，就會自動出現新卡片。
方便管理圖片路徑、描述、分類資訊等結構化資料。

### 發生的問題及解決方法

1. 點擊寵物個體無法開啟細項小窗

    使用的是 JavaScript 動態產生卡片（在 `Dogpedia_data.js` 中 `document.createElement("div")` 建立 `.card`）
    但在 `Dog_IDcard.js` 中用 `DOMContentLoaded` 的初始時機選取 `.card`，那時候這些元素尚未出現在 DOM 中，所以無法綁定事件。

    解決方法：用事件委派（event delegation）來綁定 `.card` 的點擊事件

2. Sidebar無法成功跳轉品種

    原本的錯誤原因是 ' 與 " 沒有正確搭配，導致 `onclick` 的 JavaScript 語法無效。

    解決方法：修正語法錯誤

3. 每隔十秒卡片自動浮動特效消失

    把卡片改為由 `Dogpedia_data.js` 動態生成
    但是自動動畫那段 `startAutoAnimate()` 初始化沒有寫在 `DOMContentLoaded`

    解決方法：等卡片生成完再執行動畫掛載邏輯

## 後端

### 課內部份

1. 將dog_species, Dogpedia卡牌資訊寫入App的`models.py`內容

2. 完成`views.py`, `urls.py`, `templates/`合併

3. 新增`templates/base_generic.html` 作為基本模板，並使用`{% extends base_generic.html %}`及`{% block %}{% endblock %}`來客製化每個網頁

4. 調整`urls.py`及`views.py`使其接收網址列相關訊息並回應動作

總結：調整現有的內容以應用`django`中的架構來開啟網頁

### 額外內容

1. 使用`{% load static %}`來取得放置在`/static/`的`styles/.css`, `scripts/.js`, `images`等靜態檔

2. 調整`settings.py`使其可以讀到`/static/`的路徑

## Docker

### 課內部份(?)

1. 建立`Dockerfile`, `compose.yaml`, `.env`等Docker的基本環境

2. 使用Docker來執行Django的部份

### 課外部份(?)

1. 調整`Dockerfile`使其檔案更小

2. 調整`compose.yaml`，透過其`pull postgres`來作為database使用

## 組員分工

- 林承嫻：`views.py`的規劃 25%
- 余岱芸：`urls.py`, `views.py`的調整 25%
- 林冠廷：`models.py`, `Dogpedia_data.js`的調整及設計 25%
- 鄭皓中：`templates/`設計 + Docker使用 + 整理Report 25%

## Reference

Django to docker 1 : [https://www.docker.com/blog/how-to-dockerize-django-app/](https://www.docker.com/blog/how-to-dockerize-django-app/)
Django to docker 2 : [https://orcahmlee.github.io/devops/docker-nginx-uwsgi-django-root/](https://orcahmlee.github.io/devops/docker-nginx-uwsgi-django-root/)
Django static : [https://blog.csdn.net/qq_43556844/article/details/113377335](https://blog.csdn.net/qq_43556844/article/details/113377335)
Django template : [https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Extensions/Server-side/Django/Home_page](https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
