from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse

def index(response):
    return render(response, 'mainApp/index.html')

def ninjas(request):
    request.session['check'] = "true"
    print request.session['check']
    return render(request, 'mainApp/ninja.html')

def ninjasColor(request, color):
    request.session['check'] = "false"
    context = {
        "color" : color
    }
    return render(request, 'mainApp/ninja.html', context)