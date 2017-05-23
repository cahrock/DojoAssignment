from flask import Flask, request, render_template, redirect, flash, url_for
from mysqlconnection import MySQLConnector
import md5

app = Flask(__name__)
app.secret_key = 'anykey'
mysql = MySQLConnector(app,'sakila')

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/register.html')
def registerPage():
    return render_template('register.html')

@app.route('/login')
def login():
    password = md5.new(request.form['password']).hexdigest()
    email = request.form['email']
    user_query = "SELECT * FROM customer WHERE customer.email = :email AND customer.password = :password"
    query_data = { 'email': email, 'password': password}
    user = mysql.query_db(user_query, query_data)
    # do the necessary logic to login if the user exists, otherwise redirect to login page with error message<br>

    return redirect('/')

@app.route('/register', methods=['POST'])
def register():

    # firstname = request.form['fname']
    # lastname = request.form['lname']
    # email = request.form['email']
    # passwd = request.form['password']
    # if len(firstname) < 3 or len(lastname) <3 or len(email) == 0 or len(passwd) == 0:
    #     flash('Field is required')
    #
    # if len(passwd) < 9:
    #     flash('Password must minimum 8 characters long')

    query = "SELECT first_name, last_name, LOWER(email), password FROM customer"
    data = mysql.query_db(query)

    if {'email': request.form['email']} in data:
        flash("Email address's already taken")
        print emaillower

    else:
        username = request.form['username']
        email = request.form['email']
        password = md5.new(request.form['password']).hexdigest();

        query2 = "INSERT INTO customer(first_name, last_name, email, password, created_at, updated_at)\
                  VALUES(:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
                'first_name': request.form['fname'],
                'last_name':  request.form['lname'],
                'email': request.form['email'],
                'password': request.form['password']
        }
        mysql.query_db(query2, data)
        flash("Thanks for submitting your profile")
        print mysql.query_db(query2, data)
    return redirect('/')

app.run(debug=True)
