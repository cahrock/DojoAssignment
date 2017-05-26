# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Courses, Description

# Create your views here.
def index(request):
    Courses.objects.all()
    return render(request, 'courses_app/index.html')

def add_course(request):
    Courses.objects.create(name = request.POST['name'])
    return redirect('/')
