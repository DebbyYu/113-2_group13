"""
URL configuration for dog project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from dogpedia import views

from dogpedia.views import ProtectedView, LogoutView, AddDogView

from rest_framework_simplejwt.views import (
  TokenRefreshView,
)

from dogpedia.views import register_page, RegisterAPI, MyTokenObtainPairView

urlpatterns = [
    path('', views.index),
    path('<str:header_id>/', views.header, name='header-url'),
    path('Petaurus/<str:Petaurus_id>', views.Petaurus, name='Petaurus-url'),
    path('dog_species/<str:breed>', views.dog_species_view, name='dog_species-url'),
    path('dog_species/<str:dog_id>', views.dog_view, name='dog-url'),

    path('pet/upload_pet/', views.upload_pet_view, name='upload_pet'),
    path('pet/upload_success/', views.upload_success_view, name='upload_success'),
    path('pet/comments/dog_id=<int:pet_id>', views.get_pet_comments_view, name='get_pet_comments'),
    path('pet/add_comment_ajax/dog_id=<int:pet_id>', views.add_pet_comment_ajax_view, name='add_pet_comment_ajax'),
    
    path('api/protected/', ProtectedView.as_view(), name='protected'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/logout/', LogoutView.as_view(), name='auth_logout'),
    
    path('register/', register_page, name='register-page'),
    path('api/register/', RegisterAPI.as_view(), name='register-api'),
    
    path('add-dog/', AddDogView.as_view(), name='add_dog'),

    
]