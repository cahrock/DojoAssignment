from django.db import models

# Create your models here.
# A product should have a name, description, weight, price, cost (to seller), and category. Figure out what type should be assigned to each field.
#
# Once all the previous steps are complete, test your code by adding 3 new products. Retrieve all rows from your table and print each to the console.

class Products (models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField()
    weight = models.CharField(max_length=45)
    price = models.IntegerField()
    cost = models.IntegerField()
    category = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
