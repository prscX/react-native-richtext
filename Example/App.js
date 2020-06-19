/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RNRichText } from '@prscx/react-native-richtext';

const App: () => React$Node = () => {
  let _onPress = () => {
    RNRichText.Show({
      onDone: () => {
        console.log('on done');
      },
      onCancel: () => {
        console.log('on cancel');
      },
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
