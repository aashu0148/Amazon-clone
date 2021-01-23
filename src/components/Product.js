import React from 'react'
import './Product.css'
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
            <img src={image} alt="can't load :(" />
            <div className="product_price">
                <small>Rs</small>
                <strong>{price}</strong>
            </div>
            <p className="product_title">{title}</p>
            <div className="product_stars">{stars}</div>

            <img src={image} alt="can't load :(" />
            <button onClick={props.addToBasketHandler}>Add to basket</button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToBasketHandler: () => dispatch({ type: actionTypes.ADD_TO_BASKET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
