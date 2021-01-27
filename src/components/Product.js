import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../store/action'
function Product({ id, title, rating, price, image, ...props }) {
    const stars = [];
    for (let i = 0; i < rating; ++i) {
        stars.push(
            (<span key={i}>⭐</span>)
        )
    }

    return (
        <div className="product" id={id}>
            <Link style={{ marginTop: "auto", textAlign: "center" }} to="/product">
                <img src={image} alt="can't load :(" />
            </Link>
            <div className="product_price">
                <span>₹ </span>
                <strong>{price}</strong>
            </div>
            <p className="product_title">{title}</p>
            <div className="product_stars">{stars}</div>
            <button onClick={() => {
                props.addToBasketHandler(id)
                const data = {
                    id,
                    title,
                    image,
                    price
                }
                props.fillBasketHandler(data)
            }}>Add to basket</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToBasketHandler: (id) => dispatch({ type: actionTypes.ADD_TO_BASKET, id: id }),
        fillBasketHandler: (data) => dispatch({ type: actionTypes.FILL_BASKET, data: data, id: data.id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
