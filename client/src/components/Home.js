import React from "react";
import Chat from "./Chat.js";
import Sidebar from "./Sidebar";
import './Home.css';

const Home = () => (
    <div>
      <h1 className="Header">Home</h1>
      <p>Welcome to chatterbox</p>
	      <Sidebar/>
         <Chat/>
     </div>
  );
  
  export default Home;