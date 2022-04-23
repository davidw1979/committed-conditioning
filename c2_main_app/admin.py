from django.contrib import admin

# Register your models here.
from c2_main_app.models import Lead, Consultation_appt

admin.site.register([Lead, Consultation_appt])