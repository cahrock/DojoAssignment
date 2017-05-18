from flask import Flask, render_template, request, redirect, session
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app, 'world')

@app.route('/')
def index():

    return render_template('index.html')
