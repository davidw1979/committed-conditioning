from urllib import request
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import HttpResponse
from django.contrib import messages
from django.views.decorators.http import require_GET

# Create your views here.
def index(request):

    if request.method =='POST':
        firstname = request.POST.get('firstname')
        surname = request.POST.get('surname')
        email = request.POST.get('email')
        message = request.POST.get('message')

        send_mail('Committed Conditioning Enquiry', f'Name:\n{firstname} {surname}\n\nEmail:\n{email}\n\n Message:\n"{message}"', email, ['info@committedconditioning.co.uk'], fail_silently=False)
        messages.success(request, "Thanks for your enquiry. We'll be in touch soon.")
        return redirect('c2_main_app:index')

    # Home page for committed conditioning
    return render(request, 'c2_main_app/index.html')
