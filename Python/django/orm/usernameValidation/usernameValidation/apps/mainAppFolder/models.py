from __future__ import unicode_literals
from django.contrib import messages
from django.db import models

class UserManager(models.Manager):
    def login(self, postData):
        print"*"*75
        username = postData
        if len(username) < 8 or len(username) > 16:
            return {'error' : "username must be between 8 and 16 characters"}
        else:
            return True

class User(models.Model):
    username = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()