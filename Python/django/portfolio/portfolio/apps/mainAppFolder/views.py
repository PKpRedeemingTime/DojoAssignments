# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect

def index(response):
    return render(response, 'mainApp/index.html')

def testimonials(response):
    return render(response, 'mainApp/testimonials.html')

def create(request):
    print (request.method)
    if request.method == "POST":
        print ('*'*50)
        print (request.POST)
        print ('*'*50)
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')
