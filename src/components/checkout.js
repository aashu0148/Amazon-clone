import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from './checkout-item'
import './checkout.css'

function checkout(props) {
    const items = []
    let i = 0;
    for (const item in props.basket) {
        const e = props.basket[item];
        items.push(<CheckoutItem key={i++} id={e.id} price={e.price} title={e.title} image={e.image} qty={e.qty} />)
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
                <h3>Subtotal (10 items):</h3>
                <h3><b>Rs 89000</b></h3>
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
