from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect

def index(response):
    return render(response, 'mainApp/index.html')

def process(request):
    if request.method == "POST":
        request.session['name'] = request.POST['client_name']
        request.session['location'] = request.POST['dojo_location']
        request.session['language'] = request.POST['favorite_language']
        request.session['comment'] = request.POST['comment']
        request.session['count'] += 1
        print request.session['name']
        print request.session['location']
        print request.session['language']
        print request.session['comment']
        return redirect('/result')
    else:
        return redirect('/')

def result(response):
    return render(response, 'mainApp/result.html')