from django.conf.urls import url
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas/(?P<color>\w+)$', views.ninjas)
]
