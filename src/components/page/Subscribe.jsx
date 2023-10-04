import React from 'react';
import './Subscribe.css';

function Subscribe() {
    return (
        <section className="section">
            <div className="container">
                <div className="sec1">
                    <h2 className="subscribe-title">Subscribe to our newsletter</h2>
                    <p className="subscribe-text">
                        Subscribe to our newsletter and get 10% off your first purchase
                    </p>
                    <div className="subscribe-input">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="subscribe-input-text"
                        />
                        <button className="subscribe-input-btn">Subscribe</button>
                    </div>
                </div>
                <div className="sec2">
                    <img
                        src="https://uploads-ssl.webflow.com/649d39e06feeb793c9aeb22b/64ad213b2f435960a715c990_delivery_shipping_weight_large_limit_icon%20(1).svg"
                        alt="subscribe-img"
                        className="subscribe-img"
                    />
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
