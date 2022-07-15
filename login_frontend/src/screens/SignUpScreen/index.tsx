import Logo from '@/common/logo';
import SignUpButton from '@/components/SignUpScreen/SignUpButton';
import SignUpInput from '@/components/SignUpScreen/SignUpInput';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const SignUpScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View
        style={{
          flex: 1,
          width: 450,
          marginTop: 15,
        }}>
        <SignUpInput />
        <SignUpButton />
      </View>
      {/* <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>회원가입</Text>
        </View>
        <SignUpInput />
        <SignUpButton />
      </View> */}
    </View>
  );
};

export default observer(SignUpScreen);
