import React, { Component } from 'react';
import {
    AppRegistry,
    AsyncStorage,
    NavigatorIOS,
    StyleSheet,
} from 'react-native';
import { Login } from './src/app/Pages/Login';
import { Home } from './src/app/Pages/Home';

const Main = React.createClass({
  getInitialState() {
    let loggedIn;
    AsyncStorage.getItem('loggedIn', (err, result) => {
        if (result === 'true') {
            console.warn('anything')
            loggedIn =  true;
        } else {
            loggedIn = false;
        }
    });
    return {navigationBarHidden: false, loggedIn: loggedIn}
  },

  toggleNavBar() {
    this.setState({navigationBarHidden: !this.state.navigationBarHidden});
  },

  render() {
    let initialRoute;
    if (this.state.loggedIn) {
        initialRoute = {
            routeComponent: Home,
            routeName: 'Home'
        }
    } else {
        initialRoute = {
            routeComponent: Login,
            routeName: 'Login'
        }
    }
    console.warn(this.state.loggedIn)
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
