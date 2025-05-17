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

urlpatterns = [
    path('', views.index),
    path('<str:header_id>/', views.header, name='header-url'),
    path('Petaurus/<str:Petaurus_id>', views.Petaurus, name='Petaurus-url'),
    path('dog_species/<str:breed>', views.dog_species_view, name='dog_species-url'),
    path('dog_species/<str:dog_id>', views.dog_view, name='dog-url'),
    path('upload_pet/', views.upload_pet_view, name='upload_pet'),
    path('upload_success/', views.upload_success_view, name='upload_success'),
    path('pet/<int:pet_id>/comments/', views.get_pet_comments_view, name='get_pet_comments'),
    path('pet/<int:pet_id>/add_comment_ajax/', views.add_pet_comment_ajax_view, name='add_pet_comment_ajax'),
]