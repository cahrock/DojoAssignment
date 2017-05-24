from django.shortcuts import render, HttpResponse

VALUES = ['item one', 'item two', 'item tree', 'item four', 'item five', 'item six']
# Create your views here.
def index(request):
    return render(request, 'surpriseme_app/index.html')

def result(request):

    if request.method == "POST":
        request.session['arr'] = []
        count = request.POST['pickme']

        for i in range(0, int(count)):
            request.session['arr'].append(str(VALUES[i]))

    return render(request, 'surpriseme_app/result.html')
