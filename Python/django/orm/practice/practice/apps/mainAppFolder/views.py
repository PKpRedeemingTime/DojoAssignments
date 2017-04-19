from django.shortcuts import render, HttpResponse
from .models import User

def index(request):
    return render(request, 'mainApp/index.html')
