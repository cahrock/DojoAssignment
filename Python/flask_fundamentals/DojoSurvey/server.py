from flask import Flask,url_for, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
@app.route('/result')
@app.route('/result',methods = ['POST'])
def results():

    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('result.html', name=name, location=location, language=language, comment=comment)
app.run(debug=True)


# @app.route('/')
# def whatsMyName():
#      return render_template('index.html')
#
# @app.route('/process')
# @app.route('/process', methods = ['POST'])
# def process():
#     name = request.form['name']
#     return render_template('process.html',name=name)
