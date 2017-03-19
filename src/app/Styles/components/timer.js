import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
    },
    instructionsContainer: {
        alignSelf: 'stretch',
        paddingRight: 20,
        paddingLeft: 20,
    },
    instructionsText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    nextStep: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
    },
    resetBtn: {
        textDecorationLine: 'underline'
    },
    startBtn: {
        backgroundColor: 'gray',
        borderRadius: 3,
        marginTop: 10,
        padding: 5,
    },
    timerText: {
        fontSize: 70,
        marginBottom: 20,
    }
});