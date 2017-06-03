from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^success$', views.success),
    url(r'^create$', views.create),
    url(r'^profile/(?P<user_id>\d+)$', views.profile),
    url(r'^deletejoin/(?P<team_id>\d+)$', views.deletejoin),
    url(r'^teamdetail/(?P<team_id>\d+)$', views.teamdetail),
    url(r'^jointeam$', views.jointeam),

]
