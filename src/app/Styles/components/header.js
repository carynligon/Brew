import { StyleSheet } from 'react-native';
import globals from '../globals/variables';

export default StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        backgroundColor: globals.primary,
        marginTop: 10,
    },
    details: {
        color: globals.gray_20,
        fontSize: 16,
        paddingBottom: 20,
        textAlign: 'center'
    },
    method: {
        color: globals.white,
        fontSize: 48,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    title: {
        color: globals.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    }
});