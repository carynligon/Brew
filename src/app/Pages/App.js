import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '~/redux/actions/index';
import {loggedIn, startLoad, stopLoad} from '~/redux/actions/index';
import styles from '~/styles/app';
import settings from '~/settings';
import store from '~/redux/store';
import { Home } from '~/pages/Home';
import { Login } from '~/pages/Login';
import { Signup } from '~/pages/Signup';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    AsyncStorage.getItem('id').then((data) => {
      if (data) {
        this.setState({loggedIn: 'yes'});
      }
      else {
        return this.setState({loggedIn: 'no'});
      }
    });
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
        start = <Signup {...this.props} />
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