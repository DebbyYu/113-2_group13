from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import DogBreed, DogProfile, SugarGlider
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

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

def load_more_animals(request):
    breed_name = request.GET.get('breed', None)
    page = request.GET.get('page', 1)
    limit = request.GET.get('limit', None)  # 處理初始載入限制

    if breed_name:
        try:
            breed = DogBreed.objects.get(english_name=breed_name)
            all_profiles = breed.profiles.filter(is_active=True)
        except DogBreed.DoesNotExist:
            return JsonResponse({'animals': [], 'has_next': False})
    else:
        all_profiles = DogProfile.objects.filter(is_active=True)

    per_page = 6  # 每頁顯示的狗狗數量
    paginator = Paginator(all_profiles, per_page)

    try:
        profiles = paginator.page(page)
    except PageNotAnInteger:
        profiles = paginator.page(1)
    except EmptyPage:
        profiles = paginator.page(paginator.num_pages)

    animals_data = []
    for profile in profiles:
        animals_data.append({
            'name': profile.name,
            'image_url': profile.image.url if profile.image else '',
            'breed': profile.breed.name if profile.breed else '',
            'description': [
                profile.family_life,
                profile.interest,
                profile.traits,
                profile.care_needs
            ]
            # 你可能需要根據你的 DogProfile 模型添加更多欄位
        })

    has_next = profiles.has_next()

    return JsonResponse({'animals': animals_data, 'has_next': has_next})