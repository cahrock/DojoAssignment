from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/users/<username>')
def show_user_profile(username):
	print username
    return render_template("user.html")
app.run(debug=True)

# @app.route('/users/<username>/<id>')
# def show_user_profile(username, id):
# 		print username
# 		print id
#     return render_template("user.html")


# from flask import Flask, render_template
# app = Flask(__name__)
# @app.route('/')
# def index():
#   return render_template("index.html", phrase="hello", times=5)
# app.run(debug=True)

# <html>
#     <head>
#       <title>My First Template</title>
#     </head>
#     <body>
#       <h3>My flask template with embedded Python-like code</h3>
#       <!-- this will output the value of our phrase variable -->
#       <p>Phrase: {{ phrase }}</p>
#       <!-- this will output the value of our times variable -->
#       <p>Times: {{ times }}</p>
#       <!-- here is an example of embedding a for-loop in our code -->
#       {% for x in range(0,times): %}
#       <p>{{ phrase }}</p>
#       {% endfor %}
#       <!-- here is an example of embedding an if statement in our code -->
#       {% if phrase == "hello" %}
#  <p>The phrase says hello</p>
#       {% endif %}
#     </body>
# </html>
