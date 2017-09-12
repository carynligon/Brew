import Expo from 'expo';
import React, { Component } from 'react';
import {
    AppRegistry,
    AsyncStorage,
    NavigatorIOS,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { firebaseConfig } from './src/app/settings';
import App from './src/app/pages/App';
import Signup from './src/app/pages/Signup';
import Login from './src/app/pages/Login';
import { Provider } from 'react-redux';
import store from './src/app/redux/store';

import {
  Actions,
  ActionConst,
  Scene,
  Router,
} from 'react-native-router-flux';

let firebaseApp;

const Main = React.createClass({
  getInitialState() {
    return {navigationBarHidden: false};
  },

  toggleNavBar() {
    this.setState({navigationBarHidden: !this.state.navigationBarHidden});
  },

  componentWillMount() {
    firebaseApp = firebase.initializeApp(firebaseConfig);
  },

  render() {
    let initialRoute = {
            routeComponent: App,
            routeName: 'App'
        }
    const ConnectedRouter = connect()(Router);
    const Scenes = Actions.create(
      <Scene key='root'>
        <Scene key='loginsignup' tabs={true} hideNavBar type=      {ActionConst.REPLACE}>
              <Scene key='tab1' title='Login' component={Login}></Scene>
              <Scene key='tab2' title='Signup' component={Signup}></Scene>
          </Scene>
          <Scene key='home' tabs={false} hideNavBar type=      {ActionConst.REPLACE}>
              <Scene key='home' title='App' component={App}></Scene>
          </Scene>
        </Scene>
    );
    return (
      <Provider store={store}>
          <ConnectedRouter scenes={Scenes} />
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
