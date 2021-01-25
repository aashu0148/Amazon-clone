import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import { auth } from '../firebase'
import { connect } from 'react-redux'
import * as actionTypes from '../store/action'

function Signup(props) {
    function signUp() {
        let name = document.querySelector(".signup_name").value
        let email = document.querySelector(".signup_email").value
        let password = document.querySelector(".signup_password").value

        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log("user >>>>>", user)
                auth.currentUser.updateProfile({
                    displayName: name
                }).then(e => {
                    props.addUserName(name)
                    props.history.push("/")
                }).catch(err => alert(err))
            })
            .catch(e => {
                alert(e.message)
            })
    }

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

                <input type="text" className="signup_name" />
                <span>Email</span>
                <input type="email" className="signup_email" />
                <span>Password</span>
                <input type="password" placeholder="At least 6 character" className="signup_password" />
                <button type="button" onClick={signUp}>Sign up</button>
            </div>
            <p>Already have an account? <Link to="/Login">Sign In <i className="fas fa-caret-right"></i></Link></p>


            <div className="signup_footer">
                <div className="signup_footer-links">
                    <Link to="">

                        <p>Condition of Use</p>
                    </Link>
                    <Link to="/">
                        <p>Privacy Notice</p>
                    </Link>
                    <Link to="/">
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

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        addUserName: (name) => dispatch({ type: actionTypes.USER_NAME, userName: name })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)

