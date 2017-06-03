import Expo from 'expo';
import React, { Component } from 'react';
import {
    AppRegistry,
    AsyncStorage,
    NavigatorIOS,
    StyleSheet,
} from 'react-native';
import App from './src/app/Pages/App';
import { Provider } from 'react-redux';
import store from './src/app/store';

const Main = React.createClass({
  getInitialState() {
    return {navigationBarHidden: false};
  },

  toggleNavBar() {
    this.setState({navigationBarHidden: !this.state.navigationBarHidden});
  },

  componentWillMount() {
    AsyncStorage.getItem('token').done((value) => {
      if (value) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: true});
      }
    });
  },

  render() {
    let initialRoute = {
            routeComponent: App,
            routeName: 'App'
        }
    return (
      <Provider store={store}>
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
      </Provider>
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

// AppRegistry.registerComponent('Brew', () => Main);
Expo.registerRootComponent(Main);
