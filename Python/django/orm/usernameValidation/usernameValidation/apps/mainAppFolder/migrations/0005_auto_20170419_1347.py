# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-19 17:47
from __future__ import unicode_literals

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('mainAppFolder', '0004_auto_20170419_1341'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('userManager', django.db.models.manager.Manager()),
            ],
        ),
    ]