# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from.models import Trips, JoinTrips, TripManager
from ..login_app.models import User
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def travels(request):

    a = set(Trips.objects.all())
    b = set(Trips.objects.filter(trip_join__user_id__username= request.session['loggedin_user']))
    trip_not = (a.difference(b))

    userid = User.objects.filter(username = request.session['loggedin_user'])
    my_trip = Trips.objects.filter(user_id = userid)
    all_mytrip = JoinTrips.objects.filter(user_id = userid).order_by('trip__date_from')

    return render(request, 'travel_app/travels.html', {
        'itemsnot': trip_not,
        'allmytrip':all_mytrip
    })

def addtripplan(request):
    request.session['loggedin_user']
    return  render(request, 'travel_app/add-trip-plan.html')

def processing(request):
    session = request.session['loggedin_user']
    trip_plan = Trips.objects.createtrip(request.POST, session)
    if trip_plan[0]:
        t = Trips.objects.filter(destination = request.POST['destination'])
        u = User.objects.filter(username = request.session['loggedin_user'])

        traveljoin = JoinTrips.objects.create(user=u[0], trip=t[0])
        return redirect('/travel_app/add-trip-plan')
    else:
        for i in trip_plan[1]:
            messages.info(request,i)
            return redirect('/travel_app/add-trip-plan')

def deletejoin(request, id):
    delete_join = JoinTrips.objects.filter(trip__id = id).filter(user__username = request.session['loggedin_user']).delete()
    return redirect('/travel_app/travels')

def destination(request, id):
    return render(request, 'travel_app/destination.html',{
        'items': Trips.objects.filter(id=id)[0],
        'itemsJoin': JoinTrips.objects.filter(trip_id= id),
    })

def jointhetrip(request, id):
    user= User.objects.filter(username= request.session['loggedin_user'])
    trip= Trips.objects.filter(id= id)
    join= JoinTrips.objects.create(user= user[0], trip= trip[0])
    
    return redirect('/travel_app/travels')

def logout(request):
    request.session.clear()
    return redirect('/')
