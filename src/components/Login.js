import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Typewriter from 'react-typewriter'
import './Login.css'
import { loginUrl } from '../spotify'

const Login = () => {
    //Initialize State
    const [typedText, setTypedText] = useState('')

    //Run use effect when component is mounted
    useEffect(() => {
        //Set state after 1600 ms. This way text doesnt immediatley start  typing when page is loaded
        setTimeout(
            () =>
                setTypedText(
                    `It's like normal Spotify... except it doesn't make Matt angry.`
                ),
            1600
        )
    }, [])

    return (
        <div className="login__container">
            <Fade bottom>
                <img
                    className="login__logo"
                    src="/images/spotify-logo.png"
                    alt="Spotify Logo"
                />
                <Typewriter className="login__typewriter" typing={0.8}>
                    {typedText}
                </Typewriter>
                <a className="login__button" href={loginUrl}>
                    Login to Spotify
                </a>
            </Fade>
        </div>
    )
}

export default Login
