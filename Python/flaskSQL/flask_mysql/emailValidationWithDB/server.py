from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "IHateTheSecretKey"
mysql = MySQLConnector(app, 'emails')
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/success',methods=['POST'])
def show():
    query = "select * from emails where email = :new_email"
    data = {
        'new_email': request.form['email']
    }
    if mysql.query_db(query, data) != []:
        flash('Email is not valid!')
        return redirect('/')
    if len(request.form['email']) < 1:
        flash("Email cannot be empty!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
        return redirect('/')
    else:
        query = "insert into emails (email, created_at) values (:new_email, NOW())"
        data = {
            'new_email': request.form['email']
        }
        mysql.query_db(query, data)
        friends = mysql.query_db('select * from emails')
        return render_template('success.html', all_friends=friends)
app.run(debug=True)
