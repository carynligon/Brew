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
        let instruction = chemexObj.steps[0].directions;
        let upNext = chemexObj.steps[1].directions;
        let changeTimes = chemexObj.steps.map((step) => {
            return step.time.stop;
        });
        if (this.props.time <= changeTimes[0]) {
            instruction = chemexObj.steps[0].directions;
        }
        else if (this.props.time <= changeTimes[1] && this.props.time >= changeTimes[0]) {
            instruction = chemexObj.steps[1].directions;
        }
        else {
            instruction = chemexObj.steps[2].directions;
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