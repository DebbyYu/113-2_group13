from django.contrib import admin
from dogpedia.models import DogBreed, DogProfile, SugarGlider

# Register your models here.
admin.site.register(DogBreed)
admin.site.register(DogProfile)
admin.site.register(SugarGlider)