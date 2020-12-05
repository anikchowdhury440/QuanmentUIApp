
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import HomeScreen from './src/components/HomeScreen';

class App extends Component {
  render() {
    return (
      <View>
        <HomeScreen/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  
});

export default App;
