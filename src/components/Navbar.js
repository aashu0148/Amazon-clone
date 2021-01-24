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
                    <img src="https://www.amazon.in/gp/redirect.html/?ie=UTF8&location=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2Famzn1.dv.gti.eab9f6f3-29da-6529-a314-9a6c4e1224e9%2Fref_&source=standards&token=BD186D118FFDAD25016A185DCEE0501503B30AEC&ref_=nav_swm_dvm_crs_swm_in_ai_s_dk_gw0_L_np_coolie&pf_rd_p=e5a899dc-98f2-4dcf-a682-642918cd1457&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=6XTKA8WX678M2WT23NGF" alt="not found"></img>
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






