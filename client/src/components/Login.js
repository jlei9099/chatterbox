import React, { Component } from "react";
import './forms.css';

export default class Login extends Component {
    render() {
        return (
            <form className="login-form">
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="login-user" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="login-pw" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="sign-in">Sign in</button>

                <p className="sign-up-a">
                    Not Registered? <a href='/signup'>Sign Up!</a>
                </p>
            </form>
        );
    }
}