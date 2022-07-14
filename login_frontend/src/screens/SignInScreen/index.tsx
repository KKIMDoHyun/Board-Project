import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {View} from 'react-native';
import LoginBox from '../../components/SignInScreen/LoginBox';
import {styles} from './styles';

const SignInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <LoginBox />
    </View>
  );
};

export default observer(SignInScreen);
