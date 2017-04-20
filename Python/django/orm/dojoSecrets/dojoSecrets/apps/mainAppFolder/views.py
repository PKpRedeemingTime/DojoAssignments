from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Q, Count
import bcrypt
from .models import User, Secret, Like

def index(request):
    return render(request, 'mainApp/index.html')

def login(request):
    result = User.objects.login(request.POST, request)
    if result == True:
        return redirect(reverse('secrets'))
    else:
        return redirect('/')

def registration(request):
    result = User.objects.register(request.POST, request)
    if result == True:
        return redirect(reverse('secrets'))
    else:
        return redirect('/')
    
def secrets(request):
    context = {
        "users" : User.objects.all(),
        "name" : User.objects.get(id = request.session['id']),
        "secrets" : Secret.objects.all(),
    }
    return render(request, 'mainApp/secrets.html', context)

def popular(request):
    context= {
        "secrets" : Secret.objects.all(),
        "likes" : Like.objects.all(),
    }
    return render(request, 'mainApp/popular.html')

def post(request):
    Secret.objects.create(content=request.POST['content'], user_id=request.session['id'])
    return redirect(reverse('secrets'))