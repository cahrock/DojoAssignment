from django.shortcuts import render, redirect
from django.db import models
from django.db.models import Count
from datetime import datetime

import re

USERNAME_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+$')
#
class UserManager(models.Manager):

    def login(self, _login):
        flag = True
        errors = []
        if  len(_login['username']) ==0:
            flag = False
            errors.append('You must provide username.')
        if  len(_login['password']) == 0:
            flag = False
            errors.append('You must provide password')
        if not self.filter(username = _login['username']):
            flag = False
            errors.append('Your username not in our record.')
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
        if len(_register['name']) < 1:
            flag = False
            err_message.append("Your entry for full name must not be blank.")

        if len(_register['username']) < 1:
            flag = False
            err_message.append("Your entry for Username must not be blank.")
        #  len password > 8
        if len(_register['password']) < 8:
            flag = False
            err_message.append("Your password must be 8 characters long.")

        # REGEX - date
        if not USERNAME_REGEX.match(_register['username']):
            flag = False
            err_message.append("Your username is notvalid, characters and digits only.")
        # passwords match
        if not _register['password'] ==  _register['confirm']:
            flag = False
            err_message.append("Your password don't match.")

        if not len(self.filter(username = _register['username'])) == 0:
            flag = False
            err_message.append("Username's already exist.")

        if flag:
            new_user=self.create(name=_register['name'], username = _register['username'], password=_register['password'])
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
      name = models.CharField(max_length=100)
      username = models.CharField(max_length=100)
      password = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)

      objects = UserManager()
