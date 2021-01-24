import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../store/action'
import './checkout-item.css'
function checkoutItem({ id, image, price, title, qty, ...props }) {
    return (
        <>
            <div className="checkout-item">
                <div className="checkout-item_image">
                    <img src={image} alt="img not found:("></img>
                </div>
                <div className="checkout-item_desc">
                    <div>

                        <Link to="/product">
                            <div className="checkout-item_title">

                                {title}
                            </div>
                        </Link>
                        <p>in stock</p>
                        <div className="checkout-item_qty">
                            Qty:
                        <button onClick={() => props.subtractQtyHandler(id)} className="checkout_subtract">-</button>
                            <div>{qty}</div>
                            <button onClick={() => props.addQtyHandler(id)} className="checkout_addt">+</button>
                        </div>
                    </div>
                    <button onClick={() => props.deleteItemHandler(id)} className="checkout-item_delete">Remove from Cart</button>
                </div>
                <div className="checkout-item_price">
                    <b>₹ {price * qty}</b>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        subtractQtyHandler: (id) => dispatch({ type: actionTypes.SUBTRACT_QTY, id: id }),
        addQtyHandler: (id) => dispatch({ type: actionTypes.ADD_QTY, id: id }),
        deleteItemHandler: (id) => dispatch({ type: actionTypes.DELETE_ITEM_FROM_BASKET, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(checkoutItem)
