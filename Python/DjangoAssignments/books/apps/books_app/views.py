# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import Books

# Create your views here.
# title, author, published date, category.

def index(request):
    # Books.objects.create(title="Python Crash Course: A Hands-On, Project-Based Introduction to Programming Python", author = "Eric Mathews", published_date = '2015-10-20 02:00', in_print='True', category = "Computer programming book")
    #
    # Books.objects.create(title="Python Programming: An Introduction to Computer Science", author = "John Zelle", published_date = '2016-05-05 00:00', in_print='False', category = "Computer programming book")
    #
    # Books.objects.create(title="Learning Python, 5th Edition", author = "Mark Lutz", published_date = '2016-01-15 00:00', in_print='False', category = "Computer programming book")
    #
    # Books.objects.create(title="Two Scoops of Django: Best Practices for Django 1.8", author = "Daniel Roy Greenfield", published_date = '2016-04-22 01:00', in_print='False', category = "Computer programming book")
    #
    # Books.objects.create(title="Django Unleashed", author = "Andrew Pinkham", published_date = '2015-03-10 00:00', in_print='False', category = "Computer programming book")

    products = Books.objects.all()
    print products
    context = {
        'books': products
    }
    return render(request, 'books_app/index.html', context)
