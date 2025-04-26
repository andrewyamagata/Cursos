from app import app
from flask_sqlalchemy import SQLAlchemy

app.config['SECRET_KEY'] = 'senhadotoken'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///comunidade.db'

database = SQLAlchemy(app)