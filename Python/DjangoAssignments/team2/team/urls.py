"""team URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    # url(r'^admin/', admin.site.urls),
    url(r'^', include('apps.login_app.urls')),
    url(r'^team_app/', include('apps.team_app.urls')),

    # url(r'^create_team/', include('apps.team_app.urls', namespace='team')),
    # url(r'^create_team/', include('apps.team_app.urls', namespace='login')),

    # Urls app level
    # url(r'^$', view.index, name = 'team'),


    # url(r'^create_team/', include('apps.team_app.urls', namespace='login')),


    # url(r'^logout/', include('apps.login_app.urls')),
    # url(r'^register/', include('apps.login_app.urls')),
    # url(r'^success/', include('apps.team_app.urls')),
    # url(r'^create/$', include('apps.team_app.urls')),

    # url(r'^create_team/', include('apps.team_app.urls', namespace='team')),

    # url(r'^$', views.toindex, name = 'my_index'),
    # url(r'^this_app/new$', views.new, name = 'my_new'),
    # url(r'^this_app/(?P<id>\d+)/edit$', views.edit, name 'my_edit'),
    # url(r'^this_app/(?P<id>\d+)/delete$', views.deletename = 'my_delete'),
    # url(r'^this_app/(?P<id>\d+)$', views.show, name 'my_show'),
    # url(r'^time-display/', include('apps.time_display.urls')),
    # url(r'^rand-word/', include('apps.random_word.urls')),
    # url(r'^ninjas/', include('apps.disappearing_ninja.urls')),
    # url(r'^ninja-gold/', include('apps.ninja_gold.urls')),
    # url(r'^courses/', include('apps.courses.urls'))
]
