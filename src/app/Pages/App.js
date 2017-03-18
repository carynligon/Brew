import React, { Component } from 'react';
import {
  AsyncStorage,
  NavigatorIOS,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from '../Styles/app';
import settings from '../settings';
import store from '../store';
import {loggedIn, startLoad, stopLoad} from '../Actions/index';
import { Home } from './Home';
import { Login } from './Login';
import { Signup } from './Signup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    AsyncStorage.getItem('token').then((data) => {
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

  render() {
    console.log(this.props.navigator);
    let inputStyle = styles.textBox;
    let errorMessage;
    let stuff;
    if (this.state.error) {
      inputStyle = styles.error;
      errorMessage = "Invalid email or password"
    }
    if (this.state.loggedIn) {
      if (this.state.loggedIn === 'yes') {
        stuff = <Home toggleNavBar={this.props.toggleNavBar} navigator={this.props.navigator}/>
      } else {
        stuff = <Login toggleNavBar={this.props.toggleNavBar} navigator={this.props.navigator}/>
      }
    }
    return (
      <View style={styles.container}>
        {stuff}
      </View>
    )
  }
}