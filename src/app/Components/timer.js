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
        this.state = {number: 0};
        this.timer;
    }

    updateSomething() {
        this.setState({number: this.state.number + 1});
        this.timer = setTimeout(this.updateSomething.bind(this), 1000);
    }

    startTimer() {
        this.timer = setTimeout(this.updateSomething.bind(this), 1000);
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.startTimer.bind(this)}>
                  <Text>Start Timer</Text>
                </TouchableOpacity>
                <Text>
                    {this.state.number}
                </Text>
            </View>
            );
    }
}

reactMixin(Timer.prototype, TimerMixin);