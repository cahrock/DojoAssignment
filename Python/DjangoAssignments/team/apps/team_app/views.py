# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'team_app/index.html')
def success(request):
    request.session['error'] = 0
    return render(request, 'team_app/success.html')
