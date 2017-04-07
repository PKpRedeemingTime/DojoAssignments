from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def dojoSurveyForm():
    return render_template('dojoSurvey.html')

@app.route('/result', methods=['GET', 'POST'])
def resultsPage():
    return render_template('formResult.html', name = request.form['name'], location = request.form['location'], language = request.form['language'], comment = request.form['comment'])
app.run(debug=True)