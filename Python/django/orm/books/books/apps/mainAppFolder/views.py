from django.shortcuts import render, HttpResponse
from .models import Book

def index(request):
    Book.objects.create(title="Cannery Row", author="John Steinbeck", published_date="1938-01-17", category='fiction', in_print="True")
    Book.objects.create(title="Killing Pablo", author="Mark Bowden", published_date="2001-04-23", category='non-fiction', in_print="True")
    Book.objects.create(title="Henry IV pt 1", author="William Shakespeare", published_date="1597-04-23", category='drama', in_print="True")
    Book.objects.create(title="The Hungry Caterpillar", author="Eric Carle", published_date="1996-09-01", category="children's fiction", in_print="True")
    Book.objects.create(title="Alexander Hamilton", author="Ron Chernow", published_date="2009-06-12", category='biography', in_print="True")
    books = Book.objects.all()
    for book in books:
        print book.title, book.author, book.published_date, book.category, book.in_print
    return render(request, 'mainApp/index.html')