# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .models import User, UserManager
from django.contrib import messages
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    # User.userManager.delete()
    # request.session.clear()
    context = {
        'items': User.objects.show()
    }
    return render(request, 'login_app/index.html', context)

def login(request):
    check_login = User.objects.login(request.POST)
    request.session['loggedin_user'] = request.POST['email']
    if check_login == True:
        return redirect('/success')
    else:
        for i in check_login[1]:
            messages.info(request,i)
        return redirect ('/')

def logout(request):
    # request.session.pop('user_id', None)
    request.session.clear()
    return redirect('/')
#
def register(request):
    check_register = User.objects.register(request.POST)
    if check_register[0]:
        request.session['loggedin_user'] = request.POST['email']
        return redirect('/success')
    else:
        for err in check_register[1]:
            print check_register[1]
            messages.error(request, err)
    return redirect('/')

def success(request):

    return redirect('team_app/success')
    # return render(request, 'team_app/success.html')

def clear(request):
    request.session.clear()
    return redirect('/')
