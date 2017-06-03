# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User, UserManager
from django.contrib import messages

# Create your views here.
def index(request):

    context = {
        'items': User.objects.show()
    }
    return render(request, 'login_app/index.html', context)

def login(request):
    check_login = User.objects.login(request.POST)
    request.session['loggedin_user'] = request.POST['username']

    if check_login == True:
        return redirect('/travel_app/travels')
    else:
        for i in check_login[1]:
            messages.info(request,i)
        return redirect ('/')
    return redirect('/')

def logout(request):
    request.session.clear()
    return redirect('/')
#
def register(request):
    check_register = User.objects.register(request.POST)
    request.session['loggedin_user'] = request.POST['username']
    # request.session['loggedin_user'] = check_register[0]

    if check_register[0]:
        return redirect('/travel_app/travels')
    else:
        for err in check_register[1]:
            print check_register[1]
            messages.error(request, err)
    return redirect('/')

def clear(request):
    request.session.clear()
    return redirect('/')
