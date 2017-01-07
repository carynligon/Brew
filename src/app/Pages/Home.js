import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class Home extends React.Component {
  render() {
    return (
      <View>
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
});
