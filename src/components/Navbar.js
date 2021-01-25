import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function Navbar(props) {
    return (

        <div className="navbar_navTop">
            <div className="navbar_navbar-container">
                <div className="navbar_navbar">
                    <div className="navbar_logo">
                        <Link to="/">
                            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="not found"></img>
                            <span>.in</span>
                        </Link>
                    </div>


                    <div className="navbar_search-bar">
                        <select className="navbar_search-bar  navbar_dropdown">
                            <option value="search_all-categories">All</option>
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

                    <div className="navbar_options">
                        <span className="navbar_lang">ENG <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    </div>

                    <Link to="/Login">
                        <div className="navbar_options">
                            <span className="navbar_firstLine">Hello, Sign in</span>
                            <span className="navbar_secondLine"> Account <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                        </div>
                    </Link>


                    <Link to="/checkout">
                        <div className="navbar_options navbar_Cart">
                            <span className="navbar_firstLine navbar_cart-item">{props.basketCount}</span>
                            <span className="navbar_secondLine navbar_cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="navbar_navBottom">
                <div className="navbar_left">
                    <div className="navbar_burger">
                        <i className="fas fa-bars"></i>
                    </div>
                    <span>All</span>
                </div>

                <div className="navbar_middle">

                    <div className="navbar_item">
                        <Link to="/">
                            <span>Best Seller</span>
                        </Link>
                    </div>

                    <div className="navbar_item">
                        <Link to="/">
                            <span>Today's Deals</span>
                        </Link>
                    </div>
                    <div className="navbar_item">
                        <Link to="/">
                            <span>Fashion</span>
                        </Link>
                    </div>
                    <div className="navbar_item">
                        <Link to="/">
                            <span>Mobiles</span>
                        </Link>
                    </div>

                </div>

                <div className="navbar_ads">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg" alt="not found"></img>
                </div>

            </div>

        </div>
    )
}

const mapToProps = state => {
    return {
        basketCount: state.basketCount
    }
}

export default connect(mapToProps)(Navbar)






