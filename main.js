import Expo from 'expo';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { firebaseConfig } from './src/app/settings';
import App from './src/app/pages/App';
import Signup from './src/app/pages/Signup';
import Login from './src/app/pages/Login';
import Placeholder from './src/app/pages/Placeholder';
import { Provider } from 'react-redux';
import store from './src/app/redux/store';

import {
  Actions,
  ActionConst,
  Scene,
  Router,
} from 'react-native-router-flux';

let firebaseApp;

class Main extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
  }
  componentWillMount() {
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }

  render() {
    const ConnectedRouter = connect()(Router);
    const Scenes = Actions.create(
      <Scene key='root'>
        <Scene key="placeholder" tabs={false} hideNavBar type={ActionConst.REPLACE}>
          <Scene key="placeholderPage" title="Placeholder" component={Placeholder} />
        </Scene>
        <Scene key='auth' tabs={true} hideNavBar type=      {ActionConst.REPLACE}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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

Expo.registerRootComponent(Main);
