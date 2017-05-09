from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re, bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, postData, request):
        if User.objects.filter(email = postData['client_email']).exists():
            hashed = str(User.objects.only('password').get(email = postData['client_email']).password)
            if hashed == bcrypt.hashpw(str(postData['client_password']), hashed):
                request.session['id'] = User.objects.only('id').get(email = postData['client_email']).id
                request.session['name'] = User.objects.only('name').get(email = postData['client_email']).name
                return True
            else:
                messages.warning(request, 'Your passwords do not match.')
                return False
        else:
            messages.warning(request, 'Email is not in our database.')
            return False
    def register(self, postData, request):
        if User.objects.filter(email = postData['email']).exists():
            messages.error(request, 'Email is already in our database.')
            return False
        else:
            if len(postData['name']) >= 2:
                if len(postData['alias']) >= 2:
                    if re.match('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', postData['email']):
                        if len(postData['password']) >= 8:
                            if postData['password'] == postData['confirm_password']:
                                password = bcrypt.hashpw(str(postData['password']), bcrypt.gensalt())
                                User.objects.create(name = postData['name'], alias = postData['alias'], email = postData['email'], password = password)
                                request.session['id'] = User.objects.only('id').get(email = postData['email']).id
                                request.session['name'] = postData['name']
                                return True
                            else:
                                messages.error(request, 'Your password does not match your password confirmation.')
                                return False
                        else:
                            messages.error(request, 'Password must be at least 8 characters.')
                            return False
                    else:
                        messages.error(request, 'Your email format is incorrect.')
                        return False
                else:
                    messages.error(request, 'Your alias must be at least 2 characters.')
                    return False
            else:
                messages.error(request, 'Your name must be at least two characters.')
                return False

class User(models.Model):
    name = models.CharField(max_length=38)
    alias = models.CharField(max_length=38)
    email = models.CharField(max_length=75)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

