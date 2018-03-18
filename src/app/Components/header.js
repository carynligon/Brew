import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import { headerStyles } from '~/styles';

export default class Header extends Component {
    render() {
        const { currentStep, method, nextStep, timer: showTimer, timerText } = this.props;
        console.log(currentStep, 'current')
        return (
            <View style={headerStyles.header}>
                <Text style={headerStyles.title}>{showTimer ? currentStep.title : 'Brew Guides'}</Text>
                <Text style={headerStyles.method}>{showTimer ? timerText : 'Chemex'}</Text>
                {!showTimer && <Text style={headerStyles.details}>Serves 2 | 4 minutes</Text>}
            </View>
            );
    }
}