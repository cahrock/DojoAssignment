from flask import Flask, render_template
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'world') # mydb = schema name / db name
# an example of running a query

@app.route('/')
def index():
    query = "SELECT * FROM countries \
                WHERE population > 10000000"
    all_countries = mysql.query_db(query)
    return render_template("index.html", countries=all_countries)

# print mysql.query_db("SELECT * FROM countries") # SQL statement
app.run(debug=True)
