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
    session['total_gold'] = 0
    return render_template("index.html")

@app.route('/process_money', methods=['POST','GET'])
def process():

    if request.form['building'] == 'farm':
        gold = random.randrange(10,20)
        session["total_gold"] += gold
        session['time'] = datetime.now()
        session['building'] = request.form["building"]
        return render_template('index.html', building=building, time=time,gold=gold)
    elif request.form['building'] == 'cave':
        gold = random.randrange(5,10)
        session["total_gold"] += gold
        time = datetime.now()
        building = request.form["building"]
        return render_template('index.html', building=building, time=time,gold=gold)
    elif request.form['building'] == 'house':
        gold = random.randrange(2,5)
        session["total_gold"] += gold
        time = datetime.now()
        building = request.form["building"]
        return render_template('index.html', building=building, time=time,gold=gold)
    elif request.form['building'] == 'casino':
        gold = random.randrange(-50, 50)
        session["total_gold"] += gold
        time = datetime.now()
        building = request.form["building"]
        return render_template('index.html', building=building, time=time,gold=gold)

@app.route('/clear')
def clearsession():
    # Clear the session
    session.clear()
    return redirect(url_for('index'))

app.run(debug=True)
