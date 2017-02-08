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
        let instruction = "get ready!";
        if (this.props.time <= chemexObj.steps[0].time.stop) {
            instruction = chemexObj.steps[0].directions;
        }
        else if (this.props.time <= chemexObj.steps[1].time.stop) {
            instruction = chemexObj.steps[1].directions;
        }
        else if (this.props.time <= chemexObj.steps[2].time.stop) {
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