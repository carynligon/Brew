import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import Instructions from './instructions';
import ProgressBar from './progress_bar';

import styles from '../Styles/components/timer';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            minutes: 0,
            running: false,
            seconds: 0,
            timerTextMins: '00',
            timerTextSecs: '00',
            timerText: '00:00',
        }
        this.state = this.initialState;
        this.timer;
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    updateSomething() {
        this.setState({totalSeconds: (this.state.minutes * 60 + this.state.seconds), running: true});
        if (this.state.seconds < 59) {
            this.setState({seconds: this.state.seconds + 1})
            if (this.state.seconds <= 9 && this.state.minutes <= 9) {
               this.setState({timerText: '0' + this.state.minutes + ':' + '0' + this.state.seconds})
             } else if (this.state.seconds >= 10 && this.state.minutes <= 9) {
               this.setState({timerText: '0' + this.state.minutes + ':' + this.state.seconds})
             } else {
               this.setState({timerText: this.state.minutes + ':' + this.state.seconds})
             }
            } else {
              this.setState({minutes: this.state.minutes + 1, seconds: 0});
              this.setState({timerText: '0' + this.state.minutes + ':00'});
           }
           this.timer = setTimeout(this.updateSomething.bind(this), 1000);
        }

    pauseTimer() {
        clearTimeout(this.timer);
    }

    startTimer() {
        this.timer = setTimeout(this.updateSomething.bind(this), 1000);
    }

    handleStartStop() {
        if (this.state.running) {
            console.log('running')
            this.pauseTimer();
        }
        else {
            console.log('not running')
            this.startTimer();
        }
    }

    resetTimer() {
        clearTimeout(this.timer);
        this.setState(this.initialState);
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Instructions time={this.state.totalSeconds} resetTimer={this.resetTimer} />
                <Text style={styles.timerText}>
                    {this.state.timerText}
                </Text>
                <ProgressBar time={this.state.totalSeconds} />
                <TouchableOpacity
                    style={styles.startBtn}
                    onPress={this.handleStartStop.bind(this)}>
                  <Text>Start Timer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.resetTimer.bind(this)}>
                  <Text style={styles.resetBtn}>Reset</Text>
                </TouchableOpacity>
            </View>
            );
    }
}

reactMixin(Timer.prototype, TimerMixin);