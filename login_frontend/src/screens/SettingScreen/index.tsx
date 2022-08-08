// import {getProfile} from '@/utils/api/auth';
import {instance} from '@/utils/api';
import {getProfile} from '@/utils/api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const SettingScreen: FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>홈</Text>
      <Pressable
        style={{marginVertical: 30}}
        onPress={() => {
          getProfile()
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }}>
        <Text>정보가져오기</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          instance
            .post('/auth/logout')
            .then(res => {
              if (res.status === 201) {
                AsyncStorage.removeItem('refreshToken');
                navigation.replace('SignIn');
              }
            })
            .catch(function (error) {
              console.log(error.config);
            });
        }}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};

export default observer(SettingScreen);
