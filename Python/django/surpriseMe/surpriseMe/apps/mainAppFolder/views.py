from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import random
VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

def index(response):
    return render(response, 'mainApp/index.html')

def results(request):
    random.shuffle(VALUES)
    number = request.POST['number']
    output = []
    for count in range(0, int(number)):
        output.append(VALUES[count])
    context = {
        "values" : output,
        "number" : number
    }
    return render(request, 'mainApp/results.html', context)
