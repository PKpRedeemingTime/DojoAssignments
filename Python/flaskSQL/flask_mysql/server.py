from flask import Flask

from mysqlconnection import MySQLConnector

app = Flask(__name__)

mysql = MySQLConnector(app, 'mydb')

print mysql.query_db("SELECT * FROM users")
app.run(debug=True)