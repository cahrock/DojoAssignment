# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-01 18:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quote_app', '0003_auto_20170601_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quotes',
            name='posted_by',
            field=models.CharField(max_length=100),
        ),
    ]
