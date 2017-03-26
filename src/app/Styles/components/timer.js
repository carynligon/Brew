import { StyleSheet } from 'react-native';

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
        paddingRight: 20,
        paddingLeft: 20,
    },
    instructionsText: {
        fontSize: 16,
        textAlign: 'center',
    },
    instructionsTitle: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center'
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
        width: 100
    },
    startText: {
        textAlign: 'center'
    },
    timerText: {
        fontSize: 70,
        marginBottom: 20,
    }
});