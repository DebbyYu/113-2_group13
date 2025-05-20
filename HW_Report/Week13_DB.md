# Week13_DB

## 本週實作內容

# 新增寵物上傳頁面
1. 前端新增寵物上傳頁面
    * 新增 `upload_pet.html` 模板：包含寵物資訊輸入表單和圖片上傳功能。
    * 設計上傳表單：使用 HTML 表單元素讓使用者輸入寵物名稱、品種、描述等，並選擇上傳圖片。
    * 處理表單提交：表單使用 POST 方法和 `enctype="multipart/form-data"` 處理檔案上傳。
    * 使用 Django 表單：定義 `UploadPetForm` 處理表單驗證和數據綁定。
    * 設定 URL：新增 `/upload_pet/` URL 映射到後端 `upload_pet_view`。
    * 成功上傳後的重定向：成功後重定向到 `upload_success` URL。

2. 後端處理寵物上傳
    * 創建 `UploadPetForm`：定義 Django 表單，包含寵物資訊欄位和圖片上傳欄位，並進行數據驗證。
    * 創建 `UserPetProfile` 模型：定義資料庫模型，儲存使用者上傳的寵物資訊（名稱、圖片路徑等）。
    * 定義 `upload_success` URL：映射到 `upload_success_view`，用於顯示上傳成功訊息。
    * 實作 `upload_pet_view`：處理表單提交，驗證數據，處理圖片上傳（避免重命名），創建並儲存 `UserPetProfile` 實例，最後重定向到 `upload_success`。
    * 實作 `upload_success_view`：重定向到首頁 (`homepage`)。

# 新增寵物上傳頁面
1.  前端 JavaScript:
    * 點擊狗狗卡片時，使用 AJAX GET 請求 `/pet/<pet_id>/comments/` 獲取評論。
    * 動態顯示獲取的評論列表。
    * 動態創建心情小語輸入表單。
    * 提交表單時，使用 AJAX POST 請求 `/pet/<pet_id>/add_comment_ajax/` 發送評論內容。
    * 成功提交後重新載入評論。

2.  後端 Django urls.py:
    * 新增 AJAX 請求的 URL 模式：
        * `path('pet/<int:pet_id>/comments/', views.get_pet_comments_view, name='get_pet_comments')`
        * `path('pet/<int:pet_id>/add_comment_ajax/', views.add_pet_comment_ajax_view, name='add_pet_comment_ajax')`

3.  **後端 Django views.py:
    * 新增 `get_pet_comments_view` 處理獲取評論的 AJAX 請求。
    * 新增 `add_pet_comment_ajax_view` 處理提交評論的 AJAX 請求。