from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re, bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, postData, request):
        if User.objects.filter(email = postData['client_email']).exists():
            print "*"*75
            print postData['client_password']
            print "*"*75
            hashed = str(User.objects.only('password').get(email = postData['client_email']).password)
            if hashed == bcrypt.hashpw(str(postData['client_password']), hashed):
                request.session['id'] = User.objects.only('id').get(email = postData['client_email']).id
                request.session['first_name'] = User.objects.only('first_name').get(email = postData['client_email']).first_name
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
            if len(postData['first_name']) >= 2:
                if len(postData['last_name']) >= 2:
                    if re.match('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', postData['email']):
                        if len(postData['password']) >= 8:
                            if postData['password'] == postData['confirm_password']:
                                password = bcrypt.hashpw(str(postData['password']), bcrypt.gensalt())
                                User.objects.create(first_name = postData['first_name'], last_name = postData['last_name'], email = postData['email'], password = password)
                                request.session['id'] = User.objects.only('id').get(email = postData['email']).id
                                request.session['first_name'] = postData['first_name']
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
                    messages.error(request, 'Your last name must be at least 2 characters.')
                    return False
            else:
                messages.error(request, 'Your first name must be at least two characters.')
                return False

class User(models.Model):
    first_name = models.CharField(max_length=38)
    last_name = models.CharField(max_length=38)
    email = models.CharField(max_length=75)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Secret(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User)

class Like(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User)
    secret = models.ForeignKey(Secret)