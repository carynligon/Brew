const initialState = {
    loggingIn: false,
    signingIn: false,
    loggingOut: false
}

const auth = (state = initialState,action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return {...state, loggedIn: true}
        case 'SIGN_IN':
            return {signingIn: true}
        case 'LOG_OUT':
            return {loggingOut: true}
        default:
            return state;
    }
}

export default auth;