# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'portfolio_app/index.html')

def testimonials(request):
    return  render(request, 'portfolio_app/testimonials.html')

def about(request):
    return  render(request, 'portfolio_app/about.html')

def projects(request):
    return  render(request, 'portfolio_app/projects.html')