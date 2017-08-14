import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AsyncStorage,
  NavigatorIOS,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from '~/styles/login';
import settings from '~/settings';
import store from '~/redux/store';
import {loginUser, startLoad, stopLoad} from '~/redux/actions/index';
import { Home } from '~/pages/Home';
import { Signup } from '~/pages/Signup';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    AsyncStorage.getItem('token').then((data) => {
      if (data) {
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
  componentWillReceiveProps(nextProps) {
    this.props.toggleNavBar();
    this.props.navigator.push({
      title: "Home",
      component: Home,
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
    const { email, error, password } = this.state;
    if (!error) {
      this.props.loginUser(email, password);
    }
      // if (response.status === 200) {
      //   response.json().then((data) => {
      //     AsyncStorage.multiSet([
      //       ['token', data["user-token"]],
      //       ['id', data["objectId"]]
      //       ]);
      //     this.setState({user: data});
      //     this.setState({
      //       email: '',
      //       password: '',
      //     });
      //   })
      // } else {
      //   this.setState({error: true});
      // }
    // })
    // .catch((error) => {console.error("login error: " + error)});
  }
  render() {
    let inputStyle = styles.textBox;
    let errorMessage;
    if (this.state.error) {
        inputStyle = styles.error;
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
        <Text style={styles.errorMsg}>{errorMessage}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text onPress={this.switchSignup.bind(this)}>Sign up!</Text>
      </View>
    )
  }
}

export const mapStateToProps = ({ user }) => ({ user })

export const mapDispatchToProps = () => ({
  loginUser: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);