import { increaseTime, startTimer, pauseTimer, resetTimer } from './timer';

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

increaseTime;
startTimer;
pauseTimer;
resetTimer;