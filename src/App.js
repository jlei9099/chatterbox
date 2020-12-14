import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (
    <div className="App">
      <h2>Let's Build a Discord Clone!!!</h2>
      <Sidebar />
      <Login />
      <SignUp />
    </div>
  );
}


export default App;
