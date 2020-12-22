# chatterbox


## Overview

chatterbox is a communication platform inspired by preexisting platforms such as Discord, Facebook, and Twitter. However of the three, it is more inspired by Discord since it
proposes many intricacies such as creating a server with your friends. This is the modern take on a group chat. We want to say Discord is the child of mirc and ventrilo
and chatterbox hopes to be the next mainstream chatting platform.

## Getting Started

First off, clone the repository onto your local machine.

cd into the project's client directory.

Since node modules are part of .gitignore, you would need to run "npm i" in the project directory to build all the dependencies (This will install all the node modules).

Run "npm start" in the current directory to bring up the localhost server. It should be on port 3000.

## Requirements
- Node 14.15.1

- NPM 6.14.8

- PostgreSQL 13

- Python 3.8.5
  - Flask 1.1.2
    - flask_sqlalchemy
    - flask_praetorian
    - flask_cors
    - flask_socketio

## Data Model

The application will store users, their messages, and their server.

- Users can have many friends (other users).
- Users can have many servers.
- A server can have many users.

An Example `User`:

```javascript
{
  user: "Je"
  password: "password"
  role: "admin"
  servers: "5"
}
```

An Example `Server`:

```javascript
{
  name: "Public Discussion"
  members: "123"
  owner: "Je"
}
```

## Site map

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

## User Stories or Use Cases

1. As a non-registered user, I can create a new account on the site.
2. As a non-registered user, I can browse the site.
3. As a user, I can log in to the site.
4. As a user, I can send messages to other users.
5. As a user, I can create a server.

## References Used

- https://yasoob.me/posts/how-to-setup-and-deploy-jwt-auth-using-react-and-flask/

- https://stackoverflow.com/questions/23839656/sqlalchemy-no-password-supplied-error

- https://www.c-sharpcorner.com/article/creating-a-simple-login-page-using-html-and-css/

- https://www.freecodecamp.org/news/react-router-tutorial/

## Authors
Jeffrey Lei

Raymond Luy
