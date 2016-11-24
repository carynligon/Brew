import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import settings from '../settings';
import { Home } from './Home';
import { Login } from './Login';

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

  }

  switchLogin() {
    this.props.toggleNavBar();
    this.props.navigator.push({
      title: "Login",
      component: Login,
      passProps: {
        toggleNavBar: this.props.toggleNavBar,
      }
    });
  }

  handleName(text) {
    this.setState({name: text});
  }

  handleUsername(text) {
    this.setState({username: text});
  }

  handleEmail(text) {
    this.setState({email: text});
  }

  handlePassword(text) {
    this.setState({password: text});
  }

  handlePress() {
    fetch('https://api.backendless.com/v1/users/register', {
      method: 'POST',
      headers: settings,
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      if (response.status === 200) {
        fetch('https://api.backendless.com/v1/users/login', {
          method: 'POST',
          headers: settings,
          body: JSON.stringify({
            login: this.state.email,
            password: this.state.password
          })
        })
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
        <Text style={styles.titleStyles}>Sign up</Text>
        <Text>name</Text>
        <TextInput
          className="name"
          ref="name"
          style={inputStyle}
          autoCapitalize="words"
          accessibilityLabel="name"
          onChangeText={this.handleName.bind(this)}
        />
        <Text>username</Text>
        <TextInput
          className="username"
          ref="username"
          style={inputStyle}
          autoCapitalize="none"
          accessibilityLabel="username"
          onChangeText={this.handleUsername.bind(this)}
        />
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
          <Text>add</Text>
        </TouchableOpacity>
        <Text onPress={this.switchLogin.bind(this)}>Login!</Text>
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
