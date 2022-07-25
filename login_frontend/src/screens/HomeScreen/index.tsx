// import {getProfile} from '@/utils/api/auth';
import {instance} from '@/utils/api';
import {getProfile} from '@/utils/api/auth';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>방 만들기 </Text>
    </View>
  );
};

export default observer(HomeScreen);
