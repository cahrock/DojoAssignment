from django.shortcuts import render, HttpResponse
import datetime

# Create your views here.
def index(request):
    timeNow = {'dateTime': datetime.datetime.now()}

    return render(request, 'timedisplayassignment_app/index.html', timeNow)
