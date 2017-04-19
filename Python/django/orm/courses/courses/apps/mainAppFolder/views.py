from django.shortcuts import render, redirect
from .models import Course

def index(request):
    context = {
        "courses" : Course.objects.all()
    }
    return render(request, 'mainApp/index.html', context)

def add(request):
    Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def remove(request, id):
    context = {
        "id" : int(id),
        "course" : Course.objects.get(id=id)
    }
    return render(request, 'mainApp/remove.html', context)

def delete(request, id):
    context = {
        "id" : int(id)
    }
    Course.objects.filter(id=id).delete()
    return redirect('/', context)