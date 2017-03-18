import { StyleSheet } from 'react-native';

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
    backgroundColor: '#FFF',
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
    backgroundColor: '#FFF',
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
