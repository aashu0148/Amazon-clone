import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return (

        <div className="login">

            <div className="login_logo">
            <Link to="./">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="not found"></img>
            <span>.in</span>
            </Link>
            </div>

            <div className="login_login">
                <h2>Login</h2>
               <span>Email or mobile phone number</span>
                <input type="text" name="enter_email" />
                <button type="button">Continue</button>
                <p>By continuing, you agree to Amozon's <Link>Conditions of Use </Link> and <Link>Privacy Notice</Link>.</p>
                <Link to="/"><p><i className="fas fa-caret-right"></i> Need Help?</p></Link>
            </div>

            <div className="login_break">
                <p><span login_break_text>New to Amazon?</span></p>
            </div>

            <Link to="/Signup">
            <button className="login_create-account">
                Create your Amazon account
            </button>
            </Link>
           

            <div className="login_footer">
                <div className="login_footer-links">
                    <Link>
                    <p>Condition of Use</p>
                    </Link>
                    <Link>
                    <p>Privacy Notice</p>
                    </Link>
                    <Link>
                    <p>Help</p>
                    </Link>
                </div>
                
                <div className="login_footer-last">
                    <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
                </div>

            </div>

         
        </div>


    )
}

export default Login;
