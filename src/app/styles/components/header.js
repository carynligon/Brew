import variables from '../globals/variables';

export default {
    header: {
        alignSelf: 'stretch',
        backgroundColor: variables.primary,
        height: 175,
        width: 375,
    },
    headerCollapsed: {
        alignSelf: 'stretch',
        backgroundColor: variables.primary,
        height: 125,
        width: 375,
    },
    details: {
        color: variables.gray_20,
        fontSize: 16,
        paddingBottom: 20,
        textAlign: 'center'
    },
    method: {
        color: variables.white,
        fontSize: 48,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    title: {
        color: variables.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    }
};