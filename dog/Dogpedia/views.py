from django.shortcuts import render, get_object_or_404
from .models import DogBreed, DogProfile, SugarGlider

# 狗狗品種總覽
def dog_species_view(request):
    breeds = DogBreed.objects.filter(is_active=True)
    return render(request, 'mainsite/dog_species.html', {'breeds': breeds})

# 狗狗圖鑑卡（依品種篩選）
def dogpedia_view(request):
    breed_name = request.GET.get('breed', 'Poodle')
    breed = get_object_or_404(DogBreed, english_name=breed_name)
    profiles = breed.profiles.filter(is_active=True)
    return render(request, 'mainsite/dogpedia.html', {
        'breed': breed,
        'profiles': profiles
    })

# 蜜袋鼯角色介紹頁
def petaurus_view(request):
    gliders = SugarGlider.objects.all()
    return render(request, 'mainsite/petaurus.html', {'gliders': gliders})
