import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import _ from 'underscore';
import methods from '../Fixtures/methods';

import styles from '../Styles/components/timer';


export default class Instructions extends Component {
    constructor(props) {
        super(props);
        const { method } = this.props;
        const changeTimes = methods[method].timedSteps.map((step) => {
            return {time: step.time.stop, completed: false};
        });
        this.state = {
            currentStep: methods[method].timedSteps[0],
            changeTimes,
        };
    }
    componentWillReceiveProps(nextProps) {
        const { method, instruction } = nextProps;
        const { changeTimes } = this.state;
        const { timedSteps, nonTimedSteps } = methods[method];
        const currentChangeTime = _.findLastIndex(changeTimes, {completed: true});
        const index = currentChangeTime + 1;
        // show non timed steps instruction since timer 
        // hasn't started yet
        if (!nextProps.startTimer) {
            this.setState({ currentStep: nonTimedSteps[instruction]})
        } 
        else {
            // if the current step doesn't have a time key, that means
            // they just started the timer, so show first timed step
            if (this.state.currentStep && !this.state.currentStep.time) {
                this.setState({ currentStep: timedSteps[0] });
            }
            if (!this.state.currentStep) {
                this.props.stopTimer();
            }
            // otherwise follow the time and show the next 
            // incomplete step
            else if (timedSteps[index].time.stop === this.props.time) {
                let newChangeTimes = changeTimes;
                newChangeTimes[index].completed = true;
                const currentStep = timedSteps[index + 1] || null;
                this.setState({ changeTimes: newChangeTimes, currentStep });
            }
        }
    }
    render() {
        const { method } = this.props;
        const { currentStep } = this.state;
        let instruction = '';
        let instructionTitle = methods[method].timedSteps[0].title;

        return (
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>
                    {currentStep ? currentStep.title : "Enjoy!"}
                </Text>
                <Text style={styles.instructionsText}>
                    {currentStep && currentStep.directions}
                </Text>
            </View>
            );
    }
}