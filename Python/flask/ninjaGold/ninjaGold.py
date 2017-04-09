from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "ninjaGold!"

@app.route('/')
def ninjaMoney():
    if request.method == "GET":
        session['money'] = 0
    else:
        session['money'] += session['goldTry']
    return render_template('ninjaGold.html')

@app.route('/process_money', methods=['POST'])
def ninjaGoldTry():
    if request.form['action'] == "farm":
        session['goldTry'] = random.randrange(10,21)
        session['money'] += session['goldTry']
        session['whatHappened'] = "Earned", session['goldTry'], "golds from the farm!"
        return render_template('ninjaGold.html')
    elif request.form['action'] == "cave":
        session['goldTry'] = random.randrange(5,11)
        session['money'] += session['goldTry']
        session['whatHappened'] = "Earned", session['goldTry'], "golds from the cave!"
        return render_template('ninjaGold.html')
    elif request.form['action'] == "house":
        session['goldTry'] = random.randrange(2,5)
        session['money'] += session['goldTry']
        session['whatHappened'] = "Earned", session['goldTry'], "golds from the house!"
        return render_template('ninjaGold.html')
    elif request.form['action'] == "casino":
        session['goldTry'] = random.randrange(-50,51)
        session['money'] += session['goldTry']
        if session['goldTry'] >= 0:
            session['whatHappened'] = "Earned", session['goldTry'], "golds at the casino!"
        else:
            session['whatHappened'] = "Lost", session['goldTry'], "golds at the casino!"
        return render_template('ninjaGold.html')
app.run(debug=True)