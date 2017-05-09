from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index),
    url(r'^login$', views.login),
    url(r'^registration$', views.registration),
    url(r'^books$', views.books),
    url(r'^add$', views.add),
    url(r'^reviews$', views.reviews),
    url(r'^users$', views.users),
]