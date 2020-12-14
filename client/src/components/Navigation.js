import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar">
            <div className="navbar-start">
              <NavLink 
                className="navbar-item" 
                activeClassName="is-active" 
                to="/"
              >
                Home
              </NavLink>
  
              <NavLink
                className="navbar-item" 
                activeClassName="is-active"
                to="/about"
              >
                About
              </NavLink>
  
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/contact"
              >
                Contact
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/login"
              >
                Log In
              </NavLink>

              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;