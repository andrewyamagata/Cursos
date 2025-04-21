from app import app
from flask import render_template, url_for

lista_usuarios = ['Lira', 'Amanda', 'Alon', 'Alessandra']

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/usuarios')
def usuarios():
    return render_template('usuarios.html', lista_usuarios=lista_usuarios)