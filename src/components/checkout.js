import React from 'react'
import { connect } from 'react-redux'

function checkout(props) {
    const dummy = props.basket.map((e, i) => {
        return (<div key={i}>
            <h3>{e.id}</h3>
            <h3>{e.price}</h3>
            <h3>{e.image}</h3>
            <h3>{e.title}</h3>
            <br></br>
        </div>)
    })
    return (
        <div className="checkout">
            {dummy}
            <h1>Checkout Page</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(checkout)
