/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import bottomTabs from './common/bottomTabs';
import BoardDetailScreen from './screens/BoardDetailScreen';
import CreateBoardScreen from './screens/CreateBoardScreen';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="BoardDetail" component={BoardDetailScreen} />
        <Stack.Screen
          name="CreateBoard"
          component={CreateBoardScreen}
          options={{title: '게시글 작성', headerShown: true}}
        />
        <Stack.Screen name="bottomTabs" component={bottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
