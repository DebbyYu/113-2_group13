from django import forms
from .models import UserPetProfile # 假設你創建了 UserPetProfile 模型

class UploadPetForm(forms.ModelForm):
    breed = forms.ChoiceField(
        choices=[
            ('', '請選擇品種'),
            ('Poodle', '貴賓犬'),
            ('Chihuahua', '吉娃娃'),
            ('Pomeranian', '博美犬'),
            ('Bichon_Frise', '比熊犬'),
            ('Shiba_Inu', '柴犬'),
            ('Akita_Inu', '秋田犬'),
        ],
        widget=forms.Select(attrs={'required': 'required'})
    )
    image = forms.ImageField(
        widget=forms.FileInput(attrs={'required': 'required'})
    )
    description = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 4, 'required': 'required'}),
        label='狗勾資料'
    )
    interest = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 4}),
        required=False,
        label='興趣'
    )
    traits = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 4}),
        required=False,
        label='特色'
    )
    care_needs = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 4}),
        required=False,
        label='飼養須知'
    )

    class Meta:
        model = UserPetProfile
        fields = ['name', 'breed', 'description', 'interest', 'traits', 'care_needs', 'image']