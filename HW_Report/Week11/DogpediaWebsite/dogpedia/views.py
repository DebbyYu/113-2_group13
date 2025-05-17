from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import DogBreed, DogProfile, SugarGlider, UserPetProfile, PetComment
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .forms import UploadPetForm
from .forms import PetCommentForm
from django.conf import settings
import os

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
    if request.method == 'POST':
        breed_name = request.POST.get('breed', None)
        page = request.POST.get('page', 1)
        limit = request.POST.get('limit', None)  # 處理初始載入限制

        if breed_name:
            try:
                Breed = DogBreed.objects.get(english_name=breed_name)
                all_profiles = Breed.profiles.filter(breed_id=Breed.id)
            except DogBreed.DoesNotExist:
                return JsonResponse({'animals': [], 'has_next': False})
        else:
            all_profiles = DogProfile.objects.filter(is_active=True)

        per_page = 6
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
                'image_url': str(profile.image),
                'description': [
                    profile.profile,
                    profile.interests,
                    profile.traits,
                    profile.care
                ]
            })

        has_next = profiles.has_next()

        return JsonResponse({'animals': animals_data, 'has_next': has_next})
    return render(request, 'dogpedia/Dogpedia.html', {})

def dog_view(request, id=''):
    return render(request, 'dogpedia/Dogpedia.html', {})

def upload_pet_view(request):
    if request.method == 'POST':
        form = UploadPetForm(request.POST, request.FILES)
        if form.is_valid():
            pet = form.save(commit=False)
            pet.user = request.user

            breed_name = form.cleaned_data['breed']
            image = form.cleaned_data['image']
            ext = image.name.split('.')[-1]
            base_filename = f"{breed_name}_"
            counter = 1
            filename = f"{base_filename}{counter}.{ext}"
            filepath = os.path.join(settings.MEDIA_ROOT, 'dogs', filename)

            while os.path.exists(filepath):
                counter += 1
                filename = f"{base_filename}{counter}.{ext}"
                filepath = os.path.join(settings.MEDIA_ROOT, 'dogs', filename)

            pet.image.name = os.path.join('dogs', filename) # 設定儲存路徑
            pet.save()
            return redirect('upload_success')
        else:
            return render(request, 'dogpedia/upload_pet.html', {'form': form})
    else:
        form = UploadPetForm()
        return render(request, 'dogpedia/upload_pet.html', {'form': form})

def upload_success_view(request):
    return redirect('homepage')

def get_pet_comments_view(request, pet_id):
    pet_profile = get_object_or_404(UserPetProfile, pk=pet_id)
    comments = PetComment.objects.filter(pet_profile=pet_profile).order_by('-created_at')
    comments_data = serializers.serialize('json', comments, fields=('user__username', 'text', 'created_at'))
    return JsonResponse({'comments': comments_data})

@login_required
def add_pet_comment_ajax_view(request, pet_id):
    pet_profile = get_object_or_404(UserPetProfile, pk=pet_id)
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            comment_text = data.get('text')
            if comment_text:
                comment = PetComment(pet_profile=pet_profile, user=request.user, text=comment_text)
                comment.save()
                return JsonResponse({'status': 'success', 'message': '評論已發布', 'user': request.user.username, 'text': comment_text, 'created_at': comment.created_at.isoformat()})
            else:
                return JsonResponse({'status': 'error', 'message': '評論內容不能為空'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': '無效的 JSON'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': '只接受 POST 請求'}, status=405)