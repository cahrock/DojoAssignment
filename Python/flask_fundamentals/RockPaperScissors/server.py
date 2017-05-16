from flask import Flask, redirect, render_template, request, session
import random
app = Flask(__name__)
app.secret_key = "hkjkfdsiooewmc78erljwnfw9932"


@app.route('/')
def home():
    if "win" in session:
        if(session["win"]):
            return render_template('index.html', win=session["win"])
        else:
            return render_template("index.html")
    return render_template('index.html')

@app.route('/process_play/<player_choice>', methods=["POST", "get"])
def processPlay(player_choice):
    if(True):
        session["win"] = True
    return redirect('/')

app.run(debug=True)
