import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="nav">

        <div className=" nav_navbar">
            <div className="logo">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="not found"></img>
                <span>.in</span>
            </Link>
            </div>

            <div className="nav_navbar_options">
                <span className="nav_navbar_options_firstLine hello">Hello</span>
                <span className="nav_navbar_options_secondLine"><i class="fa fa-map-marker" aria-hidden="true"></i> Select your address</span>
            </div>

            <div className="nav_navbar_search-bar">
            <select className="navbar_search-bar dropdown">
                <option value="search_all-categories">All Categories</option>
                <option value="search_todays-deals">Deals</option>
                <option value="search_alexa-skills">Alexa Skills</option>
                <option value="search_amazon-devices">AmazonDevices</option>
                <option value="search_fashion">Amazon Fashion</option>
                <option value="search_pantry">Amazon Pantry</option>
                <option value="search_appliances">Appliances</option>
                <option value="search_mobile-apps">Apps & Games</option>
                <option value="search_baby">Baby</option>
                <option value="search_beauty">Beauty</option>
                <option value="search_books">Books</option>
                <option value="search_automotive">Car & Motorbikes</option>
                <option value="search_apparel">Clothing & Accessories</option>
                <option value="search_collectibles">Collectibles</option>
                <option value="search_computers">Computers & Accessories</option>
                <option value="search_electronics">Electronics</option>
                <option value="search_furnitures">Furnitures</option>
           
            </select>
                <input type="text"></input>
                <i className="fas fa-search"></i>
            </div>

            <div className="nav_navbar_options">
                <span className="nav_navbar_options_lang">ENG <i class="fa fa-caret-down" aria-hidden="true"></i></span>
            </div>

            <div className="nav_navbar_options">
            <span className="nav_navbar_options_firstLine">Hello, Sign in</span>
                <span className="nav_navbar_options_secondLine"> Account <i class="fa fa-caret-down" aria-hidden="true"></i></span>
            </div>

            <div className="nav_navbar_options">
            <span className="nav_navbar_options_firstLine">Returns</span>
                <span className="nav_navbar_options_secondLine"> &Orders</span>
            </div>

            <div className="nav_navbar_options Cart">
                <span className="nav_navbar_options_firstLine cart-item">0</span>
                <span className="nav_navbar_options_secondLine cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
            </div>
</div>

       <div className="nav_navBottom">
           <div className="nav_navBottom_left">
               <div className="nav_navBottom_left_burger">
               <i class="fas fa-bars"></i>
               </div>
               <span>All</span>
           </div>
           <div className="nav_navBottom_middle">
               <div className="nav_navBottom_middle_"></div>
           </div>
       </div>
       
     </div>
    )
}

export default Navbar;





