import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NotchInfo } from 'expo-notch-info';

class ExampleOne extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
          <Text>HERE?</Text>
      </View>
    );
  }
}

export default ExampleOne;