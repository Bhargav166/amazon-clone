import React from 'react'
import Header from './Header'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div>
            <Header />
            <div className="home">
                <img className='home__image'
                    src="https://www.mitchellandbrown.co.uk/wp-content/uploads/2022/03/Prime-Video.jpg"
                    alt="Prime Video banner " />

                <div className="home__row">
                    <Product
                        id="1"
                        title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now"
                        price={14.11}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg"
                    />
                    <Product
                        id="2"
                        title="Monkey D. Luffy Anime Action Figure Lightweight Attractive Durable for Home Decors, Office Desk and Study Table"
                        price={10.86}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71jIJkgVq4L._AC_UL480_FMwebp_QL65_.jpg"
                    />
                    <Product
                        id="3"
                        title="Celestron AstroMaster 130 EQ Motor Drive Telescope (Grey)"
                        price={338.31}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61Wlv-tbcEL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id=""
                        title="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3'', Heart Rate Monitoring"
                        price={21.74}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61y2VVWcGBL._AC_UL675_SR675,480_.jpg"
                    />
                    <Product
                        id="5"
                        title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
                        price={16.06}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51DY+QrEpOL._AC_UY327_FMwebp_QL65_.jpg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home