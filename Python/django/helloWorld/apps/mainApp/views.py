from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse

def index(request):
    print "Hello world!"
    response = "Hello world!"
    return HttpResponse(response)


