from rest_framework import serializers
from a_uploadimage.models import UserImage

class UserImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImage
        fields = '__all__'