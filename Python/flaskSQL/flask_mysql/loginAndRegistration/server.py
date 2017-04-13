from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import md5
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "IHateTheSecretKey"
mysql = MySQLConnector(app, 'loginAndRegistration')
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/login', methods=['POST'])
def login():
    email_test = "select * from clients where email = :client_email and password = :client_password"
    data = {
        'client_email': request.form['client_email'],
        'client_password': md5.new(request.form['client_password']).hexdigest()
    }
    if mysql.query_db(email_test, data) == []:
        flash('Email is not not in our database!')
        return redirect('/')
    else:
        return render_template('success.html')
@app.route('/success',methods=['POST'])
def create():
    if len(request.form['email']) < 1:
        flash("Email cannot be empty!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
        return redirect('/')
    elif len(request.form['first_name']) < 1:
        flash("First name cannot be empty!")
        return redirect('/')
    elif not request.form['first_name'].isalpha():
        flash("First name cannot contain numbers!")
        return redirect('/')
    elif len(request.form['last_name']) < 1:
        flash("Last name cannot be empty!")
        return redirect('/')
    elif not request.form['last_name'].isalpha():
        flash("Last name cannot contain numbers!")
        return redirect('/')
    elif len(request.form['password']) < 8:
        flash("Password must be at least 8 characters!")
        return redirect('/')
    elif request.form['password'] != request.form['confirm_password']:
        flash("Your password confimation did not match.")
        return redirect('/')
    else:
        query = "insert into clients (first_name, last_name, email, password, created_at, updated_at) values (:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            "password": md5.new(request.form['password']).hexdigest(),
        }
        mysql.query_db(query, data)
        return render_template('success.html')
app.run(debug=True)