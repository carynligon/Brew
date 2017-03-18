import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from '../Styles/components/progress_bar';

export default class ProgressBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bar}></View>
            </View>
            );
    }
}