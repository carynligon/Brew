import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import _ from 'underscore';
import chemexObj from '../Config/Methods/chemex';

import styles from '../Styles/components/timer';


export default class Instructions extends Component {
    constructor(props) {
        super(props);
        const changeTimes = chemexObj.timedSteps.map((step) => {
            return {time: step.time.stop, completed: false};
        });
        this.state = {
            currentStep: null,
            changeTimes,
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log('next props', nextProps)
        const { changeTimes } = this.state;
        const currentChangeTime = _.findLastIndex(changeTimes, {completed: true});
        console.log('current change time', currentChangeTime);
        const index = currentChangeTime + 1;
        console.log('index', index)
        if (chemexObj.timedSteps[index].time.stop === this.props.time) {
            let newChangeTimes = changeTimes;
            newChangeTimes[index].completed = true;
            this.setState({ changeTimes: newChangeTimes });
        }
    }
    render() {
        let instruction = '';
        let instructionTitle = chemexObj.timedSteps[0].title;
        let upNext = chemexObj.timedSteps[1].directions;
        console.log(this.state)
        
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
                    {instructionTitle}
                </Text>
                <Text style={styles.instructionsText}>
                    {instruction}
                </Text>
            </View>
            );
    }
}