from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import random

def index(request):
    return render(request, 'mainApp/index.html')

def process_money(request):
    if request.POST['action'] == "farm":
        request.session['goldTry'] = random.randrange(10,21)
        request.session['gold'] += request.session['goldTry']
        request.session['earnedLost'] = "Earned "
        request.session['where'] = " golds from the farm!"
        return redirect('/')
    elif request.POST['action'] == "cave":
        request.session['goldTry'] = random.randrange(5,11)
        request.session['gold'] += request.session['goldTry']
        request.session['earnedLost'] = "Earned "
        request.session['where'] = " golds from the cave!"
        return redirect('/')
    elif request.POST['action'] == "house":
        request.session['goldTry'] = random.randrange(2,5)
        request.session['gold'] += request.session['goldTry']
        request.session['earnedLost'] = "Earned "
        request.session['where'] = " golds from the house!"
        return redirect('/')
    elif request.POST['action'] == "casino":
        request.session['goldTry'] = random.randrange(-50,51)
        request.session['gold'] += request.session['goldTry']
        if request.session['goldTry'] >= 0:
            request.session['earnedLost'] = "Earned "
            request.session['where'] = " golds from the casino!"
        else:
            request.session['earnedLost'] = "Lost "
            request.session['where'] = " golds from the casino!"
        return redirect('/')