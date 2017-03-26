import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import chemexObj from '../Config/Methods/chemex';

import styles from '../Styles/components/timer';


export default class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = {currentStep: null};
    }
    render() {
        let instruction = '';
        let instructionTitle = chemexObj.timedSteps[0].title;
        let upNext = chemexObj.timedSteps[1].directions;
        let changeTimes = chemexObj.timedSteps.map((step) => {
            return step.time.stop;
        });
        console.log(this.props)
        if (this.props.time) {
            if (this.props.time <= changeTimes[0]) {
                instruction = chemexObj.timedSteps[0].directions;
                instructionTitle = chemexObj.timedSteps[0].title;
            }
            else if (this.props.time <= changeTimes[1] && this.props.time >= changeTimes[0]) {
                instruction = chemexObj.timedSteps[1].directions;
                instructionTitle = chemexObj.timedSteps[1].title;
            }
            else if (this.props.time >= chemexObj.time) {
                this.props.resetTimer();
            }
            else {
                instruction = chemexObj.timedSteps[2].directions;
                instructionTitle = chemexObj.timedSteps[2].title;
            }
        }
        else {
            instruction = chemexObj.nonTimedSteps[this.props.instruction].directions;
        }
        return (
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>
                    {instructionTitle}
                </Text>
                <Text style={styles.instructionsText}>
                    {instruction}
                </Text>
            </View>
            );
    }
}