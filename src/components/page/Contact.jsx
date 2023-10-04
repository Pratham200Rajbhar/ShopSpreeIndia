import React from 'react';
import './Contact.css';

function Contact() {
    const contactInfo = [
        {
            id: 1,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
            title: 'Instagram',
            description: '@ShopSpreeIndia',
            link: 'https://www.instagram.com/shopspreeindia/'
        },
        {
            id: 2,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png',
            title: 'WhatsApp',
            description: '@ShopSpreeIndia',
            link: 'https://wa.me/917041297828'
        },
        {
            id: 3,
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png',
            title: 'Facebook',
            description: '@ShopSpreeIndia',
            link: 'https://www.facebook.com/profile.php?id=61551765722901/'
        },
    ];

    return (
        <div className="contact-container">
            <div className="contact-title-section">
                <h1 className="contact-title">Contact Us</h1>
            </div>
            <div className="contact-section">
                {contactInfo.map((item) => (
                    <div className="contact-info" key={item.id}>
                        <div className="contact-info-section">
                            <img className="contact-info-icon"
                                src={item.icon}
                                alt="Contact us"
                            />
                        </div>
                        <div className="contact-info-section">
                            <p className="contact-info-title">{item.title}</p>
                            <p className="contact-info-description">{item.description}</p>
                            <button className="contact-info-btn">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-send-o"></i>
                                    Contact
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
