# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse

def index(response):
    return render(response, 'mainApp/index.html')

def testimonials(response):
    return render(response, 'mainApp/testimonials.html')