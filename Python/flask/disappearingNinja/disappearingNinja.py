from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def disappearingNinjas():
    return render_template('disappearingNinjas.html')

@app.route('/ninja', methods=['GET', 'POST'])
def ninjas():
    clr = True
    return render_template('ninja.html', clr = clr)

@app.route('/ninja/<color>')
def individual(color):
    return render_template('ninja.html', color = color)
app.run(debug=True)