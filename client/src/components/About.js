import React from "react";

const About = () => (
  <div>
    <h1 className="Header">About Us</h1>
    <div> 
      <h2 className="header2">Who We Are</h2>
      <p className="info">
        <span>We're the talk of the town!</span>
        <span>No but seriously, we're an up and coming communication platform expecting to launch in 2021.</span>
        <span>chatterbox was inspired by the many communication platforms out there and hopes to be even more!</span>
      </p>

      <h2 className="header2">What We Do</h2>
      <p className="info">
        <span>At chatterbox, we strive to create new and innovative features.</span>
        <span>We like to combine everyone's favorite features and mash them together.</span>
        <span>If there is a feature you like to see added, <a href='/contact'>contact us!</a></span>
      </p>
    </div>
    
  </div>
);

export default About;