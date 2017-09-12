import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import styles from '~/styles/signup';
import settings from '~/settings';
import { Home } from '~/pages//Home';
import { Login } from '~/pages//Login';
import { createUser } from '~/redux/actions/index';

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
    let regexp = /^[a-zA-Z_.-_--]+/;
    if (text.match(regexp) === null || text.length < 2) {
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }
    this.setState({name: text});
  }

  handleEmail(text) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (text.match(regexp) === null) {
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }
    this.setState({email: text});
  }

  handlePassword(text) {
    let regexp = /^(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (text.match(regexp) === null) {
      this.setState({error: true});
    } else {
      this.setState({error: false});
    }
    this.setState({password: text});
  }

  handlePress() {
    const { email, error, password } = this.state;
    if (!error) {
      this.props.createUser(email, password);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.userId) {
      Actions.home();
    }
  }

  render() {
    let inputStyle = styles.textBox;
    let errorMsg;
    if (this.state.error) {
      inputStyle = styles.error;
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

export const mapStateToProps = ({ auth}) =>
  ({
    auth,
  });

export default connect(mapStateToProps, { createUser })(Signup);