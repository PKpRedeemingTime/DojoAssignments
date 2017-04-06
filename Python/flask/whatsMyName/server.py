from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def yourName():
    return render_template("yourName.html")

@app.route("/process", methods=['POST'])
def submitName():
    print 'Submitted!'
    return redirect('/')
app.run(debug=True)