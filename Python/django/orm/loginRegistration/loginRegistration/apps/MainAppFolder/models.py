from __future__ import unicode_literals
from django.contrib import messages
from django.db import models
import re, bcrypt, datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, postData, request):
        if User.objects.filter(username = postData['client_username']).exists():
            hashed = str(User.objects.only('password').get(username = postData['client_username']).password)
            if hashed == bcrypt.hashpw(str(postData['client_password']), hashed):
                request.session['id'] = User.objects.only('id').get(username = postData['client_username']).id
                request.session['name'] = User.objects.only('name').get(username = postData['client_username']).name
                return True
            else:
                messages.warning(request, 'Password does not match username in our database.')
                return False
        else:
            messages.warning(request, 'Username is not in our database.')
            return False
    def register(self, postData, request):
        if User.objects.filter(username = postData['username']).exists():
            messages.error(request, 'username is already in our database.')
            return False
        else:
            flag = True
            if len(postData['name']) < 2:
                messages.error(request, 'Your first name must be at least two characters.')
                flag = False
            if len(postData['username']) < 2:
                messages.error(request, 'Your last name must be at least 2 characters.')
                flag = False
            if  not re.match('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', postData['email']):
                messages.error(request, 'Your email format is incorrect.')
                flag = False
            if len(postData['password']) < 8:
                messages.error(request, 'Password must be at least 8 characters.')
                flag = False
            if postData['password'] != postData['confirm_password']:
                messages.error(request, 'Your password does not match your password confirmation.')
                flag = False
            if flag == True:
                password = bcrypt.hashpw(str(postData['password']), bcrypt.gensalt())
                User.objects.create(name = postData['name'], username = postData['username'], email = postData['email'], password = password)
                request.session['id'] = User.objects.only('id').get(email = postData['email']).id
                request.session['name'] = postData['name']
                return True
            if flag == False:
                return False

    def add(self, postData, request):
        flag = True
        if len(postData['destination']) < 1:
            messages.error(request, "Please enter a destination for your trip.")
            flag = False
        if len(postData['start_date']) < 1:
            messages.error(request, "Please enter a start date for your trip.")
            flag = False
        if len(postData['end_date']) < 1:
            messages.error(request, "Please enter an end date for your trip.")
            flag = False
        if len(postData['description']) < 1:
            messages.error(request, "Please enter a description for your trip.")
            flag = False
        if postData['end_date'] < postData['start_date']:
            messages.error(request, "Please enter an end date that is after your start date.")
            flag = False
        if flag == True:
            Trip.objects.create(destination = postData['destination'], planned_by = request.session['name'], start_date = postData['start_date'], end_date = postData['end_date'], description = postData['description'])
            return True
        if flag == False:
            return False
            

class User(models.Model):
    name = models.CharField(max_length=40)
    username = models.CharField(max_length=40)
    email = models.CharField(max_length=75)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()