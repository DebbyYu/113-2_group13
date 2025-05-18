from django.db import models
from django.contrib.auth.models import User # 如果你想關聯到使用者

# 🐶 狗狗品種卡片（對應 dog_species.html 的每張卡片）
class DogBreed(models.Model):
    name = models.CharField(max_length=100, unique=True)  # 品種名稱（中文） ex. 貴賓狗
    english_name = models.CharField(max_length=100)        # 品種英文名稱 ex. Poodle
    family_life = models.TextField()                       # 家庭生活
    body_features = models.TextField()                     # 身體特徵
    social_behavior = models.TextField()                   # 社會行為
    personality = models.TextField()                       # 性格
    cover_image = models.ImageField(upload_to='breeds/')   # 品種封面圖（卡片正面）

    def __str__(self):
        return f"{self.name} ({self.english_name})"


# 🐕 品種下的狗狗個體卡片（對應 Dogpedia.html 的每張個體卡片）
class DogProfile(models.Model):
    name = models.CharField(max_length=100)                # 個體名稱 ex. 可可、豆豆
    breed = models.ForeignKey(DogBreed, on_delete=models.CASCADE, related_name='profiles')  # 屬於哪個品種
    image = models.ImageField(upload_to='dogs/')           # 個體照片（卡片圖片）
    profile = models.TextField()                           # 狗勾資料（基本描述）
    interests = models.TextField()                         # 興趣
    traits = models.TextField()                            # 特色
    care = models.TextField()                              # 飼養須知

    def __str__(self):
        return f"{self.name} ({self.breed.english_name})"


class SugarGlider(models.Model):
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, choices=[('男', '男'), ('女', '女')])
    description = models.TextField()
    image = models.ImageField(upload_to='gliders/')

    def __str__(self):
        return self.name

class UserPetProfile(models.Model):
    user = models.CharField(max_length=100) # 關聯到上傳的使用者，可選
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=50, choices=[
        ('Poodle', '貴賓犬'),
        ('Chihuahua', '吉娃娃'),
        ('Pomeranian', '博美犬'),
        ('Bichon_Frise', '比熊犬'),
        ('Shiba_Inu', '柴犬'),
        ('Akita_Inu', '秋田犬'),
    ])
    description = models.TextField()
    interest = models.TextField(blank=True, null=True)
    traits = models.TextField(blank=True, null=True)
    care_needs = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='dogs/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class PetComment(models.Model):
    pet_profile = models.ForeignKey(UserPetProfile, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} on {self.pet_profile.name} at {self.created_at}"