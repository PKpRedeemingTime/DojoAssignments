from django.shortcuts import render, HttpResponse
from .models import Product

def index(request):
    Product.objects.create(name="Ribeye", description="A cut of steak", weight='1', price='15', cost='5', category='meat')
    Product.objects.create(name="Orange", description="An orange colored citrus fruit", weight='1', price='2', cost='1', category='fruit')
    Product.objects.create(name="Coke Zero", description="A soda with zero calories", weight='1', price='2', cost='1', category='beverage')
    products = Product.objects.all()
    for product in products:
        print product.name, product.description, product.weight, product.price, product.cost, product.category
    return render(request, 'mainApp/index.html')