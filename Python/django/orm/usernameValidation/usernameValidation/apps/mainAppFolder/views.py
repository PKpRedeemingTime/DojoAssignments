from django.shortcuts import render, redirect
from .models import User

def index(request):
    return render(request, 'mainApp/index.html')

def process(request):
    result = User.objects.login(request.POST['username'])
    if result == True:
        User.objects.create(username=request.POST['username'])
        return redirect('/success')
    else:
        request.session['error'] = result['error']
        return redirect('/')

def success(request):
    context = {
        "users" : User.objects.all()
    }
    request.session.clear()
    return render(request, 'mainApp/success.html', context)