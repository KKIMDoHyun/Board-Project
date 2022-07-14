import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import LoginButton from './LoginButton';
import MiddleButton from './MiddleButton';
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
        <MiddleButton />
        <LoginButton />
      </View>
    </View>
  );
};

export default observer(LoginBox);
