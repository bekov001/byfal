from django.db import models


# class User(models.Model):
#     name = models.CharField(max_length=200)
#
#
# # Create your models here.
# class Capital(models.Model):
#     capital_city = models.CharField(max_length=200)
#     capital_population = models.IntegerField()
#     author = models.ForeignKey(User, on_delete=models.CASCADE)

class Order(models.Model):
    ticker = models.CharField(max_length=10)
    start_price = models.IntegerField()
    quantity_usdt = models.IntegerField()
    # alias = models.CharField(max_length=60)

    def __str__(self):
        return self.ticker

