from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('dogspecies/', views.dog_species_view, name='dogspecies'),
    path('dogpedia/<str:breed>/', views.dogpedia_view, name='dogpedia'),  # dogpedia 路徑
    path('petaurus/', views.petaurus_view, name='petaurus'),  # 蜜袋鼯頁面
    path('dogs/<str:species>/', views.dog_species_view, name='dog_species'),  # 狗狗品種頁面
    path('dogs/<str:species>/<str:individual>/', views.dogpedia_view, name='dog_individual'),  # 品種下的個別狗
    path('dog/<str:individual>/', views.dogpedia_view, name='dog_individual_short'),  # 單個狗的頁面
]