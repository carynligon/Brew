import variables from '~/styles/globals/variables';

export default {
    contentContainer: {
        paddingVertical: 0,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'space-around'
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
        color: variables.primary,
        fontSize: 16,
        marginBottom: 10
    },
    startBtn: {
        backgroundColor: variables.primary,
        borderRadius: 3,
        marginTop: 10,
        padding: 20,
        width: 120
    },
    startText: {
        color: variables.white,
        fontSize: 16,
        textAlign: 'center'
    },
    stepIndicator: {
        fontSize: 14,
    },
    timerText: {
        color: variables.gray_20,
        fontSize: 76,
        marginBottom: 20,
    },
    instructionList: {
        marginTop: 70,
    },
    instructionListHeader: {
        color: variables.secondary,
        fontSize: 18,
        fontWeight: "600",
    }
};