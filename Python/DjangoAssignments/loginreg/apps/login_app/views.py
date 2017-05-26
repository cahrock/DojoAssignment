# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import User, UserManager

# Create your views here.
def index(request):
    return render(request, 'login_app/index.html')

# def login(request):
#     user_login = User.userManager.login(request.POST)
#     if user_login == True:
#         print ('success')
#         return render(request, 'login_app/success.html')
#     else:
#         print ('cant empty')
#         return redirect('/')

    # User.userManager.login(request.POST['email'], request.POST['password'])

def login(request):
    check_login = User.userManager.login(request.POST)
    if check_login[0]:
        return redirect('/success')
    else:
        for err in check_login[1]:
            print check_login[1]
            messages.error(request, err)
    return redirect('/')

def register(request):
    check_register = User.userManager.register(request.POST)
    if check_register[0]:
        # request.session['logged_in_user'] = check_register[0]
        return redirect('/success')
    else:
        for err in check_register[1]:
            print check_register[1]
            messages.error(request, err)

    # User.userManager.register(request.POST['first_name'], request.POST['last_name'], request.POST['email'], request.POST['password'], request.POST['confirm'])
    return redirect('/')

def success(request):

    return render(request, 'login_app/success.html')
