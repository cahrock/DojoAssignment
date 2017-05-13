from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def whatsMyName():
     return render_template('index.html')

@app.route('/process')
@app.route('/process', methods = ['POST'])
def process():
    name = request.form['name']
    return render_template('process.html',name=name)
# @app.route('/signup', methods = ['POST'])
# def signup():
#     email = request.form['email']
#     print("The email address is '" + email + "'")
#     return redirect('/')

app.run(debug=True)
