from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import random
from datetime import datetime

def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    if not 'activity' in request.session:
        request.session['activity'] = []
    return render(request, 'mainApp/index.html')

def process_money(request):
    if request.POST['action'] == "farm":
        goldTry = random.randrange(10,21)
        request.session['color'] = 0
        request.session['gold'] += goldTry
        request.session['activity'].insert(0, "Earned {} golds from the farm! {}".format(goldTry, datetime.now()))
        return redirect('/', goldTry = goldTry)
    elif request.POST['action'] == "cave":
        goldTry = random.randrange(5,11)
        request.session['color'] = 0
        request.session['gold'] += goldTry
        request.session['activity'].insert(0, "Earned {} golds from the cave! {}".format(goldTry, datetime.now()))
        return redirect('/')
    elif request.POST['action'] == "house":
        goldTry = random.randrange(2,5)
        request.session['color'] = 0
        request.session['gold'] += goldTry
        request.session['activity'].insert(0, "Earned {} golds from the house! {}".format(goldTry, datetime.now()))
        return redirect('/')
    elif request.POST['action'] == "casino":
        goldTry = random.randrange(-50,51)
        
        request.session['gold'] += goldTry
        if goldTry >= 0:
            request.session['color'] = "green"
            request.session['activity'].insert(0, "Earned {} golds from the casino! {}".format(goldTry, datetime.now()))
        elif goldTry < 0:
            request.session['activity'].insert(0, "Lost {} golds from the casino! {}".format(goldTry, datetime.now()))
        return redirect('/')