from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, "dis_ninja_app/index.html")

def ninjas(request):
    return render(request, 'dis_ninja_app/ninjas.html')
