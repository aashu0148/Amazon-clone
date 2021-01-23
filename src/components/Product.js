import React from 'react'
import './Product.css'

import { connect } from 'react-redux'


function Product({ id, title, rating, price, image }) {
    const stars = [];
    for (let i = 0; i < rating; ++i) {
        stars.push(
            (<span key={i}>⭐</span>)
        )
    }
    return (
        <div className="product" id={id}>
            <img src={image} alt="can't load :(" />
            <div className="product_price">
                <small>Rs</small>
                <strong>{price}</strong>
            </div>
            <p className="product_title">{title}</p>
            <div className="product_stars">{stars}</div>
            <button>Add to basket</button>
        </div>
    )
}

export default Product
