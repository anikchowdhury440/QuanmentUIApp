
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Heading from './src/components/Heading';
import Input from './src/components/Input';
import TopHeader from './src/components/TopHeader';

class App extends Component {
  render() {
    return (
      <View>
        <TopHeader/>
        <Heading/>
        <Input/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  
});

export default App;
