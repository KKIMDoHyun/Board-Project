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
    const user = {
      userId: UserStore.userId,
      email: UserStore.email,
      username: UserStore.username,
      phoneNumber: UserStore.phoneNumber,
      password: UserStore.password,
    };
    console.log(user);
    // signUp(user)
    //   .then(res => {
    //     if (res.status === 201) {
    //       navigation.navigate('SignIn');
    //     }
    //   })
    //   .catch(err => {});
  };
  return (
    <View>
      <Pressable
        style={styles.signUpBtn}
        onPress={() => {
          signup();
          // console.log(user);
        }}>
        <Text style={styles.signUpBtnText}>가입하기</Text>
      </Pressable>
    </View>
  );
};

export default observer(SignUpButton);
