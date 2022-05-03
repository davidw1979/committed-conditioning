from datetime import datetime, timedelta
import calendar
from urllib import request
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import HttpResponse
from django.contrib import messages
from django.views.decorators.http import require_GET

from c2_main_app.models import Consultation_appt

# Create your views here.
def index(request):

    if request.method =='POST':
        firstname = request.POST.get('firstname')
        surname = request.POST.get('surname')
        email = request.POST.get('email')
        message = request.POST.get('message')
        send_mail('Committed Conditioning Enquiry', f'Name:\n{firstname} {surname}\n\nEmail:\n{email}\n\n Message:\n"{message}"', email, ['david_weatherspoon@hotmail.com'], fail_silently=False)
        messages.success(request, "Thanks for your enquiry. We'll be in touch soon.")
        return redirect('c2_main_app:index')

    # Home page for committed conditioning
    return render(request, 'c2_main_app/index.html')


def consultation(request):

    def get_suffix(date):
        date_suffix = ["th", "st", "nd", "rd"]

        if date % 10 in [1, 2, 3] and date not in [11, 12, 13]:
            return date_suffix[date % 10]
        else:
            return date_suffix[0]

    today = datetime.now().date()
    tomorrow = today + timedelta(days=1)
    end_of_week = today + timedelta(days=6 - today.weekday())
    end_of_next_week = today + timedelta(days=13 - today.weekday())

    this_weeks_appts = []
    next_weeks_appts = []
    next_four_weeks_appts = []

    print(today)
    print(tomorrow)
    print(end_of_week)
    print(end_of_next_week)

    # Query DB for list of all appts to be shown e.g. in the next 4 week period (excluding today)
    next_four_weeks = datetime.now() + timedelta(weeks=4)
    all_appts_in_next_four_weeks = list(Consultation_appt.objects.filter(appt_datetime__lt=next_four_weeks, appt_datetime__gte=tomorrow).order_by('appt_datetime'))

    for appt in all_appts_in_next_four_weeks:
        
        day_txt = str(appt.appt_datetime.date().strftime('%a'))
    
        day_of_month = int(appt.appt_datetime.strftime('%-d'))
        suffixed_day_of_month = str(day_of_month) + get_suffix(day_of_month)
        
        month_txt = str(appt.appt_datetime.date().strftime('%B'))

        appt.formatted_date = f"{day_txt} {suffixed_day_of_month} {month_txt}"

        if appt.appt_datetime.date() <= end_of_week:
            this_weeks_appts.append(appt)

        elif appt.appt_datetime.date() <= end_of_next_week:
            next_weeks_appts.append(appt)
        
        else:
            next_four_weeks_appts.append(appt)
    
    return render(request, 'c2_main_app/consultation.html', {'this_weeks_appts': this_weeks_appts, 'next_weeks_appts': next_weeks_appts, 'next_four_weeks_appts': next_four_weeks_appts})
