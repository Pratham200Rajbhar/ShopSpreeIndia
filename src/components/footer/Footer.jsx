// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    ShopSpreeIndia
                </div>
                <ul className="footer-menu">
                    <li className="footer-item">
                        <a href="#" className="footer-link">Home</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">About</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">Services</a>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">Contact</a>
                    </li>
                </ul>
                <div className="footer-social">
                    <a href="#" className="footer-icon">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="footer-icon">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="footer-icon">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
