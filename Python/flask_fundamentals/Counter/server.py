from flask import Flask, request, redirect, request,url_for, session, render_template

app = Flask(__name__)
app.secret_key = "session_key"

app.route("/")
def home():

    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 0
    return render_template("index.html", count = session["count"])
# @app.route("/", methods=['GET, POST'])
# def level():
#     session["checkCount"] = 0
#     if session.request.form['btn'] == 'level 1':
#         session['checkCount'] += 2
#     elif session.request.form['btn'] == 'level 2':
#         session['checkCount'] -=1
#
#     return render_template('imdex.html', varCount=session['checkCount'])

    # num = session.pop(checkCount, 1)
    # session["checkCount"] += 2
    # if varkCount in session:
    #     return "check Count"

app.run(debug=True)
