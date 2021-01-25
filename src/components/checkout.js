import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from './checkout-item'
import './checkout.css'

function checkout(props) {
    let items = []
    let i = 0;
    let totalPrice = 0;
    let totalItems = 0;
    for (const item in props.basket) {
        const e = props.basket[item];
        totalItems += e.qty
        totalPrice += e.price * e.qty
        items.push(<CheckoutItem key={i++} id={e.id} price={e.price} title={e.title} image={e.image} qty={e.qty} />)
    }

    if (items.length === 0) {
        items.push(<h1 key="404">Your Cart is Empty :/</h1>)
    }

    return (
        <div className="checkout">
            <div className="checkout_items">
                <div className="checkout_heading">Shopping Cart</div>
                <p>Price</p>
                <hr></hr>
                {items}
                <br></br>
            </div>
            <div className="checkout_proceed">
                <div className="checkout_sub-heading">Subtotal ({totalItems} items):</div>
                <div className="checkout_total-price"><b>₹ {totalPrice}</b></div>
                <button>Proceed to Buy</button>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(checkout)
