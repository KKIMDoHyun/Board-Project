import Logo from '@/common/logo';
import SignUpButton from '@/components/SignUpScreen/SignUpButton';
import SignUpInput from '@/components/SignUpScreen/SignUpInput';
import Splash from '@/components/SplashScreen/Splash';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';

const SplashScreen: FC = () => {
  return (
    <View>
      <Splash />
    </View>
  );
};

export default observer(SplashScreen);
