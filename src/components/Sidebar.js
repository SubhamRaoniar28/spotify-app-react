import React from 'react';
import './Sidebar.css';
import SpotifyLogo from '../images/spotify-logo.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={SpotifyLogo} alt="Spotify Logo"/>
        </div>
    )
}

export default Sidebar
