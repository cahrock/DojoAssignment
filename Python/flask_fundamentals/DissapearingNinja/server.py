from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def home():
    # render
    return render_template("index.html")

@app.route('/ninja')
def ninja():
    # render
    return render_template ("ninja.html")

@app.route('/ninja/<color>')

def ninja_color(color):
    dictionary = {
        "blue" : "leonardo",
        "red" : "raphael",
        "orange" : "michelangelo",
        "purple" : "donatello"
    }

    if color in dictionary:
        image_url = "/static/img/" + dictionary[color] + ".jpg"
        actor_name = dictionary[color]
    else:
        image_url = "/static/images/notapril.jpg"
        actor_name = "Not April"

    # if color == "purple":
    #     image_url = "/static/img/donatello.jpg"
    # elif color == "blue":
    #     image_url = "/static/img/leonardo.jpg"
    # elif color == "orange":
    #     image_url = "/static/img/michelangelo.jpg"
    # elif color == "red":
    #     image_url = "/static/img/raphael.jpg"

    # render
    #return render_template ("showingninja.html", variableone=color)
    return render_template ("showingninja.html", act_name=actor_name, variableone=color, view_image_url = image_url)

# def add(x,y):
#     return x+y
app.run(debug=True)
