import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from '../Styles/components/header';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>Brew Guides</Text>
                <Text style={styles.method}>Chemex</Text>
                <Text style={styles.details}>Serves 2 | 4 minutes</Text>
            </View>
            );
    }
}