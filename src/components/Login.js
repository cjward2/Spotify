import React from 'react';
import Fade from "react-reveal/Fade";
import Typewriter from 'react-typewriter';
import './Login.css';

const Login = () => {
    return (
        
        <div className="login__container">
            <Fade bottom>
            <img className="login__logo" src="/images/spotify-logo.png" alt="Spotify Logo" />
            
            <a className="login__button" href="#">Login to Spotify</a>
            {/* <Typewriter className="login__typewriter" typing={ 0.7 }>except it doesn't make Matt angry!</Typewriter> */}
            </Fade>
        </div>
        
    )
}

export default Login
