# Week13_DB

## 實作方法

1. 切換到當前資料夾 `cd 113-2_group13/HW_Report/Week13` 後執行 `python socketio_server.py` 將聊天機器人的server架好，我們的機器人server使用port 8001。
2. `cd DogpediaWebsite` 後執行 `python manage.py runserver localhost:your port number`，注意port避開8001及常用的port number
3. 登入後才可以新增寵物及於心情小語處留言

### mysql安裝及基本設定

1. 下載mysql/mariadb資料庫
2. 使用 `sudo mysql` 或 `mysql -u root -p` 以root權限開啟mysql/mariadb
3. 輸入`CREATE DATABASE dog_db;` 新增dog_db database
4. 輸入`CREATE USER 'Team13'@'localhost' IDENTIFIED BY 'Team13';` 來創建一個User叫Team13 密碼是 Team13
5. `GRANT ALL PRIVILEGES ON dog_db * TO 'Team13'@'localhost';` 讓Team13 可以獲得dog_db的所有權限
6. 輸入 `exit` 離開資料庫，切換到當前資料夾 `cd 113-2_group13/HW_Report/Week11/DogpediaWebsite` 後執行 `python manage.py migrate` 將Table建立好
7. 執行`python manage.py shell` 後將 `DBscript` 中的指令複製貼上到shell並執行
8. 開啟另一個cmd，使用 `mysql -u Team13 -p` 並輸入密碼登入mysql/mariadb
9. 於mariadb中使用`use dog_db`切換到dog_db database
10. `select * from dogpedia_dogbreed`可以看到新增的breed種類，`select * from dogpedia_dogprofile`可以看到新增的狗狗資訊
11. 確認成功新增後回到原本的cmd按 `CTRL+D`離開shell，執行`python manage.py runserver`後於[http://localhost:8000]可以看到網頁結果

## 本週實作內容

### form實作-寵物上傳

1. 前端新增寵物上傳頁面
    - 新增 `upload_pet.html` 模板：包含寵物資訊輸入表單和圖片上傳功能。
    - 設計上傳表單：使用 HTML 表單元素讓使用者輸入寵物名稱、品種、描述等，並選擇上傳圖片。
    - 處理表單提交：表單使用 POST 方法和 `enctype="multipart/form-data"` 處理檔案上傳。
    - 使用 Django 表單：定義 `UploadPetForm` 處理表單驗證和數據綁定。
    - 設定 URL：新增 `/upload_pet/` URL 映射到後端 `upload_pet_view`。
    - 成功上傳後的重定向：成功後重定向到 `upload_success` URL。

2. 後端處理寵物上傳
    - 創建 `UploadPetForm`：定義 Django 表單，包含寵物資訊欄位和圖片上傳欄位，並進行數據驗證。
    - 創建 `UserPetProfile` 模型：定義資料庫模型，儲存使用者上傳的寵物資訊（名稱、圖片路徑等）。
    - 定義 `upload_success` URL：映射到 `upload_success_view`，用於顯示上傳成功訊息。
    - 實作 `upload_pet_view`：處理表單提交，驗證數據，處理圖片上傳（避免重命名），創建並儲存 `UserPetProfile` 及 `Dogprofile` 實例，最後重定向到 `upload_success`。

### form實作-心情小語

1. 前端 JavaScript:
    - 點擊狗狗卡片時，使用 AJAX GET 請求 `/dogpedia/pet/comments/dog_id=<pet_id>/` 獲取評論。
    - 動態顯示獲取的評論列表。
    - 動態創建心情小語輸入表單。
    - 提交表單時，使用 AJAX POST 請求 `/dogpedia/pet/add_comment_ajax/dog_id=<pet_id>/` 發送評論內容。
    - 成功提交後重新載入評論。

2. 後端 Django urls.py:
    - 新增 AJAX 請求的 URL 模式：
        - `path('pet/comments/dog_id=<pet_id>/', views.get_pet_comments_view, name='get_pet_comments')`
        - `path('pet/add_comment_ajax/dog_id=<pet_id>/', views.add_pet_comment_ajax_view, name='add_pet_comment_ajax')`

3. 後端 Django views.py:
    - 新增 `get_pet_comments_view` 處理獲取評論的 AJAX 請求。
    - 新增 `add_pet_comment_ajax_view` 處理提交評論的 AJAX 請求。

### JWT、DRF實作

1. 在header處新增註冊、登入選項
2. 實作註冊，登入頁面，將帳密資訊儲存進資料庫
3. 配合新增狗狗功能，僅有登入過後才能看到此項目進行內容的新增

### 聊天機器人LLM引入實作

1. 使用socket.io建立另一個server
2. 引入Gemini機器人
3. 在header處新增聊天選項
4. 使用 `chat.js` 處理聊天室的即時對話回傳

## Reference

- [https://www.youtube.com/watch?v=7m8V909bt2c&list=PL4FE-nQjkZLwVaKCtyHvtl8KAScDfx7pG&index=8&ab_channel=CodeWithClinton](https://www.youtube.com/watch?v=7m8V909bt2c&list=PL4FE-nQjkZLwVaKCtyHvtl8KAScDfx7pG&index=8&ab_channel=CodeWithClinton)
- [https://www.youtube.com/watch?v=w0nYSAN6Xjg&ab_channel=KritimYantra](https://www.youtube.com/watch?v=w0nYSAN6Xjg&ab_channel=KritimYantra)

## 分工

- 林冠廷 JWT配合DRF實作，登入註冊頁面設計 25%
- 林承嫻 socketio及引入LLM實作，聊天頁面設計 25%
- 余岱芸 新增寵物實作、心情小語頁面設計 25%
- 鄭皓中 心情小語實作、整合全部檔案 25%
