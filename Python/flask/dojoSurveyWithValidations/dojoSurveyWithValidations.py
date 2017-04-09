from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key="Why?"

@app.route('/', methods=['GET', 'POST'])
def dojoSurveyForm():
    return render_template('dojoSurveyWithValidations.html')

@app.route('/result', methods=['GET', 'POST'])
def process():
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        return redirect('/')
    elif len(request.form['comment']) < 1:
        flash("Comment cannot be empty!")
        return redirect('/')
    elif len(request.form['comment']) > 120:
        flash("Comments cannot be longer than 120 characters!")
        return redirect('/')
    else:
        return render_template('formResult.html', name = request.form['name'], location = request.form['location'], language = request.form['language'], comment = request.form['comment'])
app.run(debug=True)

    