// import {getProfile} from '@/utils/api/auth';
import {instance} from '@/utils/api';
import {getProfile} from '@/utils/api/auth';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const HomeScreen: FC = () => {
  const navigation = useNavigation();

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
              // console.log(res);
              if (res.status === 201) {
                navigation.navigate('SignIn');
              }
            })
            .catch(function (error) {
              if (error.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log(error.request);
              } else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
              }
              console.log(error.config);
            });
        }}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};

export default observer(HomeScreen);
