from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    query = "SELECT CONCAT(first_name, ' ', last_name) AS name, \
            age, DATE_FORMAT(created_at,'%d %b %Y') as created_at FROM friends"                           # define your query
    friends = mysql.query_db(query)
    print friends                         # run query with query_db()
    return render_template('index.html', friends=friends) # pass data to our template

@app.route('/friend', methods=['POST'])
def create():
    query = "INSERT INTO friends (first_name, last_name, age, created_at, updated_at)\
             VALUES (:first_name, :last_name, :age, NOW(), NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'age': request.form['age']
           }
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
