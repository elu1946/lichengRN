import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import BaiduMapDemo from './BaiduMapDemo';
import MyNavigators from './src/myNavigations';

export default class LichenRN extends Component {
  render() {
    return (
      <MyNavigators/>
    );
  }
}

AppRegistry.registerComponent('LichenRN', () => LichenRN);