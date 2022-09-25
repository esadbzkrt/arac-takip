import './Login.scss';
import React from 'react';

const Login = () => {

    return (
            <div className="login">
                <h1 className="login-title">Vehicle Tracking Login Page</h1>
                <div className="login-input">
                    <h3 className="login-input-title">Username</h3>
                    <input className="username" type="text"/>
                    <h3 className="login-input-title">Password</h3>
                    <input type="password" />
                </div>
                <button className="login-button">Login</button>
            </div>
    );
};

export default Login;