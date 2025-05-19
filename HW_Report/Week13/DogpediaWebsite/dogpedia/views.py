from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import DogBreed, DogProfile, SugarGlider, UserPetProfile, PetComment
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.urls import reverse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import filters
from rest_framework import viewsets, permissions

from .forms import UploadPetForm
from .forms import PetCommentForm

from django.conf import settings

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json
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
    elif header_id == 'upload_pet':
        return redirect('/dogpedia/pet/upload_pet/')
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


class ProtectedView(APIView):
  permission_classes = [IsAuthenticated]
  
  def get(self, request):
    return Response({
      "message": "您已通過認證",
      "user_id": request.user.id,
      "username": request.user.username
    })

class LogoutView(APIView):
  permission_classes = [IsAuthenticated]
  
  def post(self, request):
    try:
      refresh_token = request.data.get("refresh")
      if not refresh_token:
        return Response({"error": "Refresh token is required"}, status=400)
        
      token = RefreshToken(refresh_token)
      token.blacklist()
      
      return Response({
        "success": True,
        "message": "您已成功登出",
        "status": "Token has been blacklisted successfully"
      })
    except Exception as e:
      return Response({
        "success": False,
        "error": str(e),
        "message": "登出時發生錯誤"
      }, status=400)

def register_page(request):
	return render(request, 'dogpedia/register.html')

@method_decorator(csrf_exempt, name='dispatch')
class RegisterAPI(APIView):
	def post(self, request):
		try:
			data = request.data
			username = data.get("username")
			password = data.get("password")

			if not username or not password:
				return JsonResponse({"error": "缺少帳號或密碼"}, status=400)

			if User.objects.filter(username=username).exists():
				return JsonResponse({"error": "帳號已存在"}, status=400)

			User.objects.create_user(username=username, password=password)
			return JsonResponse({"message": "註冊成功"})
		except Exception as e:
			return JsonResponse({"error": str(e)}, status=400)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# 新增狗狗，Debby的東西可以放這
class AddDogView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # 頁面顯示新增狗狗的表單
        return render(request, 'dogpedia/add_dog.html', {})

    def post(self, request):
        # 可以從 request.data 中取得表單資料
        return Response({"message": "新增寵物的邏輯"}, status=200)
    

def upload_pet_view(request):
    if request.method == 'POST':
        form = UploadPetForm(request.POST, request.FILES)
        if form.is_valid():
            result = form.save(commit=False)
            breed_name = form.cleaned_data['breed'].lower()
            user = form.cleaned_data['user']
            pet = DogProfile()
            pet.name = result.name
            pet.breed = DogBreed.objects.get(english_name=breed_name)
            pet.profile = result.description
            pet.interests = result.interest
            pet.traits = result.traits
            pet.care = result.care_needs
            result.user = User.objects.get(username=user)
            

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

            pet.image = '../../../media/dogs/' + filename # 設定儲存路徑
            initial_path = os.path.join(settings.MEDIA_ROOT, 'dogs', result.image.name)
            pet.save()
            result.save()
            os.rename(initial_path, filepath)
            return redirect(reverse('upload_success'))
        
        else:
            context = {'form': form, 'test': "test"}
            return render(request, 'dogpedia/upload_pet.html', context)
    else:
        form = UploadPetForm()
        context = {'form': form, 'test': 1}
        return render(request, 'dogpedia/upload_pet.html', context=context)

def upload_success_view(request):
    return render(request, 'dogpedia/upload_success.html', {})

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