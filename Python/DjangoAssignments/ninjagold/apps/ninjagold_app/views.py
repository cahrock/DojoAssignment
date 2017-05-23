from django.shortcuts import render, redirect, HttpResponse
import random
from datetime import datetime

# Create your views here.
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
        request.session['log'] = []
    else:
        pass
    return render(request, 'ninjagold_app/index.html')

def process_money(request):

        if request.POST['building'] == 'farm':
            gold = random.randrange(10,20)
            request.session['gold'] += gold
            request.session['log'].insert(0, ("You have earned {} gold - {}".format(gold,datetime.utcnow())))
            return redirect('/')
        elif request.POST['building'] == 'cave':
            gold = random.randrange(5,11)
            request.session['gold'] += gold
            request.session['log'].insert(0, ("You have earned {} gold - {}".format(gold,datetime.utcnow())))
            return redirect('/')
        elif request.POST['building'] == 'house':
            gold = random.randrange(2,6)
            request.session['gold'] += gold
            request.session['log'].insert(0, ("You have earned {} gold - {}".format(gold,datetime.utcnow())))
            return redirect('/')
        elif request.POST['building'] == 'casino':
            gold = random.randrange(-50,51)
            if gold < 0:
                request.session['log'].insert(0,("You have loss - {}".format(datetime.utcnow())))
                return redirect('/')
            else:
                request.session['gold'] += gold
                request.session['log'].insert(0,("You have earned {} gold - {}".format(gold,datetime.utcnow())))
            return redirect('/')

        return redirect('/')

def reset(request):
    # Clear the session
    request.session.clear()
    return redirect('/')
