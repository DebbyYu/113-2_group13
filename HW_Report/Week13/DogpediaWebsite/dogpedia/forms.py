from django import forms
from .models import UserPetProfile
from .models import PetComment

class UploadPetForm(forms.ModelForm):
    class Meta:
        model = UserPetProfile
        fields = ['name', 'breed', 'description', 'interest', 'traits', 'care_needs', 'image']
    user = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 1, 'required': 'required', 'class':'upload_pet_form', 'id':'Upload_pet_user', 'readonly': "readonly", 'disabled': 'True'}),
        label='上傳者'
    )
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
    name = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 1, 'required': 'required'}),
        label='名字'
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

    

class PetCommentForm(forms.ModelForm):
    class Meta:
        model = PetComment
        fields = ['comment_text']
        widgets = {
            'comment_text': forms.Textarea(attrs={'rows': 2, 'cols': 50, 'placeholder': '留下你的心情小語...'})
        }