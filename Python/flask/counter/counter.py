from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = "SecretKey!"

@app.route('/', methods=['GET', 'POST'])
def counter():
    session['num'] += 1
    return render_template('counter.html', num = session['num'])
app.run(debug=True)