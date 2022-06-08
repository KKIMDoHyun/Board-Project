import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Dimensions, Text, View} from 'react-native';
import LoginBox from '../../components/LoginScreen/LoginBox';
import {styles} from './styles';

const LoginScreen: FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text
        style={{
          color: '#000000',
          marginTop: Dimensions.get('screen').height * 0.1,
          marginBottom: 20,
          fontSize: 30,
          fontWeight: '700',
        }}>
        로그인
      </Text> */}
      <LoginBox />
    </View>
  );
};

export default observer(LoginScreen);
