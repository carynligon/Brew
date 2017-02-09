import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
    },
    timerText: {
        fontSize: 20,
        marginBottom: 20,
    },
    startBtn: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 5,
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
    }
});