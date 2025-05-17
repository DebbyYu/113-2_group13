# Week13_DB

## 本週實作內容
前端新增寵物上傳頁面
1. 新增 upload_pet.html 模板： 創建了一個新的 HTML 模板檔案 upload_pet.html，該模板包含一個表單，讓使用者可以輸入寵物的相關資訊（例如名稱、品種、描述）並上傳寵物的圖片。這個表單使用了 Django 的表單功能來處理使用者輸入。
2. 設計上傳表單： 你在 upload_pet.html 中設計了表單的結構和欄位，包括文字輸入框、檔案上傳欄位和提交按鈕。
3. 處理表單提交： 你在 upload_pet.html 中設定了表單的 method 為 POST，並設定了 enctype="multipart/form-data" 以便能夠上傳檔案。
4. 使用 Django 表單： 你可能在 dogpedia/forms.py 中定義了一個 UploadPetForm，該表單繼承自 Django 的 forms.Form 或 forms.ModelForm，用於處理表單的驗證和數據處理。
5. 設定 URL： 你在 dogpedia/urls.py 中新增了一個 URL 模式，將特定的 URL 路徑（例如 /dogpedia/upload_pet/）映射到你後端的 upload_pet_view 視圖函式。
6. 成功上傳後的重定向： 你在後端的 upload_pet_view 函式中使用了 redirect('upload_success')，這表示當寵物資訊成功上傳後，使用者會被重定向到 homepage，向使用者顯示上傳成功的訊息。



### 前端

-   **新增 `upload_pet.html` 模板：** 創建了一個 HTML 模板，包含讓使用者輸入寵物資訊和上傳圖片的表單。
-   **新增相關 CSS 樣式：** 為 `upload_pet.html` 創建或修改了 CSS 檔案，以設計頁面的外觀和佈局。

### 後端

-   **創建 `UploadPetForm`：** 定義了一個 Django 表單來處理使用者在 `upload_pet.html` 中輸入的數據和上傳的圖片檔案。這個表單會包含驗證邏輯。
-   **創建 `UserPetProfile` 模型：** 定義了一個 Django 模型，用於在資料庫中儲存使用者上傳的寵物資訊，包括圖片檔案的路徑。
-   **定義 `upload_success`：** 創建了一個 URL 模式，用於在寵物資訊成功上傳後將使用者重定向到一個成功的頁面。
-   **實作 `upload_pet_view` ：** 撰寫了視圖函式來處理 `upload_pet.html` 表單的提交。這個函式會驗證表單數據，處理上傳的圖片檔案（包括避免重複命名），創建 `UserPetProfile` 模型實例，並將其儲存到資料庫。最後，它會將使用者重定向到 `upload_success`。
-   **實作 `upload_success_view`：**  這個函式將使用者重定向到 homepage，顯示上傳成功的訊息。

