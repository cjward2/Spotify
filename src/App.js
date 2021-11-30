import { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi() //this is a SUPER OBJECT responsible for any interaction between Spotify and our React

function App() {
    const [token, setToken] = useState(null)

    useEffect(() => {
        //useEffect will run any time the window loads
        const hash = getTokenFromUrl()
        window.location.hash = ''
        //next step: remove the token from the url so it doesn't show up in the user's bar
        const _token = hash.access_token
        // this gives us just the token string itself and not its expiration date, etc
        //it's convention to use underscore for a quick temp variable name

        if (_token) {
            setToken(_token)
            // if we have a token, set the token state to be that token!
            spotify.setAccessToken(_token)
            // once we plug this key in, react and spotify can talk freely with each other. We're now Logged In.
            spotify.getMe().then(user => {
                console.log('This is the user, if they exist:', user)
                //the getMe() function gives us info about our user account, it returns a promise
                //for some reason, using a template literal on the console log for user just gives me object:Object or whatever. why is this?
            })
        }

        console.log('BAAAAA I HAVE A TOKEN! ', _token)
    }, [])
    //the empty array as a second argument in useEffect is significant. Why?
    //
    //awesome! now, when we load our page, we get the token object from the url!
    //check the spotify script to see how

    return (
        <div className="App">
            {token ? <h1>OH CRAP! IM LOGGED IN! {token}</h1> : <Login />}
        </div>
    )
    // ternary: if token, show the player! if not? show the login!
}

export default App
