# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..login_app.models import User

#Create your models here.
class UserManager(models.Manager):
    def show_all(self, _loggedin):
        _show_all = self.all().order_by('-created_at')
        return _show_all

    def create_(self, _create):
        _error = {
            'flag': True,
            'err_message':[],
            'createam': ""
        }
        if len(_create['createteam']) == 0:
            _error['flag'] = False
            _error['err_message'].append('You must enter the Team name')
        else:
            _error['createteam'] = self.create(name=_create['createteam'])
        return _error

    def userprofile(self, _profile):
        _user_profile = self.team.get(id = _profile['user_id'])
        return _user_profile

    def delete(self):
        delete_ = self.all().delete()
        return delete_

class Team(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class Player(models.Model):
    user = models.ForeignKey(User, related_name="user_name", on_delete=models.CASCADE)
    team = models.ForeignKey(Team, related_name="team_name", on_delete=models.CASCADE)
    all_teams = models.ManyToManyField(Team, related_name="all_players")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
