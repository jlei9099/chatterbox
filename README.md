# chatterbox


## Overview

chatterbox is a communication platform inspired by preexisting platforms such as Discord, Facebook, and Twitter. However of the three, it is more inspired by Discord since it
proposes many intricacies such as creating a server with your friends. This is the modern take on a group chat. We want to say Discord is the child of mirc and ventrilo
and chatterbox hopes to be the child of Discord, Facebook, Twitter.

## Getting Started

First off, clone the repository onto your local machine.

cd into the project's client directory.

Since node modules are part of .gitignore, you would be to run "npm i" in the project directory to build all the dependencies.

Run "npm start" in the current directory to bring up the localhost server. It should be on port 3000.

## Requirements

(___TODO__: List out any technologies needed to run your project_)

Node 14.15.1

NPM 6.14.8

PostgreSQL 13

Python 3.8.5

Flask 1.1.2

## Data Model

(___TODO__: A description of your application's data and their relationships to each other_)

The application will store user, items, and orders.

- Users can have many orders.
- Orders can have many items.

(___TODO__: Sample resources_)

An Example `User`:

```javascript
{
  id: 5,
  UserName: "Username"
  PassWord: "NotAFakePassword"
}
```


## Site map

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: Write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format)_)

1. As non-registered user, I can create a new account on the site.
2. As a user, I can log in to the site.
3. As a user, I can send messages to other users.

## References Used

(___TODO__: List any tutorials or material referenced that you've based your code off of_)
https://yasoob.me/posts/how-to-setup-and-deploy-jwt-auth-using-react-and-flask/

https://stackoverflow.com/questions/23839656/sqlalchemy-no-password-supplied-error

https://www.c-sharpcorner.com/article/creating-a-simple-login-page-using-html-and-css/

https://www.freecodecamp.org/news/react-router-tutorial/

## Authors
Jeffrey Lei

Raymond Luy
