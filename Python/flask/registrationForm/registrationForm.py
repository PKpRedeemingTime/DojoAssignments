from flask import Flask, render_template, request, redirect, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key="Why?"

@app.route('/', methods=['GET', 'POST'])
def registrationForm():
    return render_template('registrationForm.html')

@app.route('/process', methods=['GET', 'POST'])
def process():
    if len(request.form['email']) < 1:
        flash("Email cannot be empty!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
        return redirect('/')
    elif len(request.form['firstName']) < 1:
        flash("First name cannot be empty!")
        return redirect('/')
    elif not request.form['firstName'].isalpha():
        flash("First name cannot contain numbers!")
        return redirect('/')
    elif len(request.form['lastName']) < 1:
        flash("Last name cannot be empty!")
        return redirect('/')
    elif not request.form['lastName'].isalpha():
        flash("Last name cannot contain numbers!")
        return redirect('/')
    elif len(request.form['password']) < 1:
        flash("Password cannot be empty!")
        return redirect('/')
    elif len(request.form['confirmPassword']) < 1:
        flash("You must confirm your password!")
        return redirect('/')
    elif request.form['password'] != request.form['confirmPassword']:
        flash("Your password confimation did not match.")
        return redirect('/')
    else:
        flash("Thanks for submitting your information!")
        return redirect('/')
app.run(debug=True)