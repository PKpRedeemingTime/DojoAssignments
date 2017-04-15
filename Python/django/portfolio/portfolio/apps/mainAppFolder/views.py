# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect

def index(response):
    return render(response, 'mainApp/index.html')

def testimonials(response):
    return render(response, 'mainApp/testimonials.html')

def create(request):
    if request.method == "POST":
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')
