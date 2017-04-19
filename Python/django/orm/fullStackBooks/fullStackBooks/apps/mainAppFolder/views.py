from django.shortcuts import render, redirect
from .models import Book

def index(request):
    context = {
        "books" : Book.objects.all()
    }
    return render(request, 'mainApp/index.html', context)

def process(request):
    Book.objects.create(title=request.POST['title'], author=request.POST['author'], category=request.POST['category'])
    return redirect('/')