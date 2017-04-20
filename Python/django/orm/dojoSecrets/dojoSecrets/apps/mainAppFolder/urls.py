from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index, name = "index"),
    url(r'^mainApp/login$', views.login, name = "login"),
    url(r'^mainApp/registration$', views.registration, name = "registration"),
    url(r'^mainApp/secrets$', views.secrets, name = "secrets"),
    url(r'^mainApp/popular$', views.popular, name = "popular"),
]