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
]