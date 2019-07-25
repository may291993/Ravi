from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    print('ravi')
    return 'Hello, World!'

@app.route('/ravi')
def hello_ravi():
    return 'Hello, Ravi'

@app.route('/neeraj')
def hello_neeraj():
    return '<h1>Neeraj <u>Bansal</u></h1>'

@app.route('/shivu')
def hello_neeraj1():
    return 'Hello, Bhai'

@app.route('/Sukanya')
def hello_sukanya():
    return 'Hello, amma'

@app.route('/Chandru')
def hello_Chandru():
    return 'Hello, Appa how are you You are my hero and you are dream and you are my god'



