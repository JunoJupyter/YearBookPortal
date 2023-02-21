from django.urls import path
from .views import *

urlpatterns = [
    path('hello/', sayhello, name='helloapi'),
    path('announcements/', announcements, name='announcements'),
]

