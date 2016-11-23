import React, { Component } from 'react';
import { AppRegistry, StyleSheet, NavigatorIOS } from 'react-native';
import { Login } from './src/app/Pages/Login';

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
    return (
      <NavigatorIOS
        initialRoute={{
          component: Login,
          title: 'Login',
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
