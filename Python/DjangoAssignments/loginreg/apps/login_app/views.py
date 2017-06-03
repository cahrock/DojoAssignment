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
    if check_login['flag']:
        return redirect('/success')
    else:
        for err in check_login['err_message']:
            messages.error(request, err)
    return redirect('/')

def logout(request):
    # request.session.pop('user_id', None)
    request.session.clear()
    return redirect('/')
#
def register(request):
    check_register = User.objects.register(request.POST)
    if check_register[0]:
        # user_session = User.objects.filter(email= request.POST['first_name'])
        request.session['user_name'] = request.POST['first_name']
        # request.session['user_name'] = user_session[0].id

        return redirect('/success')
    else:
        for err in check_register[1]:
            print check_register[1]
            messages.error(request, err)
    return redirect('/')
#
def success(request):

    return render(request, 'login_app/success.html')

def clear(request):
    request.session.clear()
    return redirect('/')
