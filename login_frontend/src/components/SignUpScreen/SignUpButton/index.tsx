import UserStore from '@/stores/UserStore';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
const SignUpButton: FC = () => {
  const {userId, email, username, phoneNumber, password} = UserStore;
  const user = {
    userId: 'test442',
    email: 'test1@test.com',
    username: 'test1',
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
