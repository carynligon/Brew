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
        color: '#FF3734',
        fontSize: 16,
        marginBottom: 10
    },
    startBtn: {
        backgroundColor: '#FF3734',
        borderRadius: 3,
        marginTop: 10,
        padding: 20,
        width: 120
    },
    startText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center'
    },
    timerText: {
        color: '#D1D1D1',
        fontSize: 70,
        marginBottom: 20,
    }
});