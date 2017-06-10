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
        console.log('next props', nextProps)
        const { method } = nextProps;
        const { changeTimes } = this.state;
        const { timedSteps, nonTimedSteps } = methods[method];
        const currentChangeTime = _.findLastIndex(changeTimes, {completed: true});
        console.log('current change time', currentChangeTime);
        const index = currentChangeTime + 1;
        console.log('index', index)
        if (methods[method].timedSteps[index].time.stop === this.props.time) {
            let newChangeTimes = changeTimes;
            newChangeTimes[index].completed = true;
            const currentStep = methods[method].timedSteps[index + 1] || null;
            this.setState({ changeTimes: newChangeTimes, currentStep });
        }
    }
    render() {
        const { method } = this.props;
        const { currentStep } = this.state;
        let instruction = '';
        let instructionTitle = methods[method].timedSteps[0].title;
        console.log('state of instructions', this.state)

        
        // if (this.props.time) {
        //     if (this.props.time <= changeTimes[0]) {
        //         instruction = chemexObj.timedSteps[0].directions;
        //         instructionTitle = chemexObj.timedSteps[0].title;
        //     }
        //     else if (this.props.time <= changeTimes[1] && this.props.time >= changeTimes[0]) {
        //         instruction = chemexObj.timedSteps[1].directions;
        //         instructionTitle = chemexObj.timedSteps[1].title;
        //     }
        //     else if (this.props.time >= chemexObj.time) {
        //         this.props.resetTimer();
        //     }
        //     else {
        //         instruction = chemexObj.timedSteps[2].directions;
        //         instructionTitle = chemexObj.timedSteps[2].title;
        //     }
        // }
        // else {
        //     instruction = chemexObj.nonTimedSteps[this.props.instruction].directions;
        // }
        return (
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>
                    {currentStep.title}
                </Text>
                <Text style={styles.instructionsText}>
                    {currentStep.directions}
                </Text>
            </View>
            );
    }
}