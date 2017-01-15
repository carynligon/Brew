import React, { Component } from 'react';
import {
  AsyncStorage,
  NavigatorIOS,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import settings from '../settings';
import store from '../Stores/index';
import {loggedIn, startLoad, stopLoad} from '../Actions/index';
import { Home } from './Home';
import { Signup } from './Signup';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    AsyncStorage.getItem('loggedIn').then((data) => {
      if (data) {
        console.log(data)
        this.setState({loggedIn: 'yes'});
      }
      else {
        return this.setState({loggedIn: 'no'});
      }
    });
  }
  switchSignup() {
    this.props.toggleNavBar();
    this.props.navigator.push({
      title: "Signup",
      component: Signup,
      passProps: {
        toggleNavBar: this.props.toggleNavBar,
      }
    });
  }
  handleEmail(text) {
    this.setState({email: text});
  }
  handlePassword(text) {
    this.setState({password: text});
  }
  handlePress() {
    store.dispatch(startLoad());
    fetch('https://api.backendless.com/v1/users/login', {
      method: 'POST',
      headers: settings,
      body: JSON.stringify({
        login: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
        store.dispatch(stopLoad());
      if (response.status === 200) {
        response.json().then((data) => {
          AsyncStorage.setItem('token', data["user-token"]);
          this.setState({user: data});
          this.setState({
            email: '',
            password: '',
          });
          this.props.toggleNavBar();
          this.props.navigator.push({
            title: "Home Page",
            component: Home,
            passProps: {
              toggleNavBar: this.props.toggleNavBar,
              user: this.state.user
            }
          });
        })
      } else {
        this.setState({error: true});
      }
    })
    .catch((error) => {console.error("login error: " + error)});
  }
  render() {
    console.log(this.state)
    let inputStyle = styles.textBox;
    let errorMessage;
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyles}>Login</Text>
        <Text>email</Text>
        <TextInput
          className="email"
          ref="email"
          style={inputStyle}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="email"
          onChangeText={this.handleEmail.bind(this)}
        />
        <Text>password</Text>
        <TextInput
          className="password"
          ref="password"
          style={inputStyle}
          secureTextEntry={true}
          accessibilityLabel="password"
          onChangeText={this.handlePassword.bind(this)}
        />
        <Text style={styles.errorMsg}>{errorMessage}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text onPress={this.switchSignup.bind(this)}>Sign up!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    width: 200,
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
