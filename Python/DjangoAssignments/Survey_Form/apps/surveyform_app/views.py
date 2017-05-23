from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):

    return render(request, 'surveyform_app/index.html')

def survey_process(request):

    if request.method == 'POST':
        # create a session
        request.session['full_name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['comment'] = request.POST['comment']
        
        request.session['count'] += 1
        return redirect('/result')

    else:
        return redirect('/')

def result(request):
    return render(request, 'surveyform_app/result.html')
