from django.db import models
import calendar

# Create your models here.

class Lead(models.Model):
    first = models.CharField(max_length=30)
    last = models.CharField(max_length=40)
    email = models.EmailField(max_length=254)
    mobile = models.CharField(max_length=11)

    def __str__(self):
        return self.last

class Consultation_appt(models.Model):
    appt_datetime = models.DateTimeField(unique=True)

    def __str__(self):
        return str(self.appt_datetime.date())