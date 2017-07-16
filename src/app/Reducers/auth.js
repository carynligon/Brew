const initialState = {
    loggingIn: false,
    signingIn: false,
    loggingOut: false
}

export const auth = (state = initialState,action) => {
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

export const createUser = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_USER_SUCCESS':
            console.log(action)
            return { ...state }
        case 'CREATE_USER_FAIL':
            return { ...state}
        default:
            return state;
    }
}