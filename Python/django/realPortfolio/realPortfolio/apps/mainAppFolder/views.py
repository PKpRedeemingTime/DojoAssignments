from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse

def index(response):
    return render(response, 'mainApp/index.html')

def testimonials(response):
    return render(response, 'mainApp/testimonials.html')

def about(response):
    return render(response, 'mainApp/about.html')

def projects(response):
    return render(response, 'mainApp/projects.html')