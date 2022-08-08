import UserStore from '@/stores/UserStore';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {observer} from 'mobx-react';
import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';

const Splash: FC = () => {
  console.log('Splash Component');
  const navigation = useNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('refreshToken').then(async value => {
        if (value != null) {
          console.log('Have Refresh');
          try {
            const res = await axios.post('http://10.0.2.2:3000/auth/refresh', {
              refreshToken: value,
            });
            UserStore.setAccessToken(res.data.accessToken);
            UserStore.setRefreshToken(value);
            console.log('[Splash Component] Refresh Token Auth Complete');
            navigation.replace('BottomTabs');
          } catch (err) {
            console.log('[Splash ERR] Token ERR');
            navigation.replace('SignIn');
          }
        } else {
          console.log('No Refresh');
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, [navigation]);
  return (
    <View>
      <Text>로딩중...</Text>
    </View>
  );
};

export default observer(Splash);
