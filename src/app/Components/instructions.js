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
        let upNext = chemexObj.steps[1].directions;
        let changeTimes = chemexObj.steps.map((step) => {
            return step.time.stop;
        });
        console.log(this.props)
        if (this.props.time) {
            if (this.props.time <= changeTimes[0]) {
                instruction = chemexObj.steps[0].directions;
            }
            else if (this.props.time <= changeTimes[1] && this.props.time >= changeTimes[0]) {
                instruction = chemexObj.steps[1].directions;
            }
            else if (this.props.time >= chemexObj.time) {
                this.props.resetTimer();
            }
            else {
                instruction = chemexObj.steps[2].directions;
            }
        }
        return (
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsText}>
                    {instruction}
                </Text>
            </View>
            );
    }
}