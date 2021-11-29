// this is lowercase spotify.js because it IS NOT a component!

export const authEndpoint = 'https://accounts.spotify.com/authorize'
// this is where it takes you when you click the login button

const redirectUri = 'http://localhost:/3000'
//once logged in, redirect to the address of our app, which is currently running on localhost

const clientId = 'fe676df031a148faa30ea0b8fc4737e5'

//now: scopes

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    'user-modify-playback-state'
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirectUri=${redirectUri}&scopre=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`

// %20 is the ascii key for a space, so we're putting spaces between all our scopes
