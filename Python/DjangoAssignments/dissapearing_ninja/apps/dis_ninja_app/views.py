from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, "dis_ninja_app/index.html")

def ninjas(request, color):

    context = {
        "blue" : "leonardo",
        "red" : "raphael",
        "orange" : "michelangelo",
        "purple" : "donatello"
    }

    if color not in context:
        content = {'image': 'notapril'}
    else:
        content = {'image': context[color]}
        # content = {'image': 'dis_ninja_app/images/context[color].jpg'}
    return render(request, "dis_ninja_app/ninjas.html", content)
