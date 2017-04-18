from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect

def index(response):
    return render(response, 'mainApp/index.html')

def landscapeNumber(request, number):
    context = {
        "number" : int(number)
    }
    return render(request, 'mainApp/landscapes.html', context)
