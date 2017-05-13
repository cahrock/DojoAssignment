from flask import Flask, render_template,request, session
import randomButton
app.session

app = Flask(__name__)

@app.route('/')
def home():
    rock_btn = request.form
    return render_template('index.html')

@app.route('/process_play/<player_choice>', methods["POST", "get"])
def processPlay(player_choice):

    return

app.run(debug=True)
