from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, postData):
        client_email = postData['client_email']
        client_password = postData['client_password']
        try:
            preExist = self.get(email = client_email)
        except self.model.DoesNotExist:
            preExist = False
        if preExist == False:
            return {'error' : "Email is not in our database!"}
        else:
            result = User.objects.get(email = client_email)
            if result.password == client_password:
                return True
            else:
                return {'error' : "Email does not match password in our database."}
    def register(self, postData):
        first_name = postData['first_name']
        last_name = postData['last_name']
        email = postData['email']
        password = postData['password']
        confirm_password = postData['confirm_password']
        if len(first_name) < 2:
            return {'error' : "First name must be at least two letters"}
        elif len(last_name) < 2:
            return {'error' : "Last name must be at least two letters"}
        elif not first_name.isalpha():
            return {'error' : "First name can only contain letters"}
        elif not last_name.isalpha():
            return {'error' : "Last name can only contain letters"}
        elif not EMAIL_REGEX.match(email):
            return {'error' : "Email format is invalid."}
        elif len(password) < 8:
            return {'error' : "Password must be at least 8 characters"}
        elif password != confirm_password:
            return {'error' : "Password confirmation does not match password."}
        else:
            return True

class User(models.Model):
    first_name = models.CharField(max_length=38)
    last_name = models.CharField(max_length=38)
    email = models.CharField(max_length=75)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()