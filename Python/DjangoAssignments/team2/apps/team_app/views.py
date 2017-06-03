# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .models import Team, Player, UserManager
from ..login_app.models import User
from django.contrib import messages
from django.db.models import Count
from sets import Set

# Create your views here.

def success(request):
    a = set(Team.objects.all())
    b = set(Team.objects.filter(team_name__user_id__email = request.session['loggedin_user']))
    team_not = (a.difference(b))
    team_name = Team.objects.show_all(request.POST)
    team_joined = Team.objects.filter(team_name__user_id__email= request.session['loggedin_user']).order_by('-team_name')
    context = {
        'items': team_name,
        'teamnot': team_not,
        'teamjoined':team_joined
    }
    return render(request, 'team_app/success.html', context)


def create(request):
    # Team.objects.delete()
    create_team = Team.objects.create_(request.POST)
    if create_team['flag']:
        context={'items': create_team }
        return redirect('/success', context)
    else:
        context={'items': create_team['err_message'] }
    return redirect('/success')


def profile(request, user_id):
    user_profile = User.objects.filter(id = user_id)
    context={'items': user_profile}
    return render(request, 'team_app/profile.html', context)

def deletejoin(request, team_id):
    delete_join = Player.objects.filter(team__id = team_id).filter(user__email = request.session['loggedin_user']).delete()
    return redirect('/success')

def teamdetail(request, team_id):
    _teamdetail = User.objects.filter(id=team_id)
    _count = Player.objects.filter(team_id = team_id).annotate(num_count=Count('user_id'))
    context={'items': _teamdetail, 'count_': _count}
    print _count
    return render(request, 'team_app/teamdetail.html', context)


def jointeam(request):
    team_ = Team.objects.filter(id = request.POST['tname'])
    user_ = User.objects.filter(email = request.session['loggedin_user'])
    jointeam = Player.objects.create(user= user_[0], team= team_[0])
    return redirect('/success')
