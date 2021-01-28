/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

class Bananas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    setInterval(() => {
      this.state.show = !this.state.show;
    }, 1000);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let display = this.state.show ? 'block': 'none';
    return (
      <View>
        <Text>this is banana</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
      </View>
    );
  }
}

export default class ReactNativeSeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Bananas></Bananas>
      </View>
    );
  }
}



AppRegistry.registerComponent('ReactNativeSeed', () => ReactNativeSeed);
