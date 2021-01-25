import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import { auth } from '../firebase'

function Login() {
    return (
        <div className="login">
            <div className="login_logo">
                <Link to="./home.js">
                    <img src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="not found"></img>
                    <span>.in</span>
                </Link>
            </div>

        </div>
    )
}

export default Login;
