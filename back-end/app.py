from flask import Flask, sqlite3, render_template, request, url_for, flash, redirect

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sushiemuitobom'

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)


@app.route('/create/', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        nome_receita = request.form['nome_receita']
        tempo_preparo = request.form['tempo_preparo']
        porcoes = request.form['porcoes']
        ingredientes = request.form['ingredientes']
        modo_preparo = request.form['modo_preparo']

        if not nome_receita:
            flash('')
        elif not tempo_preparo:
            flash('')
        elif not porcoes:
            flash('')
        elif not ingredientes:
            flash('')
        elif not modo_preparo:
            flash('')
        else:
            conn = get_db_connection()
            conn.execute('INSERT INTO posts (nome_receita, tempo_preparo, porcoes, ingredientes, modo_preparo) VALUES (?, ?, ?, ?, ?)',
                         (nome_receita, tempo_preparo, porcoes, ingredientes, modo_preparo))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))
    return render_template('create.html')

app.run(host='0.0.0.0', port=81, debug=True)
