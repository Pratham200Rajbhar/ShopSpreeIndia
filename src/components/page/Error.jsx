import React from 'react'
import './Error.css'
function Error() {
    return (
        <div className="error-section">
            <div className="error-container">
                <img src="https://i.imgur.com/qIufhof.png" alt="error" />
                <p className="error-label">404 - PAGE NOT FOUND</p>
                <p className="error-description">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <button className="error-btn">Go To Homepage</button>
            </div>
        </div>
    )
}

export default Error