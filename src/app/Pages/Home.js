import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '~/styles/home';
import settings from '~/settings';
import { Timer } from '~/components/timer';

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
        AsyncStorage.removeItem('id');
        Actions.auth();
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
