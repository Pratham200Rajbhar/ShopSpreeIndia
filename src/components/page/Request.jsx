import React, { useState } from 'react';
import './Request.css';
import database from './database';

function Request() {

    // Code for getting current date
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');

    const Push = () => {
        database.ref('contacts/').push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    const fetchData = () => {
        const db = database.ref('contacts/');
        db.on('value', (snapshot) => {
            const data = snapshot.val();
            alert(data);
        });
    };

    return (
        <div className="request-section">
            <div className="request-container">
                <h1 className="request-heading">Request an Order</h1>
                <p className="request-description">Please fill out the form below to request an order.</p>
                <form className="request-form">
                    <div className="request-input-container">
                        <div className="request-input-group">
                            <label htmlFor="month" className="request-label">Month</label>
                            <input type="number" id="month" className="request-input" placeholder="Month" value={month} disabled />
                        </div>
                        <div className="request-input-group">
                            <label htmlFor="day" className="request-label">Day</label>
                            <input type="number" id="day" className="request-input" placeholder="Day" value={day} disabled />
                        </div>
                        <div className="request-input-group">
                            <label htmlFor="year" className="request-label">Year</label>
                            <input type="number" id="year" className="request-input" placeholder="Year" value={year} disabled />
                        </div>
                    </div>
                    <div className="request-input-container">
                        <div className="request-input-group">
                            <label htmlFor="firstName" className="request-label">First Name</label>
                            <input type="text"
                                id="firstName"
                                className="request-input"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                placeholder="First Name" />
                        </div>
                        <div className="request-input-group">
                            <label htmlFor="lastName" className="request-label">Last Name</label>
                            <input type="text"
                                id="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                                className="request-input"
                                placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="request-input-container">
                        <div className="request-input-group">
                            <label htmlFor="email" className="request-label">Email Address</label>
                            <input type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="request-input"
                                placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="request-input-container">
                        <div className="request-input-group">
                            <label htmlFor="phone" className="request-label">Phone Number</label>
                            <input type="text"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                className="request-input"
                                placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="request-input-container">
                        <div className="request-input-group">
                            <label htmlFor="address" className="request-label">Address</label>
                            <textarea id="address"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                className="request-input"
                                placeholder="Address"
                                rows="5"
                                cols="50"></textarea>
                        </div>
                    </div>
                    <button className="request-btn" onClick={Push}>Order Now</button>
                    <button className="request-btn" onClick={fetchData}>Fetch Data</button>
                </form>
            </div>
        </div>
    );
}

export default Request;
