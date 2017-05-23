# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import re

# Create your views here.
def index(request):
    return render(request, 'simplesearching_app/index.html')
