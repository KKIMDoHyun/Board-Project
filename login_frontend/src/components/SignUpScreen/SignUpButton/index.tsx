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
  const {userId, email, username, phoneNumber, password} = UserStore;
  const user = {
    userId: 'test442',
    email: 'test1@test.com',
    username: 'test1',
    phoneNumber: '01023458252',
    gender: 'MALE',
    password: '1234',
  };
  const signup = () => {
    signUp(user)
      .then(res => {
        if (res.status === 201) {
          navigation.navigate('SignIn');
        }
      })
      .catch(err => {});
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
