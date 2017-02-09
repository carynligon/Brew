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
        console.log(chemexObj.steps.length);
        for (i=0; i<chemexObj.steps.length-1; i++) {
            if (this.props.time <= chemexObj.steps[i].time.stop) {
                instruction = chemexObj.steps[i].directions;
                upNext = chemexObj.steps[i+1].directions;
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