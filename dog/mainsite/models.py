from django.db import models

# 品種（dog_species.html 的卡片資料）
class DogBreed(models.Model):
    name = models.CharField(max_length=100, unique=True)  # ex. 貴賓狗
    english_name = models.CharField(max_length=100)        # ex. Poodle
    family_life = models.TextField()
    body_features = models.TextField()
    social_behavior = models.TextField()
    personality = models.TextField()
    cover_image = models.ImageField(upload_to='breeds/')   # 正面圖

    def __str__(self):
        return f"{self.name} ({self.english_name})"

# 品種下的每隻狗狗（Dogpedia.html 的每張卡片）
class DogProfile(models.Model):
    name = models.CharField(max_length=100)                # ex. 可可、豆豆
    breed = models.ForeignKey(DogBreed, on_delete=models.CASCADE, related_name='profiles')
    image = models.ImageField(upload_to='dogs/')
    family_life = models.TextField()
    interests = models.TextField()
    traits = models.TextField()
    care = models.TextField()

    def __str__(self):
        return f"{self.name} ({self.breed.english_name})"

class SugarGlider(models.Model):
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, choices=[('男', '男'), ('女', '女')])
    description = models.TextField()
    image = models.ImageField(upload_to='gliders/')

    def __str__(self):
        return self.name
