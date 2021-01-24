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
                <h2>Shopping Cart</h2>
                <hr></hr>
                {items}
                <br></br>
            </div>
            <div className="checkout_proceed">
                lorem23
                ksandjsf
                jqrbwe
                fjbw
                efbuweifb
                weufb
                wef
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
