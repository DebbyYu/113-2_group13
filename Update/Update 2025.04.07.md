# 開發日記

## 更新

1. 將header, sidebar獨立成HTML並使用`{% include "XXX.html" %}`方法引入網頁
2. 調整href及`urls.py`, `views.py`使其符合Django中urls的結構，並在HTML中使用`{% url "name" "<variable>" %}`的方式來向後端要求訊息(request)
3. 調整靜態檔的location，利用`{% load static %}`及`{% static "<static底下路徑>" %}`來引入靜態檔

## 預計下次更新

敬請期待
