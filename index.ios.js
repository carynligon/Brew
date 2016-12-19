import React, { Component } from 'react';
import {
    AppRegistry,
    AsyncStorage,
    NavigatorIOS,
    StyleSheet,
} from 'react-native';
import { Login } from './src/app/Pages/Login';
import { Home } from './src/app/Pages/Home';

const firstRoute = {
  name: 'Login',
  component: Login
};

const Main = React.createClass({
  getInitialState() {
    return {navigationBarHidden: false}
  },

  toggleNavBar() {
    this.setState({navigationBarHidden: !this.state.navigationBarHidden});
  },

  render() {
    let initialRoute = {
        routeComponent: Login,
        routeName: 'Login'
    };
    if (AsyncStorage.getItem('loggedIn') === true) {
        initialRoute = {
            routeComponent: Home,
            routeName: 'Home'
        }
    }
    console.warn(initialRoute.routeComponent)
    return (
      <NavigatorIOS
        initialRoute={{
          component: initialRoute.routeComponent,
          title: initialRoute.routeName,
          passProps: {
            toggleNavBar: this.toggleNavBar
          }
        }}
        navigationBarHidden={true}
        style={{flex: 1}}
      />
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Brew', () => Main);
