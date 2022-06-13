import SignUpStore from '@/stores/SignUpStore';
import {observer} from 'mobx-react';
import React, {FC, useCallback, useState} from 'react';
import {Dimensions, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
const SignUpButton: FC = () => {
  const {userId, email, username, phoneNumber, password} = SignUpStore;
  const user = {
    userId: 'kdh412',
    email: 'kdh@test.com',
    username: 'test',
    phoneNumber: '01023458252',
    gender: 'MALE',
    password: '1234',
  };
  return (
    <>
      <View>
        <Pressable
          style={styles.container}
          onPress={() => {
            console.log(user);
            axios
              .post('http://localhost:3000/auth/signup', user)
              .then(req => console.log(req.data))
              .catch(err => console.log(err));
          }}>
          <Text style={styles.signUpText}>가입하기</Text>
        </Pressable>
      </View>
    </>
  );
};

export default observer(SignUpButton);
