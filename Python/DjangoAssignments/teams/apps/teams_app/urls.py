rom django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('apps.teams_app.urls')),
]
