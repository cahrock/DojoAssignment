from django.db import models

# Create your models here.
# A product should have a name, description, weight, price, cost (to seller), and category. Figure out what type should be assigned to each field.
#
# Once all the previous steps are complete, test your code by adding 3 new products. Retrieve all rows from your table and print each to the console.

class Products (models.Model):
    name = models.CharField(max_length=145)
    description = models.TextField()
    weight = models.IntegerField()
    price = models.FloatField()
    cost = models.FloatField()
    category = models.CharField(max_length=145)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
