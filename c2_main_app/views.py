from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import HttpResponse
from django.contrib import messages
from django.views.decorators.http import require_GET

# Create your views here.
def index(request):

    # Home page for committed conditioning
    return render(request, 'c2_main_app/index.html')