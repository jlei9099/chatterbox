from flask import Flask
from flask_socketio import SocketIO, send
from models import db

app = Flask(__name__)

POSTGRES = {
    'user': 'postgres',
    'pw': 'password',
    'db': 'Accounts',
    'host': 'localhost',
    'port': '5432',
}

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
db.init_app(app)

@app.route('/')
def index():
    return "Hello, World!"


socketIo = SocketIO(app, cors_allowed_origins="*")

app.debug = True
app.host = 'localhost'


@socketIo.on("message")
def handle_message(msg):
    print(msg)
    send(msg, broadcast=True)
    return None


if __name__ == '__main__':
    socketIo.run(app)
