export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null //we COULD set this to a valid token string, which means that BY DEFAULT you'd be authenticated. NEAT! for debugging
    //these are our default values.
}

//a reducer takes TWO things

//the state , and the action

//a reducer just sits there and listens to actions
//we have a switch statement that tells it what to do for each given action it might listen for

const reducer = (state, action) => {
    console.log(action)
    // apparently the above line is debugging gold

    //an action has a TYPE, and a PAYLOAD

    switch (action.type) {
        case 'SET_USER':
            //reducer goes "This is what I do when I get an action of type SET_USER!"
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        //set the state to whatever it currently is, PLUS this user action
        //without the spread syntax, you'd overwrite the entire state, right?

        default: {
            return state
            //the default case: just do nothing. return the state as it is
        }
    }
}

export default reducer
