from django.shortcuts import render, redirect
from .models import Products

# Create your views here.
def index(request):
    # Products.objects.create(name="Nike - Air Max Ultra 2.0 Essential", description="Seamlessly designed with support and breathability right where you need it, the Nike Air Max 2017 Men's Running Shoe features a Flymesh upper combined with the plush cushioning of a full-length Max Air unit.", weight='1', price= 190, cost= 50, category='Light-weight shoes')
    #
    # Products.objects.create(name="Nike - Air Max LD - Zero", description="Seamlessly designed with support and breathability right where you need it, the Nike Air Max 2017 Men's Running Shoe features a Flymesh upper combined with the plush cushioning of a full-length Max Air unit.", weight='1', price= 190, cost= 50, category='Light-weight shoes')
    #
    # Products.objects.create(name="Nike - Air Max Zero Breathe", description="Seamlessly designed with support and breathability right where you need it, the Nike Air Max 2017 Men's Running Shoe features a Flymesh upper combined with the plush cushioning of a full-length Max Air unit.", weight='1', price= 190, cost= 50, category='Light-weight shoes')

    # <QuerySet [<Products: Products object>
    # product = Products.objects.all().exclude(name = 'Nike - Air Max Zero Breathe')

    product = Products.objects.all()
    context = {
        'item': product
    }
    return render(request, 'product_app/index.html', context)
