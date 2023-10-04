import React from 'react';
import './Working.css';

function Working() {
    return (
        <div className="working">
            <h1>How it works</h1>
            <div className="working__steps">
                <div className="col">
                    <div className="working__step">
                        <div className="working__step__number">1</div>
                        <div className="working__step__info">
                            <img className="working__step__info__image"
                                src={require('../../image/contact-mail.png')}
                                alt="Contact us"
                            />
                            <p className="working__step__info__title">Contact us</p>
                            <p className="working__step__info__description">
                                Customer contact us and we will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="working__step">
                        <div className="working__step__number">2</div>
                        <div className="working__step__info">
                            <img className="working__step__info__image"
                                src={require('../../image/fast-delivery.png')}
                                alt="Get a quote"
                            />
                            <p className="working__step__info__title">Get a quote</p>
                            <p className="working__step__info__description">
                                We will provide you with a quote and delivery date.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="working__step">
                        <div className="working__step__number">3</div>
                        <div className="working__step__info">
                            <img className="working__step__info__image"
                                src={require('../../image/package.png')}
                                alt="Start project"
                            />
                            <p className="working__step__info__title">Delivery</p>
                            <p className="working__step__info__description">
                                We will deliver the product to you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Working;
