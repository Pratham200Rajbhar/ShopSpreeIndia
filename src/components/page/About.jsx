import React from 'react'
import './About.css'
function About() {
  return (
    <div className="about-container">
      <div className="about-title-section">
        <h1 className="about-title">About Us</h1>
      </div>
      <div className="about-section">
        <div className="col1">
          <h1 className="about-col1-title">ShopSpree</h1>
          <p className="about-col1-description">
            ShopSpree is a one-stop-shop for all your shopping needs. We are a
            team of dedicated individuals who are passionate about bringing the
            best products to you at the best prices. We are always looking to
            improve our services and are open to feedback. We hope you enjoy
            your shopping experience with us.
          </p>
        </div>
        <div className="col2">
          <img className="about-col2-img" src={require('../../image/logo.png')} alt="About us" />
        </div>
      </div>
    </div>
  )
}

export default About