from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = "KeepItSecretKeepItSafe"

@app.route('/')
def practice():
    return render_template('namePractice.html')

@app.route('/process', methods=['POST'])
def process():
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
    else:
        flash("Success! Your name is {}".format(request.form['name']))
    return redirect('/')
app.run(debug=True)
