import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.css'

function Signup() {
    return (
        <div className="signup">

            <div className="signup_logo">
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="not found"></img>
                    <span>.in</span>
                </Link>
            </div>

            <div className="signup_create-account">
                <h2>Create Account</h2>
                <span>Your Name</span>
                <input type="text" />
                <span>Email</span>
                <input type="email" />
                <span>Password</span>
                <input type="text" placeholder="At least 6 character" />
                <p>We will send you a text to verify your email.</p>
                <button type="button">Continue</button>
            </div>


            <div className="signup_footer">
                <div className="signup_footer-links">
                    <Link to="">
                        <p>Condition of Use</p>
                    </Link>
                    <Link to="">
                        <p>Privacy Notice</p>
                    </Link>
                    <Link to="">
                        <p>Help</p>
                    </Link>
                </div>

                <div className="signup_footer-last">
                    <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
                </div>

            </div>



        </div>
    )
}

export default Signup;