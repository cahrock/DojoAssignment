from flask import Flask, redirect, render_template, url_for, request, session
from datetime import datetime
import random

app = Flask(__name__)
app.secret_key = "hfjdkshf83hjjkj89"

# def printSession():
#     try:
#         session['counter'] += 1
#     except KeyError:
#         session['counter'] = 1

@app.route('/', methods=["POST", "GET"])
def index():

    if 'gold' not in session:
        session['gold'] = 0
        session['log'] = [] # set log session
    else:
        pass

    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def process():
    if request.form['building'] == 'farm':
        gold = random.randrange(10,21)
        session['gold'] += gold
        session['log'].insert(0,("You have earned {} gold - {}".format(gold,datetime.utcnow())))
    elif request.form['building'] == 'cave':
        gold = random.randrange(5,11)
        session['gold'] += gold
        session['log'].insert(0,("You have earned {} gold - {}".format(gold,datetime.utcnow())))
    elif request.form['building'] == 'house':
        gold = random.randrange(2,6)
        session["gold"] += gold
        session['log'].insert(0,("You have earned {} gold - {}".format(gold,datetime.utcnow())))
    elif request.form['building'] == 'casino':
        gold = random.randrange(-50, 51)
        if gold < 0:
            session['log'].insert(0,("You have loss - {}".format(datetime.utcnow())))
        else:
            session['gold'] = gold
            session['log'].insert(0,("You have earned {} gold - {}".format(gold,datetime.utcnow())))

    return redirect('/')


@app.route('/reset')
def clearsession():
    # Clear the session
    session.clear()
    return redirect('/')

app.run(debug=True)
