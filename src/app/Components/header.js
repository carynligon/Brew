import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import { headerStyles } from '~/styles';

export default class Header extends Component {
    render() {
        return (
            <View style={headerStyles.header}>
                <Text style={headerStyles.title}>Brew Guides</Text>
                <Text style={headerStyles.method}>Chemex</Text>
                <Text style={headerStyles.details}>Serves 2 | 4 minutes</Text>
            </View>
            );
    }
}