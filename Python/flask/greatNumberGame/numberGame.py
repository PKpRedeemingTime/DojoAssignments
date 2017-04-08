from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "Guess!"

@app.route('/', methods=['GET', 'POST'])
def numberGame():
    if request.method == "GET":
        if session.get('number') == None:
            session['myNumber'] = random.randrange(0,101)
    elif request.method == "POST":
        if request.form['action'] != "playAgain":
            session['guess'] = int(request.form['guess'])
        else: 
            session['myNumber'] = random.randrange(0,101)
            session.pop('guess')
    return render_template('numberGame.html')
app.run(debug=True)