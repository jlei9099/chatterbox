import React from "react";
import './App.css';

import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Navigation from './components/Navigation.js';
import Login from './components/login.component.js';
import SignUp from './components/signup.component.js';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="Navbar">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
