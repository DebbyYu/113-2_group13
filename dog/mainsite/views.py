from django.shortcuts import render, get_object_or_404
from .models import DogBreed, DogProfile, SugarGlider

# 狗狗品種總覽
def dog_species_view(request):
    breeds = DogBreed.objects.filter(is_active=True)
    return render(request, 'mainsite/dog_species.html', {'breeds': breeds})

# 狗狗圖鑑卡（依品種篩選）
def dogpedia_view(request, breed):
    # 根據 URL 中的 breed 參數來獲取 DogBreed 實例
    breed_obj = get_object_or_404(DogBreed, english_name=breed)
    profiles = breed_obj.profiles.filter(is_active=True)
    
    return render(request, 'mainsite/dogpedia.html', {
        'breed': breed_obj,
        'profiles': profiles
    })

# 蜜袋鼯角色介紹頁
def petaurus_view(request):
    gliders = SugarGlider.objects.all()
    return render(request, 'mainsite/petaurus.html', {'gliders': gliders})

def homepage(request):
    return render(request, 'homepage.html')

def index_view(request):
    return render(request, 'homepage.html')