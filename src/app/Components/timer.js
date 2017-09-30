import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import Header from '~/components/header';
import Instructions from '~/components/instructions';
import methods from '~/fixtures/methods';
import { timerStyles } from '~/styles';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            enableStart: false,
            instruction: 0,
            minutes: 0,
            running: false,
            seconds: 0,
            timerTextMins: '00',
            timerTextSecs: '00',
            textTime: '00:00',
            method: 'aeropress',
            startTimer: false,
            finishedTimer: false,
        }
        this.state = this.initialState;
        this.timer;
        this.enableStart = this.enableStart.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    enableStart() {
        this.setState({enableStart: true});
    }

    nextStep() {
        if (methods[this.state.method].nonTimedSteps.length - 1 === this.state.instruction) {
            this.enableStart();
        }
        else {
            this.setState({instruction: this.state.instruction + 1});
        }
    }

    updateSomething() {
        const { method, totalSeconds: time } = this.state;
        this.setState({totalSeconds: (this.state.minutes * 60 + this.state.seconds), running: true});
        if (this.state.seconds < 59) {
            this.setState({seconds: this.state.seconds + 1})
            if (this.state.seconds <= 9 && this.state.minutes <= 9) {
               this.setState({textTime: '0' + this.state.minutes + ':' + '0' + this.state.seconds})
             } else if (this.state.seconds >= 10 && this.state.minutes <= 9) {
               this.setState({textTime: '0' + this.state.minutes + ':' + this.state.seconds})
             } else {
               this.setState({textTime: this.state.minutes + ':' + this.state.seconds})
             }
            } else {
              this.setState({minutes: this.state.minutes + 1, seconds: 0});
              this.setState({textTime: '0' + this.state.minutes + ':00'});
           }
           this.props.startTimer(this.props.timer.time);
        }

    pauseTimer() {
        clearTimeout(this.timer);
        this.setState({running: false});
    }

    startTimer() {
        this.setState({ startTimer: true }, () => {
            this.timer = setInterval(this.updateSomething.bind(this), 1000);
        });
    }

    stopTimer() {
        clearTimeout(this.timer);
        this.setState({ 
            finishedTimer: true, 
            running: false, 
            disabled: true });
    }

    handleStartStop() {
        if (this.state.enableStart) {
            if (this.state.running) {
                this.pauseTimer();
            }
            else {
                this.startTimer();
            }
        }
        else {
            this.nextStep();
        }
    }

    resetTimer() {
        clearTimeout(this.timer);
        this.setState(this.initialState);
    }

    render() {
        const { enableStart, running, disabled, totalSeconds,
            instruction, startTimer, resetTimer, method, stopTimer,
            finishedTimer, textTime } = this.state;
        let timerText = 'next';
        if (enableStart) {
            timerText = running ? 'pause' : 'start';
        }
        return (
            <View style={timerStyles.container}>
                <Header time={totalSeconds} method={method} />
                <Instructions time={totalSeconds} resetTimer={this.resetTimer} instruction={instruction} method={method} startTimer={startTimer} stopTimer={this.stopTimer} finishedTimer={finishedTimer} />
                <Text style={timerStyles.timerText}>
                    {textTime}
                </Text>
                {!disabled && <TouchableOpacity
                    style={timerStyles.startBtn}
                    onPress={this.handleStartStop.bind(this)}>
                  <Text style={timerStyles.startText}>{timerText}</Text>
                </TouchableOpacity>}
                {!disabled && <TouchableOpacity
                    onPress={this.resetTimer.bind(this)}>
                  <Text style={timerStyles.resetBtn}>Reset</Text>
                </TouchableOpacity>}
            </View>
            );
    }
}

reactMixin(Timer.prototype, TimerMixin);