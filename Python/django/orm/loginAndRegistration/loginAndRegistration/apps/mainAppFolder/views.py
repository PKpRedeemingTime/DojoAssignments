from django.shortcuts import render, redirect
from .models import User

def index(request):
    return render(request, 'mainApp/index.html')

def login(request):
    result = User.objects.login(request.POST)
    if result == True:
        request.session['email'] = request.POST['client_email']
        request.session['email'] = request.POST['client_email']
        return redirect('/success')
    else:
        request.session['error'] = result['error']
        return redirect('/')

def registration(request):
    result = User.objects.register(request.POST)
    if result == True:
        User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=request.POST['password'])
        request.session['email'] = request.POST['email']
        return redirect('/success')
    else:
        request.session['error'] = result['error']
        return redirect('/')

def success(request):
    context = {
        "users" : User.objects.all(),
    }
    return render(request, 'mainApp/success.html', context)