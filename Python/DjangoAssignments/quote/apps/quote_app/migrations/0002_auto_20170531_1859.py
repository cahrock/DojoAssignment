# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-31 18:59
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quote_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorites',
            name='quote_com',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quote_fav', to='quote_app.Quotes'),
        ),
        migrations.AlterField(
            model_name='favorites',
            name='user_com',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_fav', to='login_app.User'),
        ),
    ]
