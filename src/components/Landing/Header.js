import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header-container">
            <div className="header-content">
                <h2 className="header-title">
                    Full-Stack Web Developer & Programmer
                </h2>
                <h4 className="header-subtitle">
                    Hi! I'm Aman, a Full-Stack Web Developer with 15+ Months experience of creating various Projects and working for multiple organizations.
                </h4>
                <div className="header-image-container">
                    <img 
                        className="header-image"
                        src="https://cdn1.vectorstock.com/i/thumb-large/80/25/programmer-flat-color-icon-vector-38028025.jpg" 
                        alt="Aman Dixit - Full Stack Developer" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
