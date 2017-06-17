import { StyleSheet } from 'react-native';
import globals from './globals/variables';

export default StyleSheet.create({
  button: {
    backgroundColor: '#34edcc',
    marginTop: 5,
    padding: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  error: {
    backgroundColor: globals.white,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    height: 30,
    margin: 15,
    padding: 5,
    textAlign: 'center'
  },
  errorMsg: {
    color: 'red',
    marginBottom: 10
  },
  textBox: {
    backgroundColor: globals.white,
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
    backgroundColor: '#F5FCFF',
  }
});
