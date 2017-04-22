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
    console.log('start timer actions')
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