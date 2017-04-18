from django.shortcuts import render, HttpResponse
from .models import Users, Posts, Comments

def index(request):
    print"*"*75
    print Users
    print Posts
    print Comments
    print"*"*75
    return render(request, 'mainApp/index.html')