from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import DogBreed, DogProfile, SugarGlider

# 狗狗品種總覽
# def dog_species_view(request):
#     breeds = DogBreed.objects.filter(is_active=True)
#     return render(request, 'dogpedia/dog_species.html', {'breeds': breeds})

# 狗狗圖鑑卡（依品種篩選）
def dogpedia_view(request):
    breed_name = request.GET.get('breed', 'Poodle')
    breed = get_object_or_404(DogBreed, english_name=breed_name)
    profiles = breed.profiles.filter(is_active=True)
    return render(request, 'dogpedia/Dogpedia.html', {
        'breed': breed,
        'profiles': profiles
    })

# 蜜袋鼯角色介紹頁
def petaurus_view(request):
    gliders = SugarGlider.objects.all()
    return render(request, 'dogpedia/petaurus.html', {'gliders': gliders})

def index(request):
    return render(request, 'dogpedia/homepage.html', {})

def header(request, header_id = ''):
    if header_id == 'dog_species':
        dog_breeds = DogBreed.objects.all().values()
        return render(request, 'dogpedia/' + header_id + '.html', {'dog_breeds': dog_breeds})
    else:
        return render(request, 'dogpedia/' + header_id + '.html', {})

def Petaurus(request, Petaurus_id = ''):
    return render(request, 'dogpedia/Petaurus/' + Petaurus_id + '.html', {})

def dog_species_view(request, breed=''):
    return render(request, 'dogpedia/Dogpedia.html', {})

def dog_view(request, id=''):
    return render(request, 'dogpedia/Dogpedia.html', {})
