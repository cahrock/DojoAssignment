
from django.shortcuts import render
from models import Users

# Create your views here.
def index(request):
    return render(request, 'thewall_app/index.html')
