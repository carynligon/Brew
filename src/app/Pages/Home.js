import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import settings from '../settings';
import { Login } from './Login';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fetch('https://api.backendless.com/v1/users/logout', {
      method: 'GET',
      headers: {...settings, "user-token": this.props.user["user-token"]}
    })
    .then((response) => {
      console.log(response);
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
    console.log(this.props)
    return (
      <View>
        <TouchableOpacity
          style={styles.logout}
          onPress={this.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <View className="feed_item" style={styles.view}>
            <Image
              style={{width: 500, height: 350}}
              source={{uri:"https://images.contentful.com/3h0qt25be5vd/5PvJBfq0EM208C4MmkcsQu/9940a19d6310f63dd9ff71649b590470/Brew_Guide-Chemex-Step05.jpg?w=960&h=640&fm=jpg&q=70"}}
            />
            <Text>
                Chemex
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: 400,
    width: 400
  },
  img: {
    backgroundColor: '#34EAD6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    height: 300,
    width: 300
  },
  logout: {
    marginTop: 100
  }
});
