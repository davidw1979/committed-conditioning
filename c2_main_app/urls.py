from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

app_name = 'c2_main_app'

urlpatterns = [
    #Home page
    path('', views.index, name='index'),
    path('consultation', views.consultation, name='consultation'),
    path("robots.txt", views.robots_txt),
]