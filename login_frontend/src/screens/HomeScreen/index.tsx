// import {getProfile} from '@/utils/api/auth';
import {instance} from '@/utils/api';
import {getProfile} from '@/utils/api/auth';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BoardList from '@/components/HomeScreen/BoardList';
import CreateBoard from '@/components/HomeScreen/CreateBoard';

const Tab = createBottomTabNavigator();

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <CreateBoard />
      <BoardList />
    </View>
  );
};

export default observer(HomeScreen);
