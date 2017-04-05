from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

def welcomePage():
    return render_template('welcomePage.html')
app.run(debug=True)

@app.route('/projects')

def projects():
    return render_template('projects.html')
app.run(debug=True)

@app.route('/about')

def about():
    return render_template('about.html')
app.run(debug=True)