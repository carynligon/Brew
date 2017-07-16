import * as firebase from 'firebase';

export const createUser = (email, pass) => {
    try {
        firebase.auth().createUserWithEmailAndPassword(email, pass).then((resp) => {
            return { type: 'CREATE_USER_SUCCESS' };
        })
    }
    catch (error) {
        return { type: 'CREATE_USER_FAIL' };
    }
}

export const startLoad = () => {
      return {
        type: 'START_LOAD'
      }
    }

export const stopLoad = () => {
    return {
        type: 'STOP_LOAD'
    }
}

export const loggedIn = () => {
    return {
        type: 'LOGGED_IN'
    }
}

export const increaseTime = () => {
    return {
        type: 'INCREASE_TIME'
    }
}

export const startTimer = (time) => {
    return {
        type: 'START_TIMER',
        time
    }
}

export const pauseTimer = () => {
    return {
        type: 'PAUSE_TIMER'
    }
}

export const resetTimer = () => {
    return {
        type: 'RESET_TIMER'
    }
}