import AdditionalFuncStore from '@/stores/additionalFuncStore';
import UserStore from '@/stores/UserStore';
import {signIn} from '@/utils/api/auth';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const LoginButton: FC = () => {
  const navigation = useNavigation();

  const login = () => {
    if (UserStore.userId === '' || UserStore.password === '') {
      AdditionalFuncStore.setErrMessage('아이디와 비밀번호를 입력하세요');
    } else {
      const user = {
        userId: UserStore.userId,
        password: UserStore.password,
      };
      signIn(user)
        .then(res => {
          if (res.status === 201) {
            UserStore.setAccessToken(res.data.accessToken);
            UserStore.setRefreshToken(res.data.refreshToken);
            console.log('로그인 성공');
            navigation.navigate('Home');
          }
        })
        .catch(err => {
          AdditionalFuncStore.setErrMessage(err.response.data.message);
        });
    }
  };
  return (
    <View>
      <Pressable
        style={styles.loginBtn}
        onPress={() => {
          login();
        }}>
        <Text style={styles.loginBtnText}>로그인</Text>
      </Pressable>
    </View>
  );
};

export default observer(LoginButton);
