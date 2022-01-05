from django.db import models

# Create your models here.

class Lead(models.Model):
    first = models.CharField(max_length=30)
    last = models.CharField(max_length=40)
    email = models.EmailField(max_length=254)
    mobile = models.CharField(max_length=11)

    def __str__(self):
        return self.last
