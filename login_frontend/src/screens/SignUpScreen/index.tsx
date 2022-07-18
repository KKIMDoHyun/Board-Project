import Logo from '@/common/logo';
import SignUpButton from '@/components/SignUpScreen/SignUpButton';
import SignUpInput from '@/components/SignUpScreen/SignUpInput';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';

const SignUpScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <ScrollView style={styles.contentContainer}>
        <SignUpInput />
        <SignUpButton />
      </ScrollView>
    </View>
  );
};

export default observer(SignUpScreen);
