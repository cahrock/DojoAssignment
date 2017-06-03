# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login_app.models import User
from datetime import datetime
from django.db import models
import re

DATE_REGEX = re.compile(r'^(\d+-\d+-\d+)+$')

# Create your models here.
class TripManager(models.Manager):
    def createtrip(self, info, session):
        # check validation
        flag = True
        errors = []

        # start_date = timezone.now().date()
        # end_date = start_date + timedelta( days=1 )
        # Entry.objects.filter(created__range=(start_date, end_date))

        if len(info['destination']) < 1:
            flag = False
            errors.append("You have to enter your destination")
        if len(info['description']) < 1:
            flag = False
            errors.append("You have to enter your description")
        if len(info['datefrom']) > 0 and len(info['dateto']) > 0:
            depart = datetime.strptime(info['datefrom'],'%Y-%m-%d')
            arrive = datetime.strptime(info['dateto'],'%Y-%m-%d')
            if depart < datetime.now():
                flag = False
                errors.append('Your departure date already past.')
            if arrive < depart:
                flag = False
                errors.append('Your arrival date can not be earlier than departure date.')
        else:
            flag = False
            errors.append('Dont forget to enter your travel date from/to.')

        if info['datefrom'] and info['dateto']:
            depart = datetime.strptime(info['datefrom'],'%Y-%m-%d')
            arrive = datetime.strptime(info['dateto'],'%Y-%m-%d')
        if not DATE_REGEX.match(info['datefrom']):
            flag = False
            errors.append('Please enter date with MM-DD-YYYY format.')
        if not DATE_REGEX.match(info['dateto']):
            flag = False
            errors.append('Please enter date with MM-DD-YYYY format.')

        if flag:
            user = User.objects.filter(username= session)
            print user[0].id
            print user[0].name
            print user[0].username
            addtrip = Trips.objects.create(user = user[0], destination = info['destination'], description= info['description'], date_from= info['datefrom'], date_to= info['dateto'])
            return (True, addtrip)
        else:
            return (False, errors)

class Trips(models.Model):
    user = models.ForeignKey(User, default=True, related_name='user_trip')
    destination = models.CharField(max_length=255)
    description = models.TextField(max_length=500)
    date_from = models.DateField()
    date_to = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TripManager()

class JoinTrips(models.Model):
    user = models.ForeignKey(User, related_name='user_join_trip')
    trip = models.ForeignKey(Trips, related_name='trip_join')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
