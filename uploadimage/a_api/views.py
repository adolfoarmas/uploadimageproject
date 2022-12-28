from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers.serializer import UserImageSerializer
from rest_framework.parsers import MultiPartParser
from a_uploadimage.models import UserImage

# Create your views here.
class UploadImageView(ListCreateAPIView):
    model = UserImage
    queryset = UserImage.objects.all()
    serializer_class = UserImageSerializer
    parser_classes = (MultiPartParser,)

class UpdateDeleteImageView(RetrieveUpdateDestroyAPIView):
    model = UserImage
    queryset = UserImage.objects.all()
    serializer_class = UserImageSerializer
    parser_classes = (MultiPartParser,)