import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleStyles: {
    fontSize: 30,
    marginBottom: 15
  },
  textBox: {
    backgroundColor: '#FFF',
    height: 30,
    margin: 15,
    padding: 5,
    textAlign: 'center'
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
  button: {
    backgroundColor: '#34edcc',
    marginTop: 5,
    padding: 5
  },
  viewStyles: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
