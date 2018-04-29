import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Placeholder extends Component {
    componentDidMount() {
        AsyncStorage.getItem('id').done((value) => {
            this.timer = setTimeout(() => {
                if (value !== null) {
                    Actions.home();
                }
                else {
                    Actions.auth();
                }
            }, 1000);
        });
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}><Text>Welcome</Text></View>
        )
    }
}

export default Placeholder;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        color: 'blue',
        flex: 1,
    }
})