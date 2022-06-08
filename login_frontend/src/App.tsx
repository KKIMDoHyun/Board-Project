/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {Text, View} from 'react-native';
import LoginScreen from './screens/LoginScreen';

const App: FC = () => {
  return (
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <LoginScreen />
    </View>
  );
};

export default App;
