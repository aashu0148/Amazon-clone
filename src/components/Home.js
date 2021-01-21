import React, { Component } from 'react'
import './Home.css'
import Product from './Product'
class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="home_banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="img not found"></img>
                <div className="home_row">
                    <Product
                        id="329034"
                        title="One plus Never Settle"
                        price={44000}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Ver2_GW._SY304_CB446171261_.jpg"
                        rating={5}
                    />
                    <Product
                        id="34wer334"
                        title="Basic Aurdino"
                        price={999}
                        image="https://m.media-amazon.com/images/I/41ZYd7GggCL._AC_SY200_.jpg"
                        rating={5}
                    />
                    <Product
                        id="23r9u4"
                        title="Mi band 5"
                        price={550}
                        image="https://m.media-amazon.com/images/I/41+Y1oz4TML._AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="3sdf3334"
                        title="i-phone XR"
                        price={100000}
                        image="https://m.media-amazon.com/images/I/31348z5DSJL.__AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="341er34"
                        title="Mixer Juicer by butterfly"
                        price={1200}
                        image="https://m.media-amazon.com/images/I/31Y4580jrOL.__AC_SY200_.jpg"
                        rating={3}
                    />
                    <Product
                        id="123e3334"
                        title="Amazon Brand - Mama Bear Plant Based Baby Laundry Detergent Liquid - 500 ml"
                        price={240}
                        image="https://m.media-amazon.com/images/I/41S6GGCVdsL.jpg"
                        rating={4}
                    />
                    <Product
                        id="41e23r3"
                        title="Hawkins Contura Hard Anodised Aluminium Pressure Cooker, 3.5 Litres, Black"
                        price={1200}
                        image="https://m.media-amazon.com/images/I/51RNzqVxOvL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product
                        id="3r3f334"
                        title="Echo dot"
                        price={5000}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO-MAY/01_Dashboard-QC-Card_1xc._SY116_CB432126548_.jpg"
                        rating={5}
                    />
                    <Product
                        id="34er33"
                        title="Badminton racket"
                        price={150}
                        image="https://m.media-amazon.com/images/I/41YRuJRHybL._AC_SY200_.jpg"
                        rating={4}
                    />
                </div>

            </div>
        )
    }
}

export default Home
