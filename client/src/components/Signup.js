import React, { Component } from "react";
import './forms.css';

export default class SignUp extends Component {
    render() {
        return (
            <form className="signup-form">
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="signup-user" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="signup-pw" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="signup-email" placeholder="Enter email" />
                </div>

                <button type="submit" className="register">Register</button>

                <p className="login-a">
                    Already registered? <a href="/login">Log In!</a>
                </p>
            </form>
        );
    }
}