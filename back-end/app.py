from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sushiemuitobom'

@app.route('/')
def index():
    return 'Hello World!'


app.run(host='0.0.0.0', port=81, debug=True)
