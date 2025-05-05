# 113-2 Web design and application

## 網站概述

這是一個充滿不同品種狗狗資訊的網頁，命名為「狗狗圖鑑」。網頁提供每隻狗狗的圖片與詳細介紹，讓使用者可以輕鬆了解各品種狗狗的家庭生活、身體特徵、社會行為與性格。

## 注意事項

由於使用了React的Javascript框架，需要使用Server開啟

## File tree

```
📦113-2_group13
 ┣ 📂HW_Report
 ┃ ┣ 📂Week03
 ┃ ┃ ┣ 📂Update
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┣ 📂scripts
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜Petaurus.html
 ┃ ┃ ┣ 📜aboutus.html
 ┃ ┃ ┣ 📜dog.html
 ┃ ┃ ┣ 📜homepage.html
 ┃ ┃ ┣ 📜仙草_page.html
 ┃ ┃ ┣ 📜奶凍_page.html
 ┃ ┃ ┣ 📜奶茶_page.html
 ┃ ┃ ┣ 📜木耳_page.html
 ┃ ┃ ┣ 📜珍珠_page.html
 ┃ ┃ ┗ 📜蓮子_page.html
 ┃ ┣ 📂Week05
 ┃ ┃ ┣ 📂html
 ┃ ┃ ┃ ┣ 📜Dogpedia.html
 ┃ ┃ ┃ ┣ 📜Petaurus.html
 ┃ ┃ ┃ ┣ 📜aboutus.html
 ┃ ┃ ┃ ┣ 📜dog_species.html
 ┃ ┃ ┃ ┣ 📜homepage.html
 ┃ ┃ ┃ ┣ 📜test.html
 ┃ ┃ ┃ ┣ 📜仙草_page.html
 ┃ ┃ ┃ ┣ 📜奶凍_page.html
 ┃ ┃ ┃ ┣ 📜奶茶_page.html
 ┃ ┃ ┃ ┣ 📜木耳_page.html
 ┃ ┃ ┃ ┣ 📜珍珠_page.html
 ┃ ┃ ┃ ┗ 📜蓮子_page.html
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📜background-dot_720029-2770.jpg
 ┃ ┃ ┃ ┣ 📜background_53876-115151.jpg
 ┃ ┃ ┃ ┣ 📜dark_dog.png
 ┃ ┃ ┃ ┣ 📜dog.png
 ┃ ┃ ┃ ┣ 📜dog_title.png
 ┃ ┃ ┃ ┣ 📜example.png
 ┃ ┃ ┃ ┣ 📜sugar-glider.png
 ┃ ┃ ┃ ┣ 📜wu_title.jpg
 ┃ ┃ ┃ ┣ 📜仙草.jpg
 ┃ ┃ ┃ ┣ 📜奶凍.jpg
 ┃ ┃ ┃ ┣ 📜奶茶.jpg
 ┃ ┃ ┃ ┣ 📜木耳.jpg
 ┃ ┃ ┃ ┣ 📜珍珠.jpg
 ┃ ┃ ┃ ┗ 📜蓮子.jpg
 ┃ ┃ ┣ 📂scripts
 ┃ ┃ ┃ ┣ 📜Dog_IDcard.js
 ┃ ┃ ┃ ┣ 📜Dogpedia.js
 ┃ ┃ ┃ ┣ 📜Sidebar.js
 ┃ ┃ ┃ ┣ 📜cardlink.js
 ┃ ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┃ ┗ 📜test.js
 ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┣ 📜Dog_IDcard.css
 ┃ ┃ ┃ ┣ 📜Dogpedia.css
 ┃ ┃ ┃ ┣ 📜Petaurus.css
 ┃ ┃ ┃ ┣ 📜Sidebar.css
 ┃ ┃ ┃ ┣ 📜Wu_intro.css
 ┃ ┃ ┃ ┣ 📜aboutus.css
 ┃ ┃ ┃ ┣ 📜dog_species.css
 ┃ ┃ ┃ ┣ 📜header.css
 ┃ ┃ ┃ ┗ 📜homepage.css
 ┃ ┣ 📂Week07
 ┃ ┃ ┣ 📂DogpediaWebsite
 ┃ ┃ ┃ ┣ 📂dog
 ┃ ┃ ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜settings.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜settings.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜urls.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜urls.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┗ 📜wsgi.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┃ ┃ ┣ 📜asgi.py
 ┃ ┃ ┃ ┃ ┣ 📜settings.py
 ┃ ┃ ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┃ ┃ ┗ 📜wsgi.py
 ┃ ┃ ┃ ┣ 📂dogpedia
 ┃ ┃ ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apps.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apps.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜models.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜models.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜urls.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┗ 📜views.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜0001_initial.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜0001_initial.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜__init__.cpython-313.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜0001_initial.py
 ┃ ┃ ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┃ ┃ ┣ 📂Test
 ┃ ┃ ┃ ┃ ┃ ┗ 📂dogpedia
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Petaurus
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜仙草.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜奶凍.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜奶茶.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜木耳.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜珍珠.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜蓮子.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Petaurus.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜aboutus.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜base_generic.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dog_species.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜homepage.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sidebar.html
 ┃ ┃ ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┃ ┃ ┗ 📜views.py
 ┃ ┃ ┃ ┣ 📂static
 ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜background-dot_720029-2770.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜background_53876-115151.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dark_dog.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dog.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dog_title.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜example.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜opacity0.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sugar-glider.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜wu_title.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜仙草.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜奶凍.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜奶茶.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜木耳.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜珍珠.jpg
 ┃ ┃ ┃ ┃ ┃ ┗ 📜蓮子.jpg
 ┃ ┃ ┃ ┃ ┣ 📂scripts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Dog_IDcard.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia_data.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cardlink.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sidebar.js
 ┃ ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Dog_IDcard.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Petaurus.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Sidebar.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Wu_intro.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜aboutus.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dog_species.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜header.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜homepage.css
 ┃ ┃ ┃ ┣ 📜.dockerignore
 ┃ ┃ ┃ ┣ 📜.env
 ┃ ┃ ┃ ┣ 📜Dockerfile
 ┃ ┃ ┃ ┣ 📜README.Docker.md
 ┃ ┃ ┃ ┣ 📜compose.yaml
 ┃ ┃ ┃ ┣ 📜db.sqlite3
 ┃ ┃ ┃ ┣ 📜manage.py
 ┃ ┃ ┃ ┗ 📜requirements.txt
 ┃ ┃ ┗ 📜readme_week07.md
 ┃ ┣ 📂Week11
 ┃ ┃ ┣ 📂DogpediaWebsite
 ┃ ┃ ┃ ┣ 📂dog
 ┃ ┃ ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜settings.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜urls.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┗ 📜wsgi.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┃ ┃ ┣ 📜asgi.py
 ┃ ┃ ┃ ┃ ┣ 📜settings.py
 ┃ ┃ ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┃ ┃ ┗ 📜wsgi.py
 ┃ ┃ ┃ ┣ 📂dogpedia
 ┃ ┃ ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┃ ┃ ┣ 📜__init__.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apps.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜models.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜urls.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┗ 📜views.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┃ ┃ ┣ 📂__pycache__
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜0001_initial.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜__init__.cpython-312.pyc
 ┃ ┃ ┃ ┃ ┃ ┣ 📜0001_initial.py
 ┃ ┃ ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┃ ┃ ┣ 📂static
 ┃ ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜background-dot_720029-2770.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜background_53876-115151.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dark_dog.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dog.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dog_title.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜example.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜opacity0.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_1.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_2.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_3.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_4.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sugar-glider.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜wu_title.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜仙草.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜奶凍.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜奶茶.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜木耳.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜珍珠.jpg
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜蓮子.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📂scripts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dog_IDcard.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia_data.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cardlink.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sidebar.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📂styles
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dog_IDcard.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Petaurus.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Sidebar.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Wu_intro.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜aboutus.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dog_species.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜homepage.css
 ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┃ ┃ ┗ 📂dogpedia
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Petaurus
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜仙草.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜奶凍.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜奶茶_page.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜木耳.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜珍珠_page.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜蓮子_page.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dogpedia.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Petaurus.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜aboutus.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜base_generic.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜dog_species.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜homepage.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sidebar.html
 ┃ ┃ ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┃ ┃ ┗ 📜views.py
 ┃ ┃ ┃ ┣ 📂media
 ┃ ┃ ┃ ┃ ┣ 📂breeds
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜shiba.png
 ┃ ┃ ┃ ┃ ┣ 📂dogs
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Corgi01.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Husky01.jpeg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜JapaneseSpitz01.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_8.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜akita_9.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_8.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bichon_9.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_8.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chihuahua_9.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_15.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_8.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pomeranian_9.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_8.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜poodle_9.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_10.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_14.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_5.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_6.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜shiba_8.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜shiba_9.png
 ┃ ┃ ┃ ┃ ┗ 📂gliders
 ┃ ┃ ┃ ┃ ┃ ┣ 📜仙草.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜奶凍.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜奶茶.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜木耳.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜珍珠.jpg
 ┃ ┃ ┃ ┃ ┃ ┗ 📜蓮子.jpg
 ┃ ┃ ┃ ┗ 📜manage.py
 ┃ ┃ ┣ 📂dog_db
 ┃ ┃ ┃ ┣ 📜dog_db_auth_group.sql
 ┃ ┃ ┃ ┣ 📜dog_db_auth_group_permissions.sql
 ┃ ┃ ┃ ┣ 📜dog_db_auth_permission.sql
 ┃ ┃ ┃ ┣ 📜dog_db_auth_user.sql
 ┃ ┃ ┃ ┣ 📜dog_db_auth_user_groups.sql
 ┃ ┃ ┃ ┣ 📜dog_db_auth_user_user_permissions.sql
 ┃ ┃ ┃ ┣ 📜dog_db_django_admin_log.sql
 ┃ ┃ ┃ ┣ 📜dog_db_django_content_type.sql
 ┃ ┃ ┃ ┣ 📜dog_db_django_migrations.sql
 ┃ ┃ ┃ ┣ 📜dog_db_django_session.sql
 ┃ ┃ ┃ ┣ 📜dog_db_dogpedia_dogbreed.sql
 ┃ ┃ ┃ ┣ 📜dog_db_dogpedia_dogprofile.sql
 ┃ ┃ ┃ ┗ 📜dog_db_dogpedia_sugarglider.sql
 ┃ ┃ ┣ 📜DBscript - 60dogs.txt
 ┃ ┃ ┣ 📜DBscript - breeds.txt
 ┃ ┃ ┣ 📜DBscript - dogs.txt
 ┃ ┃ ┣ 📜Readme.md
 ┃ ┃ ┗ 📜week11.md
 ┃ ┣ 📜Week03.md
 ┃ ┣ 📜Week05.md
 ┃ ┗ 📜Week07.md
 ┣ 📂Update
 ┣ 📂各Markdown原檔
 ┃ ┣ 📂Week03
 ┃ ┗ 📂Week05
 ┣ 📜.gitignore
 ┗ 📜Readme.md
```
