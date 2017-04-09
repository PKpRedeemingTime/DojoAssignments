from flask import Flask, render_template, redirect, request, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "KeepItSecretKeepItSafe"

@app.route('/')
def emailPractice():
    return render_template('emailPractice.html')

@app.route('/process', methods=['POST'])
def process():
    if len(request.form['email']) < 1:
        flash("Email cannot be empty!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
    else:
        flash("Success!")
    return redirect('/')
app.run(debug=True)