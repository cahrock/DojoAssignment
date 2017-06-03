from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^travels$', views.travels),
    url(r'^logout$', views.logout),
    url(r'^add-trip-plan$', views.addtripplan),
    url(r'^processing$', views.processing),
    url(r'^deletejoin/(?P<id>\d+)$', views.deletejoin),
    url(r'^destination/(?P<id>\d+)$', views.destination),
    url(r'^jointhetrip/(?P<id>\d+)$', views.jointhetrip),
]
