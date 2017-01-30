import React from 'react';
import photo from './header_photo.jpg';

function Header(props) {
    
    function handleClick() {
        event.preventDefault();
        props.rsvpClick();
    }
    
    return (
        <div className="header">
            <img src={photo} alt="Willie and Hallie" />
            <h1>We're getting married!</h1>
            <p>We're getting married. We want you to come. We're holding two shindigs. Please <span className="link" onClick={handleClick}>RSVP</span>.</p>
        </div>
    )
    
}

export default Header