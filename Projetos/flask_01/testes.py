from main import app, database
from models import Usuario, Post

# Para criar o banco de dados
# with app.app_context():
#     database.create_all()

# with app.app_context():
#     usuario = Usuario(username='Lira', email='lira@gmail.com', senha='123456')
#     usuario2 = Usuario(username='João', email='joao@gmail.com', senha='123456')

#     database.session.add(usuario)
#     database.session.add(usuario2)

#     database.session.commit()


with app.app_context():
    meus_usuarios = Usuario.query.all()
    print(meus_usuarios)