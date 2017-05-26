# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import Books

# Create your views here.
def index(request):
    book = Books.objects.all()
    context = {
        'items': book
    }

    return render(request, 'fsbook_app/index.html', context)

def create(request):
    Books.objects.create(title = request.POST['title'], category = request.POST['category'], author = request.POST['author'])

    return redirect('/')

def delete(request, id):
    Books.objects.get(id= id).delete()
    return redirect('/')
