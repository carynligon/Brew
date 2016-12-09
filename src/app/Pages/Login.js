import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NavigatorIOS,
  Platform
} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import auth from '../Reducers/auth';

import settings from '../settings';
// import store from '../Stores/index';
import { Home } from './Home';
import { Signup } from './Signup';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  );
  return createStore(auth, initialState, enhancer);
}
configureStore();

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

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
    fetch('https://api.backendless.com/v1/users/login', {
      method: 'POST',
      headers: settings,
      body: JSON.stringify({
        login: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      if (response.status === 200) {
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
          }
        });
      } else {
        this.setState({error: true});
      }
    })
    .catch((error) => {console.error(error)});
  }

  render() {
    let inputStyle = styles.textBox;
    let errorMsg;
    if (this.state.error) {
      inputStyle = {
        backgroundColor: '#FFF',
        color: 'red',
        height: 30,
        margin: 15,
        padding: 5,
        textAlign: 'center'
      }
      errorMsg = (<Text style={{color: 'red'}}>invalid username or password</Text>);
    }
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
        {errorMsg}
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
    textAlign: 'center'
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
