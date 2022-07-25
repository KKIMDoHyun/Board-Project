import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
import {signUp} from '@/utils/api/auth';
import {useNavigation} from '@react-navigation/native';

const SignUpButton: FC = () => {
  const navigation = useNavigation<any>();

  const signup = () => {
    if (UserStore.username === '') {
      UserStore.setUsernameCheck(false);
    }
    if (UserStore.password === '') {
      UserStore.setPasswordCheck(false);
    }
    if (UserStore.rePassword === '') {
      UserStore.setRePasswordCheck(false);
    }
    if (UserStore.password !== UserStore.rePassword) {
      UserStore.setRePasswordCheck(false);
    }
    if (UserStore.phoneNumber === '') {
      UserStore.setPhoneNumberCheck(false);
    }
    console.log('UserIdCheck: ', UserStore.userIdCheck);
    console.log('Email: ', UserStore.emailFrontCheck, UserStore.emailBackCheck);
    console.log('PasswordCheck: ', UserStore.passwordCheck);
    console.log('RePasswordCheck: ', UserStore.rePasswordCheck);
    console.log('UsernameCheck: ', UserStore.usernameCheck);
    console.log('PhoneNumberCheck: ', UserStore.phoneNumberCheck);
    const user = {
      userId: UserStore.userId,
      email: UserStore.emailFront.concat('@', UserStore.emailBack),
      password: UserStore.password,
      username: UserStore.username,
      gender: UserStore.gender,
      phoneNumber: UserStore.phoneNumber,
    };
    console.log(user);
    signUp(user)
      .then(res => {
        if (res.status === 201) {
          navigation.navigate('SignIn');
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  return (
    <View>
      <Pressable
        style={styles.signUpBtn}
        onPress={() => {
          signup();
        }}>
        <Text style={styles.signUpBtnText}>가입하기</Text>
      </Pressable>
    </View>
  );
};

export default observer(SignUpButton);
