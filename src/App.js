import { useEffect, useState } from 'react'
import Login from './components/Login'
import Player from './components/Player'
import './App.css'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi() //this is a SUPER OBJECT responsible for any interaction between Spotify and our React

function App() {
    // const [token, setToken] = useState(null)
    //we're not setting state anymore, we're DISPATCHING changes to our DATALAYER

    //this is an important line of code below: it's how we pull ANYTHING WE WANT from the DataLayer
    //in this case? {user}. and whatever else we want

    const [{ user, token }, dispatch] = useDataLayerValue()
    //"dispatch is like a gun. it's our special gun, and we use this gun to shoot at the data layer."

    useEffect(() => {
        //useEffect will run any time the window loads
        const hash = getTokenFromUrl()
        window.location.hash = ''
        //next step: remove the token from the url so it doesn't show up in the user's bar
        const _token = hash.access_token
        // this gives us just the token string itself and not its expiration date, etc
        //it's convention to use underscore for a quick temp variable name

        //SANITY CHECK: if there is a token, then do a thing.
        //in this case: if there's a token, then render the app! otherwise: render the login page
        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            })

            // setToken(_token)
            // if we have a token, set the token state to be that token!DEPRECATED, we're using DISPATCH instead now

            spotify.setAccessToken(_token)
            //here we're using the SPOTIFY WEB API! we set our state "token" to be spotify's "_token"
            // once we plug this key in, react and spotify can talk freely with each other. We're now Logged In.
            spotify.getMe().then(user => {
                // console.log('This is the user, if they exist:', user)

                //the getMe() function gives us info about our user account, it returns a promise
                //for some reason, using a template literal on the console log for user just gives me object:Object or whatever. why is this?
                // console.log(`and also the user is: ${user}`)
                dispatch({
                    //pew pew! i shoot at the data layer with my special gun called Dispatch!
                    type: 'SET_USER',
                    // remember: actions all have a type
                    user: user
                    //user is our "PAYLOAD"
                    //change the user field in the DataLayer to be our current user. now this value can be pulled by any component, regardless of where it is in the parent-child hierarchy. no props-drilling necessary!
                })
            })
        }

        console.log('BAAAAA I HAVE A TOKEN! ', _token)
    }, [])
    //the empty array as a second argument in useEffect is significant. Why?
    //
    //awesome! now, when we load our page, we get the token object from the url!
    //check the spotify script to see how

    console.log('the sick ass user of this sick app is: ', user)
    // a check to see if we're able to pull {user} out of the DataLayer, see above
    console.log('lets grab the token from our DataLayer: ', token)

    return (
        <div className="App">
            {token ? <Player spotify={spotify} /> : <Login />}
            {/* the only prop we want to pass down is our big spotify object, which we'll pass to our Player component */}
        </div>
    )
    // ternary: if token (in the state), show the music player! if not? show the login!
}

export default App
