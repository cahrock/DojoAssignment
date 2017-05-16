from flask import Flask, url_for, request, render_template, redirect, session
import random

app = Flask(__name__)
app.secret_key = "keyjkbdskdsy7r34"

@app.route('/')
def index():
    if "random_num" in session:
        return render_template("index.html")
    else:
        session["random_num"] = random.randrange(0,101)

    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
    guess_num = request.form["process"]
    message = ""
    if int(guess_num) > int(session["random_num"]):
        message = ("Sorry too high, try again!")
    elif int(session["random_num"]) > int(guess_num):
        message = ("Too low!")
    elif int(guess_num) == int(session["random_num"]) :
        message = (str({{guess_num}}) + " is the number")

    print (session["random_num"])
    return render_template('index.html', message=message)



@app.route('/clear')
def clearsession():
    # Clear the session
    session.clear()
    return redirect(url_for('index'))

app.run(debug=True)
