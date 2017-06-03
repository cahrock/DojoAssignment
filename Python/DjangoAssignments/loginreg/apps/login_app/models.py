from django.shortcuts import render, redirect
from django.db import models
from django.db.models import Count

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
#
class UserManager(models.Manager):

    def login(self, _login):
        _error = {
            'flag': True,
            'err_message': []
        }

        if len(_login['email']) == 0 or len(_login['password']) == 0:
            _error['err_message'].append("You must enter both email and password.")
            _error['flag'] = False

        try:
            email_ = self.get(email = _login['email'])
        except self.model.DoesNotExist:
            _error['flag'] = False
            _error['err_message'].append("Email does not exist.")

        try:
            pass_ = self.get(password = _login['password'])
        except self.model.DoesNotExist:
            _error['flag'] = False
            _error['err_message'].append("Password does not match.")
        return _error

    def register(self, _register):
        flag = True
        err_message = []
        flag = True
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
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)

      objects = UserManager()
