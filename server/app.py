import os
import flask
import flask_sqlalchemy
import flask_praetorian
import flask_cors
from flask_socketio import SocketIO, send

db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
cors = flask_cors.CORS()

'''
POSTGRES = {
    'user': 'postgres',
    'pw': 'password',
    'db': 'Accounts',
    'host': 'localhost',
    'port': '5432',
}'''

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True, server_default='true')


@property
def rolenames(self):
    try:
        return self.roles.split(',')
    except Exception:
        return []


@classmethod
def lookup(cls, username):
    return cls.query.filter_by(username=username).one_or_none()


@classmethod
def identify(cls, id):
    return cls.query.get(id)


@property
def identity(self):
    return self.id


def is_valid(self):
    return self.is_active


app = flask.Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'top secret'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

guard.init_app(app, User)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql:///{os.path.join(os.getcwd(), 'database.db')}"
db.init_app(app)
cors.init_app(app)

with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username='Je').count() < 1:
        db.session.add(User(
          username='Je',
          password=guard.hash_password('password'),
          roles='admin'
            ))
    db.session.commit()


@app.route('/')
def home():
    return "Hello, World!"


@app.route('/login', methods=['POST'])
def login():
    req = flask.request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret,200


@app.route('/refresh', methods=['POST'])
def refresh():
    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret,200


@app.route('/protected')
@flask_praetorian.auth_required
def protected():
    return {message: f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}


socketIo = SocketIO(app, cors_allowed_origins="*")
app.host = 'localhost'

@socketIo.on("message")
def handle_message(msg):
    print(msg)
    send(msg, broadcast=True)


if __name__ == '__main__':
    socketIo.run(app)
