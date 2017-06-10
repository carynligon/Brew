import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  NavigatorIOS,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from '../Styles/home';
import settings from '../settings';
import { Timer } from '../Components/timer';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    AsyncStorage.getItem('token').then((data) => {
      if (data) {
        this.setState({token: data});
      }
    });
  }
  logout() {
    fetch('https://api.backendless.com/v1/users/logout', {
      method: 'GET',
      headers: {...settings, "user-token": this.state.token}
    })
    .then((response) => {
      if (response.status === 200) {
        AsyncStorage.removeItem('token');
        this.props.toggleNavBar();
        this.props.navigator.push({
          title: "Login",
          component: Login,
          passProps: {
            toggleNavBar: this.props.toggleNavBar,
          }
        });
      }
    })
    .catch((error) => {console.error("login error: " + error)});
  }
  render() {
    return (
      <View style={styles.container}>
        <Timer {...this.props} />
      </View>
    );
  }
}
