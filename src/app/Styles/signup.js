import variables from '~/styles/globals/variables';
import layout from '~/styles/globals/layout';

export default {
  button: {
    backgroundColor: '#34edcc',
    marginTop: 5,
    padding: 5
  },
  container: layout.container,
  error: {
    backgroundColor: variables.white,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    height: 30,
    margin: 15,
    padding: 5,
    textAlign: 'center'
  },
  textBox: {
    backgroundColor: variables.white,
    height: 30,
    margin: 15,
    padding: 5,
    textAlign: 'center'
  },
  titleStyles: {
    fontSize: 30,
    marginBottom: 15
  },
  viewStyles: {
    alignItems: 'center',
    backgroundColor: variables.white,
  }
};
