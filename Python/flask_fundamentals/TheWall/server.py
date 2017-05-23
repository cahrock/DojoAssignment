from flask import Flask, render_template, redirect, session, flash, request, url_for
app = Flask(__name__)
app.secret_key = "churros"
from mysqlconnection import MySQLConnector
mysql = MySQLConnector(app, 'luzmila')
import md5
import re

email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/register', methods=["POST"])
def register():

    flag = True # will remain True, if no errors were detected

    # Not blank
    if len(request.form['first_name']) < 1:
        flag = False
        flash("Your entry for first name must not be blank.")
    if len(request.form['last_name']) < 1:
        flag = False
        flash("Your entry for last name must not be blank.")
    # Longer than 2 char
    if len(request.form['first_name']) < 3:
        flag = False
        flash("Your entry for first name must ne longer than 2 characters.")
    if len(request.form['last_name']) < 3:
        flag = False
        flash("Your entry for last name must be longer than 2 characters.")
    # all letters
    if not request.form["first_name"].isalpha() and not request.form["last_name"].isalpha():
        flag = False
        flash("Your first name and last name must be letters only")
    # email is valid
    if not email_regex.match(request.form['email']):
        flag = False
        flash("Your email is not valid.")
    # len password > 8
    if len(request.form['password']) < 8:
        flag = False
        flash("Your password must be 8 characters long.")
    # passwords match
    if request.form['password'] != request.form['c_password']:
        flag = False
        flash("Your passwords don't match.")

    if flag:
        print "User info is good."
        query = "INSERT into users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"

        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': md5.new(request.form['password']).hexdigest()
        }

        session['user_id'] = mysql.query_db(query, data) # store in session logged in users id
        flash('Thanks for registering the account')
        print("redirect to success")
        return redirect('/wall')

    else:
        print "User info had errors."
        return redirect("/")

@app.route('/login.html')
def login_page():
    return render_template('login.html')

@app.route('/login', methods=["POST"])
def login():
    if len(request.form['email']) < 1 or len(request.form['password']) < 1:
        flash("You must enter both email and password.")
        return redirect("/")
    else:
        query = "SELECT * from users WHERE email = :email"
        data = {
            'email': request.form['email']
        }
        user = mysql.query_db(query, data)

        if user:
            if user[0]['password'] == md5.new(request.form['password']).hexdigest():
                session['user_id'] = user[0]['id']
                print ('success')
                return redirect(url_for('wall'))
            else:
                flash("Your password is invalid.")
                print('passwd fail')
                return redirect("/")
        else:
            flash("Your email is not valid.")
            print('email fail')
            return redirect("/")

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('index'))

@app.route("/wall")
def wall():

    query_cmt = "SELECT messages.id, comments.user_id, comments.comment, comments.message_id, DATE_FORMAT(comments.created_at, '%M, %D %Y') AS cmt_released, CONCAT(users.first_name, ' ', users.last_name) AS name  from comments LEFT JOIN messages ON messages.id = comments.message_id LEFT JOIN users on users.id = messages.user_id"

    query_msg = "SELECT messages.id, messages.message, CONCAT(users.first_name,' ', users.last_name) AS name, DATE_FORMAT(messages.created_at, '%M, %D %Y') AS msg_released FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC"

    query_log = "SELECT * from users WHERE id=:user_id"
    data = {
        'user_id': session['user_id']
    }

    logged_in_user = mysql.query_db(query_log, data)

    messages = mysql.query_db(query_msg)
    comments = mysql.query_db(query_cmt)

    print comments
    return render_template("wall.html", all_messages=messages, all_comments=comments, logged_in_user=logged_in_user)


@app.route('/post-messages', methods=["POST"])
def postmessages():

    if len(request.form['msg-box']) < 1:
        flash("message can not be empty")
        return  redirect('wall')
    if len(request.form['msg-box']) > 150:
		flash("Too many characters, max is 150 characters!")
		return redirect('/wall')

    query = 'INSERT INTO comments(user_id, message_id, comment, created_at, updated_at) VALUES(:user_id,:message_id, :message, NOW(), NOW())'
    data = {
        'user_id': session['user_id'],
        'message_id': 'msg_id',
        'comment': request.form['msg-box']
    }
    mysql.query_db(query, data)
    print data
    return redirect('/wall')

@app.route('/comment/<id>', methods=['POST'])
def postcomments(id):

    if len(request.form['cmt-box']) < 1:
        flash("comment can not be empty")
        return  redirect('wall')
    if len(request.form['cmt-box']) > 150:
		flash("Too many characters, max is 150 characters!")
		return redirect('/wall')

    query = "INSERT INTO comments (message_id, user_id, comment, created_at, updated_at) VALUES (:message_id, :user_session_id, :user_comment, NOW(), NOW())"
    data = {'message_id': id,'user_session_id': session['user_id'],'user_comment': request.form['cmt-box']}
    mysql.query_db(query, data)

    return redirect('/wall')

app.run(debug=True)
