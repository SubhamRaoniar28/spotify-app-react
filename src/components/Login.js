import React from 'react'
import './Login.css'
import Logo from '../images/spotify-logo.jpg';

function Login() {
    return (
        <div className="login">

            <img src={Logo} alt="spotify logo" />
            <a>LOGIN WITH SPOTIFY</a>  

        </div>
    )
}

export default Login
