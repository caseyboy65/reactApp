import React, {Component} from 'react';
import './Login.css';

const Login = () => { 
    return (
        <div className="Login">
            <div>
                Username<input tpye='text'/>
            </div>
            <div>
                Password<input tpye='text'/>
            </div>
            <div>
                <button> Login </button>
            </div>
        </div>
    );
}

export default Login;