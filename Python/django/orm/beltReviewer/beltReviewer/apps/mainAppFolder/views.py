from django.shortcuts import render, redirect
from django.contrib import messages
from django.db.models import Q, Count
import bcrypt
from .models import User

def index(request):
    return render(request, 'mainApp/index.html')

def login(request):
    result = User.objects.login(request.POST, request)
    if result == True:
        return redirect('/books')
    else:
        return redirect('/')

def registration(request):
    result = User.objects.register(request.POST, request)
    if result == True:
        return redirect('/books')
    else:
        return redirect('/')
    
def books(request):
    context = {
        "users" : User.objects.all(),
        "name" : User.objects.get(id = request.session['id']),
    }
    return render(request, 'mainApp/books.html', context)

def add(request):
    return render(request, 'mainApp/add.html')

def reviews(request):
    return render(request, 'mainApp/reviews.html')

def users(request):
    return render(request, 'mainApp/user.html')