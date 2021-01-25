import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import { auth } from '../firebase'

function Login(props) {

    function signIn() {
        let email = document.querySelector(".login_email").value
        let password = document.querySelector(".login_password").value

        auth.signInWithEmailAndPassword(email, password)
            .then((e) => {
                console.log(e)
                props.history.push("/")
            })
            .catch(e => {
                alert(e.message)
            })
    }

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

                <span>Email</span>
                <input type="email" name="enter_email" className="login_email" placeholder="abc@xyz.com" />
                <span>Password</span>
                <input type="password" name="enter_email" className="login_password" placeholder="abc@12345" />
                <button type="button" onClick={signIn}>Sign in</button>
                <p>By continuing, you agree to Amozon's <Link to="/">Conditions of Use </Link> and <Link to="/">Privacy Notice</Link>.</p>

                <Link to="/"><p><i className="fas fa-caret-right"></i> Need Help?</p></Link>
            </div>

            <div className="login_break">

                <p>New to Amazon?</p>
            </div>

            <Link to="/signup">
                <button className="login_create-account">
                    Create your Amazon account
            </button>
            </Link>


            <div className="login_footer">
                <div className="login_footer-links">
                    <Link to="/">
                        <p>Condition of Use</p>
                    </Link>
                    <Link to="/">
                        <p>Privacy Notice</p>
                    </Link>
                    <Link to="/">
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
