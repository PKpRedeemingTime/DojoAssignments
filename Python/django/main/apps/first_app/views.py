from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
def index(request):
    return render(request, "first_app/index.html")

def show(request):
    return render(request, 'first_app/show_users.html')

