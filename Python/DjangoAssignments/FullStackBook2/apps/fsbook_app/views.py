# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import Books

# Create your views here.
def index(request):
    # Books.objects.create(title="Python Crash Course: A Hands-On, Project-Based Introduction to Programming Python 2", author = "Eric Mathews", category = "Computer programming book")
    Books.objects.create(title = request.POST['title'], category = request.POST['category'], author = request.POST['author'])
    book = Books.objects.all()
    # del_book = Books.objects.filter(id__gt=1).delete() ---- Delete
    context = {
        'items': book
    }

    return render(request, 'fsbook_app/index.html', context)
