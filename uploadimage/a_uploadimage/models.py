from django.db import models


class UserImage(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField()