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
        return redirect(reverse('success'))
    else:
        return redirect('/')

def registration(request):
    result = User.objects.register(request.POST, request)
    if result == True:
        return redirect(reverse('success'))
    else:
        return redirect('/')
    
def success(request):
    context = {
        "users" : User.objects.all(),
    }
    return render(request, 'mainApp/success.html', context)