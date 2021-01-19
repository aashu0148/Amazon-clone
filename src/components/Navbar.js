import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="not found"></img>
            </Link>
            <div className="navbar_search-bar">
                <input type="text"></input>
                <i className="fas fa-search"></i>
            </div>
            <div className="navbar_options">
                <Link className="navbar_link" to="/login">Login </Link>
                <Link className="navbar_link" to="/">Orders</Link>
                <Link className="navbar_link navbar_checkout" to="/checkout"><i className="fas fa-shopping-bag fa-2x"></i> <span className="navbar_counter">0</span></Link>
            </div>
        </div>
    )
}

export default Navbar
