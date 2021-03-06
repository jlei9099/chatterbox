import React, {useState, useEffect} from "react";
import './App.css';
//import io from "socket.io-client";

import {
    Switch,
    BrowserRouter,
    Route
}   from "react-router-dom";

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Navigation from './components/Navigation.js';
import Login from './components/Login.js';
import SignUp from './components/Signup.js';

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

/*function Home() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(()=>{
    fetch('/').then(
      response => response.json()
    ).then(data => console.log(data))
  }, []);
  return <h1>{initialData.title}</h1>;
}*/

export default App;
