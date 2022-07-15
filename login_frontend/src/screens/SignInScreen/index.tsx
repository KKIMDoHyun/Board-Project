import Logo from '@/common/logo';
import LoginButton from '@/components/SignInScreen/LoginButton';
import LoginInput from '@/components/SignInScreen/LoginInput';
import MiddleButton from '@/components/SignInScreen/MiddleButton';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const SignInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.contentContainer}>
        <LoginInput />
        <MiddleButton />
        <LoginButton />
      </View>
    </View>
  );
};

export default observer(SignInScreen);
