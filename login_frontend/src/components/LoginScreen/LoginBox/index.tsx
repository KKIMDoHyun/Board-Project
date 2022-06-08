import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import FooterButton from './FooterButton';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import {styles} from './styles';

const LoginBox: FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.5,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>로고</Text>
        </View>
      </View>
      <View style={{flex: 2}}>
        <LoginInput />
        <LoginButton />
        <FooterButton />
      </View>
    </View>
  );
};

export default observer(LoginBox);
