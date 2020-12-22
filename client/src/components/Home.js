import React from "react";
import Chat from "./Chat.js";
import Sidebar from "./Sidebar";
import './Home.css';

const Home = () => (
    <div>
      <h1 className="Header">Welcome to chatterbox!</h1>

      <div className="chat">
        <Chat/>
      </div>
     </div>
  );
  
  export default Home;