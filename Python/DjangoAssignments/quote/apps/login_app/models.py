from django.shortcuts import render, redirect
from django.db import models
from django.db.models import Count
from datetime import datetime

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
#
class UserManager(models.Manager):

    def login(self, _login):
        flag = True
        errors = []
        if  len(_login['email']) ==0:
            flag = False
            errors.append('You must provide email.')
        if  len(_login['password']) == 0:
            flag = False
            errors.append('You must provide password')
        if not self.filter(email = _login['email']):
            flag = False
            errors.append('Your email not in our record.')
        if not self.filter(password = _login['password']):
            flag = False
            errors.append('Your password is incorrect.')

        if flag:
            return True
        else:
            return (False, errors)

    def register(self, _register):

        err_message = []
        flag = True
        # Check char length
        if len(_register['first_name']) < 1:
            flag = False
            err_message.append("Your entry for first name must not be blank.")

        if len(_register['last_name']) < 1:
            flag = False
            err_message.append("Your entry for last name must not be blank.")
        #  len password > 8
        if len(_register['password']) < 8:
            flag = False
            err_message.append("Your password must be 8 characters long.")
        # all letters
        if not _register["first_name"].isalpha() and not _register["last_name"].isalpha():
            flag = False
            err_message.append("Your first name and last name must be letters only")
        # REGEX - email
        if not EMAIL_REGEX.match(_register['email']):
            flag = False
            err_message.append("Your email is notvalid.")
        # passwords match
        if not _register['password'] ==  _register['confirm']:
            flag = False
            err_message.append("Your password don'tmatch.")

        if not len(self.filter(email = _register['email'])) == 0:
            flag = False
            err_message.append("Email already exist.")
        # check dob length
        if len(_register['dob']) < 9:
            flag = False
            err_message.append("Please share your DoB.")

        if flag:
            new_user=self.create(first_name=_register['first_name'], last_name = _register['last_name'], email=_register['email'], password=_register['password'])
            return (True, new_user)
        else:
            return (False, err_message)

    def delete(self):
        delete_user = self.filter(id__gt=1).delete()
        return delete_user

    def show(self):
        show_user = self.all().order_by('-created_at')
        return show_user

class User(models.Model):
      first_name = models.CharField(max_length=45)
      last_name = models.CharField(max_length=45)
      email = models.CharField(max_length=255)
      password = models.CharField(max_length=100)
      date_of_birth = models.DateField(null=True)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)

      objects = UserManager()
