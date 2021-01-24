import React from 'react'
import { Link } from 'react-router-dom'
import './checkout-item.css'
function checkoutItem({ id, image, price, title }) {
    return (
        <>
            <div className="checkout-item">
                <div className="checkout-item_image">
                    <img src={image} alt="img not found:("></img>
                </div>
                <div className="checkout-item_desc">
                    <Link to="/product">
                        {title}
                    </Link>
                    <p>in stock</p>
                    <button>Remove from Cart</button>
                </div>
                <div className="checkout-item_price">
                    <b>Rs {price}</b>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default checkoutItem
