from rest_framework import serializers
from .models import *


class AnnoucementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Announcement
        fields = '__all__'

