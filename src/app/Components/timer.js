import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            timerTextMins: '00',
            timerTextSecs: '00'
        };
        this.timer;
    }

    updateSomething() {
        this.setState({totalSeconds: (this.state.minutes * 60 + this.state.seconds)});
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

    startTimer() {
        this.timer = setTimeout(this.updateSomething.bind(this), 1000);
    }

    render() {
        console.log(this.state)
        return (
            <View>
                <TouchableOpacity
                    onPress={this.startTimer.bind(this)}>
                  <Text>Start Timer</Text>
                </TouchableOpacity>
                <Text>
                    {this.state.timerText}
                </Text>
            </View>
            );
    }
}

reactMixin(Timer.prototype, TimerMixin);