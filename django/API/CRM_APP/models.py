from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Clients(models.Model):
    First_Name = models.CharField(max_length=50)
    Last_Name = models.CharField(max_length=50)
    Company = models.CharField(max_length=50)
    Phone = PhoneNumberField(null=False, blank=False, unique=True)
    Email = models.EmailField()
    Balance = models.DecimalField(decimal_places=3, max_digits=12)
    select = (("Unchecked", "Unchecked"),
              ("Checked", "Checked"),
              )
    Authorization_Forms = models.CharField(choices=select, max_length=20)
    Reseller = models.CharField(choices=select, max_length=20)
    Client_may_have_Private = models.CharField(choices=select, max_length=20)

    def __str__(self):
        return self.First_Name