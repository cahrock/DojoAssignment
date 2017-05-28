# -*- coding: utf-8 -*-
from django.shortcuts import render, HttpResponse, redirect
from .models import Users


# Create your views here.
def index(request):
    if 'errors' not in request.session:
        request.session['errors'] = 0


    return render(request, 'teams_app/index.html')

def create(request):
    request.session['errors'] = Users.objects.register(request.POST)

    if request.session['errors']['errorsPresent'] is True:
        return redirect('/')
    else:
        request.session['logged_user'] = request.POST['email']
        return redirect('/success')

def login(request):
    request.session['errors'] = Users.objects.login(request.POST)


    if request.session['errors']['errorsPresentLogin'] is True:
        return redirect('/')
    else:
        request.session['logged_user'] = request.POST['email_login']
        return redirect('/success')

def success(request):

    return render(request, 'teams_app/success.html')
