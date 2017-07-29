import * as firebase from 'firebase';
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../Constants/ActionTypes';

export const createUser = (email, pass) => {
    try {
        firebase.auth().createUserWithEmailAndPassword(email, pass).then((resp) => {
            return { type: CREATE_USER_SUCCESS };
        })
    }
    catch (error) {
        return { type: CREATE_USER_FAIL };
    }
}

export const loginUser = (email, pass) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, pass).then((resp) => {
            dispatchLogin();
        })
    }
    catch (error) {
        return { type: LOGIN_USER_FAIL };
    }
}

export const dispatchLogin = () => {
    return { type: LOGIN_USER_SUCCESS };
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