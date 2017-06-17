import { StyleSheet } from 'react-native';
import globals from '../globals/variables';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    instructionsContainer: {
        alignSelf: 'stretch',
        marginTop: 20,
        paddingRight: 30,
        paddingLeft: 30,
    },
    instructionsText: {
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'left',
    },
    instructionsTitle: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'left'
    },
    nextStep: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'left',
    },
    resetBtn: {
        color: globals.primary,
        fontSize: 16,
        marginBottom: 10
    },
    startBtn: {
        backgroundColor: globals.primary,
        borderRadius: 3,
        marginTop: 10,
        padding: 20,
        width: 120
    },
    startText: {
        color: globals.white,
        fontSize: 16,
        textAlign: 'center'
    },
    stepIndicator: {
        fontSize: 14,
    },
    timerText: {
        color: globals.gray_20,
        fontSize: 76,
        marginBottom: 20,
    }
});