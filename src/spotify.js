// this is lowercase spotify.js because it IS NOT a component!

export const authEndpoint = 'https://accounts.spotify.com/authorize'
// this is where it takes you when you click the login button

const redirectUri = 'http://localhost:3000/'
//once logged in, redirect to the address of our app, which is currently running on localhost
//CAREFUL! YOU NEED THIS TRAILING SLASH, OTHERWISE THE WHOLE FUCKING THING BREAKS! who woulda thought?
//don't omit the slash after :3000

const clientId = 'fe676df031a148faa30ea0b8fc4737e5'

//now: scopes

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    'user-modify-playback-state'
]

export const getTokenFromUrl = () => {
    //we're creating this function ourselves!
    //video at 1:01:46 at this point...
    return window.location.hash
        .substring(1)
        .split('&') //split at the ampersand character
        .reduce((initial, item) => {
            //but what the shit is reduce?
            //then split again at the equal sign to break off the secret access token
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            //go into the initial array that's being returned, for the access token decode the URI component
            return initial

            //all we need to really know here is that this code pulls the access token out
        }, {})

    //this goes to the has # in the url (that's what window.location is, the url)
    // my url at this point is:
    // http://localhost:3000/#access_token=BQB0khbhVLtEaWifOXFrjvI3zcoKt8Mk2kTdFKFlUgAomI23zBIus1mGVY3l96LDyqVktAwLNlwd5H_WVDKwKOHmiu1510mpHPCcS9jYm777VupxAbMxj81SXBe1jTLfjBCoAT5wzSRx5DiVSJzskWzoL6iYY6mVHfmpb2iWmiJLXsriJw&token_type=Bearer&expires_in=3600
    //see where the "hash" is? after 3000/
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`

// %20 is the ascii key for a space, so we're putting spaces between all our scopes
// this is how we're able to pass all these different scope strings to our url... they're &scope=blah-blah%20fuck-shit-fuck%20go-to-hell
