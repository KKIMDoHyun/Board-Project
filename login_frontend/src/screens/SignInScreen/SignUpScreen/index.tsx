import SignUpButton from '@/components/SignUpScreen/SignUpButton';
import SignUpInput from '@/components/SignUpScreen/SignUpInput';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const SignUpScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>회원가입</Text>
        </View>
        <SignUpInput />
        <SignUpButton />
      </View>
    </View>
  );
};

export default observer(SignUpScreen);
