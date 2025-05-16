# Week11

## 實作方法

1. 下載mysql/mariadb資料庫
2. 使用 `sudo mysql` 或 `mysql -u root -p` 以root權限開啟mysql/mariadb
3. 輸入`CREATE DATABASE dog_db;` 新增dog_db database
4. 輸入`CREATE USER 'Team13'@'localhost' IDENTIFY BY 'Team13';` 來創建一個User叫Team13 密碼是 Team13
5. `GRANT ALL PRIVILEGES ON dog_db.* TO 'Team13'@'localhost';` 讓Team13 可以獲得dog_db的所有權限
6. 輸入 `exit` 離開資料庫，切換到當前資料夾 `cd 113-2_group13/HW_Report/Week11/DogpediaWebsite` 後執行 `python manage.py migrate` 將Table建立好
7. 執行`python manage.py shell` 後將 `DBscript` 中的指令複製貼上到shell並執行
8. 開啟另一個cmd，使用 `mysql -u Team13 -p` 並輸入密碼登入mysql/mariadb
9. 於mariadb中使用`use dog_db`切換到dog_db database
10. `select dogpedia_dogbreed`可以看到新增的breed種類，`select dogpedia_dogprofile`可以看到新增的狗狗資訊
11. 確認成功新增後回到原本的cmd按 `CTRL+D`離開shell，執行`python manage.py runserver`後於[http://localhost:8000]可以看到網頁結果

## 本週實作內容

### 新增media資料夾

存取使用者上傳的品種、個體照片並更新資料庫

### mysql資料庫

- pip install mysqlclient
- pip install pymysql
- 在dog的__init__.py處import pymysql
- settings改為mysql形式
- 將現有breeds加上額外dogs資料利用shell script新增到mysql資料庫

### 從資料庫讀取資料

- 使用`{% for %}{% endfor %}`實現從資料庫中讀取資料將相同格式的code部份簡化
- 透過`{% url "url-name" "data" %}` 及 `views.py` 中的函式來判定是否需要回傳資料庫檔案

### 前端 AJAX 動態載入

修改前端 JavaScript 以滾動載入動物資料：

- 初始載入少量動物資料 (例如 6 隻)。
- 監聽滾動事件，當滾動到接近底部時觸發載入更多資料。
- 發送 AJAX GET 請求到後端 API(使用當前urls) ，並傳遞 `breed` 和 `page` 參數。
- 處理後端回傳的 JSON 資料，將新的動物卡片追加到頁面上。
- 根據後端回傳的 `has_next` 標誌判斷是否還有更多資料。

### 後端 API 實作

- 在 Django 的 `views.py` 中於 `dog_species_view` 函式新增接收到 `POST` 方法時回傳JsonResponse。
- 該函式接收 `breed`、`page` 和 `limit` 參數。
- 根據參數查詢 `DogProfile` 模型並進行分頁處理 (每頁 6 隻)。
- 將查詢結果序列化為 JSON 格式，包含動物的 `name`、`image_url`、 `description` 等資訊。
- 在 JSON 回應中包含 `has_next` 布林值。

## Reference

[https://realnewbie.com/coding/python/django-imagefield-introduction-and-advanced-settings/]
[https://blog.csdn.net/weixin_43064185/article/details/115360463]
[https://www.youtube.com/watch?v=5g_xIwxLSJk&ab_channel=Fireship]
[https://www.youtube.com/watch?v=wP89gN7k1sU&ab_channel=FullStackGomez]
[https://hackmd.io/@astro-camp-17th-demo/S1uEvN7j0]
[https://www.youtube.com/watch?v=3zzszKQ8Kk4&ab_channel=%E5%BD%AD%E5%BD%AD%E7%9A%84%E8%AA%B2%E7%A8%8B]

## 分工

- 林冠廷 現有資料整理、shell script、mysql架設 25%
- 林承嫻 新增個體資料、shell script、mysql架設 25%
- 余岱芸 AJAX 前端動態載入與後端 API 實作 25%
- 鄭皓中 調整DBscript以符合File structure, 調整AJAX前端動態載入與後端API以符合當前需求, 調整部份html檔案縮減code的數量 25%
