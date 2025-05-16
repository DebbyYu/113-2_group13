from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import DogBreed, DogProfile, SugarGlider
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework import filters
from rest_framework import viewsets, permissions

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json

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
                # 你可能需要根據你的 DogProfile 模型添加更多欄位
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

class AddDogView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # 頁面顯示新增狗狗的表單
        return render(request, 'dogpedia/add_dog.html', {})

    def post(self, request):
        # 可以從 request.data 中取得表單資料
        return Response({"message": "新增寵物的邏輯"}, status=200)

# @csrf_exempt
# def register_api(request):
# 	if request.method == 'POST':
# 		try:
# 			data = json.loads(request.body)
# 			username = data.get('username')
# 			password = data.get('password')

# 			if User.objects.filter(username=username).exists():
# 				return JsonResponse({'error': '帳號已存在'}, status=400)

# 			User.objects.create_user(username=username, password=password)
# 			return JsonResponse({'message': '註冊成功'})
# 		except Exception as e:
# 			return JsonResponse({'error': str(e)}, status=400)