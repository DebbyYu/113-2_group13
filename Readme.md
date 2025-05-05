# 113-2 Web design and application

## 網站概述

這是一個充滿不同品種狗狗資訊的網頁，命名為「狗狗圖鑑」。網頁提供每隻狗狗的圖片與詳細介紹，讓使用者可以輕鬆了解各品種狗狗的家庭生活、身體特徵、社會行為與性格。

## 注意事項

由於使用了React的Javascript框架，需要使用Server開啟

## File tree

```
Week11
 ┣ DogpediaWebsite
 ┃ ┣ dog
 ┃ ┃ ┣ __init__.py
 ┃ ┃ ┣ asgi.py
 ┃ ┃ ┣ settings.py
 ┃ ┃ ┣ urls.py
 ┃ ┃ ┗ wsgi.py
 ┃ ┣ dogpedia
 ┃ ┃ ┣ migrations
 ┃ ┃ ┣ static
 ┃ ┃ ┃ ┣ images
 ┃ ┃ ┃ ┣ scripts
 ┃ ┃ ┃ ┗ styles
 ┃ ┃ ┣ templates
 ┃ ┃ ┃ ┗ dogpedia
 ┃ ┃ ┃ ┃ ┣ Petaurus
 ┃ ┃ ┃ ┃ ┣ Dogpedia.html
 ┃ ┃ ┃ ┃ ┣ Petaurus.html
 ┃ ┃ ┃ ┃ ┣ aboutus.html
 ┃ ┃ ┃ ┃ ┣ base_generic.html
 ┃ ┃ ┃ ┃ ┣ dog_species.html
 ┃ ┃ ┃ ┃ ┣ header.html
 ┃ ┃ ┃ ┃ ┣ homepage.html
 ┃ ┃ ┃ ┃ ┗ sidebar.html
 ┃ ┃ ┣ __init__.py
 ┃ ┃ ┣ admin.py
 ┃ ┃ ┣ apps.py
 ┃ ┃ ┣ models.py
 ┃ ┃ ┣ urls.py
 ┃ ┃ ┗ views.py
 ┃ ┣ media
 ┃ ┃ ┣ breeds
 ┃ ┃ ┣ dogs
 ┃ ┃ ┗ gliders
 ┃ ┗ manage.py
 ┣ dog_db
 ┣ DBscript - 60dogs.txt
 ┣ DBscript - breeds.txt
 ┣ DBscript - dogs.txt
 ┣ Readme.md
 ┗ week11.md
```
