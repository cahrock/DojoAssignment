# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-25 19:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('friends_app', '0002_joinfriends'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='joinfriends',
            name='name',
        ),
        migrations.RemoveField(
            model_name='joinfriends',
            name='name2',
        ),
        migrations.AddField(
            model_name='joinfriends',
            name='person1',
            field=models.ForeignKey(default=True, on_delete=django.db.models.deletion.CASCADE, related_name='person1', to='friends_app.Person'),
        ),
        migrations.AddField(
            model_name='joinfriends',
            name='person2',
            field=models.ForeignKey(default=True, on_delete=django.db.models.deletion.CASCADE, related_name='person2', to='friends_app.Person'),
        ),
    ]
