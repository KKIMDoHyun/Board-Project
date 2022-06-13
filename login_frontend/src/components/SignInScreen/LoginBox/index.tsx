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
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text>로고</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <LoginInput />
        <LoginButton />
        <FooterButton />
      </View>
    </View>
  );
};

export default observer(LoginBox);
