import * as firebase from 'firebase';
import { CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '~/redux/constants/ActionTypes';
import store from '~/redux/store';

export const createUserSuccess = (resp) => {
    return {
        type: CREATE_USER_SUCCESS,
        user: resp,
    }
}

export const createUserFail = (error) => {
    return {
        type: CREATE_USER_FAIL,
        error
    }
}

export const loginUserSuccess = (resp) => {
    return {
        type: LOGIN_USER_SUCCESS,
        user: resp,
    }
}

export const loginUserFail = (error) => {
    return {
        type: LOGIN_USER_FAIL,
        error
    }
}

export const createUser = (email, pass) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((resp) => {
            return dispatch(createUserSuccess(resp));
        })
        .catch((error) => disptach(createUserFail));
}

export const loginUser = (email, pass) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => { dispatch(loginUserFail)});
}

export const dispatchLogin = () => {
    return { type: LOGIN_USER_SUCCESS };
}