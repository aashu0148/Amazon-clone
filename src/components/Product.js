import React from 'react'
import './Product.css'
function Product({ id, title, rating, price, image }) {
    const stars = [];
    for (let i = 0; i < rating; ++i) {
        stars.push(
            (<span key={id / (i + 1)}>⭐</span>)
        )
    }
    return (
        <div className="product" id={id}>
            <p className="product_title">{title}</p>
            <div className="product_price">
                <small>Rs</small>
                <strong>{price}</strong>
            </div>
            <div className="product_stars">{stars}</div>
            <img src={image} alt="can't load :(" />
            <button >Add to basket</button>
        </div>
    )
}

export default Product
