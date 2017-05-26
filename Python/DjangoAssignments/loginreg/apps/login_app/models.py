from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):

    def login(self, _login):
        flag = True
        err_message = []
        if len(_login['email']) == 0 or len(_login['password']) == 0:
            err_message.append("You must enter both email and password.")
            flag = False

        if flag:
            return (True)
        else:
            # err_message.append("Fail login")
            return (False, err_message)



        # else:
        #     check_emal = self.get(email = _login['email'])
        #     check_passw = self.get(password = _login['password'])
        #     if _login['email'] == check_emal or _login['password'] == check_passw:
        #         print('Good to GO!')
        #     else:
        #         print("Email or password does not match in our record")

    # def register(self, first_name, last_name, email, password, confirm):
    #     print ("Register a user here")
    #     print first_name
    #     print last_name
    #     pass

    def register(self, _register):
        flag = True
        err_message = []
        flag = True
        if len(_register['first_name']) < 1:
            err_message.append("Your entry for first name must not be blank.")
            flag = False

        if len(_register['last_name']) < 1:
            flag = False
            err_message.append("Your entry for last name must not be blank.")
        # # all letters
        if not _register["first_name"].isalpha() and not _register["last_name"].isalpha():
            flag = False
            err_message.append("Your first name and last name must be letters only")
        # # # email is valid
        if not EMAIL_REGEX.match(_register['email']):
            flag = False
            err_message.append("Your email is not valid.")
        # # len password > 8
        # if len(_register['password']) < 8:
        #     flag = False
        #     err_message.append("Your password must be 8 characters long.")
        # # passwords match
        # if not _register['password'] == _register['c_password']:
        #     flag = False
        #     err_message.append("Your password don't match.")
        # # everything is good
        if flag:
            new_user = User.userManager.create(first_name=_register['first_name'], last_name = _register['last_name'], email=_register['email'], password=_register['password'])
            return (True, new_user)
        else:
            # err_message.append("Fail login")
            return (False, err_message)


class User(models.Model):
      first_name = models.CharField(max_length=45)
      last_name = models.CharField(max_length=45)
      email = models.CharField(max_length=255)
      password = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)

      userManager = UserManager()
