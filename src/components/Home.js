import React, { Component } from 'react'
import './Home.css'
import Carousel from './Carousel'
import Product from './Product'
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Carousel />
                <div className="home_row">
                    <Product
                        id="3223rf2"
                        title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Center Jet Technology)"
                        price={13990}
                        image="https://images-na.ssl-images-amazon.com/images/I/61-qRZcK23L._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="34er334"
                        title="Bourge Men's Grada-15 Floaters"
                        price={299}
                        image="https://images-na.ssl-images-amazon.com/images/I/71EoFcVUMZL._UL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="23rk9u4"
                        title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage)"
                        price={27999}
                        image="https://images-na.ssl-images-amazon.com/images/I/71cxfqBoTgL._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="3sdf3334"
                        title="Redmi 9 Power (Mighty Black 4GB RAM 64GB Storage) - 6000mAh Battery | 48MP Quad Camera"
                        price={10999}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Mg51D9C6L._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="341er34"
                        title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)"
                        price={1200}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
                        rating={3}
                    />
                    <Product
                        id="123e334"
                        title="Amazon Brand - Mama Bear Plant Based Baby Laundry Detergent Liquid - 500 ml"
                        price={240}
                        image="https://m.media-amazon.com/images/I/41S6GGCVdsL.jpg"
                        rating={4}
                    />
                    <Product
                        id="41e23r3"
                        title="Hawkins Contura Hard Anodised Aluminium Pressure Cooker, 3.5 Litres"
                        price={599}
                        image="https://m.media-amazon.com/images/I/51RNzqVxOvL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product
                        id="3r3f334"
                        title="TIMEWEAR Analogue Men's Watch (Silver Colored Strap)"
                        price={379}
                        image="https://images-na.ssl-images-amazon.com/images/I/81abyE45yZL._UL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="34ehr33"
                        title="realme Band (Black) - Full Colour Screen with Touchkey, Real-time Heart Rate Monitor, in-Built USB Charging, IP68 Water Resistant"
                        price={1598}
                        image="https://images-na.ssl-images-amazon.com/images/I/61-%2BzVZL4LL._SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        )
    }
}

export default Home
