import React, { Component } from 'react';
import {
    Animated,
    Text,
    View
} from 'react-native';
import methods from '~/fixtures/methods';

import { progressStyles } from '~/styles';

export default class ProgressBar extends Component {
    state = {
        progressAnim: new Animated.Value(0),
        totalWidth: 375,
        totalTime: methods[this.props.method].time,
    }

    componentWillReceiveProps(nextProps) {
        const { totalWidth, totalTime } = this.state;
        const { time: nextTime } = nextProps;
        if (nextTime === 0) {
            Animated.timing(
                this.state.progressAnim,
                {
                    toValue: totalWidth,
                    duration: totalTime * 1000
                }
            ).start();
        }
    }

    render() {
        const { progressAnim } = this.state;
        return (
            <View style={progressStyles.container}>
                <Animated.View
                    style={{
                        width: progressAnim
                    }}
                >
                    <View style={progressStyles.bar}></View>
                </Animated.View>
            </View>
        );
    }
}