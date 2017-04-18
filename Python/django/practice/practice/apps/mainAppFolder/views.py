from django.shortcuts import render, HttpResponse
from .models import People

def index(request):
    People.objects.create(first_name="Patrick", last_name="Kilpatrick")
    people = People.objects.all()
    print people
    print People
    return render(request, 'mainApp/index.html')
