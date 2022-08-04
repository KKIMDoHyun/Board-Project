import {observer} from 'mobx-react';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import BoardList from '@/components/HomeScreen/BoardList';
import CreateBoard from '@/components/HomeScreen/CreateBoard';
import TopHeader from '@/components/HomeScreen/TopHeader';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <TopHeader />
      <CreateBoard />
      <BoardList />
    </View>
  );
};

export default observer(HomeScreen);
