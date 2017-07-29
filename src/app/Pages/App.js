import React, { Component } from 'react';
import * as firebase from 'firebase';
import { firebaseConfig } from '../settings';
import {
  AsyncStorage,
  NavigatorIOS,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../Actions/index';

import styles from '../Styles/app';
import settings from '../settings';
import store from '../store';
import {loggedIn, startLoad, stopLoad} from '../Actions/index';
import { Home } from './Home';
import { Login } from './Login';
import { Signup } from './Signup';

let firebaseApp;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    AsyncStorage.getItem('token').then((data) => {
      if (data) {
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

  componentDidMount() {
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }

  render() {
    let inputStyle = styles.textBox;
    let errorMessage;
    let start;
    if (this.state.error) {
      inputStyle = styles.error;
      errorMessage = "Invalid email or password"
    }
    if (this.state.loggedIn) {
      if (this.state.loggedIn === 'yes') {
        start = <Home {...this.props} />
      } else {
        start = <Login {...this.props} />
      }
    }
    return (
      <View style={styles.container}>
        {start}
      </View>
    )
  }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

// the (Main) is taking the main component and add all the props and data from state to props and add all action creators
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;