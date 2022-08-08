import AdditionalFuncStore from '@/stores/additionalFuncStore';
import UserStore from '@/stores/UserStore';
import {signIn} from '@/utils/api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const LoginButton: FC = () => {
  const navigation = useNavigation<any>();

  const login = () => {
    if (UserStore.signInUserId === '') {
      AdditionalFuncStore.setErrMessage('아이디를 입력하세요!');
    } else if (UserStore.signInPassword === '') {
      AdditionalFuncStore.setErrMessage('비밀번호를 입력하세요!');
    } else {
      const user = {
        userId: UserStore.signInUserId,
        password: UserStore.signInPassword,
      };
      signIn(user)
        .then(res => {
          if (res.status === 201) {
            UserStore.setAccessToken(res.data.accessToken);
            UserStore.setRefreshToken(res.data.refreshToken);
            const {id, userId, username, email, created_at, gender, ...remain} =
              res.data.userInfo;
            UserStore.setUserInfo({
              id,
              userId,
              username,
              email,
              created_at,
              gender,
            });
            // 자동로그인
            if (UserStore.autoLoginToggle) {
              AsyncStorage.setItem('refreshToken', UserStore.refreshToken);
            }
            console.log('로그인 성공');
            UserStore.clearSignInInput();
            navigation.replace('BottomTabs');
          }
        })
        .catch(err => {
          AdditionalFuncStore.setErrMessage(err.response.data.message);
        });
    }
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.loginBtn}
        onPress={() => {
          login();
        }}>
        <Text style={styles.loginBtnText}>로그인</Text>
      </Pressable>
      <View style={styles.line} />
      <View style={styles.subContainer}>
        <Pressable onPress={() => console.log('비밀번호 찾기')}>
          <Text style={styles.subText}>비밀번호 찾기</Text>
        </Pressable>
        <Text style={styles.mh6}> | </Text>
        <Pressable onPress={() => console.log('아이디 찾기')}>
          <Text style={styles.subText}>아이디 찾기</Text>
        </Pressable>
        <Text style={styles.mh6}> | </Text>
        <Pressable
          onPress={() => {
            console.log('회원가입');
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.subText}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default observer(LoginButton);
