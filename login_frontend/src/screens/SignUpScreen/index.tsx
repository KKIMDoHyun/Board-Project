import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Text, View} from 'react-native';

const SignUpScreen: FC = () => {
  return (
    <View>
      <Text>회원가입</Text>
    </View>
  );
};

export default observer(SignUpScreen);
