import React from 'react'
import './Carousel.css'
function carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide carousel_banner" data-interval="2500" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/RDay21/GW/Final/RD21_PCHERO_EN_1X._CB662559358_.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="Fourth slide" />
                </div>
            </div>
            <a className="carousel-control-prev carousel_prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <i className="fas fa-chevron-left fa-3x"></i>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next carousel_next" href="#carouselExampleControls" role="button" data-slide="next" >
                <i className="fas fa-chevron-right fa-3x"></i>
                <span className="sr-only">Next</span>
            </a>

        </div>
    )
}

export default carousel
