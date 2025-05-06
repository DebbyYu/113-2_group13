# Week11

## 新增media資料夾

存取使用者上傳的品種、個體照片並更新資料庫

## mysql資料庫

pip install mysqlclient
pip install pymysql
在dog的__init__.py處import pymysql
settings改為mysql形式

將現有breeds加上額外dogs資料利用shell script新增到mysql資料庫

## 前端 AJAX 動態載入

修改前端 JavaScript 以滾動載入動物資料：
- 初始載入少量動物資料 (例如 6 隻)。
- 監聽滾動事件，當滾動到接近底部時觸發載入更多資料。
- 發送 AJAX GET 請求到後端 API `/load_more_animals/`，並傳遞 `breed` 和 `page` 參數。
- 處理後端回傳的 JSON 資料，將新的動物卡片追加到頁面上。
- 根據後端回傳的 `has_next` 標誌判斷是否還有更多資料。

## 後端 API 實作

- 在 Django 的 `views.py` 中創建 `load_more_animals` view 函式。
- 該函式接收 `breed`、`page` 和 `limit` 參數。
- 根據參數查詢 `DogProfile` 模型並進行分頁處理 (每頁 6 隻)。
- 將查詢結果序列化為 JSON 格式，包含動物的 `name`、`image_url`、`breed` 和 `description` 等資訊。
- 在 JSON 回應中包含 `has_next` 布林值。
- 在 Django 的 `urls.py` 中將 `/load_more_animals/` URL 路由到 `load_more_animals` view 函式。

## Reference

[https://realnewbie.com/coding/python/django-imagefield-introduction-and-advanced-settings/]
[https://blog.csdn.net/weixin_43064185/article/details/115360463]
[https://www.youtube.com/watch?v=5g_xIwxLSJk&ab_channel=Fireship]
[https://www.youtube.com/watch?v=wP89gN7k1sU&ab_channel=FullStackGomez]
[https://hackmd.io/@astro-camp-17th-demo/S1uEvN7j0]
[https://www.youtube.com/watch?v=3zzszKQ8Kk4&ab_channel=%E5%BD%AD%E5%BD%AD%E7%9A%84%E8%AA%B2%E7%A8%8B]

## 分工

林冠廷 現有資料整理、shell script、mysql架設 25%
林承嫻 新增個體資料、shell script、mysql架設 25%
余岱芸 AJAX 前端動態載入與後端 API 實作 25%
