import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    ShopSpreeIndia
                </a>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-links" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to="/products" className="nav-links" onClick={toggleMenu}>
                        Products
                    </Link>
                    <Link to="/contact" className="nav-links" onClick={toggleMenu}>
                        Contact
                    </Link>
                    <Link to="/about" className="nav-links" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link to="/request" className="request-btn" onClick={toggleMenu}>
                        <span>Request a Order</span>
                    </Link>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
