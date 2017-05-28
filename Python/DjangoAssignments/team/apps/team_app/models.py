# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..login_app.models import User

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Player(models.Model):
    user = models.ForeignKey(User)
    team = models.ForeignKey(Team)
    all_teams = models.ManyToManyField(Team, related_name="all_players")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
