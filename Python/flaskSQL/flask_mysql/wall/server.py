from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import md5
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "IHateTheSecretKey"
mysql = MySQLConnector(app, 'wall')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods = ['POST'])
def login():
    email = request.form['client_email']
    password = md5.new(request.form['client_password']).hexdigest()
    check = True
    if len(email) < 1:
        flash('Email is required!')
        check = False
    if not EMAIL_REGEX.match(email):
        flash("Invalid email address!")
        check = False
    if len(password) < 8:
        flash('Password must be at least 8 characters!')
        check = False
    if check:
        query = "SELECT * FROM users WHERE email=:one"
        data = {
            "one":email
        }
        result = mysql.query_db(query, data)
        if result == []:
            flash("That email is not in our database.")
            return redirect('/')
        else:
            user = result[0]
            if user["password"] == password:
                flash('successful login')
                session["logged_id"] = user["id"]
                session["logged_name"] = user["first_name"]
                return redirect('/wall')
            else:
                flash("Your password is incorrect.")
                return redirect('/')
	return redirect('/')

@app.route('/wall')
def wall():
    query = "select messages.id, first_name, last_name, message, messages.created_at from users join messages on users.id = messages.user_id"
    result = mysql.query_db(query)
    comments = "select comments.id, first_name, last_name, comment, comments.created_at from users join comments on users.id = comments.user_id"
    comment_results = mysql.query_db(comments)
    comments = "select comments.id, first_name, last_name, comment, comments.created_at from users join comments on users.id = comments.user_id"
    comment_results = mysql.query_db(comments)
    return  render_template('wall.html', messages = result, comments = comment_results)
@app.route('/register', methods = ['POST'])
def register():
    fname = request.form['first_name']
    lname = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    cpassword = request.form['confirm_password']
    check = True
    while check == True:
        check = False
        if len(fname) < 1:
            flash('First name is required!')
            check = True
        if len(lname) < 1:
            flash('Last name is required!')
            check = True
        if len(email) < 1:
            flash('Email is required!')
            check = True
        if not EMAIL_REGEX.match(email):
            flash("Invalid email address!")
            check = True
        if len(password) < 8:
            flash('Password must be at least 8 characters!')
            check = True
        if cpassword != password:
            flash("Your passwords did not match!")
            check = True
        if check == True:
            return redirect('/')
    query = "insert into users (first_name, last_name, email, password, created_at, updated_at) values (:first_name, :last_name, :email, :password, NOW(), NOW())"
    data = {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "password": md5.new(password).hexdigest(),
        }
    mysql.query_db(query, data)
    flash('You have successfully registered! Please log in.')
    return redirect('/')

@app.route('/message', methods=['POST'])
def createMessage():
    query = "insert into messages (message, created_at, updated_at, user_id) values (:one, now(), now(), :two)"
    data = {
		"one":request.form["message"],
		"two":session["logged_id"]
    }
    mysql.query_db(query, data)
    return redirect("/wall")

@app.route('/message/<message_id>/comment', methods=["POST"])
def createComment(message_id):
    query = "insert into comments (comment, created_at, updated_at, message_id, user_id) values (:one, now(), now(), :two, :three)"
    data = {
		"one":request.form["comment"],
        "two":message_id,
		"three":session["logged_id"]
    }
    mysql.query_db(query, data)
    return redirect("/wall")

app.run(debug=True)