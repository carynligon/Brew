import { StyleSheet } from 'react-native';
import globals from '../globals/variables';

export default StyleSheet.create({
    bar: {
        backgroundColor: globals.secondary,
        height: 10,
        width: 100
    },
    container: {
        backgroundColor: globals.yellow_lt,
        height: 10,
        position: 'relative',
        bottom: 20,
        width: 375
    }
});